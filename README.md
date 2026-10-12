# Professional Portfolio Website

A modern, fully responsive single-page portfolio website built with HTML5, CSS3, and vanilla JavaScript. Designed as a professional internship assignment demonstrating proficiency in modern web development fundamentals.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [How to Run](#how-to-run)
- [Customization Guide](#customization-guide)
- [Responsive Design](#responsive-design)
- [How the Mobile Navigation Works](#how-the-mobile-navigation-works)
- [How the Contact Form Validation Works](#how-the-contact-form-validation-works)
- [Code Explanations](#code-explanations)
- [Browser Support](#browser-support)
- [Credits](#credits)

---

## 🎯 Project Overview

This portfolio website showcases a Full Stack Developer's skills, projects, experience, and education. It is designed to be:

- **Professional** - Clean, modern design suitable for internship submissions
- **Responsive** - Works perfectly on mobile, tablet, laptop, and desktop
- **Accessible** - Semantic HTML, proper ARIA labels, keyboard navigation
- **Interactive** - Smooth animations, form validation, mobile menu
- **Easy to Understand** - Clean, well-commented code for instructor review

---

## ✨ Features

### Core Features
- ✅ Fully responsive design (Mobile, Tablet, Laptop, Desktop)
- ✅ Sticky navigation header with scroll effects
- ✅ Mobile hamburger menu with smooth animation
- ✅ Smooth scrolling between sections
- ✅ Active navigation link highlighting on scroll
- ✅ Hero section with call-to-action buttons
- ✅ About section with statistics cards
- ✅ Skills section with animated progress bars
- ✅ Projects section with hover overlay effects
- ✅ Experience section with timeline card
- ✅ Education section
- ✅ Contact section with form validation
- ✅ Back-to-top button
- ✅ Scroll reveal animations
- ✅ Current year auto-update in footer
- ✅ Professional footer with social links

### JavaScript Functionality
1. Mobile hamburger menu toggle
2. Close mobile menu on link click
3. Close mobile menu when clicking outside
4. Close mobile menu on Escape key
5. Smooth scrolling for navigation
6. Active navigation link while scrolling
7. Header shadow on scroll
8. Contact form validation (real-time + on submit)
9. Success/error messages for form
10. Back-to-top button visibility
11. Skill bar animation on scroll
12. Scroll reveal animations
13. Current year in footer
14. Window resize handler

---

## 🛠 Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic structure and content |
| **CSS3** | Styling, layout, animations, responsive design |
| **Vanilla JavaScript** | Interactivity, validation, animations |
| **Font Awesome** | Icons throughout the website |
| **Google Fonts** | Inter (body) and Fira Code (code elements) |

**No frameworks or libraries used** - Pure HTML, CSS, and JavaScript to demonstrate core web development skills.

---

## 📁 Project Structure

```
portfolio/
│
├── index.html          # Main HTML file with semantic structure
├── style.css           # Complete stylesheet with responsive design
├── script.js           # JavaScript for interactivity and validation
├── assets/             # Images folder
│   ├── profile.jpg     # Profile/hero image (replace with your photo)
│   ├── project1.jpg    # Project 1 screenshot
│   ├── project2.jpg    # Project 2 screenshot
│   └── project3.jpg    # Project 3 screenshot
└── README.md           # This documentation file
```

---

## 🚀 How to Run

### Option 1: Direct Open (Simplest)
1. Navigate to the project folder
2. Double-click `index.html` to open in your default browser

### Option 2: VS Code Live Server (Recommended)
1. Open the project folder in VS Code
2. Install the "Live Server" extension if not already installed
3. Right-click on `index.html` and select "Open with Live Server"
4. The site will open at `http://localhost:5500`

### Option 3: Python Simple Server
```bash
# Navigate to project folder
cd portfolio

# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

### Option 4: Node.js http-server
```bash
# Install http-server globally
npm install -g http-server

# Navigate to project folder and run
cd portfolio
http-server -p 8000

# Then open http://localhost:8000 in your browser
```

### 📱 Mobile Access (Same WiFi Network)

Agar aap apna portfolio mobile phone pe dekhna chahte hain (same WiFi pe connected hone chahiye):

#### Step 1: Apna Computer Ka IP Address Find Karein

**Windows (Command Prompt me):**
```cmd
ipconfig
```
`IPv4 Address` dekhein - jaise `192.168.1.5`

**Ya PowerShell me:**
```powershell
(Get-NetIPAddress -AddressFamily IPv4 | Where-Object {$_.InterfaceAlias -notmatch "Loopback"}).IPAddress
```

#### Step 2: Server Start Karein
```bash
python -m http.server 8000
```

#### Step 3: Mobile Browser Mein Open Karein
```
http://192.168.1.5:8000
```
*(Apna IP address use karein)*

> **Note:** `localhost:8000` sirf computer pe kaam karta hai. Mobile ke liye IP address use karna pare ga.

#### ⚠️ Agar Mobile Pe Open Na Ho:
1. **Same WiFi** pe connected hone chahiye dono devices
2. **Firewall** allow karein - Command Prompt (Admin) me:
   ```cmd
   netsh advfirewall firewall add rule name="HTTP" dir=in action=allow protocol=TCP localport=8000
   ```
3. **Antivirus** ka bhi check karein

#### 🌐 Public Access (Internet Se)
Agar aap website internet pe share karna chahte hain:
- **GitHub Pages** (Free) - GitHub pe upload karein
- **Netlify** (Free) - Drag & drop deploy karein
- **Vercel** (Free) - Easy deployment

---

## 🎨 Customization Guide

### How to Replace Profile/Project Images

1. **Profile Image:**
   - Replace `assets/profile.jpg` with your professional photo
   - Recommended size: 400x400px or larger (square aspect ratio)
   - The image is used in both the hero and about sections

2. **Project Images:**
   - Replace `assets/project1.jpg`, `project2.jpg`, `project3.jpg` with your project screenshots
   - Recommended size: 600x400px (3:2 aspect ratio)
   - Update the `alt` attributes in `index.html` for accessibility

### How to Update Personal Information

Open `index.html` and replace the following placeholders:

| Placeholder | Location | What to Enter |
|-------------|----------|---------------|
| `[Your Name]` | Multiple locations | Your full name |
| `your.email@example.com` | Contact section, footer | Your email address |
| `[Your Phone Number]` | Contact section | Your phone number |
| `[Your City, Country]` | Contact section | Your location |
| `linkedin.com/in/yourprofile` | Contact section, footer | Your LinkedIn URL |
| `github.com/yourusername` | Contact section, footer | Your GitHub URL |
| `[Your Degree Program]` | Education section | e.g., "BS in Computer Science" |
| `[Your University/Institute Name]` | Education section | Your institution name |
| `[Year] - [Year]` | Education section | e.g., "2022 - 2026" |

### How to Update Colors

Open `style.css` and modify the CSS variables in the `:root` selector:

```css
:root {
    --color-primary: #6c63ff;      /* Main brand color */
    --color-primary-dark: #5a52d5;  /* Darker shade for hover */
    --color-primary-light: #8b83ff; /* Lighter shade */
    --color-secondary: #2d2b55;     /* Secondary color */
    --color-accent: #ff6584;        /* Accent color (errors, hearts) */
    --bg-primary: #ffffff;          /* Main background */
    --bg-secondary: #f8f9fa;        /* Section backgrounds */
    --text-primary: #2d2b55;        /* Main text color */
    --text-secondary: #6b7280;      /* Secondary text color */
}
```

### How to Add More Projects

Copy an existing project card in `index.html` and modify the content:

```html
<article class="project-card">
    <div class="project-image">
        <img src="assets/your-image.jpg" alt="Project description" loading="lazy">
        <div class="project-overlay">
            <a href="#" class="overlay-link" aria-label="Live Demo">
                <i class="fas fa-external-link-alt"></i>
            </a>
            <a href="#" class="overlay-link" aria-label="GitHub">
                <i class="fab fa-github"></i>
            </a>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Title</h3>
        <p class="project-description">Your project description.</p>
        <div class="project-tech">
            <span>Tech1</span>
            <span>Tech2</span>
        </div>
        <div class="project-links">
            <a href="#" class="btn btn-small btn-primary">Live Demo</a>
            <a href="#" class="btn btn-small btn-secondary">GitHub</a>
        </div>
    </div>
</article>
```

---

## 📱 Responsive Design

The website uses a **mobile-first responsive approach** with CSS media queries at four breakpoints:

| Breakpoint | Screen Size | Target Devices |
|------------|-------------|----------------|
| Default | 1024px+ | Laptops, Desktops |
| Tablet | 768px - 1023px | iPads, Tablets |
| Mobile | up to 767px | Phones |
| Small Mobile | up to 480px | Small phones |
| Large Desktop | 1400px+ | Large monitors |

### Key Responsive Changes:

**Desktop (1024px+):**
- Two-column hero layout
- Horizontal navigation
- Two-column skills grid
- Two-column projects grid
- Two-column contact layout

**Tablet (768px - 1023px):**
- Stacked about section
- Single-column skills
- Two-column projects (smaller)
- Two-column contact info cards

**Mobile (up to 767px):**
- Single-column hero (image on top)
- Hamburger menu navigation
- Single-column projects
- Stacked contact cards
- Centered footer content

**Small Mobile (up to 480px):**
- Full-width buttons
- Single-column stats
- Smaller typography

---

## 🍔 How the Mobile Navigation Works

### HTML Structure
```html
<button class="hamburger" id="hamburger">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
</button>
<nav class="navbar" id="navbar">
    <ul class="nav-list">
        <li><a href="#home" class="nav-link">Home</a></li>
        <!-- More links -->
    </ul>
</nav>
```

### CSS Approach
1. **Desktop:** Navbar displays as flex, hamburger is hidden
2. **Mobile:** Navbar is positioned `fixed` off-screen (`right: -100%`), hamburger is displayed
3. **Active State:** When `.active` class is added, navbar slides in (`right: 0`)
4. **Hamburger Animation:** Three bars transform into an X using CSS transforms

### JavaScript Logic
1. Click hamburger → Toggle `.active` class on both hamburger and navbar
2. Click nav link → Close mobile menu
3. Click outside menu → Close mobile menu
4. Press Escape → Close mobile menu
5. Resize to desktop → Close mobile menu
6. Body scroll is locked when menu is open

---

## ✅ How the Contact Form Validation Works

### Validation Rules

| Field | Validation Rules |
|-------|-----------------|
| **Name** | Required, minimum 2 characters |
| **Email** | Required, must match email format (regex) |
| **Subject** | Required, minimum 3 characters |
| **Message** | Required, minimum 10 characters |

### Validation Flow

1. **Real-time Validation:** As the user types, each field is validated
2. **Blur Validation:** When the user leaves a field, it's validated
3. **Submit Validation:** On form submission, all fields are validated
4. **Visual Feedback:**
   - ✅ Green border + checkmark for valid fields
   - ❌ Red border + error message for invalid fields
5. **Success Message:** Shows confirmation after valid submission
6. **Error Handling:** Scrolls to first error field if validation fails

### Important Note
> ⚠️ **This form is frontend-only.** It validates input and shows a success message, but does NOT actually send emails. To make it functional, you would need to:
> - Connect to a backend API (Node.js, PHP, etc.)
> - Use a service like EmailJS, Formspree, or Netlify Forms
> - Set up a custom server endpoint

---

## 💻 Code Explanations

### Where HTML5 Semantic Elements Are Used

| Element | Usage |
|---------|-------|
| `<header>` | Page header containing the navigation |
| `<nav>` | Navigation bar with links |
| `<main>` | Main content wrapper |
| `<section>` | Each major section (hero, about, skills, etc.) |
| `<article>` | Individual project cards |
| `<footer>` | Page footer with links and copyright |

### Where Flexbox Is Used

| Location | Purpose |
|----------|---------|
| `.nav-container` | Space between logo and navbar |
| `.nav-list` | Horizontal navigation links |
| `.hero-buttons` | Side-by-side buttons |
| `.hero-socials` | Social media icon row |
| `.category-header` | Icon + title alignment |
| `.skill-info` | Name + percentage alignment |
| `.tools-grid` items | Centered icon + label |
| `.project-tech` | Wrapping technology tags |
| `.contact-card` | Icon + details alignment |
| `.footer-bottom` | Copyright + credit |

### Where CSS Grid Is Used

| Location | Purpose |
|----------|---------|
| `.hero-container` | Two-column hero layout (text + image) |
| `.about-container` | Two-column about layout |
| `.about-stats` | Three-column statistics |
| `.skills-container` | Two-column skill categories |
| `.tools-grid` | Three-column tool items |
| `.projects-container` | Two-column project cards |
| `.contact-container` | Two-column contact layout |
| `.contact-info` (tablet) | Two-column contact cards |
| `.footer-content` | Three-column footer |

### Media Queries Breakdown

```css
/* Tablet: 768px - 1023px */
@media screen and (max-width: 1023px) { ... }

/* Mobile: up to 767px */
@media screen and (max-width: 767px) { ... }

/* Small Mobile: up to 480px */
@media screen and (max-width: 480px) { ... }

/* Large Desktop: 1400px+ */
@media screen and (min-width: 1400px) { ... }
```

---

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Full Support |
| Firefox | 88+ | ✅ Full Support |
| Safari | 14+ | ✅ Full Support |
| Edge | 90+ | ✅ Full Support |
| Opera | 76+ | ✅ Full Support |
| Mobile Chrome | Latest | ✅ Full Support |
| Mobile Safari | 14+ | ✅ Full Support |

---

## 📝 Notes for Instructor Review

### What This Project Demonstrates:

1. **HTML5 Proficiency:**
   - Semantic elements (`header`, `nav`, `main`, `section`, `article`, `footer`)
   - Proper heading hierarchy (h1 → h2 → h3 → h4)
   - Accessible attributes (`aria-label`, `aria-expanded`, `alt` text)
   - Meta tags for SEO

2. **CSS3 Proficiency:**
   - CSS custom properties (variables)
   - Flexbox for component layouts
   - CSS Grid for page layouts
   - Media queries for responsive design
   - Transitions and transforms
   - Pseudo-classes (`:hover`, `:focus`, `::after`)
   - Box model, shadows, border-radius
   - Responsive units (rem, %, vh, vw)

3. **JavaScript Proficiency:**
   - DOM manipulation
   - Event handling (click, scroll, input, blur, keydown, resize)
   - Form validation with regex
   - Intersection Observer API
   - requestAnimationFrame for performance
   - Clean, modular code structure

4. **Responsive Design:**
   - Mobile-first approach
   - Four breakpoints
   - Flexible grids and layouts
   - Readable typography at all sizes
   - Touch-friendly buttons and links

---

## 📄 Credits

- **Icons:** [Font Awesome](https://fontawesome.com/) (Free License)
- **Fonts:** [Google Fonts](https://fonts.google.com/) (Inter, Fira Code)
- **Design Inspiration:** Modern developer portfolios

---

## 📧 Contact

For questions or feedback about this project:

- **Email:** your.email@example.com
- **LinkedIn:** linkedin.com/in/yourprofile
- **GitHub:** github.com/yourusername

---

**Built with ❤️ using HTML, CSS, and JavaScript**
