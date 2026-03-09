# Login Application – Test Cases

**Author:** Brianna Brockington  
**Created:** January 18, 2025  
**Last Updated:** October 29, 2025

These test cases focus on authentication, error handling, and UI elements for a simple login app.

---

## 1. Login Input Validation

### TC-200 – Empty Fields

**Steps:**

1. Click **Login** without entering anything  
   **Expected Result:** Email and password fields display “required” validation messages.

### TC-201 – Invalid Email Format

**Created:** March 27, 2025  
**Steps:**

1. Enter “brianna@wrong”
2. Enter any password
3. Submit  
   **Expected Result:** “Enter a valid email address” message appears.

---

## 2. Successful Login

### TC-210 – Valid Credentials

**Created:** April 9, 2025  
**Steps:**

1. Enter registered email
2. Enter correct password
3. Submit  
   **Expected Result:** User is redirected to dashboard.

---

## 3. UI + Accessibility

### TC-220 – Password Visibility Toggle

**Created:** July 17, 2025  
**Steps:**

1. Click eye icon  
   **Expected Result:** Password becomes visible; icon updates.

### TC-221 – Tab Navigation

**Created:** October 29, 2025  
**Steps:**

1. Use keyboard tab to navigate from email → password → login button  
   **Expected Result:** Focus indicators appear and navigation follows the correct order.
