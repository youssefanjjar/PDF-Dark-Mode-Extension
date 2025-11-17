PDF Dark Mode Extension
=======================

A browser extension that automatically inverts colors of PDF files for a dark mode experience, making it easier on the eyes when reading PDFs in low-light environments.

**Version 1.1** - Updated for Chrome Manifest V3 with improved compatibility and performance.

Features
--------

-   ✅ Automatically detects and applies dark mode to PDF files
-   ✅ Works with Chrome's built-in PDF viewer
-   ✅ Supports PDF.js and other web-based PDF viewers
-   ✅ Handles dynamically loaded PDF content
-   ✅ Compatible with local and online PDF files
-   ✅ Improved color inversion using hue-rotate for better readability
-   ✅ Watches for lazy-loaded PDF canvases using MutationObserver

Installation
------------

1.  Download or clone this repository to your local machine.
2.  Open your browser (Google Chrome or Microsoft Edge).
3.  Go to `chrome://extensions` or `edge://extensions` in the address bar.
4.  Enable **Developer mode** in the top right corner.
5.  Click on **Load unpacked** and select the folder where you saved this repository.
6.  The extension should now be installed.

Usage
-----

Once installed, the extension will automatically apply dark mode when you open any PDF file, whether it's hosted online or saved locally. It inverts the colors of the PDF content, making it more suitable for dark environments.

1.  Open a PDF file (either online or locally).
2.  The extension will automatically apply dark mode by inverting the colors of the PDF content.
3.  You can customize the appearance further by adjusting the `content.js` file.

How It Works
------------

-   **PDF Detection**: The extension intelligently detects PDFs by:
    - Checking for `.pdf` in the URL
    - Detecting `embed[type="application/pdf"]` tags
    - Identifying Chrome's built-in PDF viewer elements
    - Checking the document's content type
-   **Smart Color Inversion**: Uses CSS filters with `invert(1)`, `sepia(1)`, and `hue-rotate(180deg)` to create a comfortable dark mode that maintains readability
-   **Dynamic Content Handling**: Implements a MutationObserver to detect and apply dark mode to lazy-loaded PDF content
-   **Manifest V3 Compliant**: Updated to work with the latest Chrome extension standards, including proper `host_permissions` for broader compatibility

Customization
-------------

You can modify the `content.js` file to adjust the color inversion behavior or apply other visual styles based on your needs. Here's what you can customize:

-   **Inversion Settings**: Adjust the CSS filter values in the `applyDarkMode()` function:
    - Change `invert(1) sepia(1) hue-rotate(180deg)` to adjust the darkness level
    - Modify sepia and hue-rotate values for different color tones
-   **Background and Text Colors**: Modify the `backgroundColor` (#121212) and `color` (#e0e0e0) in `document.body` styles
-   **PDF Detection Logic**: Enhance the `isPDFPage()` function to handle additional PDF viewer types
-   **Observer Behavior**: Adjust the MutationObserver settings to optimize performance for specific use cases

## What's New in Version 1.1

### Fixed Issues:
✅ **Manifest V3 Compliance**: Added required `host_permissions` for proper operation
✅ **Broader PDF Support**: Changed from restrictive `*://*/*.pdf` pattern to `<all_urls>` to catch all PDF viewers
✅ **Dynamic Content Support**: Added MutationObserver to handle lazy-loaded PDF canvases
✅ **Better Timing**: Changed from `document_end` to `document_idle` for more reliable initialization
✅ **Frame Support**: Added `all_frames: true` to work with PDFs in iframes
✅ **Improved Filters**: Added `hue-rotate(180deg)` for better color accuracy and readability
✅ **Smart Detection**: Only applies dark mode when a PDF is actually detected, preventing unnecessary filtering on non-PDF pages

Contributing
------------

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -am 'Add new feature'`).
5.  Push to the branch (`git push origin feature-name`).
6.  Open a pull request.

License
-------

This project is licensed under the MIT License - see the LICENSE file for detail
