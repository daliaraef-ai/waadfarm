# WAADFARM

A modern, scalable commercial platform initialized with Next.js (App Router), TypeScript, and Tailwind CSS.

## 🏗️ Technical Foundation

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Custom Pastoral Brand Palette)
- **Linting:** ESLint
- **Icons & Primitives:** Lucide React, `clsx`, `tailwind-merge`
- **Deployment:** Vercel-ready

## 📁 Scalable Directory Architecture

```text
├── app/                  # Next.js App Router (pages, layout, globals)
├── components/
│   ├── common/           # Reusable UI elements (Button, Container)
│   ├── layout/           # Shell components (Header, Footer)
│   └── ui/               # Base design system primitives
├── constants/            # Site metadata & global constants
├── lib/
│   └── utils/            # Helper functions (cn class merger)
├── types/                # Shared TypeScript declarations
├── public/               # Static assets
└── tailwind.config.ts    # Custom branding, colors & fonts

npm install
npm run dev
npm run lint
npm run build
---

### Step 9: Run Validation Checks

Run these two commands in your terminal to verify that there are zero TypeScript, ESLint, or Webpack errors:

```bash
# 1. Check code quality
npm run lint

# 2. Check production build
npm run build
# 1. Install utility dependencies
npm install clsx tailwind-merge lucide-react

# 2. Create scalable folder structure
mkdir -p components/common components/layout components/ui lib/utils types constants

# 3. Create class merger utility
cat << 'EOF' > lib/utils/cn.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
