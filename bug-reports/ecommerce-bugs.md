# E-Commerce Application – Bug Reports

Author: Brianna Brockington  
Created: April 12, 2025  
Last Updated: October 3, 2025

---

## BUG-001 – Checkout Button Unresponsive on Chrome (v124)

**Severity:** High  
**Priority:** High  
**Environment:** Chrome 124.0.6367 / Windows 11  
**Reported:** April 12, 2025

### Steps to Reproduce:

1. Add any item to cart
2. Navigate to checkout page
3. Enter shipping information
4. Click **“Continue to Payment”**

### Expected Result:

User is taken to payment entry screen.

### Actual Result:

Button does nothing; console shows `TypeError: processCheckout is not a function`.

### Notes:

- Issue does **not** occur in Firefox
- Likely a missing method binding in checkout.js

### Status:

## Open / Assigned to Front-End Dev

## BUG-002 – Incorrect Tax Calculation on Orders Over $100

**Severity:** Medium  
**Priority:** High  
**Environment:** Staging

### Steps:

1. Add products totaling more than $100
2. Go to checkout
3. Review order summary

### Expected:

Tax = 7.5%

### Actual:

Tax being calculated at 5%

### Status:

## In Progress (as of July 18, 2025)

## BUG-003 – Search Bar Returns Blank Page for Special Characters

**Severity:** Low  
**Priority:** Medium  
**Reported:** October 3, 2025

### Steps:

1. Type “@$%” into search bar
2. Hit Enter

### Expected:

“No results found” message.

### Actual:

White screen; no console errors.

### Status:

Open
