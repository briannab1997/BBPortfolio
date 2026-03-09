# Login Application – Bug Reports

Author: Brianna Brockington  
Created: March 9, 2025  
Last Updated: October 29, 2025

---

## BUG-201 – Password Visibility Toggle Misaligned on Mobile

**Severity:** Low  
**Priority:** Medium  
**Environment:** Safari iOS

### Steps:

1. Enter password
2. Tap eye icon

### Expected:

Icon stays aligned inside password field.

### Actual:

Icon jumps downward by ~5px.

### Status:

## Open

## BUG-202 – Login Button Clicks Twice on Slow Networks

**Severity:** Medium  
**Priority:** Medium

### Steps:

1. Enter email + password
2. Click Login while on slow 3G simulation

### Expected:

One request is sent.

### Actual:

Two API calls fire, causing rate limit errors.

### Status:

## Fix pending
