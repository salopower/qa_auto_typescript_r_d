# Amazon Basic UI Test Scenarios

## Overview
Simple smoke tests covering fundamental UI functionality on Amazon.com

---

## 🧩 Test Case 1: Logo Verification
**Objective:** Confirm Amazon logo is present and clickable

**Steps:**
1. Navigate to https://www.amazon.com
2. Locate the Amazon logo in header
3. Verify:
    - Logo is visible
    - Logo links to homepage

**Selectors:**
CSS:
```css
#nav-logo
```
XPATH:
```
//*[@id="nav-logo"]
```

## 🧩 Test Case 2: Basic Product Search
**Objective:** Validate search functionality with simple query

**Steps:**
1. Navigate to https://www.amazon.com
2. On homepage, locate search bar
3. Enter "phone charger"
4. Click search icon
5. Verify:
    - Results page title contains "phone charger"
    - At least 8 items appear in results

**Selectors:**
CSS:
```css
#twotabsearchtextbox
#nav-search-submit-button
.s-result-item:nth-child(n+3)
```
XPATH:
```
//*[@id="twotabsearchtextbox"]
//*[@id="nav-search-submit-button"]
//div[contains(@class,'s-result-item')][position() >= 3]
```
## 🧩 Test Case 3: Add to Cart Flow
**Objective:** Verify basic cart functionality

**Steps:**
1. Navigate to https://www.amazon.com
2. Search for "notebook"
3. Select first available item
4. Click "Add to Cart"
5. Observe cart counter
6. Verify:
    - Cart count increases by 1

**Selectors:**
CSS:
```css
#twotabsearchtextbox
#nav-search-submit-button
button.a-button-text[name="submit.addToCart"][id="a-autoid-1-announce"]
#nav-cart-count
```
XPATH:
```
//*[@id="twotabsearchtextbox"]
//*[@id="nav-search-submit-button"]
(//button[@class="a-button-text" and @name="submit.addToCart"])[1]
//*[@id="nav-cart-count"]
```