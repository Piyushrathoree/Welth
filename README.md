# An AI - finance management application which allow users to manage their finances

<video width="1370" controls>
    <source src="https://github.com/Piyushrathoree/Welth/raw/main/public/video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>


### Make sure to create a `.env` file with following variables -

```
DATABASE_URL=
DIRECT_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=

RESEND_API_KEY=

ARCJET_KEY=
```

# Welth-ai-finance-app

## Features

-   AI-powered financial insights and recommendations
-   Manage accounts, budgets, and transactions
-   Receipt scanning and transaction import
-   Secure authentication (Clerk)
-   Email notifications (Resend)
-   Modern, responsive UI (Next.js, Tailwind CSS)

## Tech Stack

-   Next.js 14 (App Router)
-   React 18
-   Tailwind CSS
-   Prisma ORM & PostgreSQL
-   Clerk (Authentication)
-   Resend (Email)
-   Gemini API (AI)
-   Arcjet (Security)

## Getting Started

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Piyushrathoree/Welth-ai-finance-app.git
    cd Welth-ai-finance-app
    ```
2. **Install dependencies:**
    ```bash
    pnpm install
    ```
3. **Set up your `.env` file:**
   Copy the example above and fill in your credentials.
4. **Run database migrations:**
    ```bash
    pnpm prisma migrate dev
    ```
5. **Start the development server:**
    ```bash
    pnpm dev
    ```
6. **Visit** `http://localhost:3000` **in your browser.**

## Folder Structure

```
actions/         # Server actions (API logic)
app/             # Next.js app directory (routes, pages, layouts)
components/      # Reusable UI components
data/            # Static data files
emails/          # Email templates
hooks/           # Custom React hooks
lib/             # Utilities, Prisma, and integrations
prisma/          # Prisma schema and migrations
public/          # Static assets
```

## License

This project is licensed under the MIT License.
