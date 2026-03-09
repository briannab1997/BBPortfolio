# Banking Application – Bug Reports

Author: Brianna Brockington  
Created: February 20, 2025  
Last Updated: September 30, 2025

---

## BUG-101 – Transfer Confirmation Page Loads Indefinitely

**Severity:** High  
**Priority:** High  
**Environment:** Firefox 122 / iOS App  
**Reported:** February 20, 2025

### Steps:

1. Log in
2. Go to Transfers
3. Enter a valid transfer amount
4. Click Submit

### Expected:

Confirmation page displays immediately.

### Actual:

Spinner appears and never resolves; transfer **still processes**, risking duplicate transfers.

### Status:

## Resolved (Fix deployed March 2, 2025)

## BUG-102 – MFA Code Not Expiring Correctly

**Severity:** Medium  
**Priority:** Medium

### Reproduction:

1. Request MFA code
2. Wait 10 minutes
3. Enter expired code

### Expected:

Error message “Your code has expired.”

### Actual:

Code still validates.

### Notes:

Security flaw — flagged for compliance.

### Status:

## In Review

## BUG-103 – Account Balance API Occasionally Returning Null

**Severity:** High  
**Priority:** High  
**Reported:** September 30, 2025

### Steps:

1. Log in
2. Observe dashboard

### Expected:

Balances load correctly.

### Actual:

Savings account balance loads as `null`.

### Notes:

Intermittent; seems related to caching layer.

### Status:

Investigating
