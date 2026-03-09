# 📱 Instagram Login — Test Case Suite

Comprehensive test coverage for a mobile login flow on Android + iOS.

---

## 🔹 1. Valid Login (Happy Path)

**Test ID:** LOGIN-001  
**Preconditions:** User has a registered account; app installed  
**Steps:**

1. Open the Instagram app
2. Enter valid username
3. Enter valid password
4. Tap "Log In"  
   **Expected Result:**  
   User is successfully logged in and directed to the home feed.

---

## 🔹 2. Invalid Password

**Test ID:** LOGIN-002  
**Steps:**

1. Open app
2. Enter valid username
3. Enter invalid password
4. Tap “Log In”  
   **Expected Result:**  
   Error banner displayed: “Incorrect password. Try again.”

---

## 🔹 3. Invalid Username

**Test ID:** LOGIN-003  
**Expected Result:**  
Error message: “The username you entered doesn’t belong to an account.”

---

## 🔹 4. Both Fields Blank

**Test ID:** LOGIN-004  
**Expected Result:**  
“Username required” and “Password required” messages shown.

---

## 🔹 5. Password Reset Flow

**Test ID:** LOGIN-005  
Steps:

1. Tap “Forgot password?”
2. Enter email
3. Tap “Next”  
   **Expected Result:**  
   User receives password reset link.

---

## 🔹 6. Rate Limit / Too Many Attempts

**Test ID:** LOGIN-006  
Expected Result:  
“Too many attempts. Try again later.”

---

## 🔹 7. Login With Facebook Button

**Test ID:** LOGIN-007  
Expected Result:  
User is redirected to Facebook OAuth.

---

## 🔹 8. Device + Network Failure

**Test ID:** LOGIN-008  
Test data: Airplane mode  
Expected Result:  
Snackbar: “No internet connection.”

---

## 🔹 9. Biometric Login (iOS Face ID / Android Fingerprint)

**Test ID:** LOGIN-009  
Expected Result:  
User authenticated without typing password.

---

## 🔹 10. Localized UI Verification

**Test ID:** LOGIN-010  
Expected Result:  
Text labels correctly translated based on device language.
