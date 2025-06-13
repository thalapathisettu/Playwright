# Manual Test Cases: E-Commerce Shopping Cart

## Test Environment Prerequisites
- Web browser (Chrome/Firefox/Safari/Edge)
- Active internet connection
- Valid user account credentials
- Test credit card details for payment

## Test Suite 1: Adding Items to Cart

### Test Case 1.1: Add Single Item to Empty Cart
**Priority:** High  
**Description:** Verify that a single item can be added to an empty cart  

**Prerequisites:**
- User is logged into the e-commerce site
- Shopping cart is empty
- Product catalog is accessible

**Test Steps:**
1. Navigate to the product catalog
2. Select any product from the listing
3. Verify product details page loads
4. Click "Add to Cart" button
5. Click on the cart icon/button

**Expected Results:**
- Success message appears after adding item
- Cart icon shows item count as "1"
- Selected item appears in cart with correct:
  * Product name
  * Price
  * Quantity (1)
  * Product image
- Cart subtotal reflects the item's price

### Test Case 1.2: Add Multiple Quantities of Same Item
**Priority:** High  
**Description:** Verify that multiple quantities of the same item can be added  

**Test Steps:**
1. Navigate to a product detail page
2. Set quantity to 3 using quantity selector
3. Click "Add to Cart" button
4. View cart contents

**Expected Results:**
- Item appears in cart with quantity = 3
- Subtotal equals (item price × 3)
- Cart icon shows correct total quantity

### Test Case 1.3: Add Multiple Different Items
**Priority:** High  
**Description:** Verify that different items can be added to the cart  

**Test Steps:**
1. Add first item to cart
2. Continue shopping
3. Add second item to cart
4. View cart contents

**Expected Results:**
- Both items appear in cart
- Each item shows correct individual price
- Cart subtotal equals sum of all items
- Cart icon shows total quantity of all items

## Test Suite 2: Cart Management

### Test Case 2.1: Update Item Quantity
**Priority:** High  
**Description:** Verify that item quantity can be updated in cart  

**Test Steps:**
1. Add item to cart
2. Navigate to cart page
3. Locate quantity selector for item
4. Change quantity from 1 to 2
5. Observe cart updates

**Expected Results:**
- Quantity updates successfully
- Item subtotal recalculates correctly
- Cart total updates automatically
- Success message appears confirming update

### Test Case 2.2: Remove Item from Cart
**Priority:** High  
**Description:** Verify that items can be removed from cart  

**Test Steps:**
1. Add item to cart
2. Navigate to cart page
3. Click "Remove" or trash icon for the item
4. Observe cart updates

**Expected Results:**
- Item is removed from cart
- Cart total updates automatically
- Success message confirms removal
- If cart empty, appropriate empty cart message displays

## Test Suite 3: Checkout with Discount

### Test Case 3.1: Apply Valid Discount Code
**Priority:** High  
**Description:** Verify that valid discount codes can be applied during checkout  

**Prerequisites:**
- Cart contains at least one item
- Valid discount code is available (e.g., "SAVE10")

**Test Steps:**
1. Navigate to cart page
2. Locate discount code input field
3. Enter valid discount code "SAVE10"
4. Click "Apply" button
5. Observe cart totals

**Expected Results:**
- Success message confirms discount application
- Discount amount appears as separate line item
- Cart total reduces by correct discount amount
- Percentage/amount of discount is clearly displayed

### Test Case 3.2: Complete Checkout with Discount
**Priority:** High  
**Description:** Verify full checkout process with applied discount  

**Prerequisites:**
- Cart contains items
- Discount code has been applied
- User has valid shipping address
- User has valid payment method

**Test Steps:**
1. Click "Proceed to Checkout" button
2. Verify discount is still applied on checkout page
3. Select/confirm shipping address
4. Select shipping method
5. Select payment method
6. Review order summary
7. Click "Place Order" button

**Expected Results:**
- Order summary shows:
  * Original subtotal
  * Applied discount
  * Shipping cost
  * Final total with discount
- Order confirmation page displays
- Confirmation email received
- Order appears in user's order history

### Test Case 3.3: Invalid Discount Code
**Priority:** Medium  
**Description:** Verify system handles invalid discount codes appropriately  

**Test Steps:**
1. Navigate to cart page
2. Enter invalid discount code "INVALID123"
3. Click "Apply" button

**Expected Results:**
- Error message appears
- No discount is applied
- Cart total remains unchanged

## Test Suite 4: Edge Cases

### Test Case 4.1: Discount Code Limits
**Priority:** Medium  
**Description:** Verify discount code usage limits  

**Test Steps:**
1. Apply discount code successfully
2. Complete purchase
3. Create new cart
4. Attempt to use same discount code again

**Expected Results:**
- System enforces usage limits per user
- Appropriate message displays if limit exceeded

### Test Case 4.2: Cart Session Timeout
**Priority:** Medium  
**Description:** Verify cart behavior after session timeout  

**Test Steps:**
1. Add items to cart
2. Leave session inactive for timeout period
3. Return to site and check cart

**Expected Results:**
- Cart items are preserved (if logged in)
- User is prompted to log in again if session expired
- Applied discounts may need to be reapplied

## Additional Considerations

### Security Testing
- Verify discount codes cannot be brute-forced
- Ensure cart totals cannot be manipulated client-side
- Check for SQL injection in discount code field

### Performance Testing
- Cart updates should occur within 2 seconds
- Discount application should process within 3 seconds
- Checkout process should complete within 30 seconds

### Compatibility Testing
- Test on different browsers
- Test on mobile devices
- Test on different screen sizes

### Notes for Testers
1. Document any bugs with:
   - Steps to reproduce
   - Expected vs actual results
   - Screenshots
   - Browser/device information
2. Test with different user roles if applicable
3. Verify all calculations are accurate to 2 decimal places
4. Check email notifications for proper formatting 