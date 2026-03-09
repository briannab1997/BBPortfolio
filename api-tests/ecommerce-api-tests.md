# E-Commerce Application — API Test Suite

**Author:** Brianna Brockington
**Created:** April 2025
**Updated:** October 2025

This suite covers the core REST API endpoints for an e-commerce platform, including product search, cart operations, and order submission.

---

## 1. Product Search

### TEST-PROD-01 — Search Returns Relevant Results

**Endpoint:** `GET /api/products?query=wireless+headphones`

**Expected:**
- Status: **200 OK**
- Response time < 800ms
- Body contains array of products matching query
- Each product includes: `id`, `name`, `price`, `category`, `in_stock`

**Result:** Pass

---

### TEST-PROD-02 — Search With No Matches Returns Empty Array

**Endpoint:** `GET /api/products?query=zxqv123`

**Expected:**
- Status: **200 OK**
- Body: `{ "results": [], "count": 0 }`
- No error thrown

**Result:** Pass

---

### TEST-PROD-03 — Search With Special Characters (Bug Linked)

**Endpoint:** `GET /api/products?query=%40%24%25`
**Note:** Input equivalent to `@$%`

**Expected:**
- Status: **400 Bad Request** or a friendly "No results found" response

**Actual:**
- White screen returned; no response body (see BUG-003)

**Result:** Fail

---

### TEST-PROD-04 — Fetch Single Product by ID

**Endpoint:** `GET /api/products/42`

**Expected:**
- Status: **200 OK**
- Body contains full product details: `id`, `name`, `description`, `price`, `images`, `rating`

**Result:** Pass

---

### TEST-PROD-05 — Fetch Nonexistent Product Returns 404

**Endpoint:** `GET /api/products/99999`

**Expected:**
- Status: **404 Not Found**
- Body: `{ "error": "Product not found" }`

**Result:** Pass

---

## 2. Shopping Cart

### TEST-CART-01 — Add Item to Cart

**Endpoint:** `POST /api/cart`
**Headers:** `Authorization: Bearer <token>`
**Payload:**
```json
{
  "product_id": 42,
  "quantity": 1
}
```
**Expected:**
- Status: **201 Created**
- Body contains updated cart with new item
- Cart total recalculates correctly

**Result:** Pass

---

### TEST-CART-02 — Remove Item From Cart

**Endpoint:** `DELETE /api/cart/items/42`
**Headers:** `Authorization: Bearer <token>`

**Expected:**
- Status: **200 OK**
- Item removed from cart
- Cart total updates accordingly

**Result:** Pass

---

### TEST-CART-03 — Add Item With Quantity Zero Returns 400

**Endpoint:** `POST /api/cart`
**Payload:**
```json
{
  "product_id": 42,
  "quantity": 0
}
```
**Expected:**
- Status: **400 Bad Request**
- Body contains validation error

**Result:** Pass

---

## 3. Checkout

### TEST-ORDER-01 — Successful Order Submission

**Endpoint:** `POST /api/orders`
**Headers:** `Authorization: Bearer <token>`
**Payload:**
```json
{
  "shipping": {
    "name": "Brianna Brockington",
    "address": "123 Test St",
    "city": "Atlanta",
    "zip": "30301"
  },
  "payment_method": "credit_card"
}
```
**Expected:**
- Status: **201 Created**
- Body contains `order_id` and `confirmation_number`
- Cart clears after successful submission

**Result:** Pass

---

### TEST-ORDER-02 — Checkout Without Auth Returns 401

**Endpoint:** `POST /api/orders`
**Headers:** None

**Expected:**
- Status: **401 Unauthorized**

**Result:** Pass

---

### TEST-ORDER-03 — Tax Calculation on Orders Over $100

**Endpoint:** `GET /api/cart/summary`
**Headers:** `Authorization: Bearer <token>`
**Setup:** Cart total must exceed $100

**Expected:**
- Tax rate: **7.5%**

**Actual:**
- Tax calculated at 5% (see BUG-002)

**Result:** Fail (in progress)

---

### TEST-ORDER-04 — Missing Required Shipping Field Returns 422

**Endpoint:** `POST /api/orders`
**Payload:** Shipping object missing `zip` field

**Expected:**
- Status: **422 Unprocessable Entity**
- Body specifies which field is missing

**Result:** Pass

---

## Notes

- BUG-002 (incorrect tax rate) directly impacts TEST-ORDER-03 — tracked with front-end and back-end teams.
- BUG-003 (special character search) causes a white screen instead of a graceful error response — high UX risk.
- Checkout button issue (BUG-001) occurs only in Chrome 124; test environment should account for browser version.
