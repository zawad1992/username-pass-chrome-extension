// popup.js
let credentials = [];

document.addEventListener('DOMContentLoaded', async function() {
    // Load credentials from config file
    try {
        const response = await fetch('config.json');
        const data = await response.json();
        credentials = data.credentials;
        
        // Populate site selector
        const siteSelector = document.getElementById('siteSelector');
        credentials.forEach((cred, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = cred.site;
            siteSelector.appendChild(option);
        });
        
        // Load previously selected site
        chrome.storage.local.get(['selectedSiteIndex'], function(result) {
            if (result.selectedSiteIndex !== undefined && 
                result.selectedSiteIndex < credentials.length) {
                siteSelector.value = result.selectedSiteIndex;
                updateCredentials();
            }
        });
        
        // Add event listener for site selection
        siteSelector.addEventListener('change', function() {
            updateCredentials();
            // Save selection to storage
            chrome.storage.local.set({
                selectedSiteIndex: siteSelector.value
            });
        });
    } catch (error) {
        console.error('Error loading config:', error);
    }
    
    const copyUsername = document.getElementById('copyUsername');
    const copyPassword = document.getElementById('copyPassword');
    
    copyUsername.addEventListener('click', () => copyToClipboard('username'));
    copyPassword.addEventListener('click', () => copyToClipboard('password'));
});

function updateCredentials() {
    const siteSelector = document.getElementById('siteSelector');
    const selectedCred = credentials[siteSelector.value];
    
    if (selectedCred) {
        document.getElementById('username').value = selectedCred.username;
        document.getElementById('password').value = selectedCred.password;
    }
}

function copyToClipboard(fieldId) {
    const element = document.getElementById(fieldId);
    const successMessage = document.getElementById(fieldId + '-success');
    
    // Temporarily change type to text if it's a password field
    if (element.type === 'password') {
        element.type = 'text';
    }
    
    // Select and copy the text
    element.select();
    document.execCommand('copy');
    
    // Change password field back to password type
    if (fieldId === 'password') {
        element.type = 'password';
    }
    
    // Deselect the text
    element.setSelectionRange(0, 0);
    
    // Show success message
    successMessage.style.display = 'block';
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 2000);
}