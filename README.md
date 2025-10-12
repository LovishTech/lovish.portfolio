# Lovish Batra - Machine Learning Engineer Portfolio

A modern, professional portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Shadcn UI. Features a clean, minimal design with light/dark mode support and fully responsive layout.

## Features

- **Modern Tech Stack**: Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS v4
- **Light/Dark Mode**: Seamless theme switching with custom theme provider
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Professional Design**: Clean, minimal aesthetic with subtle animations
- **Sections**:
  - Hero with call-to-action buttons
  - About Me with education and experience highlights
  - Skills & Technologies organized by category
  - Projects showcase (Spam Email Detection)
  - Contact form with social media links
  - Footer with copyright and social links

## Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## Prerequisites

Before running this project, make sure you have:

- **Node.js** 18.17 or later installed
- **npm**, **yarn**, **pnpm**, or **bun** package manager

## Installation & Setup

### Option 1: Using the Shadcn CLI (Recommended)

1. **Download the project** from v0 by clicking the three dots → "Download ZIP"

2. **Extract the ZIP file** to your desired location

3. **Open the project in VS Code**:
   \`\`\`bash
   cd path/to/lovish-portfolio
   code .
   \`\`\`

4. **Install dependencies** using the Shadcn CLI:
   \`\`\`bash
   npx shadcn@latest init
   \`\`\`
   Follow the prompts to set up the project.

5. **Run the development server**:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   \`\`\`

6. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

### Option 2: Manual Installation

1. **Download and extract** the project ZIP file

2. **Open terminal in VS Code** (Terminal → New Terminal)

3. **Install dependencies**:
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   \`\`\`

4. **Run the development server**:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   \`\`\`

5. **View your portfolio** at [http://localhost:3000](http://localhost:3000)

## Running in VS Code

### Step-by-Step Guide:

1. **Open VS Code** and select "File → Open Folder"
2. **Navigate** to your portfolio folder and click "Open"
3. **Open the integrated terminal** (View → Terminal or `` Ctrl+` ``)
4. **Install dependencies** (if not already done):
   \`\`\`bash
   npm install
   \`\`\`
5. **Start the development server**:
   \`\`\`bash
   npm run dev
   \`\`\`
6. **Click the localhost link** in the terminal or open [http://localhost:3000](http://localhost:3000) in your browser

### Useful VS Code Commands:

- **Stop the server**: Press `Ctrl+C` in the terminal
- **Restart the server**: Stop it, then run `npm run dev` again
- **Open in browser**: `Ctrl+Click` on the localhost URL in the terminal

## Build for Production

To create an optimized production build:

\`\`\`bash
npm run build
npm run start
\`\`\`

This will build your portfolio and start a production server.

## Project Structure

\`\`\`
lovish-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and theme colors
├── components/
│   ├── navbar.tsx          # Navigation bar with theme toggle
│   ├── hero.tsx            # Hero section
│   ├── about.tsx           # About Me section
│   ├── skills.tsx          # Skills & Technologies section
│   ├── projects.tsx        # Projects showcase
│   ├── contact.tsx         # Contact form and social links
│   ├── footer.tsx          # Footer with copyright
│   ├── theme-provider.tsx  # Custom theme provider
│   └── ui/                 # Shadcn UI components
├── public/                 # Static assets (images)
└── README.md              # This file
\`\`\`

## Customization Guide

### Update Personal Information

1. **Hero Section** (`components/hero.tsx`):
   - Change name, title, and description
   - Update button links

2. **About Section** (`components/about.tsx`):
   - Replace bio text
   - Update education and experience
   - Add your profile photo to `/public/` folder
   - Update the image path in the component

3. **Skills Section** (`components/skills.tsx`):
   - Add or remove skills
   - Modify skill categories

4. **Projects Section** (`components/projects.tsx`):
   - Add your project details
   - Update project images in `/public/` folder
   - Add GitHub and live demo links

5. **Contact Section** (`components/contact.tsx`):
   - Update social media links (GitHub, LinkedIn, Twitter, Email)

6. **Footer** (`components/footer.tsx`):
   - Update copyright year if needed
   - Modify social links

### Change Colors

Edit `app/globals.css` to customize the color scheme:

\`\`\`css
@theme inline {
  /* Light mode colors */
  --color-primary: oklch(0.45 0.25 220);
  --color-accent: oklch(0.5 0.2 200);
  
  /* Dark mode colors */
  .dark {
    --color-primary: oklch(0.7 0.2 200);
    --color-accent: oklch(0.75 0.18 190);
  }
}
\`\`\`

## Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
2. **Go to [vercel.com](https://vercel.com)**
3. **Import your GitHub repository**
4. **Deploy** - Vercel will automatically detect Next.js and configure everything

### Deploy from v0

Click the "Publish" button in the top right of v0 to deploy directly to Vercel.

## Troubleshooting

### Port already in use
If port 3000 is already in use, you can specify a different port:
\`\`\`bash
npm run dev -- -p 3001
\`\`\`

### Dependencies not installing
Try clearing the cache and reinstalling:
\`\`\`bash
rm -rf node_modules package-lock.json
npm install
\`\`\`

### Theme not working
Make sure the ThemeProvider is properly wrapping your app in `app/layout.tsx`.

## Support

If you encounter any issues or have questions:
- Check the [Next.js Documentation](https://nextjs.org/docs)
- Visit [Shadcn UI Documentation](https://ui.shadcn.com)
- Review [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

© 2025 Lovish Batra. All rights reserved.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
