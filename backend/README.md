SaaS Messenger ChatGPT Backend



A multi-tenant, production-ready backend for a SaaS platform integrating Facebook Messenger and ChatGPT, built with NestJS, Prisma, and PostgreSQL.

Features



&nbsp;   Multi-tenancy (companies, users, roles)



&nbsp;   Facebook Messenger integration (webhook, account connect)



&nbsp;   OpenAI ChatGPT API integration



&nbsp;   Per-company instructions/prompts for AI



&nbsp;   Role-based auth: Superadmin, Company Admin, User



&nbsp;   Manual billing (status change by Superadmin)



&nbsp;   User invite and CRUD



&nbsp;   Full audit logging, message logging



&nbsp;   Production-ready error handling



Prerequisites



&nbsp;   Node.js v18+ and npm



&nbsp;   PostgreSQL database (local or cloud)



&nbsp;   \[Optional] Docker (for containerization)



Environment Variables



Copy the sample and edit values as needed:



cp .env.example .env



Sample .env:



DATABASE\_URL=postgresql://postgres:password@localhost:5432/saasdb

JWT\_SECRET=your\_jwt\_secret

FACEBOOK\_VERIFY\_TOKEN=your\_fb\_verify\_token

OPENAI\_API\_KEY=your\_openai\_api\_key

PORT=4000

Database Setup



Install dependencies and set up the database schema:



npm install

npx prisma generate

npx prisma migrate dev --name init

npx ts-node prisma/seed.ts

Local Development



npm run start:dev



Backend runs at http://localhost:4000/api

Production Deployment



Docker



docker build -t saas-messenger-backend .

docker run -p 4000:4000 --env-file .env saas-messenger-backend



Or deploy to your preferred Node/Container host.

API Docs



&nbsp;   Auth: /api/auth/login, /api/auth/register, /api/auth/me



&nbsp;   Companies: /api/companies



&nbsp;   Users: /api/users



&nbsp;   Messenger: /api/webhook/messenger/:companyId



&nbsp;   ChatGPT: /api/chatgpt/reply



&nbsp;   Conversations/Messages: /api/conversations, /api/messages



All protected endpoints require Authorization: Bearer <JWT> header.

Notes



&nbsp;   By default, the seed script creates a Superadmin, a Company Admin, and a User.



&nbsp;   Only Superadmin can change company billing status.



&nbsp;   Manual billing: No payment gateway; change status via Superadmin dashboard or API.



&nbsp;   Messenger integration: See MessengerConnect UI in frontend for webhook setup.



&nbsp;   All sensitive keys must be kept secure and never committed.



Contributing



Open a PR or issue to discuss improvements, features, or bug fixes.

Contact



Questions? Contact your dev lead or project owner.

