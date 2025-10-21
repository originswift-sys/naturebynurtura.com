# Nature by Nurtura

**Potent. Precise. Pure. Wellness is earned, not marketed.**

A premium herbal wellness e-commerce website built with Next.js, featuring elegant animations, responsive design, and a modern UI.

![Nature by Nurtura](./public/logo%207.png)

## 🌿 About

Nature by Nurtura offers premium herbal wellness products crafted with intention. We believe true wellness begins within, in the balance between body, mind, and spirit. Every capsule we create is a return to nature's wisdom: potent herbs, clean formulations, and purposeful healing.

## 🚀 Tech Stack

- **Framework:** Next.js 15.2.4 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI + shadcn/ui
- **Animations:** Framer Motion
- **Package Manager:** pnpm
- **Fonts:** Playfair Display (headings), DM Sans (body)

## 📦 Installation

### Prerequisites

- Node.js 18+ installed
- pnpm installed (or npm/yarn)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd nature
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```
   
   Or using npm:
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```
   
   Or using npm:
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment

### Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js application.

#### Method 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Build Settings**
   - Framework Preset: `Next.js`
   - Build Command: `pnpm run build`
   - Output Directory: `.next`
   - Install Command: `pnpm install`

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in 1-2 minutes!

#### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   For production:
   ```bash
   vercel --prod
   ```

### Deploy to Netlify

1. **Build the project**
   ```bash
   pnpm run build
   ```

2. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

4. **Or use Netlify Dashboard**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Build settings:
     - Build command: `pnpm run build`
     - Publish directory: `.next`

### Deploy to Other Platforms

#### Cloudflare Pages
1. Push code to GitHub
2. Go to Cloudflare Pages dashboard
3. Connect repository
4. Set build command: `pnpm run build`
5. Set build output: `.next`

#### Railway
1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub"
3. Select your repository
4. Railway auto-detects Next.js
5. Deploy!

## 🔧 Build Commands

```bash
# Development
pnpm dev

# Build for production
pnpm run build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## 📁 Project Structure

```
nature/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── products/          # Products page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── hero.tsx          # Hero section
│   ├── navigation.tsx    # Navigation bar
│   ├── featured-products.tsx
│   ├── products-grid.tsx
│   ├── philosophy.tsx
│   ├── about-content.tsx
│   ├── contact-form.tsx
│   ├── footer.tsx
│   ├── testimonial.tsx
│   └── preloader.tsx
├── public/               # Static assets
│   ├── logo 7.png       # Brand logo
│   ├── p1.jpg - p8.jpg  # Hero carousel images
│   └── products/        # Product images
├── lib/                 # Utility functions
├── package.json         # Dependencies
└── pnpm-lock.yaml      # Lock file
```

## ⚠️ Common Deployment Issues

### Issue: `ERR_PNPM_OUTDATED_LOCKFILE`

**Solution:** Update your lockfile before pushing
```bash
pnpm install
git add pnpm-lock.yaml
git commit -m "Update lockfile"
git push
```

### Issue: Module not found errors

**Solution:** Ensure all dependencies are in `package.json`
```bash
pnpm install
pnpm run build  # Test locally first
```

### Issue: Build fails on Vercel

**Solution:** Check these settings in Vercel dashboard:
- Framework Preset: `Next.js`
- Node Version: `18.x` or higher
- Install Command: `pnpm install`
- Build Command: `pnpm run build`

## 🔐 Environment Variables

This project currently doesn't require environment variables. If you add any in the future:

1. Create `.env.local` file
2. Add variables:
   ```
   NEXT_PUBLIC_API_URL=your_api_url
   ```
3. Add to Vercel/Netlify dashboard under "Environment Variables"

## 📝 License

© 2024 Nature by Nurtura. All rights reserved.

