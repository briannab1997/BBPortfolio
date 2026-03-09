# Banking Application – Test Cases

**Author:** Brianna Brockington  
**Created:** February 12, 2025  
**Last Updated:** September 5, 2025

These test cases cover login security, account overview, transfers, and transaction history.

---

## 1. Authentication

### TC-100 – Lockout After 5 Failed Attempts

**Created:** February 12, 2025  
**Steps:**

1. Enter the wrong password five times  
   **Expected Result:** Account is locked for 15 minutes; lockout message appears.

### TC-101 – Login With Multi-Factor Authentication

**Created:** May 22, 2025  
**Steps:**

1. Enter valid credentials
2. Enter MFA code sent via SMS  
   **Expected Result:** Login successful and user lands on account dashboard.

---

## 2. Account Overview

### TC-110 – Verify Account Balances Load

**Created:** June 14, 2025  
**Steps:**

1. Log in
2. Navigate to dashboard  
   **Expected Result:** Checking, savings, and credit balances load with correct values.

### TC-111 – Error Loading Balances

**Steps:**

1. Simulate API timeout (dev environment)  
   **Expected Result:** A user-friendly error displays, not a blank screen.

---

## 3. Transfers

### TC-120 – Internal Transfer Between Accounts

**Created:** August 3, 2025  
**Steps:**

1. Navigate to Transfers
2. Select “Checking → Savings”
3. Enter valid amount
4. Submit  
   **Expected Result:** Transfer success message; balances update.

### TC-121 – Transfer With Insufficient Funds

**Steps:**

1. Attempt transfer exceeding checking account balance  
   **Expected Result:** “Insufficient funds” message appears.

---

## 4. Transaction History

### TC-130 – Transactions Display in Chronological Order

**Created:** September 5, 2025  
**Expected Result:** Most recent transactions appear first.

### TC-131 – Filter Transactions By Date

**Steps:**

1. Select a custom date range
2. Apply filter  
   **Expected Result:** Only transactions in selected range appear.
