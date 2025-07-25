SaaS Messenger ChatGPT Frontend



A modern, production-ready Next.js (TypeScript, Tailwind, React Query) web frontend for your SaaS Messenger ChatGPT platform.

Features



&nbsp;   Login/auth with JWT (localStorage)



&nbsp;   Role-based dashboards: Superadmin, Company Admin, User



&nbsp;   Company/user/conversation management



&nbsp;   User invite flow



&nbsp;   Facebook Messenger account connect instructions



&nbsp;   React Query for API state and cache



&nbsp;   Side navigation, custom logo/avatar, brandable



&nbsp;   Error handling, loading states, 404



Prerequisites



&nbsp;   Node.js v18+ and npm



&nbsp;   Backend running and accessible (see backend/README.md)



Environment Variables



Copy and edit:



cp .env.local.example .env.local



Sample .env.local:



NEXT\_PUBLIC\_API\_URL=http://localhost:4000/api

NEXT\_PUBLIC\_FACEBOOK\_VERIFY\_TOKEN=your\_fb\_verify\_token

Install \& Run Locally



npm install

npm run dev



The frontend will be at http://localhost:3000

Production Build \& Deploy



&nbsp;   Build static assets:

&nbsp;   npm run build

&nbsp;   npm run start



&nbsp;   Set environment variables:



&nbsp;       Edit .env.local for production API endpoint and FB token.



&nbsp;   Deploy:



&nbsp;       Vercel (recommended): Just push to your Vercel-connected GitHub repo.



&nbsp;       Or, deploy anywhere supporting Next.js (Node, Docker, etc).



Customization



&nbsp;   Branding: Replace /public/logo.png and /public/avatar.png with your assets.



&nbsp;   Sidebar: Edit components/SidebarLayout.tsx for navigation or theme.



&nbsp;   Env: Update .env.local to match your deployment.



Developer Tools



&nbsp;   React Query Devtools: Toggle at bottom-right for API/debugging.



Notes



&nbsp;   All API calls require a valid JWT in localStorage. Login required for all dashboard pages.



&nbsp;   Messenger Connect UI gives all info needed for FB App webhook.



&nbsp;   User invite just creates a user with random password for now (integrate email as needed).



&nbsp;   Error and loading states are included for all major flows.



Contributing



Open a PR or issue for feedback and improvements!

Contact



Questions? Contact your dev lead or frontend maintainer.



