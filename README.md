This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


Once you make these swaps, switching the entire site from the current dark gold theme to — say — a light cream theme with navy accents means editing only these lines in globals.css, nothing else:

--page-bg:        #faf8f4;   /* was var(--black) */
--page-text:      #1a1a2e;   /* was var(--cream) */
--card-bg:        #ffffff;   /* was var(--charcoal) */
--section-bg:     #faf8f4;   /* was var(--black) */
--section-alt-bg: #f0ebe0;   /* was var(--charcoal) */
--gold:           #c9a84c;   /* adjust accent to taste */

┌─────────────────────────────────────────────────────────────┐
│                     NEXT.JS 14 (Frontend)                   │
│  • UI Components  • Redux Toolkit  • Middleware (route guard)│
│  • No direct Supabase calls — only talks to Node API        │
└───────────────────────────┬─────────────────────────────────┘
                            │  HTTP / REST (JWT in headers)
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                   NODE.JS API (Middle Layer)                 │
│  • Express.js  • Auth routes  • JWT verification middleware  │
│  • Business logic  • Role checks  • Supabase Admin SDK      │
└───────────────────────────┬─────────────────────────────────┘
                            │  Supabase Admin Client
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                      SUPABASE                               │
│  • Auth service  • PostgreSQL  • RLS policies               │
└─────────────────────────────────────────────────────────────┘
 Token Flow Architecture
LOGIN REQUEST FLOW:
──────────────────
Next.js (form submit)
    │
    ▼ POST /api/auth/login  {email, password}
Node.js
    │── validates input
    │── calls Supabase Auth
    │── gets back { access_token, refresh_token, user }
    │── returns tokens to Next.js
    ▼
Next.js
    │── stores access_token in httpOnly cookie (via API response)
    │── stores user in Redux
    │
    ▼ Subsequent API calls → Authorization: Bearer <access_token>
Node.js
    │── verifyToken middleware intercepts
    │── verifies JWT with Supabase secret
    │── attaches user to req.user
    ▼
    Route handler executes with authenticated context