# Faisal Khrisan - Portfolio Website

A modern, responsive portfolio website combining the best design elements from professional portfolios with personal information and an AI-powered chat assistant.

## 🌟 Features

- **Modern Design**: Clean, professional layout with glassmorphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Sections**:
  - Hero section with social media links
  - About section with personal information
  - Projects showcase with filtering
  - Skills section with tabbed interface
  - Timeline of career milestones
  - Contact section
- **AI Chat Assistant**: Powered by Google Gemini API for answering questions about the portfolio
- **Smooth Animations**: Intersection Observer animations and hover effects
- **Dark Theme**: Professional dark theme with teal accent color (#64ffda)

## 🚀 Live Demo

**[View Live Portfolio](https://same-9zujtpdjbio-latest.netlify.app)**

## 🛠️ Built With

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons
- **Google Gemini API** - AI chat functionality

## 📋 Prerequisites

- Node.js 18+ or Bun
- Google Gemini API key (for chat functionality)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd faisal-portfolio
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Add your Google Gemini API key to `.env`:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the development server**
   ```bash
   bun run dev
   # or
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔑 Getting a Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key and add it to your `.env` file

## 🎨 Customization

### Personal Information

Update the following in `src/App.tsx`:

- **Personal details**: Name, bio, contact information
- **Projects**: Update the `projectsData` array with your projects
- **Skills**: Modify the `skillsByCategory` object with your skills
- **Timeline**: Update the `timelineData` array with your career milestones
- **Social links**: Update all social media URLs

### Styling

- **Colors**: Modify the color scheme in `src/index.css`
- **Fonts**: Update Google Fonts import in `src/index.css`
- **Animations**: Customize animations and transitions

### Content

- **About section**: Update the personal description
- **Project descriptions**: Modify project details and links
- **Contact information**: Update email, phone, and social media links

## 📁 Project Structure

```
faisal-portfolio/
├── src/
│   ├── App.tsx          # Main application component
│   ├── index.css        # Global styles and custom CSS
│   ├── main.tsx         # Application entry point
│   └── vite-env.d.ts    # Vite type definitions
├── public/              # Static assets
├── .env.example         # Environment variables template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.ts       # Vite configuration
└── README.md           # This file
```

## 🚀 Deployment

### Build for Production

```bash
bun run build
# or
npm run build
```

### Deploy to Netlify

1. Build the project
2. Deploy the `dist` folder to Netlify
3. Set environment variables in Netlify dashboard:
   - `VITE_GEMINI_API_KEY`: Your Google Gemini API key

### Deploy to Vercel

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

## 🔧 Development

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run lint` - Run ESLint

### Code Quality

The project uses:
- **Biome** for linting and formatting
- **TypeScript** for type checking
- **Tailwind CSS** for consistent styling

## 🤖 AI Chat Feature

The AI chat assistant is powered by Google Gemini and can answer questions about:
- Projects and technical details
- Skills and experience
- Contact information
- Career timeline

The assistant is trained on the portfolio content and provides contextual responses.

## 📱 Mobile Responsive

The portfolio is fully responsive with:
- Mobile-first design approach
- Collapsible navigation menu
- Touch-friendly interactions
- Optimized layout for all screen sizes

## 🎯 SEO & Performance

- Semantic HTML structure
- Optimized images and assets
- Fast loading times with Vite
- Accessible design patterns

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 💬 Contact

- **Email**: faisalkhrisan@gmail.com
- **LinkedIn**: [faisal-khrisan](https://www.linkedin.com/in/faisal-khrisan-834280287/)
- **GitHub**: [faisal-khrisan](https://github.com/faisal-khrisan)

---

Made with ❤️ by Faisal Khrisan
