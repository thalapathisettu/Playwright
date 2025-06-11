# E-Commerce Shopping Cart Test Cases
## Flow: Add Item to Cart → Apply Discount → Checkout

Test Case ID: TC_001
Test Category: Navigation
Description: Verify product listing page displays all available products
Preconditions: User is logged in and on the homepage
Test Steps:
• Click on "Products" or "Shop" link in the navigation menu
• Verify product grid loads
• Check if product filtering and sorting options are available
Expected Result: Product listing page loads with all products displayed in a grid format
Severity: High
Remarks: Essential navigation check

Test Case ID: TC_002
Test Category: Product Detail
Description: Verify product details are displayed correctly
Preconditions: User is on the product listing page
Test Steps:
• Click on any product tile
• Verify product details page loads
• Check if all product information is displayed (name, price, description, images)
Expected Result: Complete product information is displayed accurately
Severity: High
Remarks: Product information accuracy check

Test Case ID: TC_003
Test Category: Cart Addition
Description: Verify "Add to Cart" functionality
Preconditions: User is on product detail page
Test Steps:
• Select product size (if applicable)
• Select product color (if applicable)
• Set quantity to 1
• Click "Add to Cart" button
Expected Result: 
• Success message appears
• Cart icon updates with quantity
• Mini cart shows added product
Severity: High
Remarks: Core cart functionality

Test Case ID: TC_004
Test Category: Cart Validation
Description: Verify cart displays correct product information
Preconditions: Product has been added to cart
Test Steps:
• Click on cart icon
• Navigate to cart page
• Verify product details (name, price, quantity)
• Verify cart subtotal
Expected Result: Cart displays correct product information and accurate subtotal
Severity: High
Remarks: Cart accuracy verification

Test Case ID: TC_005
Test Category: Discount Application
Description: Verify valid discount code application
Preconditions: 
• Product in cart
• Valid discount code "SAVE20" available
Test Steps:
• Locate discount code field
• Enter "SAVE20"
• Click "Apply Discount"
Expected Result:
• Success message appears
• 20% discount is applied
• Cart total updates correctly
Severity: High
Remarks: Discount functionality check

Test Case ID: TC_006
Test Category: Discount Validation
Description: Verify invalid discount code handling
Preconditions: Product in cart
Test Steps:
• Enter invalid code "INVALID123"
• Click "Apply Discount"
• Enter expired code "EXPIRED20"
• Click "Apply Discount"
Expected Result:
• Appropriate error messages displayed
• No discount applied
• Original price maintained
Severity: Medium
Remarks: Error handling verification

Test Case ID: TC_007
Test Category: Checkout Initiation
Description: Verify checkout process initiation
Preconditions:
• Product in cart
• Valid discount applied
Test Steps:
• Click "Proceed to Checkout"
• Verify checkout page loads
• Confirm discount is still applied
Expected Result:
• Checkout page loads successfully
• All cart items visible
• Discount remains applied
Severity: High
Remarks: Checkout flow verification

Test Case ID: TC_008
Test Category: Shipping Information
Description: Verify shipping information entry
Preconditions: User is on checkout page
Test Steps:
• Enter shipping address
• Select shipping method
• Verify order summary updates with shipping cost
Expected Result:
• Shipping address saved
• Shipping cost added to total
• Discount still correctly applied
Severity: High
Remarks: Shipping information validation

Test Case ID: TC_009
Test Category: Payment Processing
Description: Verify payment process
Preconditions:
• Shipping information entered
• Valid credit card available
Test Steps:
• Enter credit card details
• Review final order summary
• Click "Place Order"
Expected Result:
• Order processes successfully
• Confirmation page displays
• Order number generated
Severity: High
Remarks: Payment processing verification

Test Case ID: TC_010
Test Category: Order Confirmation
Description: Verify order completion and confirmation
Preconditions: Order has been placed
Test Steps:
• Check confirmation page details
• Verify confirmation email received
• Check order in account history
Expected Result:
• Confirmation page shows correct order details
• Email received with order information
• Order appears in account history with correct discount applied
Severity: High
Remarks: Order completion verification

## Additional Testing Notes:
1. Execute test cases in sequence from TC_001 to TC_010
2. Document any deviations from expected results
3. Test on multiple browsers and devices
4. Verify all calculations are accurate
5. Check email notifications for proper formatting
6. Validate mobile responsiveness of all steps

## Test Environment Requirements:
• Test discount codes:
  - Valid: "SAVE20" (20% off)
  - Invalid: "INVALID123"
  - Expired: "EXPIRED20"
• Test product details:
  - Product name: "Test Product"
  - Price: $100.00
  - Available variations: Size, Color
• Test payment method:
  - Credit card number: 4111 1111 1111 1111
  - Expiry: 12/25
  - CVV: 123 