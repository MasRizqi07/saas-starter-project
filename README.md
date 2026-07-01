# SaaS Starter Kit

A production-ready SaaS application built with modern technologies, featuring a beautiful animated UI, comprehensive authentication, payment integration, and a scalable architecture.

## 🚀 Quick Start

```bash
# Clone and install
git clone <your-repo-url>
cd saas-starter
npm install

# Setup environment
cp env.example .env.local
# Edit .env.local with your credentials

# Setup database
npx prisma migrate dev
npx prisma generate

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🎯 Features

### Core Functionality
- **Authentication System**
  - Email/password authentication via Supabase
  - Google OAuth integration
  - Protected routes with middleware
  - Session management

- **Dashboard**
  - Analytics overview with charts
  - Real-time data visualization
  - Responsive sidebar navigation
  - User profile management

- **Project Management**
  - Create, edit, and delete projects
  - Project analytics and metrics
  - Team collaboration features
  - Project-based access control

- **Billing & Subscriptions**
  - Stripe integration for payments
  - Subscription tier management
  - Usage-based billing
  - Invoice generation
  - Payment history

### UI/UX Features
- **Animated Components**
  - Smooth page transitions
  - Animated modals and dialogs
  - Interactive buttons with hover effects
  - Loading skeletons and spinners
  - Toast notifications

- **Design System**
  - shadcn/ui component library
  - Custom design tokens
  - Dark mode support
  - Responsive design
  - Accessibility-first approach

- **Performance**
  - Optimized bundle size
  - Lazy loading
  - Image optimization
  - Server-side rendering
  - Edge caching

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 16.2.9 (App Router)
- **UI Library**: React 19.2.4
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion 12.42.0
- **Icons**: Lucide React 1.22.0

### Backend & Database
- **Database**: PostgreSQL (via Supabase)
- **ORM**: Prisma 7.8.0
- **Authentication**: Supabase Auth
- **API**: Next.js API Routes
- **Payments**: Stripe 22.3.0

### Development Tools
- **Package Manager**: npm
- **Linting**: ESLint 9
- **Type Checking**: TypeScript
- **Deployment**: Vercel (optimized)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following:

- Node.js 18+ installed
- A Supabase account (free tier works)
- A Stripe account (test mode for development)
- Git installed

### Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd saas-starter
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

```bash
cp env.example .env.local
```

Edit `.env.local` with your credentials:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# Stripe
STRIPE_SECRET_KEY=sk_test_your-stripe-secret-key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your-stripe-publishable-key
STRIPE_WEBHOOK_SECRET=whsec_your-webhook-secret

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/saas-db

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. Set up the database

```bash
npx prisma migrate dev
npx prisma generate
```

5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
saas-starter/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── dashboard/            # Dashboard routes
│   │   │   ├── page.tsx          # Dashboard home
│   │   │   ├── projects/         # Project management
│   │   │   ├── billing/          # Billing & subscriptions
│   │   │   └── settings/         # User settings
│   │   ├── auth/                 # Authentication callbacks
│   │   ├── login/                # Login page
│   │   ├── signup/               # Signup page
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Landing page
│   │   └── globals.css           # Global styles
│   ├── components/               # React components
│   │   ├── ui/                   # shadcn/ui components
│   │   ├── animated-modal.tsx    # Animated modal component
│   │   ├── dashboard-sidebar.tsx # Sidebar navigation
│   │   ├── dashboard-header.tsx  # Header component
│   │   ├── animated-button.tsx   # Animated button
│   │   ├── animated-card.tsx     # Animated card
│   │   ├── animated-input.tsx    # Animated input
│   │   ├── animated-avatar.tsx   # Animated avatar
│   │   ├── animated-badge.tsx    # Animated badge
│   │   ├── loading-spinner.tsx   # Loading spinner
│   │   ├── skeleton-card.tsx     # Skeleton loader
│   │   ├── toast.tsx              # Toast notifications
│   │   ├── page-transition.tsx   # Page transitions
│   │   └── analytics-provider.tsx # Analytics wrapper
│   ├── lib/                      # Utility libraries
│   │   ├── supabase/             # Supabase clients
│   │   │   ├── client.ts         # Client-side Supabase
│   │   │   ├── server.ts         # Server-side Supabase
│   │   │   └── middleware.ts     # Supabase middleware
│   │   ├── prisma.ts             # Prisma client
│   │   ├── stripe.ts             # Stripe client
│   │   ├── analytics.ts          # Analytics utilities
│   │   └── utils.ts              # Utility functions
│   └── middleware.ts             # Next.js middleware
├── prisma/
│   ├── schema.prisma             # Database schema
│   └── seed.ts                   # Database seed
├── public/                       # Static assets
├── components.json               # shadcn/ui config
├── tailwind.config.ts            # Tailwind config
├── tsconfig.json                 # TypeScript config
├── next.config.ts                # Next.js config
└── vercel.json                   # Vercel deployment config
```

## Database Schema

The application uses PostgreSQL with Prisma ORM. Key models include:

- **User**: User accounts with authentication
- **Subscription**: Stripe subscription management
- **Project**: User projects with analytics

See `prisma/schema.prisma` for the complete schema.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy

The `vercel.json` file is pre-configured for optimal deployment with:

- Automatic edge caching
- Image optimization
- API route optimization
- Environment variable management

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key | Yes |
| `STRIPE_SECRET_KEY` | Your Stripe secret key | Yes |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Your Stripe publishable key | Yes |
| `STRIPE_WEBHOOK_SECRET` | Your Stripe webhook secret | Yes |
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `NEXT_PUBLIC_APP_URL` | Your application URL | Yes |

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Development

### Adding New Components

Use shadcn/ui CLI to add new components:

```bash
npx shadcn@latest add [component-name]
```

### Database Migrations

Create and apply migrations:

```bash
npx prisma migrate dev --name [migration-name]
```

### Type Safety

The project is fully typed with TypeScript. Run type checking:

```bash
npx tsc --noEmit
```

## Performance Optimization

- Server-side rendering for SEO and performance
- Edge caching for static content
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Bundle size optimization

## Security

- Environment variable protection
- SQL injection prevention via Prisma
- XSS protection via React
- CSRF protection via Next.js
- Secure authentication via Supabase
- Payment security via Stripe

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

MIT License - feel free to use this project for your own SaaS applications.

## Support

For issues and questions, please open an issue on GitHub.
