# Laboratory Information and Diagnostic Management Platform

A clean, modern, and responsive static website prototype developed as a college project assignment for **Git** and **Docker** demonstration.

---

## 📌 Project Overview

The **Laboratory Information and Diagnostic Management Platform** is a web-based prototype designed for healthcare and diagnostic laboratories. It provides a visual interface to demonstrate key laboratory management workflows, including patient registration, diagnostic test selection, sample tracking, and report generation.

This repository serves as a foundational static web project for practicing version control (Git) and web application containerization (Docker).

---

## 📁 Directory Structure

```text
LaboratoryDiagnosticDockerAssignment/
│
├── app/
│   ├── index.html       # Main HTML5 semantic structure & content
│   ├── style.css        # Custom CSS styling (Flexbox/Grid, Responsive Theme)
│   └── script.js        # Vanilla JS for interactive modals, navigation & forms
│
└── README.md            # Project documentation and setup guide
```

---

## ✨ Key Features

- **Professional Healthcare UI**: Styled using modern medical color schemes (Sky Blue, White, Teal).
- **Responsive Layout**: Designed using pure CSS Grid and Flexbox for seamless desktop and mobile viewing.
- **Hero Section**: Includes quick action call-to-action buttons ("Book a Test" and "View Services").
- **Platform Features**: Highlights 4 core capabilities (Patient Registration, Test Management, Sample Tracking, Diagnostic Reports).
- **Diagnostic Services Catalog**: Displays 6 common laboratory tests (Blood Test, Urine Test, Blood Sugar Test, Lipid Profile, Thyroid Test, CBC) with individual booking triggers.
- **Interactive JavaScript Capabilities**:
  - Responsive mobile navigation hamburger menu toggle.
  - Interactive test booking modal popup pre-filled with chosen test details.
  - Dynamic display of the current copyright year in the footer.
  - Smooth scrolling navigation.
  - Popup alerts for user interactions.
- **Zero External Dependencies**: Built entirely with pure HTML5, CSS3, and Vanilla JavaScript—no external frameworks or CDNs required.

---

## 🚀 How to Run Locally

Since this is a static web application, no database or backend server installation is required.

### Method 1: Direct File Access
1. Clone or download this project folder.
2. Navigate to `LaboratoryDiagnosticDockerAssignment/app/`.
3. Double-click `index.html` or open it directly in any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).

### Method 2: VS Code Live Server Extension (Recommended)
1. Open VS Code.
2. Open the `LaboratoryDiagnosticDockerAssignment` directory in VS Code (`File` -> `Open Folder...`).
3. Install the **Live Server** extension by Extension Author *Ritwick Dey*.
4. Right-click `app/index.html` and select **"Open with Live Server"**.

### Method 3: Python Built-in HTTP Server
Run a quick local web server using Python:

```bash
cd LaboratoryDiagnosticDockerAssignment/app
python -m http.server 8000
```
Then open your browser and navigate to `http://localhost:8000`.

---

## ⚙️ Git Version Control Setup (College Assignment Guide)

To initialize and track this project using Git for your assignment:

```bash
# 1. Navigate to project root
cd LaboratoryDiagnosticDockerAssignment

# 2. Initialize git repository
git init

# 3. Add all files to staging area
git add .

# 4. Create initial commit
git commit -m "Initial commit: Add Laboratory Management Platform frontend code"

# 5. Check git status
git status
```

---

## 🐳 Docker Deployment Readiness (Next Steps)

This static web app is structured to be containerized effortlessly using Nginx or Apache web server images.

### Example Dockerfile (For future step):
```dockerfile
FROM nginx:alpine
COPY ./app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 📞 Sample Contact & Lab Details

- **Phone**: +91 98765 43210
- **Email**: labmanagement@example.com
- **Address**: Chennai, Tamil Nadu, India

---

## 📄 License & Copyright

© 2026 Laboratory Information and Diagnostic Management Platform. All rights reserved.
Developed for Academic Project Demonstration.
