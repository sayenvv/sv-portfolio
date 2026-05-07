# Futuristic AI Engineer Portfolio

Premium, recruiter-focused portfolio website built with Next.js App Router, React, Tailwind CSS, Framer Motion, TypeScript, Lucide icons, and shadcn-style UI components.

## Features

- Dark futuristic interface with AI-themed gradients and glassmorphism cards
- Smooth section animations, hover interactions, and loading states
- Full portfolio sections: Hero, About, Skills, Experience, Education, Projects, Salary, Availability, Contact, Footer
- Interactive recruiter chatbot with:
	- floating launch button
	- chat history
	- suggested prompts
	- typing indicator
	- markdown rendering
	- quick actions (download CV, email, schedule)
- SEO-focused metadata and accessibility-conscious markup
- Responsive across mobile, tablet, and desktop
- Type-safe, reusable component architecture

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- shadcn-style component structure

## Project Structure

```text
src/
	app/
		layout.tsx
		page.tsx
		loading.tsx
		globals.css
	components/
		effects/
		sections/
		shared/
		ui/
	data/
		portfolio-data.ts
	hooks/
		use-chat-assistant.ts
		use-typewriter.ts
	lib/
		utils.ts
	types/
		index.ts
public/
	projects/
	cv-placeholder.txt
```

## Installation

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open http://localhost:3000

## Environment Variables

Copy `.env.example` to `.env.local` and set values if/when connecting chatbot to a real backend:

```bash
cp .env.example .env.local
```

Variables:

- `NEXT_PUBLIC_CHAT_BACKEND_URL`
- `NEXT_PUBLIC_OPENAI_MODEL`
- `NEXT_PUBLIC_GEMINI_MODEL`

## Build and Production

```bash
npm run build
npm run start
```

## Vercel Deployment Guide

1. Push repository to GitHub/GitLab/Bitbucket.
2. Import the repo in Vercel.
3. Framework preset: Next.js (auto-detected).
4. Add any required environment variables from `.env.example`.
5. Deploy.

Vercel will run `npm install` and `npm run build` automatically.

## Personalization Checklist

- Replace profile placeholders in `src/data/portfolio-data.ts`
- Replace `public/cv-placeholder.txt` with your real CV file (PDF preferred)
- Add real project screenshots to `public/projects/`
- Update links (GitHub, LinkedIn, live demos)
- Wire chatbot to OpenAI/Gemini/FastAPI backend when ready

## License

For personal and professional portfolio usage.
