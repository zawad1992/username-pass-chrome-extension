# Simple Password Manager Chrome Extension

A lightweight Chrome extension that allows you to store and quickly copy usernames and passwords for different websites. The credentials are stored locally in a configuration file, making it easy to manage and update.

## Features

- Store multiple website credentials
- Quick copy functionality for usernames and passwords
- Password remains hidden but copyable
- Site selector dropdown for easy navigation
- Success notifications when copying
- Local storage of credentials in JSON format

## Installation

### Prerequisites

- Google Chrome browser
- Basic knowledge of loading unpacked extensions

### Setup Instructions

1. **Clone or Download**
   - Clone this repository or download all files into a new directory on your computer

2. **Required Files**
   Make sure you have all these files in your directory:
   ```
   ├── manifest.json
   ├── popup.html
   ├── popup.js
   ├── config.json
   ├── icon48.png
   └── icon128.png
   ```

3. **Configure Credentials**
   - Open `config.json`
   - Add your website credentials following this format:
   ```json
   {
     "credentials": [
       {
         "site": "Example Site",
         "username": "your_username",
         "password": "your_password"
       },
       {
         "site": "Another Site",
         "username": "another_username",
         "password": "another_password"
       }
     ]
   }
   ```

4. **Install Extension**
   - Open Google Chrome
   - Go to `chrome://extensions/`
   - Enable "Developer mode" in the top right corner
   - Click "Load unpacked"
   - Select the directory containing your extension files

## Usage

1. Click the extension icon in your Chrome toolbar
2. Select a website from the dropdown menu
3. Use the "Copy Username" or "Copy Password" buttons to copy credentials
4. A success message will appear briefly when copying is successful

## Security Considerations

- This extension stores passwords in plain text in the config.json file
- It's recommended to:
  - Use this for non-sensitive accounts only
  - Keep your config.json secure
  - Not share your extension directory with others
  - Consider encrypting the config.json file (future enhancement)

## Directory Structure

```
simple-password-manager/
├── manifest.json      # Extension configuration
├── popup.html        # Main extension interface
├── popup.js          # Extension functionality
├── config.json       # Credential storage
├── icon48.png        # Small extension icon
├── icon128.png       # Large extension icon
└── README.md         # Documentation
```

## File Descriptions

### manifest.json
Contains the extension's metadata and permissions required for operation.

### popup.html
The main interface that appears when clicking the extension icon. Contains the structure for the site selector and credential fields.

### popup.js
Contains all the JavaScript functionality including:
- Loading credentials from config.json
- Handling site selection
- Copy to clipboard functionality
- Success message display

### config.json
Stores all website credentials in a structured JSON format. This is where you add or modify your stored credentials.

## Customization

### Adding New Credentials
1. Open `config.json`
2. Add a new object to the `credentials` array:
   ```json
   {
     "site": "New Site Name",
     "username": "new_username",
     "password": "new_password"
   }
   ```
3. Save the file
4. Refresh the extension in Chrome

### Modifying the Interface
- Edit `popup.html` to change the layout
- Modify the styles in the `<style>` section
- Update Bootstrap classes for different appearances

## Troubleshooting

### Extension Not Loading
- Verify all files are present in the directory
- Check that Developer mode is enabled
- Look for errors in Chrome's developer console

### Credentials Not Appearing
- Verify config.json is properly formatted
- Check for JSON syntax errors
- Refresh the extension

### Copy Function Not Working
- Ensure proper permissions in manifest.json
- Check console for JavaScript errors
- Verify clipboard permissions are granted

## Future Enhancements

- Password encryption
- Search functionality for sites
- Password generation feature
- Export/Import credentials
- Sync across devices

## Contributing

Feel free to submit issues and enhancement requests!
