# QR Code Generator Tool

A simple command-line application built with **Node.js** that generates QR codes from user-provided URLs. The QR code is saved as a PNG image, and the entered URL is stored in a text file.

## Features
- Interactive user input for URLs using **Inquirer.js**.
- Generates a QR code for the provided URL using the **qr-image** package.
- Saves the QR code as a PNG file (`qr_code.png`).
- Logs the entered URL to a text file (`URL.txt`).
- Asynchronous file operations using Node.js's **fs** module.
- Robust error handling for potential issues.
