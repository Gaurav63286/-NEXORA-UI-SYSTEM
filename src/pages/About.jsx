import { motion } from 'framer-motion';
import { springConfig } from '../animations/spring';

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springConfig}
          className="mb-12"
        >
          <p className="text-xs font-mono text-accent tracking-widest mb-4">
            ABOUT
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight mb-4">
            Architecture & Philosophy
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl">
            NEXORA is a precision UI system built for modern web teams who value
            accessibility, performance, and composability.
          </p>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springConfig, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-xs font-mono text-text-secondary tracking-widest mb-6">
            PHILOSOPHY
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-surface border border-border p-6 rounded-lg">
              <h3 className="text-xl font-display font-semibold mb-3">
                Accessibility First
              </h3>
              <p className="text-text-secondary">
                Every component is built with WAI-ARIA semantics, keyboard navigation,
                and screen reader support from the ground up.
              </p>
            </div>
            <div className="bg-surface border border-border p-6 rounded-lg">
              <h3 className="text-xl font-display font-semibold mb-3">
                Composable Primitives
              </h3>
              <p className="text-text-secondary">
                Components are designed to be combined and customized rather than
                used as monolithic, opinionated solutions.
              </p>
            </div>
            <div className="bg-surface border border-border p-6 rounded-lg">
              <h3 className="text-xl font-display font-semibold mb-3">
                Performance Optimized
              </h3>
              <p className="text-text-secondary">
                Zero layout shifts, GPU-friendly animations, and lazy-loaded modules
                ensure smooth experiences across all devices.
              </p>
            </div>
            <div className="bg-surface border border-border p-6 rounded-lg">
              <h3 className="text-xl font-display font-semibold mb-3">
                Purposeful Motion
              </h3>
              <p className="text-text-secondary">
                Physics-based animations using spring physics create natural, responsive
                interactions that feel intentional rather than decorative.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springConfig, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-xs font-mono text-text-secondary tracking-widest mb-6">
            TECH STACK
          </h2>
          <div className="bg-surface border border-border p-6 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-2xl font-display font-semibold text-accent mb-2">
                  React
                </div>
                <div className="text-sm text-text-secondary">
                  Component architecture
                </div>
              </div>
              <div>
                <div className="text-2xl font-display font-semibold text-accent mb-2">
                  Tailwind
                </div>
                <div className="text-sm text-text-secondary">
                  Utility-first styling
                </div>
              </div>
              <div>
                <div className="text-2xl font-display font-semibold text-accent mb-2">
                  Framer Motion
                </div>
                <div className="text-sm text-text-secondary">
                  Physics animations
                </div>
              </div>
              <div>
                <div className="text-2xl font-display font-semibold text-accent mb-2">
                  Vite
                </div>
                <div className="text-sm text-text-secondary">
                  Build tooling
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Architecture Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springConfig, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-xs font-mono text-text-secondary tracking-widest mb-6">
            ARCHITECTURE
          </h2>
          <div className="bg-surface border border-border p-8 rounded-lg font-mono text-sm overflow-x-auto">
            <pre className="text-text-secondary">
{`NEXORA
│
├── src/
│   ├── primitives/          # 40+ React components
│   │   ├── form/           # Button, Input, Select, etc.
│   │   ├── navigation/     # Tabs, Breadcrumb, Pagination
│   │   ├── feedback/       # Alert, Toast, Tooltip
│   │   ├── overlay/        # Modal, Drawer, Popover
│   │   ├── content/        # Card, Accordion, Badge
│   │   └── editorial/      # Creative components
│   │
│   ├── tokens/             # Design system values
│   │   ├── colors.js
│   │   ├── typography.js
│   │   ├── spacing.js
│   │   └── motion.js
│   │
│   ├── hooks/              # Custom React hooks
│   │   ├── useKeyboard.js
│   │   ├── useMediaQuery.js
│   │   └── useReducedMotion.js
│   │
│   ├── animations/         # Animation configs
│   │   └── spring.js
│   │
│   ├── pages/              # Route components
│   │   ├── Home.jsx
│   │   ├── Components.jsx
│   │   ├── Playground.jsx
│   │   ├── Tokens.jsx
│   │   ├── Accessibility.jsx
│   │   └── About.jsx
│   │
│   └── components/         # Layout components
│       ├── Navbar.jsx
│       └── Footer.jsx
│
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies`}
            </pre>
          </div>
        </motion.div>

        {/* Design Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springConfig, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-xs font-mono text-text-secondary tracking-widest mb-6">
            DESIGN PRINCIPLES
          </h2>
          <div className="space-y-4">
            <div className="bg-surface border border-border p-6 rounded-lg">
              <h3 className="font-display font-semibold mb-2">Dark-First</h3>
              <p className="text-text-secondary">
                The system is designed with a dark color palette as the default,
                using an almost-black background (#080808) with high-contrast text.
              </p>
            </div>
            <div className="bg-surface border border-border p-6 rounded-lg">
              <h3 className="font-display font-semibold mb-2">Editorial Typography</h3>
              <p className="text-text-secondary">
                Typography is a core design element, using Space Grotesk for display
                and Instrument Serif for editorial moments.
              </p>
            </div>
            <div className="bg-surface border border-border p-6 rounded-lg">
              <h3 className="font-display font-semibold mb-2">Monochromatic with Accent</h3>
              <p className="text-text-secondary">
                A sophisticated electric lime accent (#BFFF00) is used sparingly for
                active states, focus indicators, and important interactions.
              </p>
            </div>
            <div className="bg-surface border border-border p-6 rounded-lg">
              <h3 className="font-display font-semibold mb-2">Sharp Geometry</h3>
              <p className="text-text-secondary">
                Thin borders, generous whitespace, and sharp corners create a
                brutalist-inspired aesthetic that feels technical and precise.
              </p>
            </div>
          </div>
        </motion.div>

        {/* License */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springConfig, delay: 0.5 }}
        >
          <div className="bg-surface border border-border p-6 rounded-lg">
            <h3 className="font-display font-semibold mb-2">Open Source</h3>
            <p className="text-text-secondary">
              NEXORA is open source and available for use in personal and commercial
              projects. Built with love for the modern web.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
