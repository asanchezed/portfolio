# Professional Portfolio & Interactive Resume

A modern, high-performance professional portfolio and interactive resume built with **Angular 21**. Designed for developers, featuring multi-language support, theme customization, and advanced print optimization.

## 🚀 Live Demo

[View Live Portfolio](https://asanchezed.github.io/portfolio/)

## ✨ Key Features

- **🌍 Multi-language Support**: Seamlessly switch between **Spanish** and **English**.
- **🌓 Theme System**: Full support for **Dark Mode** and **Light Mode** with smooth transitions.
- **📄 Print-Ready**: Aggressively optimized CSS for printing (Ctrl+P). Generates a clean, professional PDF CV.
- **⏳ Chronological Timeline**: Unified design for both Professional Experience and Education sections.
- **📱 Fully Responsive**: Optimized for all devices, from mobile phones to large desktop monitors.
- **⚡ High Performance**: Built with Angular's latest features for fast loading and smooth animations.
- **🤖 AI-Focused Content**: Highlights specialized experience in AI Agents (LangChain, CrewAI) and AI-powered automation.

## 🛠️ Technologies Used

- **Framework**: Angular 21
- **Styling**: SCSS (Sass) with CSS Variables
- **Animations**: Angular Animations
- **Deployment**: GitHub Pages
- **Icons**: Emoji-based & Custom CSS

## 💻 Local Development

1. **Clone the repository**:

   ```bash
   git clone https://github.com/asanchezed/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm start
   ```
   Navigate to `http://localhost:4200/`.

## 📦 Build & Deployment

### Production Build

To generate a standard production build:

```bash
npm run build:prod
```

### GitHub Pages Deployment

The project is pre-configured for GitHub Pages. To deploy:

```bash
npm run deploy
```

This script will:

1. Compile the app with the correct `base-href`.
2. Create a `404.html` for SPA routing support.
3. Push the `dist` folder to the `gh-pages` branch.

## 📄 License

This project is for personal use as a professional portfolio.
