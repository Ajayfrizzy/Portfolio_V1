# 🚀 AjayTECH Portfolio Website

A modern, feature-rich portfolio website showcasing Oluwaseun Ajao's skills, projects, and professional experience as a Full-Stack Software Engineer.

![Portfolio Website](https://img.shields.io/badge/Portfolio-Live-brightgreen) ![Version](https://img.shields.io/badge/version-2.0-blue) ![License](https://img.shields.io/badge/license-MIT-orange)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Deployment](#deployment)
- [New Features (v2.0)](#new-features-v20)
- [Project Showcase](#project-showcase)
- [Theme Customization](#theme-customization)
- [Analytics Setup](#analytics-setup)
- [Performance Optimization](#performance-optimization)
- [Browser Compatibility](#browser-compatibility)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🌟 Overview

This portfolio website serves as a comprehensive professional showcase for Oluwaseun Ajao, a Full-Stack Software Engineer specializing in React, Next.js, TypeScript, and Node.js. The site features a modern, responsive design with dark/light mode support, animated statistics, client testimonials, and a blog section.

**Live Demo:** [Your Portfolio URL]

## ✨ Features

### 🎨 **Design & UI/UX**
- ✅ **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- ✅ **Dark/Light Mode Toggle**: User-customizable theme with persistent preference
- ✅ **Smooth Animations**: Scroll-triggered animations and transitions
- ✅ **Interactive Elements**: Hover effects, parallax scrolling, and dynamic content
- ✅ **Professional Layout**: Clean, modern design with accent colors

### 📊 **Core Sections**
- ✅ **Hero Section**: Eye-catching introduction with animated headings
- ✅ **About Me**: Professional summary with condensed, impactful content
- ✅ **Statistics Dashboard**: Animated counters (Projects, Experience, Live Sites, Coffee ☕)
- ✅ **Skills Showcase**: Technology icons with hover effects
- ✅ **Education Timeline**: Academic background with detailed descriptions
- ✅ **Services/Offerings**: What you provide to clients
- ✅ **Projects Portfolio**: Filterable projects (All, Live, Practice)
- ✅ **Testimonials**: Client feedback with avatars and quotes
- ✅ **Contact Form**: Email integration with form validation

### 🚀 **Advanced Features**
- ✅ **Project Filtering**: Filter by Live Projects or Practice Projects
- ✅ **Show More/Less**: Expandable project lists
- ✅ **Scroll-to-Top Button**: Smooth navigation to top
- ✅ **Mobile Menu**: Hamburger navigation for mobile devices
- ✅ **SEO Optimized**: Meta tags, Open Graph, Twitter Cards
- ✅ **Google Analytics**: Traffic tracking and user insights
- ✅ **Email Integration**: EmailJS for contact form
- ✅ **Custom Cursor**: Enhanced user experience (desktop)
- ✅ **Social Media Links**: GitHub, LinkedIn, Twitter, Instagram

## 🛠️ Tech Stack

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Custom styling with CSS variables
- **JavaScript (ES6+)**: Vanilla JS, no frameworks
- **Font Awesome 6.7.2**: Icon library

### Backend & Services
- **EmailJS**: Contact form email delivery
- **Google Analytics 4**: User tracking and insights
- **LocalStorage**: Theme preference persistence

### Tools & APIs
- **Intersection Observer API**: Scroll animations
- **Custom Form Validation**: Client-side validation
- **CSS Grid & Flexbox**: Modern responsive layouts
- **CSS Variables**: Theme switching

## 📂 Project Structure

```
Portfolio_V1/
├── asset/
│   ├── css/
│   │   └── styles.css           # Main stylesheet with dark/light themes
│   ├── img/
│   │   ├── my_picture.jpg       # Profile photo
│   │   ├── web_design.jpeg      # Hero section image
│   │   ├── project_*.png        # Project screenshots
│   │   ├
│   │   └── avatar*.jpg          # Testimonial avatars (optional)
│   ├── javascript/
│   │   ├── app.js               # Main JavaScript (projects, animations, theme)
│   │   └── contact_form.js      # Contact form logic with EmailJS
│   └── others/
│       └── cv.pdf               # Downloadable resume
├── index.html                   # Main HTML file
├── README.md                    # This file
├── LICENSE                      # MIT License
└── .gitignore                   # Git ignore file
```

## 🚀 Setup & Installation

### Prerequisites
- A modern web browser
- Text editor (VS Code recommended)
- Git installed
- EmailJS account (for contact form)
- Google Analytics account (optional, for tracking)

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ajayfrizzy/Portfolio_V1.git
   cd Portfolio_V1
   ```

2. **Open the project:**
   ```bash
   # Open index.html in your browser
   # Or use a local server (recommended):
   
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js http-server
   npx http-server
   
   # Using VS Code Live Server extension
   # Right-click index.html > Open with Live Server
   ```

3. **Access the site:**
   ```
   http://localhost:8000
   ```

### EmailJS Configuration

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Update `contact_form.js` with your credentials:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   
   emailjs.sendForm(
     "YOUR_SERVICE_ID",
     "YOUR_TEMPLATE_ID",
     form
   )
   ```

## 📤 Deployment

### Option 1: GitHub Pages
```bash
# Push to GitHub
git add .
git commit -m "Deploy portfolio"
git push origin main

# Enable GitHub Pages in repository settings
# Select main branch > /root folder
```

### Option 2: Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts
```

### Option 3: Netlify
1. Drag and drop the project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repository

## 🆕 New Features (v2.0)

### 1. **Dark/Light Mode Toggle** 🌓
- Toggle button in navigation and mobile menu
- Smooth theme transitions
- Persistent preference using localStorage
- Complete color scheme for both themes

### 2. **Statistics Section** 📊
- Animated counters that count up when scrolled into view
- 4 key metrics: Projects, Experience, Live Sites, Coffee
- Glassmorphism card design with hover effects
- Responsive grid layout

### 3. **Testimonials Section** 💬
- Client feedback cards with quotes
- Profile images with fallback avatars
- Hover animations and effects
- 3-column responsive grid

### 4. **Blog Section** 📝
- Featured articles with images
- Date badges and "Read More" links
- Image zoom on hover
- Placeholder for future blog integration

### 5. **Project Filtering** 🔍
- Filter buttons: All | Live | Practice
- Smooth filter transitions
- Active state highlighting
- Maintains "Show More/Less" functionality

### 6. **Google Analytics Integration** 📈
- GA4 tracking code ready
- Page view tracking
- Event tracking capability
- Just add your Measurement ID

### 7. **Enhanced SEO** 🔍
- Meta description and keywords
- Open Graph tags for social sharing
- Twitter Card integration
- Improved page title

## 💼 Project Showcase

Projects are dynamically loaded from the `projects` array in `app.js`:

```javascript
const projects = [
  {
    title: "Hotel Management System",
    description: "Full stack hotel management application...",
    image: "/asset/img/project_12.png",
    tags: ["ReactJs", "TailwindCss", "Nodejs", "Supabase"],
    link: "https://ajay-budget-app.vercel.app/",
    github: "https://github.com/Ajayfrizzy/Budget_app.git",
    status: "live" // or "practice"
  },
  // More projects...
];
```

### Adding a New Project
1. Add a new object to the `projects` array
2. Set `status: "live"` or `status: "practice"`
3. Add project screenshot to `asset/img/`
4. Include tags and links

## 🎨 Theme Customization

### Changing Colors

Edit CSS variables in `styles.css`:

```css
/* Dark Mode */
:root, [data-theme="dark"] {
  --primary-color: #4a6fa5;
  --accent-color: #64ffda;
  --text-color: #e6e6e6;
  --dark-navy: #0a192f;
  /* ... */
}

/* Light Mode */
[data-theme="light"] {
  --primary-color: #2563eb;
  --accent-color: #0891b2;
  --text-color: #1f2937;
  /* ... */
}
```

### Custom Fonts

Update the Google Fonts import and font-family:

```css
@import url("https://fonts.googleapis.com/css2?family=Your+Font&display=swap");

* {
  font-family: "Your Font", sans-serif;
}
```

## 📈 Analytics Setup

### Google Analytics 4

1. Create a GA4 property at [Google Analytics](https://analytics.google.com/)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Replace the placeholder in `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX'); // Replace with your ID
</script>
```

## ⚡ Performance Optimization

The site implements several optimizations:

- ✅ **Lazy Loading**: Images load as needed
- ✅ **CSS Variables**: Efficient theme switching
- ✅ **Intersection Observer**: Efficient scroll animations
- ✅ **Minimal Dependencies**: No heavy frameworks
- ✅ **Optimized Assets**: Compressed images recommended
- ✅ **Efficient JavaScript**: Event delegation and debouncing

### Performance Tips

```bash
# Optimize images
# Use tools like TinyPNG or ImageOptim

# Minify CSS and JS for production
# Use online tools or build scripts

# Enable caching on your hosting platform
```

## 🌐 Browser Compatibility

Tested and compatible with:

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ Fully Supported |
| Firefox | Latest | ✅ Fully Supported |
| Safari | Latest | ✅ Fully Supported |
| Edge | Latest | ✅ Fully Supported |
| iOS Safari | 12+ | ✅ Fully Supported |
| Android Chrome | Latest | ✅ Fully Supported |

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes:**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Guidelines
- Follow existing code style
- Test on multiple browsers
- Update README if needed
- Add comments for complex logic

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

**Oluwaseun Ajao** - Full-Stack Software Engineer

- 📧 Email: [ajayholuwaseun@gmail.com](mailto:ajayholuwaseun@gmail.com)
- 🐙 GitHub: [@Ajayfrizzy](https://github.com/Ajayfrizzy)
- 💼 LinkedIn: [ajayfrizzy](https://www.linkedin.com/in/ajayfrizzy/)
- 🐦 Twitter: [@ajay_frizzy](https://www.x.com/ajay_frizzy)
- 📷 Instagram: [@ajay_frizzy](https://www.instagram.com/ajay_frizzy)
- 📍 Location: Lagos, Nigeria

---

### 🌟 Show Your Support

Give a ⭐️ if you like this project!

### 📝 Changelog

**v2.0** (November 2025)
- Added dark/light mode toggle
- Implemented statistics section with animated counters
- Added testimonials section
- Created blog section
- Enhanced project filtering
- Integrated Google Analytics
- Improved SEO with meta tags
- Refined hero section styling
- Updated About, Education, and Services sections
- Fixed PostgreSQL icon display
- Mobile menu enhancements

**v1.0** (Initial Release)
- Basic portfolio structure
- Project showcase
- Contact form
- Responsive design

---

Made with ❤️ by [Oluwaseun Ajao](https://github.com/Ajayfrizzy)