# My Portfolio

A modern personal portfolio website for Laytong LY, built to showcase projects,
technical skills, education, work experience, certifications, highlights, and
contact information in a responsive single-page experience.

## Overview

This portfolio presents a full-stack developer profile with smooth navigation,
animated sections, a dark/light theme toggle, project cards, a skills grid, a
highlights carousel, and a contact form layout. Most portfolio content is driven
from shared data in `src/utils/data.js`, making it easy to update projects,
skills, education, experience, and achievements from one place.

## Features

- Responsive layout for desktop, tablet, and mobile screens
- Dark and light theme support with local storage persistence
- Animated page sections powered by Framer Motion
- Smooth navigation between portfolio sections
- Skills and technologies showcase with custom icons
- Project grid for AI/ML, full-stack, and web development work
- Education and work experience sections
- Highlights carousel for certifications, workshops, and achievements
- Contact section with social links and contact details

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4
- Framer Motion
- Embla Carousel
- Lucide React
- React Icons

## Project Sections

- `Home` - Hero introduction and primary calls to action
- `About` - Short bio, education, and work experience
- `Skills` - Languages, frameworks, databases, tools, cloud, and AI/ML stack
- `Projects` - Featured portfolio projects and GitHub/live links
- `Highlights` - Certifications, workshops, leadership, and academic moments
- `Contact` - Contact details, social links, and message form

## Getting Started

### Prerequisites

- Node.js 20 or newer is recommended
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open the local URL printed by Vite in your browser.

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```text
src/
  assets/
    icons/          Custom technology and social icons
    images/         Profile and highlight images
  components/
    Sections/       Main page sections
    *.jsx           Reusable UI cards and navigation
  context/          Theme provider and theme state
  utils/            Shared data and animation helpers
```

## Updating Portfolio Content

Most text, projects, skills, education, experience, highlights, and social links
can be updated in:

```text
src/utils/data.js
```

Profile and highlight images live in:

```text
src/assets/images/
```

Reusable icons live in:

```text
src/assets/icons/
```

## Available Scripts

- `npm run dev` - Start the local development server
- `npm run build` - Create a production build
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint
