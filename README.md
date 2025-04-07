# AjayTECH Portfolio Website

A modern, responsive portfolio website showcasing Oluwaseun Ajao's skills, projects, and professional experience as a Software Engineer.

![Portfolio Website Preview](/asset/img/my_picture_2.jpg)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Deployment](#deployment)
- [API Integration](#api-integration)
- [Project Showcase](#project-showcase)
- [Customization](#customization)
- [Performance Optimization](#performance-optimization)
- [Browser Compatibility](#browser-compatibility)
- [Known Issues](#known-issues)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🌟 Overview

This portfolio website serves as a professional showcase for Oluwaseun Ajao, highlighting skills, projects, education, and experience. It features a clean, modern design with responsive layout that works across all devices and screen sizes.

The site incorporates both frontend and backend functionality, with a contact form that stores submissions in a Supabase database.

## ✨ Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Dynamic Projects Section**: Automatically populated from JavaScript data
- **Interactive UI Elements**: Animations, smooth scrolling, and hover effects
- **Contact Form**: Backend integration with form validation and database storage
- **Professional Sections**: About, Skills, Education, Interests, and Projects
- **Dark Mode**: Stylish dark theme with accent colors
- **Social Media Integration**: Links to GitHub, LinkedIn, Twitter, and Instagram
- **Downloadable CV**: Option to download resume/CV
- **Animated Section Transitions**: Elements animate into view during scrolling

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3 (Custom styling)
- JavaScript (ES6+)
- FontAwesome for icons

### Backend
- Node.js 
- Supabase (Database and authentication)
- Vercel (Serverless functions)

### Tools & Libraries
- Intersection Observer API for scroll animations
- Custom form validation
- Responsive design without frameworks

## 📂 Project Structure

```
portfolio-website/
├── asset/
│   ├── css/
│   │   └── styles.css
│   ├── img/
│   │   ├── my_picture.jpg
│   │   ├── my_picture_2.jpg
│   │   ├── project_1.png
│   │   ├── project_2.png
│   │   └── project_3.png
│   ├── javascript/
│   │   ├── app.js
│   │   └── contact_form.js
│   └── others/
│       └── cv.pdf
├── api/
│   └── contact.js
├── index.html
├── README.md
└── .env (not included in repository)
```

## 🚀 Setup & Installation

### Prerequisites
- Node.js and npm installed
- Supabase account
- Vercel account (for deployment)

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_key
   ```

3. Install dependencies (if using npm):
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## 📤 Deployment

### Deploying to Vercel
1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy the application

### Supabase Setup
1. Create a new Supabase project
2. Create a `contact_messages` table with the following columns:
   - id (int, primary key)
   - name (varchar)
   - email (varchar)
   - subject (varchar)
   - message (text)
   - submitted_at (timestamp)
3. Set up Row Level Security policies as needed

## 🔌 API Integration

The contact form uses a serverless function deployed on Vercel that connects to Supabase:

```javascript
// Example API route (api/contact.js)
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;
    
    // Insert data into Supabase
    const { error } = await supabase
      .from('contact_messages')
      .insert([{ name, email, subject, message, submitted_at: new Date() }]);

    if (error) throw error;
    
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};
```

## 💼 Project Showcase

The projects section is populated dynamically from a JavaScript array:

```javascript
const projects = [
    {
        title: "Guesssing Game App",
        description: "A Gaming App where you guessed the right number.",
        image: "/asset/img/project_1.png",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://ajayfrizzy.github.io/zuri-guessing-game/",
        github: "https://github.com/Ajayfrizzy/zuri-guessing-game"
    },
    // Additional projects...
];
```

To add a new project, simply add another object to this array in `app.js`.

## 🎨 Customization

### Styling
The main styling is controlled in `asset/css/styles.css`. Key customizable elements include:

- Color scheme (defined as CSS variables)
- Font families and sizes
- Animation speeds and effects
- Section layouts and spacing

### Content
Update the following to personalize the portfolio:

1. Profile images in the `asset/img/` directory
2. Personal information in `index.html`
3. Projects array in `app.js`
4. CV/resume file in `asset/others/`

## ⚡ Performance Optimization

The site implements several performance optimizations:

- Lazy loading for images
- Minified CSS and JavaScript (recommended for production)
- Intersection Observer for efficient animations
- Optimized asset loading

## 🌐 Browser Compatibility

The website is tested and compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## 🐛 Known Issues

- Contact form may require CORS configuration for certain deployment setups
- Animation performance on older mobile devices may vary

## 🚀 Future Improvements

- Add blog section
- Implement dark/light theme toggle
- Add more interactive project demos
- Integrate with additional APIs
- Add language switcher for multilingual support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📬 Contact

Oluwaseun Ajao - [ajayholuwaseun@gmail.com](mailto:ajayholuwaseun@gmail.com)

GitHub: [Ajayfrizzy](https://github.com/Ajayfrizzy)
LinkedIn: [ajayfrizzy](https://www.linkedin.com/in/ajayfrizzy/)
Twitter: [ajay_frizzy](https://www.x.com/ajay_frizzy)
Instagram: [ajay_frizzy](https://www.instagram.com/ajay_frizzy)