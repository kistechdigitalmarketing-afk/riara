# Riara Schools Website - Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SITE_URL=https://riaraschools.ac.ke
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   NEXT_PUBLIC_CONTACT_EMAIL=contact@riaraschools.ac.ke
   NEXT_PUBLIC_GA_ID=your_google_analytics_id
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
/
├── app/                    # Next.js 14 App Router
│   ├── (routes)/          # Page routes
│   │   ├── about/         # About Us page
│   │   ├── academics/     # Academics page
│   │   ├── admissions/    # Admissions page
│   │   ├── life/          # Life at Riara page
│   │   ├── news/          # News & Events page
│   │   └── contact/       # Contact page
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── loading.tsx        # Loading state
│   ├── error.tsx          # Error boundary
│   ├── not-found.tsx      # 404 page
│   ├── robots.ts          # SEO robots.txt
│   └── sitemap.ts         # SEO sitemap.xml
├── components/            # Reusable components
│   ├── layout/           # Layout components (Header, Footer, Navigation)
│   ├── sections/         # Page sections (Hero, Stats, Testimonials, Gallery)
│   ├── ui/               # UI components (Button, Card)
│   └── forms/            # Form components (ContactForm)
├── lib/                  # Utility functions and data
│   ├── utils.ts          # Utility functions
│   └── data.ts           # Placeholder data
└── public/               # Static assets
    ├── images/           # Images directory
    └── documents/        # Documents directory
```

## Features Implemented

✅ **Pages**
- Home page with all required sections
- About Us page (history, mission, vision, leadership, facilities)
- Academics page (curriculum, programs, calendar, achievements)
- Admissions page (process, fees, FAQs, application form)
- Life at Riara page (activities, welfare, boarding, uniform, schedule)
- News & Events page (blog listing, calendar, galleries)
- Contact page (form, map, contact info)

✅ **Components**
- Responsive navigation with mobile menu
- Footer with links and social media
- Reusable card components
- Image gallery with lightbox
- Testimonial carousel
- Statistics counter with animation
- Contact form with validation
- Loading and error states

✅ **Features**
- Smooth scroll animations (Framer Motion)
- Image optimization (next/image)
- SEO optimization (metadata, robots.txt, sitemap.xml)
- Google Maps integration
- Contact form API endpoint
- Mobile-responsive design
- Accessibility (WCAG 2.1 AA compliant)

## Next Steps

### 1. Replace Placeholder Content
- Update `lib/data.ts` with actual school information
- Replace Unsplash placeholder images with actual school photos
- Add real news articles, events, and testimonials

### 2. Integrate Email Service
The contact form API route (`app/api/contact/route.ts`) currently logs submissions. 
Integrate with an email service:

**Option A: Resend**
```bash
npm install resend
```

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: process.env.FROM_EMAIL,
  to: process.env.CONTACT_EMAIL,
  subject: `Contact Form: ${validatedData.subject}`,
  html: `...`,
});
```

**Option B: SendGrid**
```bash
npm install @sendgrid/mail
```

```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

await sgMail.send({
  to: process.env.CONTACT_EMAIL,
  from: process.env.FROM_EMAIL,
  subject: `Contact Form: ${validatedData.subject}`,
  html: `...`,
});
```

### 3. Add Documents
Add the following PDFs to `public/documents/`:
- `application-form.pdf`
- `fee-structure.pdf`
- `prospectus.pdf`
- `academic-calendar.pdf`

### 4. Customize Google Maps
Update the Google Maps embed in `app/contact/page.tsx` with your actual school location coordinates.

### 5. Add Real Images
Replace Unsplash placeholder images with actual school photos:
- Gallery images: `public/images/gallery/`
- News images: `public/images/news/`
- Leadership photos: `public/images/leadership/`
- Facility photos: `public/images/facilities/`
- Testimonial photos: `public/images/testimonials/`

### 6. Deploy
Deploy to your preferred hosting platform:

**Vercel (Recommended)**
```bash
npm install -g vercel
vercel
```

**Other Options**
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  primary: { /* your colors */ },
  secondary: { /* your colors */ },
}
```

### Fonts
Update fonts in `app/layout.tsx` and `tailwind.config.ts`

### Content
All placeholder content is in `lib/data.ts` - update with your actual data.

## Support

For issues or questions, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)


