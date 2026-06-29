# SaaS Starter Kit

A production-ready SaaS application built with Next.js, Supabase, Stripe, and Prisma.

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL (Supabase)
- **Authentication**: Supabase Auth
- **Payments**: Stripe
- **Deployment**: Vercel

## Features

- User authentication (email/password + Google OAuth)
- Dashboard with analytics
- Project management
- Subscription management with Stripe
- Responsive design
- Type-safe with TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Supabase account
- Stripe account
- PostgreSQL database

### Installation

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Copy the environment variables template:

```bash
cp env.example .env.local
```

3. Configure your environment variables in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
STRIPE_SECRET_KEY=your-stripe-secret-key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
DATABASE_URL=postgresql://user:password@localhost:5432/saas-db
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. Set up the database:

```bash
npx prisma migrate dev
```

5. Generate Prisma client:

```bash
npx prisma generate
```

6. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── dashboard/          # Dashboard pages
│   ├── login/              # Login page
│   ├── signup/             # Signup page
│   └── auth/               # Auth callbacks
├── components/             # React components
│   ├── ui/                 # UI components
│   ├── dashboard-sidebar.tsx
│   └── dashboard-header.tsx
├── lib/                    # Utility libraries
│   ├── supabase/           # Supabase client
│   ├── stripe.ts           # Stripe client
│   ├── prisma.ts           # Prisma client
│   └── utils.ts            # Utility functions
└── middleware.ts           # Next.js middleware
```

## Deployment

### Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy

The `vercel.json` file is pre-configured for optimal deployment.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key | Yes |
| `STRIPE_SECRET_KEY` | Your Stripe secret key | Yes |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Your Stripe publishable key | Yes |
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `NEXT_PUBLIC_APP_URL` | Your application URL | Yes |

## License

MIT
