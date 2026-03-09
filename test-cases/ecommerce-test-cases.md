# E-Commerce Application – Test Cases

**Author:** Brianna Brockington  
**Created:** March 4, 2025  
**Last Updated:** August 21, 2025

These test cases cover the core shopping flow of a standard e-commerce web application including login, product search, cart, and checkout.

---

## 1. User Login

### TC-001 – Valid Login

**Description:** Verify that a user can log in with valid credentials.  
**Preconditions:** User account already exists.  
**Steps:**

1. Navigate to the login page
2. Enter a valid email
3. Enter a valid password
4. Click **Login**  
   **Expected Result:** User is redirected to the homepage with a visible welcome message.  
   **Status:** Pass

### TC-002 – Invalid Password

**Description:** Login attempt with a correct email and incorrect password.  
**Steps:**

1. Go to login page
2. Enter a registered email
3. Enter an incorrect password
4. Click **Login**  
   **Expected Result:** “Invalid username or password” message appears; user stays on login page.  
   **Status:** Pass

---

## 2. Product Search

### TC-010 – Search by Keyword

**Created:** April 15, 2025  
**Description:** Ensure the search bar returns relevant results.  
**Steps:**

1. Enter “wireless headphones” in the search bar
2. Press Enter  
   **Expected Result:** Product list displays items matching the query.

### TC-011 – Search With No Results

**Steps:**

1. Search for “zxqv123”  
   **Expected Result:** A message appears: “No products found.”

---

## 3. Shopping Cart

### TC-020 – Add Item to Cart

**Created:** June 2, 2025  
**Steps:**

1. Open a product page
2. Click **Add to Cart**  
   **Expected Result:** Cart counter updates; success message appears.

### TC-021 – Remove Item From Cart

**Steps:**

1. Add an item to cart
2. Go to cart
3. Click **Remove**  
   **Expected Result:** Item disappears from cart; total updates correctly.

---

## 4. Checkout

### TC-030 – Successful Checkout (Credit Card)

**Created:** July 9, 2025  
**Steps:**

1. Add at least one item to cart
2. Go to checkout
3. Enter valid shipping details
4. Enter valid credit card info
5. Submit order  
   **Expected Result:** Order confirmation page displays with an order number.

### TC-031 – Checkout With Missing Required Fields

**Steps:**

1. Try submitting checkout form without filling all required fields  
   **Expected Result:** Appropriate validation messages appear.
