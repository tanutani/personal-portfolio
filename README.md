# Personal Portfolio - Tanish Chaudhary

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🎨 Features

- ⚡ **Performance Optimized** - Next.js 14 with server components
- 📱 **Fully Responsive** - Mobile-first design
- 🎯 **Modern Dark Theme** - Professional color palette
- ✨ **Smooth Animations** - CSS-based transitions
- 🗂️ **Component Architecture** - Reusable, maintainable code
- 📊 **Multiple Sections** - Resume, Projects, Portfolio Showcase
- 💾 **Data-Driven** - Content in JSON files

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git installed

### Installation

1. **Navigate to project directory**
   ```bash
   cd portfolio-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`

## 📁 Project Structure

```
portfolio-site/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Main homepage
│   └── globals.css          # Global styles
├── components/
│   ├── Hero.tsx             # Hero section
│   ├── TabNav.tsx           # Tab navigation
│   ├── Footer.tsx           # Footer
│   ├── ProjectCard.tsx      # Reusable card
│   └── tabs/                # Tab content components
├── data/
│   ├── site-config.json     # Site metadata
│   ├── academic-projects.json
│   ├── live-projects.json
│   └── portfolio-showcase.json
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## 🎨 Customization

### Update Your Information

Edit JSON files in `data/` folder:

- **site-config.json** - Name, email, social links
- **academic-projects.json** - Academic projects
- **live-projects.json** - Live deployed projects
- **portfolio-showcase.json** - Portfolio items by category

### Customize Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --color-primary-dark: #1b3c53;
  --color-primary-main: #234c6a;
  --color-primary-light: #456882;
  --color-accent: #d2c1b6;
}
```

### Add Your Avatar

Replace placeholder in `components/Hero.tsx` with your actual image.

## 🔧 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📦 Deployment Options

### Vercel (Recommended)

1. Push to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import repository
4. Deploy

### Other Platforms

- Netlify
- GitHub Pages
- Self-hosted servers

## 🌐 GitHub Setup

### Create Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `personal-portfolio`
3. Click "Create repository"

### Push to GitHub

```bash
git add .
git commit -m "Initial commit: Portfolio scaffold"
git remote add origin https://github.com/YOUR_USERNAME/personal-portfolio.git
git branch -M main
git push -u origin main
```

## 📋 Available Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 💡 Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS Variables
- **Fonts:** Playfair Display, Poppins

## 🚀 Next Steps

1. Replace placeholder avatar in Hero section
2. Update data JSON files with your actual content
3. Customize colors and fonts as desired
4. Push to GitHub
5. Deploy to Vercel or preferred platform

## 📝 License

MIT License - Feel free to use this template

## 🤝 Support

For questions or issues, refer to:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)

---

Built with ❤️ for Tanish Chaudhary
