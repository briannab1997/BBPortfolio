# Airbnb Search Flow — UI/UX Defects

This document catalogs usability and interface issues identified during evaluation.

---

## Defect 001 — Date Picker Does Not Clearly Indicate Selected Range

**Severity:** Medium  
**Description:**  
When selecting a range, only the start date is highlighted prominently. The end date uses a lighter highlight, making the selected range unclear.  
**Impact:**  
Users may think the date selection did not register or may misinterpret their booking range.

---

## Defect 002 — Guest Selector Allows Invalid Combinations

**Severity:** High  
**Description:**  
Selecting 0 adults + 2 children should not be allowed, yet the UI permits it.  
**Expected:**  
At least one adult must be present.  
**Impact:**  
Could lead to booking errors and failed transactions.

---

## Defect 003 — Listing Cards Use Inconsistent Image Ratios

**Severity:** Low  
**Description:**  
Some preview images are square while others are wide, causing layout shifts.  
**Impact:**  
Reduces scannability and creates uneven UI alignment.

---

## Defect 004 — Map Pins Overlap at Certain Zoom Levels

**Severity:** Medium  
**Environment:** Desktop, Chrome  
**Description:**  
Pins cluster too closely without proper grouping logic.  
**Expected:**  
Pins should either separate or cluster into a numeric badge.

---

## Defect 005 — Missing Alt Text on Key Images

**Severity:** High (Accessibility)  
**Description:**  
Listing preview images do not have descriptive alt text.  
**Impact:**  
Screen reader users cannot evaluate listings.
