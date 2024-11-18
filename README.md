PDF Dark Mode Extension
=======================

A simple browser extension that inverts colors of PDF files for a dark mode experience, making it easier on the eyes when reading PDFs in low-light environments.

Features
--------

-   Inverts colors of PDF content (text, images, and media) for dark mode.
-   Works with local and online PDF files.
-   Customizable to fit your needs, with optional background and text color adjustments.

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

-   **PDF Detection**: The extension checks if a file is a PDF by looking for `.pdf` in the URL or local file path.
-   **Color Inversion**: Once a PDF is detected, it uses CSS filters (`invert(1)` and `sepia(1)`) to invert the colors of the canvas and images used to display the PDF.
-   **Customization**: You can change the background and text colors or modify the behavior in the `content.js` file.

Customization
-------------

You can modify the `content.js` file to adjust the color inversion behavior or apply other visual styles based on your needs. Here's a quick overview of what you can change:

-   **Inversion Settings**: Adjust the `invert()` and `sepia()` CSS filters to achieve different levels of dark mode.
-   **Background and Text Colors**: Modify the `backgroundColor` and `color` properties in the `document.body` to set your desired dark mode theme.
-   **PDF Viewer Types**: The extension targets `canvas` and `iframe` elements where PDFs are usually rendered. You can add or remove more specific selectors if necessary.

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
