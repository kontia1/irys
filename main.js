// Function to auto-fill the form and click the button
function autoFillAndClick() {
    // Example of identifying the form fields and setting values:
    var addressField = document.querySelector('input[name="address"]');  // Replace with actual selector for the address field
    var captchaField = document.querySelector('input[name="verifying"]');  // Replace with actual selector for captcha field
    var claimButton = document.querySelector('button[id="submit"]');  // Replace with actual selector for claim button

    // Fill in the form fields
    if (addressField && captchaField) {
        addressField.value = '0xYourWalletAddress';  // Replace with your wallet address or desired value
        captchaField.value = '1234';  // Replace with the correct captcha value (if needed)
        console.log('Fields have been auto-filled.');
    } else {
        console.log('Form fields not found.');
    }

    // Click the claim button
    if (claimButton) {
        console.log('Clicking the claim button...');
        claimButton.click();  // Click the button
    } else {
        console.log('Claim button not found.');
    }
}

// Execute the function after a short delay to allow the page to load
setTimeout(autoFillAndClick, 3000);  // Delay of 3 seconds, adjust as needed
