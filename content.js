// Check if the current page is a PDF
function isPDFPage() {
  // Check URL for .pdf extension
  if (window.location.href.toLowerCase().includes('.pdf')) {
    return true;
  }
  
  // Check for PDF viewer embed tag
  const embed = document.querySelector('embed[type="application/pdf"]');
  if (embed) {
    return true;
  }
  
  // Check for Chrome's PDF viewer
  if (document.querySelector('embed#plugin')) {
    return true;
  }
  
  // Check document content type
  if (document.contentType === 'application/pdf') {
    return true;
  }
  
  return false;
}

// Apply dark mode filters to PDF elements
function applyDarkMode() {
  if (!isPDFPage()) {
    return;
  }
  
  // Reset body filter to avoid double inversion
  document.body.style.filter = 'none';
  
  // Apply dark mode to canvas elements (used in PDF.js and similar viewers)
  const pdfCanvas = document.querySelectorAll('canvas');
  pdfCanvas.forEach(canvas => {
    if (!canvas.dataset.darkModeApplied) {
      canvas.style.filter = 'invert(1) sepia(1) hue-rotate(180deg)';
      canvas.dataset.darkModeApplied = 'true';
    }
  });
  
  // Apply dark mode to iframes containing PDFs
  const pdfIframe = document.querySelectorAll('iframe');
  pdfIframe.forEach(iframe => {
    if (iframe.src && (iframe.src.toLowerCase().includes('.pdf') || iframe.src.includes('blob:'))) {
      if (!iframe.dataset.darkModeApplied) {
        iframe.style.filter = 'invert(1) sepia(1) hue-rotate(180deg)';
        iframe.dataset.darkModeApplied = 'true';
      }
    }
  });
  
  // Handle embed and object tags for PDFs
  const pdfEmbeds = document.querySelectorAll('embed[type="application/pdf"], object[type="application/pdf"]');
  pdfEmbeds.forEach(element => {
    if (!element.dataset.darkModeApplied) {
      element.style.filter = 'invert(1) sepia(1) hue-rotate(180deg)';
      element.dataset.darkModeApplied = 'true';
    }
  });
  
  // Apply inverted colors to images, videos (but not as aggressive)
  const media = document.querySelectorAll('img, video');
  media.forEach(element => {
    if (!element.dataset.darkModeApplied) {
      element.style.filter = 'invert(1) hue-rotate(180deg)';
      element.dataset.darkModeApplied = 'true';
    }
  });
  
  // Set dark background and text colors
  document.body.style.backgroundColor = '#121212';
  document.body.style.color = '#e0e0e0';
}

// Initial application
applyDarkMode();

// Watch for dynamically added elements (e.g., lazy-loaded PDF canvases)
const observer = new MutationObserver((mutations) => {
  let shouldReapply = false;
  
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.tagName === 'CANVAS' || 
            node.tagName === 'IFRAME' || 
            node.tagName === 'EMBED' || 
            node.tagName === 'OBJECT') {
          shouldReapply = true;
        }
      }
    });
  });
  
  if (shouldReapply) {
    applyDarkMode();
  }
});

// Start observing the document for changes
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Also reapply on load event (for dynamic content)
window.addEventListener('load', () => {
  setTimeout(applyDarkMode, 500);
});

