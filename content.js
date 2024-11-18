document.body.style.filter = 'none';
const pdfCanvas = document.querySelectorAll('canvas');
pdfCanvas.forEach(canvas => {
  canvas.style.filter = 'invert(1) sepia(1)'; 
});
const pdfIframe = document.querySelectorAll('iframe');
pdfIframe.forEach(iframe => {
  if (iframe.src.endsWith('.pdf')) {
    iframe.style.filter = 'invert(1) sepia(1)';
  }
});

const media = document.querySelectorAll('img, embed, object, video');
media.forEach(element => {
  element.style.filter = 'invert(1)';
});

document.body.style.backgroundColor = '#121212'; // 
document.body.style.color = '#e0e0e0'; 



