# Banking Application — API Test Suite

**Author:** Brianna Brockington
**Created:** February 2025
**Updated:** October 2025

This suite covers the core REST API endpoints for a banking application, including authentication, account data, and transfer operations.

---

## 1. Authentication

### TEST-AUTH-01 — Valid Login Returns Token

**Endpoint:** `POST /api/auth/login`
**Payload:**
```json
{
  "email": "testuser@bank.com",
  "password": "SecurePass123"
}
```
**Expected:**
- Status: **200 OK**
- Body contains `token` (string, non-empty)
- Body contains `user.id` and `user.email`

**Result:** Pass

---

### TEST-AUTH-02 — Invalid Credentials Return 401

**Endpoint:** `POST /api/auth/login`
**Payload:**
```json
{
  "email": "testuser@bank.com",
  "password": "wrongpassword"
}
```
**Expected:**
- Status: **401 Unauthorized**
- Body: `{ "error": "Invalid credentials" }`
- No token returned

**Result:** Pass

---

### TEST-AUTH-03 — Missing Fields Return 400

**Endpoint:** `POST /api/auth/login`
**Payload:**
```json
{
  "email": "testuser@bank.com"
}
```
**Expected:**
- Status: **400 Bad Request**
- Body contains a validation error message

**Result:** Pass

---

## 2. Account Balance

### TEST-ACCT-01 — Fetch Account Balances (Authenticated)

**Endpoint:** `GET /api/accounts`
**Headers:** `Authorization: Bearer <token>`

**Expected:**
- Status: **200 OK**
- Response time < 1000ms
- Body contains array of accounts (checking, savings)
- Each account includes: `id`, `type`, `balance`, `currency`

**Result:** Pass

---

### TEST-ACCT-02 — Fetch Balance Without Token Returns 401

**Endpoint:** `GET /api/accounts`
**Headers:** None

**Expected:**
- Status: **401 Unauthorized**
- Body: `{ "error": "Unauthorized" }`

**Result:** Pass

---

### TEST-ACCT-03 — Account Balance Returns Null for Specific User (Bug Linked)

**Endpoint:** `GET /api/accounts`
**Note:** Intermittent — savings balance field returns `null` due to caching issue (see BUG-103).

**Expected:**
- `balance` field is a number, not null

**Result:** Fail (intermittent — under investigation)

---

## 3. Transfers

### TEST-TXN-01 — Valid Transfer Between Accounts

**Endpoint:** `POST /api/transfers`
**Headers:** `Authorization: Bearer <token>`
**Payload:**
```json
{
  "from_account": "checking",
  "to_account": "savings",
  "amount": 100.00
}
```
**Expected:**
- Status: **201 Created**
- Body contains `transaction_id`
- Both account balances update correctly

**Result:** Pass

---

### TEST-TXN-02 — Transfer Exceeding Available Balance Returns 422

**Endpoint:** `POST /api/transfers`
**Payload:**
```json
{
  "from_account": "checking",
  "to_account": "savings",
  "amount": 999999.00
}
```
**Expected:**
- Status: **422 Unprocessable Entity**
- Body: `{ "error": "Insufficient funds" }`

**Result:** Pass

---

### TEST-TXN-03 — Transfer With Negative Amount Returns 400

**Endpoint:** `POST /api/transfers`
**Payload:**
```json
{
  "from_account": "checking",
  "to_account": "savings",
  "amount": -50.00
}
```
**Expected:**
- Status: **400 Bad Request**
- Body contains validation error

**Result:** Pass

---

## 4. Transaction History

### TEST-HIST-01 — Retrieve Transaction History

**Endpoint:** `GET /api/transactions?page=1&limit=10`
**Headers:** `Authorization: Bearer <token>`

**Expected:**
- Status: **200 OK**
- Body contains paginated transaction list
- Each record includes: `id`, `type`, `amount`, `date`, `description`
- Results sorted by `date` descending (most recent first)

**Result:** Pass

---

### TEST-HIST-02 — Filter Transactions by Date Range

**Endpoint:** `GET /api/transactions?from=2025-01-01&to=2025-03-31`
**Headers:** `Authorization: Bearer <token>`

**Expected:**
- Status: **200 OK**
- Only transactions within the specified date range returned

**Result:** Pass

---

## Notes

- BUG-103 (null balance) may intermittently affect TEST-ACCT-03 — flagged for follow-up with the backend team.
- MFA validation tests are tracked separately (see BUG-102).
