# Raniel Encarnacion - Professional Portfolio Website

A modern, responsive portfolio website showcasing the work and expertise of **Raniel Encarnacion**, a professional web developer. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean, professional interface with smooth animations
- **Contact Form**: Integrated with Formspree for email notifications
- **Interactive Sections**: Hero, About, Skills, Education, Certifications, Major Projects, and Contact
- **Project Gallery**: Interactive modal galleries showcasing system screenshots
- **AI Assistant**: Built-in chatbot for portfolio inquiries
- **Dark/Light Mode**: Theme switching capability
- **Professional Branding**: Custom logo and professional presentation

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Routing**: Wouter (lightweight React router)
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment Ready**: Static site generation

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Building for Production

Create a production build:
```bash
npm run build
```

The build files will be generated in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Contact Form Setup

The contact form is integrated with Formspree. Messages submitted through the form will be sent to the configured email address.

## Deployment

This is a static website that can be deployed to:
- GitHub Pages (configured in this repository)
- Netlify
- Vercel
- Any static hosting service

### GitHub Pages Setup
- Automatic deploys happen on pushes to the `main` branch via `.github/workflows/deploy.yml`
- The site base path is set for Pages: production builds use `/Raniel-Portfolio/`
- Build output is published from `dist/public`

### Local build commands
```bash
npm run build    # build to dist/public
npm run preview  # preview production build
```

## Developer

**Raniel Encarnacion** - Professional Web Developer
- Email: lumawigraniel@gmail.com
- GitHub: [@ranielencarnacion](https://github.com/ranielencarnacion)
- LinkedIn: [Raniel Encarnacion](https://linkedin.com/in/encarnacion-raniel-b78416263)

## License

MIT License
