# 🐞 Instagram Login — Current Bug Reports

---

## ❌ BUG 001 — Incorrect Password Error Does Not Display

**Severity:** High  
**Environment:** iPhone 14, iOS 17  
**Steps:**

1. Enter valid username
2. Enter invalid password
3. Tap “Log In”  
   **Expected:** Error displayed  
   **Actual:** No error appears; button freezes for 2 seconds  
   **Notes:** Regression from build 1.4.2.

---

## ❌ BUG 002 — “Forgot Password” Link Opens Blank Screen

**Severity:** Medium  
**Environment:** Android Pixel 7 — Android 14  
**Steps:**  
Tap “Forgot Password”  
**Expected:** Redirect to reset workflow  
**Actual:** Screen loads with no UI elements

---

## ❌ BUG 003 — Login Button Enabled When Fields Are Empty

**Severity:** Low  
**Expected:** Disabled button  
**Actual:** Button remains tappable  
**Risk:** Users confused by invalid state feedback.
