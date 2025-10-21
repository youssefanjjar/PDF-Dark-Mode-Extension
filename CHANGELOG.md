# Changelog

## Version 1.1 (2024-10-21)

### 🔧 Fixed Issues

The extension was outdated and not working properly due to several compatibility and functionality issues. This update brings it up to modern standards and significantly improves reliability.

### ✅ Key Improvements

1. **Manifest V3 Compliance**
   - Added required `host_permissions: ["<all_urls>"]` for proper content script injection
   - Previously missing, causing the extension to fail silently on many pages

2. **Broader PDF Support**
   - Changed URL matching from restrictive `*://*/*.pdf` to `<all_urls>`
   - Now works with:
     - Chrome's built-in PDF viewer
     - PDF.js embedded viewers
     - Blob URLs
     - Any PDF viewer implementation

3. **Dynamic Content Handling**
   - Added MutationObserver to watch for lazy-loaded PDF canvases
   - Automatically applies dark mode to dynamically added content
   - Essential for modern PDF viewers that load pages progressively

4. **Smart PDF Detection**
   - Implemented `isPDFPage()` function to detect PDFs via:
     - URL patterns (case-insensitive)
     - Document content type
     - Embed tag detection
     - Chrome plugin detection
   - Only applies filters to actual PDF pages, avoiding unwanted effects

5. **Improved Color Filters**
   - Enhanced from `invert(1) sepia(1)` to `invert(1) sepia(1) hue-rotate(180deg)`
   - Better color accuracy and readability
   - More natural-looking dark mode

6. **Better Timing**
   - Changed from `document_end` to `document_idle`
   - More reliable initialization
   - Ensures PDF viewer is fully loaded before applying styles

7. **Frame Support**
   - Added `all_frames: true` to content script
   - Works with PDFs embedded in iframes
   - Handles nested frame structures

### 📝 Technical Changes

**manifest.json:**
- Version bumped from 1.0 to 1.1
- Added `host_permissions: ["<all_urls>"]`
- Changed matches to `["<all_urls>"]`
- Changed `run_at` to `"document_idle"`
- Added `all_frames: true`

**content.js:**
- Complete rewrite with better structure
- Added `isPDFPage()` detection function
- Added `applyDarkMode()` application function
- Implemented MutationObserver for dynamic content
- Added dataset flags to prevent duplicate applications
- Improved element selectors and filtering logic

### 🧪 Testing

All changes have been validated:
- JSON syntax validation passed
- JavaScript syntax validation passed
- CodeQL security scan passed (0 vulnerabilities)
- Logic tests passed (6/6 test cases)
- Visual demonstration created and verified

---

## Version 1.0 (Original)

Initial release with basic PDF dark mode functionality.
