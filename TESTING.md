# Testing the PDF Dark Mode Extension

## Quick Test Guide

After installing the extension, here are ways to test it:

### Test 1: Online PDF
1. Open any PDF from the web, for example:
   - https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf
   - https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf
2. The PDF should automatically display with inverted colors (dark background, light text)

### Test 2: Local PDF
1. Download any PDF file to your computer
2. Open it in Chrome (drag and drop into browser or File > Open)
3. Dark mode should be applied automatically

### Test 3: PDF in iframe
1. Open a webpage that embeds a PDF in an iframe
2. The embedded PDF should have dark mode applied

### Test 4: PDF.js Viewer
1. Open a page using PDF.js (many web-based PDF viewers use this)
2. Dark mode should work seamlessly

## What to Expect

### Before (Without Extension):
- White background
- Black text
- Hard to read in dark environments
- Bright screen in low light

### After (With Extension Active):
- Dark background (#121212)
- Light text (#e0e0e0)
- Inverted PDF content with sepia tone
- Comfortable reading experience

## Troubleshooting

### Extension Not Working?

1. **Check Extension is Enabled**
   - Go to `chrome://extensions`
   - Ensure "PDF Dark Mode" is enabled (toggle switch is blue)

2. **Verify Permissions**
   - Click "Details" on the extension
   - Ensure "Allow access to file URLs" is enabled (for local PDFs)
   - Check that site access is set to "On all sites"

3. **Refresh the PDF**
   - Try reloading the PDF page (Ctrl+R or Cmd+R)
   - Close and reopen the PDF file

4. **Check Browser Console**
   - Press F12 to open Developer Tools
   - Look for any error messages
   - Check if content script is injected

### Still Having Issues?

If the extension still doesn't work:
1. Remove the extension
2. Reload it from the unpacked folder
3. Clear browser cache
4. Try with a different PDF

## Expected Behavior

✅ **Should Work:**
- Chrome's built-in PDF viewer
- Local PDF files (if file URL access is enabled)
- Online PDFs with direct URLs
- PDF.js and similar web viewers
- PDFs embedded in iframes

❌ **Won't Work:**
- PDFs in browser extensions with isolated contexts
- Some PDFs with heavy JavaScript protection
- Certain proprietary PDF viewers

## Reporting Issues

If you find a PDF that doesn't work with the extension:
1. Note the URL or source of the PDF
2. Check browser console for errors
3. Take a screenshot
4. Open an issue on GitHub with details
