# Shopping Cart Manual Test Cases

## Test Cases for Adding Items to Cart and Checkout with Discount

Test Case ID     : TC_001
Test Category    : Functional
Description      : Verify that a logged-in user can add an item to the cart
Preconditions    : - User is logged in
                   - Product is in stock
                   - User is on product detail page
Test Steps       : 1. Click on product "Nike Air Max"
                   2. Select size "US 9"
                   3. Select quantity "1"
                   4. Click "Add to Cart" button
Expected Result  : - Success message appears
                   - Cart icon updates to show "1"
                   - Mini cart shows correct product details
Severity         : High
Remarks          : Basic cart functionality test

Test Case ID     : TC_002
Test Category    : Functional
Description      : Verify applying valid discount code during checkout
Preconditions    : - User has items in cart
                   - Valid discount code "SAVE20" exists
                   - User is on cart page
Test Steps       : 1. Enter discount code "SAVE20"
                   2. Click "Apply Discount" button
                   3. Verify order summary
Expected Result  : - Discount is applied successfully
                   - 20% discount is calculated correctly
                   - Order total is updated
Severity         : High
Remarks          : Core discount functionality

Test Case ID     : TC_003
Test Category    : Negative
Description      : Verify system handles invalid discount code
Preconditions    : - User has items in cart
                   - User is on cart page
Test Steps       : 1. Enter invalid code "INVALID123"
                   2. Click "Apply Discount" button
Expected Result  : - Error message displayed
                   - No discount applied
                   - Original price maintained
Severity         : Medium
Remarks          : Error handling test

Test Case ID     : TC_004
Test Category    : Boundary
Description      : Verify maximum discount limit
Preconditions    : - Cart contains items worth $1000
                   - 50% discount code "HALF" exists
Test Steps       : 1. Enter discount code "HALF"
                   2. Click "Apply Discount"
                   3. Check if maximum discount limit applies
Expected Result  : - Discount capped at maximum limit (if applicable)
                   - Clear message about discount limits
Severity         : Medium
Remarks          : Discount boundary condition test

Test Case ID     : TC_005
Test Category    : UI/UX
Description      : Verify cart updates in real-time when discount applied
Preconditions    : - Items in cart
                   - Valid discount code
Test Steps       : 1. Enter discount code
                   2. Observe UI updates
                   3. Check all price displays
Expected Result  : - Real-time price updates
                   - No page refresh needed
                   - Consistent price display across all sections
Severity         : Medium
Remarks          : UI responsiveness test

Test Case ID     : TC_006
Test Category    : Calculation
Description      : Verify correct calculation with multiple items
Preconditions    : - Multiple items in cart
                   - 25% discount code available
Test Steps       : 1. Add 3 different items
                   2. Apply 25% discount
                   3. Verify calculations
Expected Result  : - Subtotal correctly summed
                   - Discount correctly applied to total
                   - Final amount accurate
Severity         : High
Remarks          : Mathematical accuracy test

Test Case ID     : TC_007
Test Category    : Functional
Description      : Verify discount persistence through checkout
Preconditions    : - Items in cart
                   - Discount applied
Test Steps       : 1. Apply discount
                   2. Proceed to checkout
                   3. Navigate through all checkout steps
Expected Result  : - Discount remains applied
                   - Discount visible on all checkout pages
                   - Final order shows correct discount
Severity         : High
Remarks          : Discount persistence test

Test Case ID     : TC_008
Test Category    : Negative
Description      : Verify expired discount code handling
Preconditions    : - Items in cart
                   - Expired discount code
Test Steps       : 1. Enter expired discount code
                   2. Click "Apply Discount"
Expected Result  : - Clear error message about expiration
                   - No discount applied
                   - Suggestion for valid codes (if applicable)
Severity         : Medium
Remarks          : Expired code handling test

Test Case ID     : TC_009
Test Category    : UI/UX
Description      : Verify discount code field validation
Preconditions    : - User is on cart page
Test Steps       : 1. Enter special characters in discount field
                   2. Enter extremely long code
                   3. Try empty submission
Expected Result  : - Proper input validation
                   - Clear error messages
                   - Field length limits enforced
Severity         : Low
Remarks          : Input validation test

Test Case ID     : TC_010
Test Category    : Functional
Description      : Verify discount removal functionality
Preconditions    : - Items in cart
                   - Discount already applied
Test Steps       : 1. Click "Remove Discount" button
                   2. Verify cart updates
Expected Result  : - Discount removed
                   - Prices revert to original
                   - Clear confirmation message
Severity         : Medium
Remarks          : Discount removal test

Test Case ID     : TC_011
Test Category    : Boundary
Description      : Verify minimum purchase requirement for discount
Preconditions    : - Small item ($5) in cart
                   - Discount with $50 minimum requirement
Test Steps       : 1. Try to apply discount
                   2. Add items to meet minimum
                   3. Try discount again
Expected Result  : - Initial rejection with clear message
                   - Successful application after minimum met
                   - Clear minimum requirement display
Severity         : Medium
Remarks          : Minimum purchase requirement test

Test Case ID     : TC_012
Test Category    : Security
Description      : Verify discount code brute force protection
Preconditions    : - User is on cart page
Test Steps       : 1. Rapidly attempt multiple invalid codes
                   2. Monitor system response
Expected Result  : - Rate limiting applied
                   - Security measures triggered
                   - Clear warning messages
Severity         : High
Remarks          : Security test

## Notes for Testers:
1. Execute test cases in sequence
2. Document any deviations
3. Take screenshots of errors
4. Test on multiple browsers
5. Verify mobile responsiveness 