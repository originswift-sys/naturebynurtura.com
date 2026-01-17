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
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Dynamic sitemap generation
│   ├── robots.ts          # Robots.txt generation
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
│   ├── preloader.tsx
│   ├── google-analytics.tsx  # GA4 integration
│   └── structured-data.tsx   # JSON-LD schema markup
├── contexts/             # React contexts
│   └── cart-context.tsx  # Shopping cart state
├── lib/                  # Utility functions
│   ├── utils.ts         # Utility functions
│   └── constants.ts     # Site constants
├── public/               # Static assets
│   ├── logo 7.png       # Brand logo
│   ├── p1.jpg - p8.jpg  # Hero carousel images
│   └── products/        # Product images
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

This project requires the following environment variables for full functionality:

1. **Create `.env.local` file** in the root directory
2. **Add the following variables:**

```bash
# Site Configuration (required for SEO)
NEXT_PUBLIC_SITE_URL=https://naturebynurtura.com

# WhatsApp Business Number (required for checkout)
# Format: Country code + number (e.g., 233XXXXXXXXX for Ghana)
# Example: 233241234567
NEXT_PUBLIC_WHATSAPP_NUMBER=233000000000

# Google Analytics 4 (optional but recommended)
# Get your Measurement ID from: https://analytics.google.com/
# Format: G-XXXXXXXXXX
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

3. **For production deployment**, add these to your hosting platform:
   - **Vercel**: Go to Project Settings → Environment Variables
   - **Netlify**: Go to Site Settings → Build & Deploy → Environment
   - **Other platforms**: Add in their respective environment variable settings

### Setting Up WhatsApp Number

1. Get your WhatsApp Business number (format: country code + number)
2. For Ghana: `233XXXXXXXXX` (e.g., `233241234567`)
3. For Nigeria: `234XXXXXXXXXX` (e.g., `2348123456789`)
4. Add it to your `.env.local` file as `NEXT_PUBLIC_WHATSAPP_NUMBER`
5. **Important**: Remove any spaces, dashes, or special characters (only numbers)

### Getting Your Google Analytics ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property or select an existing one
3. Go to Admin → Data Streams
4. Click on your web stream
5. Copy your Measurement ID (starts with `G-`)
6. Add it to your `.env.local` file as `NEXT_PUBLIC_GA_MEASUREMENT_ID`

## 🔍 SEO Features

This project includes comprehensive SEO optimization:

- ✅ **Meta Tags**: Title, description, keywords for all pages
- ✅ **Open Graph Tags**: Rich social media previews
- ✅ **Twitter Cards**: Optimized Twitter sharing
- ✅ **Structured Data (JSON-LD)**: Organization and website schema
- ✅ **Sitemap**: Auto-generated XML sitemap (`/sitemap.xml`)
- ✅ **Robots.txt**: Search engine crawling directives (`/robots.txt`)
- ✅ **Canonical URLs**: Prevents duplicate content issues
- ✅ **Semantic HTML**: Proper heading hierarchy and structure

### SEO Best Practices Implemented

1. **Page-Specific Metadata**: Each page has unique, descriptive titles and descriptions
2. **Structured Data**: Schema.org markup for better search engine understanding
3. **Mobile-First**: Responsive design with proper viewport settings
4. **Fast Loading**: Optimized images and code splitting
5. **Accessibility**: Semantic HTML and ARIA labels where needed

## 📊 Analytics

### Google Analytics 4 (GA4)

The site includes Google Analytics 4 integration for tracking:

- Page views
- User interactions
- Conversion tracking
- Custom events

**Setup:**
1. Get your GA4 Measurement ID from [Google Analytics](https://analytics.google.com/)
2. Add it to `.env.local` as `NEXT_PUBLIC_GA_MEASUREMENT_ID`
3. The analytics will automatically start tracking

### Vercel Analytics

Vercel Analytics is also included for additional performance insights (automatically enabled on Vercel deployments).

## 📝 License

© 2024 Nature by Nurtura. All rights reserved.

