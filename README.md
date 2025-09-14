# Flashcard Frenzy

A multiplayer flashcard game built with Next.js, Supabase, and MongoDB. Players join rooms using room codes and compete to answer flashcards correctly to earn points.

## Overview

Flashcard Frenzy is a real-time multiplayer educational game that combines learning with competition. Players authenticate through secure OAuth providers and join game rooms to compete in answering flashcards. The first player to answer correctly receives points, creating an engaging competitive learning environment.

## Features

- **Multiplayer Gameplay**: Join rooms with unique room codes
- **Real-time Competition**: First player to answer correctly gets the points
- **Secure Authentication**: OAuth integration with Google and GitHub via Supabase
- **Responsive Design**: Modern UI built with Tailwind CSS
- **Database Integration**: Supabase for authentication and MongoDB for data storage
- **Edge Functions**: Serverless backend logic for game mechanics

## Prerequisites

- Node.js 18 or higher
- npm, yarn, pnpm, or bun package manager
- Supabase account and project
- MongoDB account (optional for testing)

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd flashcard-frenzy
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
MONGODB_URI=your_mongodb_connection_string
```

### 4. Start Development Server

```bash
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## User Guide

### Getting Started

1. **Authentication**: Click "Login to Play" on the homepage
2. **OAuth Login**: Sign in with Google or GitHub credentials
3. **Room Entry**: Enter a room code to join an active game
4. **Gameplay**: Answer flashcards correctly to earn points
5. **Competition**: Be the first to answer for maximum points

### Game Mechanics

- Players compete in real-time within designated rooms
- First correct answer receives full points (10 points)
- Subsequent correct answers receive reduced points
- Duplicate answers are prevented through user tracking

## Project Architecture

```
flashcard-frenzy/
├── src/
│   ├── app/
│   │   ├── components/          # Reusable React components
│   │   ├── game/[roomCode]/     # Dynamic game room pages
│   │   ├── login/               # Authentication page
│   │   ├── api/                 # API routes
│   │   └── globals.css          # Global styles
│   └── lib/
│       └── supabaseClient.ts    # Supabase configuration
├── supabase/
│   └── functions/               # Supabase Edge Functions
└── package.json
```

## Technology Stack

- **Frontend Framework**: Next.js 14 with App Router
- **UI Library**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Supabase Auth with OAuth providers
- **Database**: Supabase (PostgreSQL) + MongoDB
- **Deployment Platform**: Vercel (recommended)

## API Reference

### Endpoints

- `GET /api/mondo-test` - Test MongoDB connection
- `POST /supabase/functions/submit-answer` - Submit flashcard answers

### Supabase Edge Functions

- `submit-answer` - Processes flashcard answers and awards points

## Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Development Workflow

1. Create feature branches for new functionality
2. Follow TypeScript best practices
3. Test authentication flows thoroughly
4. Ensure responsive design across devices

## Deployment

### Vercel Deployment

1. Push code to GitHub repository
2. Connect repository to [Vercel](https://vercel.com)
3. Configure environment variables in Vercel dashboard
4. Deploy application

### Production Environment Variables

Configure the following variables in your deployment platform:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `MONGODB_URI`

## Contributing

### Development Process

1. Fork the repository
2. Create feature branch: `git checkout -b feature/description`
3. Implement changes with proper testing
4. Commit changes: `git commit -m 'feat: add feature description'`
5. Push to branch: `git push origin feature/description`
6. Submit pull request with detailed description

### Code Standards

- Follow TypeScript best practices
- Maintain consistent code formatting
- Include proper error handling
- Write clear commit messages

## License

This project is licensed under the MIT License. See LICENSE file for details.

## Documentation Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
