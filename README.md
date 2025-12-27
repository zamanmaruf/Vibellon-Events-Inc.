# Vibellion Events Inc. Website

Production-ready website for Vibellion Events Inc. - Canada's most trusted business-event engine.

## Tech Stack

- **Next.js 14+** (App Router) with TypeScript
- **TailwindCSS** for styling
- **shadcn/ui** components
- **Prisma ORM** with PostgreSQL (Docker for dev, Postgres for prod)
- **Zod** for form validation
- **Server Actions** for form submissions

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- Docker and Docker Compose (for local database)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
pnpm install
```

3. Copy the environment file:
```bash
cp .env.example .env
```

4. Start the PostgreSQL database with Docker:
```bash
docker-compose up -d
```

5. Update `.env` with your configuration (Docker database URL is already set in .env.example):
```env
DATABASE_URL="postgresql://vibellion:vibellion@localhost:5432/vibellion_events"
PLAUSIBLE_DOMAIN="" # Optional: Add your Plausible domain for analytics
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

6. Set up the database:
```bash
pnpm db:generate
pnpm db:migrate
```

### Development

Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Build the application:
```bash
pnpm build
```

Start the production server:
```bash
pnpm start
```

### Linting

Run ESLint:
```bash
pnpm lint
```

## Database

### Development (Docker + PostgreSQL)

The project uses PostgreSQL in a Docker container for local development.

**Start the database:**
```bash
docker-compose up -d
```

**Stop the database:**
```bash
docker-compose down
```

**Stop and remove all data:**
```bash
docker-compose down -v
```

The database will be available at `localhost:5432` with:
- User: `vibellion`
- Password: `vibellion`
- Database: `vibellion_events`

### Production (PostgreSQL)

For production, update your `DATABASE_URL` in `.env` to point to your PostgreSQL database:

```env
DATABASE_URL="postgresql://user:password@host:5432/database"
```

Then run migrations:
```bash
pnpm db:migrate
```

### Database Schema

- **Subscriber**: Newsletter and membership waitlist subscribers
- **Inquiry**: Corporate, partner, and contact form submissions

### Database Commands

- Generate Prisma Client: `pnpm db:generate`
- Run migrations: `pnpm db:migrate`
- Push schema (dev only): `pnpm db:push`
- Open Prisma Studio: `pnpm db:studio`

### Docker Commands

- Start database: `pnpm docker:up` or `docker-compose up -d`
- Stop database: `pnpm docker:down` or `docker-compose down`
- View logs: `pnpm docker:logs` or `docker-compose logs -f postgres`

## Content Management

Events are stored as JSON files in `/content/events/`. Each event file follows the schema defined in `lib/content/events.ts`.

To add a new event:
1. Create a new JSON file in `/content/events/`
2. Follow the event schema structure
3. The event will automatically appear on the events page

Testimonials are stored in `/content/testimonials.json`.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables:
   - `DATABASE_URL` (PostgreSQL connection string)
   - `PLAUSIBLE_DOMAIN` (optional)
   - `NEXT_PUBLIC_SITE_URL` (your production URL)
   - `RESEND_API_KEY` (optional, for contact form emails - get free API key at https://resend.com)
4. Deploy

Vercel will automatically:
- Install dependencies
- Run `postinstall` script (which runs `prisma generate`)
- Build the application
- Run database migrations (if configured)

**Note:** The `postinstall` script in `package.json` ensures Prisma Client is generated during deployment.

### Database Setup on Vercel

1. Create a PostgreSQL database (e.g., using Vercel Postgres, Neon, or Supabase)
2. Add the connection string to your environment variables
3. Run migrations manually or set up a post-install script

## Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── (pages)/           # Main pages
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Layout components
│   ├── forms/            # Form components
│   ├── events/           # Event-related components
│   └── sections/         # Page sections
├── content/              # Content files (JSON)
│   └── events/           # Event data
├── lib/                  # Utilities and libraries
│   ├── content/          # Content loaders
│   ├── db/               # Database client
│   ├── validations/      # Zod schemas
│   └── utils/            # Utilities
├── actions/              # Server Actions
├── prisma/               # Prisma schema and migrations
└── public/               # Static assets
```

## Features

- ✅ Homepage with hero, differentiators, events preview, testimonials
- ✅ Events index with filtering
- ✅ Event detail pages with full information and JSON-LD
- ✅ Corporate workshops page with inquiry form
- ✅ Membership page with waitlist
- ✅ Partners page with inquiry form
- ✅ About page
- ✅ Contact page
- ✅ Legal pages (Privacy, Terms, Code of Conduct, Refund Policy)
- ✅ Newsletter subscription
- ✅ Form validation with Zod
- ✅ Rate limiting for forms
- ✅ SEO optimized (metadata, sitemap, robots.txt)
- ✅ Analytics integration (Plausible)
- ✅ Responsive design
- ✅ Accessible components

## Environment Variables

- `DATABASE_URL`: Database connection string
- `PLAUSIBLE_DOMAIN`: Plausible analytics domain (optional)
- `NEXT_PUBLIC_SITE_URL`: Your site URL for metadata and sitemaps
- `RESEND_API_KEY`: Resend API key for sending contact form emails (optional - form will log to console in dev if not set)

### Email Setup (Contact Form)

The contact form sends emails to `vibellioneventsinc@gmail.com` using Resend. To enable email sending:

1. Sign up for a free account at [Resend](https://resend.com)
2. Get your API key from the dashboard
3. Add it to your `.env` file: `RESEND_API_KEY="re_xxxxx"`
4. Deploy to Vercel and add the environment variable there

**Note:** If `RESEND_API_KEY` is not set, the form will still work (saving to database) but will log emails to the console instead of sending them. This is useful for development.

## License

Proprietary - Vibellion Events Inc.

