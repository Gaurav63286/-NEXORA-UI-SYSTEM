import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { springConfig } from '../animations/spring';
import Button from '../primitives/Button';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springConfig}
            className="mb-8"
          >
            <p className="text-xs font-mono text-accent tracking-widest mb-4">
              OPEN-SOURCE / REACT UI SYSTEM
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold tracking-tight leading-none mb-6">
              INTERFACES
              <br />
              WITH
              <br />
              <span className="text-accent">INTENTION.</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-8">
              40+ accessible primitives engineered for modern web teams.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/components">
                <Button size="lg">Explore Components</Button>
              </Link>
              <Button variant="secondary" size="lg">
                View on GitHub
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Architectural Status Panel */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springConfig, delay: 0.2 }}
          >
            <div className="mb-8">
              <p className="text-xs font-mono text-text-secondary tracking-widest">
                NEXORA.PRIMITIVE_INSPECTOR
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-surface border border-border p-6">
                <div className="text-3xl font-display font-semibold text-accent mb-2">
                  100 / 100
                </div>
                <div className="text-xs font-mono text-text-secondary mb-1">
                  WCAG AAA TARGET
                </div>
                <div className="text-sm text-text-primary">Accessibility</div>
              </div>

              <div className="bg-surface border border-border p-6">
                <div className="text-3xl font-display font-semibold text-accent mb-2">
                  40+
                </div>
                <div className="text-xs font-mono text-text-secondary mb-1">
                  FULLY KEYBOARD TRAVERSABLE
                </div>
                <div className="text-sm text-text-primary">Components</div>
              </div>

              <div className="bg-surface border border-border p-6">
                <div className="text-3xl font-display font-semibold text-accent mb-2">
                  SPRING
                </div>
                <div className="text-xs font-mono text-text-secondary mb-1">
                  STIFFNESS: 400 / DAMPING: 28
                </div>
                <div className="text-sm text-text-primary">Animation</div>
              </div>

              <div className="bg-surface border border-border p-6">
                <div className="text-3xl font-display font-semibold text-accent mb-2">
                  ZERO
                </div>
                <div className="text-xs font-mono text-text-secondary mb-1">
                  LAYOUT SHIFT
                </div>
                <div className="text-sm text-text-primary">Rendering</div>
              </div>

              <div className="bg-surface border border-border p-6">
                <div className="text-3xl font-display font-semibold text-accent mb-2">
                  MODERN
                </div>
                <div className="text-xs font-mono text-text-secondary mb-1">
                  REACT / TAILWIND / MOTION
                </div>
                <div className="text-sm text-text-primary">Stack</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springConfig, delay: 0.3 }}
          >
            <h2 className="text-xs font-mono text-text-secondary tracking-widest mb-8">
              THE CHALLENGE / BOTTLENECK
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-display font-semibold mb-4">THE PROBLEM</h3>
                <p className="text-text-secondary leading-relaxed">
                  Most component libraries are either bloated, visually generic, difficult to customize, 
                  overly opinionated, inaccessible, or animation-heavy without purpose.
                </p>
                <p className="text-text-secondary leading-relaxed mt-4">
                  Creative agencies and modern product teams need primitives that provide strong 
                  engineering foundations without imposing a visual identity.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-display font-semibold mb-4">THE SOLUTION</h3>
                <p className="text-text-secondary leading-relaxed">
                  Build a lightweight component system based on React, JavaScript, Tailwind CSS, 
                  Framer Motion, semantic HTML, and WAI-ARIA.
                </p>
                <p className="text-text-secondary leading-relaxed mt-4">
                  Keep components composable rather than monolithic. Prioritize accessibility, 
                  composability, performance, customization, and motion.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springConfig, delay: 0.4 }}
          >
            <h2 className="text-xs font-mono text-text-secondary tracking-widest mb-8">
              ARCHITECTURE
            </h2>
            
            <div className="bg-surface border border-border p-8 font-mono text-sm">
              <pre className="text-text-secondary">
{`NEXORA
│
├── primitives/
│   ├── button
│   ├── modal
│   ├── tabs
│   ├── accordion
│   └── ...
│
├── tokens/
│   ├── colors
│   ├── typography
│   ├── spacing
│   └── motion
│
├── hooks/
│   ├── use-keyboard
│   ├── use-media-query
│   └── use-reduced-motion
│
├── animations/
│   ├── spring
│   ├── fade
│   └── reveal
│
└── playground/
    ├── inspector
    ├── controls
    └── preview`}
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springConfig, delay: 0.5 }}
          >
            <h2 className="text-xs font-mono text-text-secondary tracking-widest mb-8">
              PERFORMANCE
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-accent text-2xl font-display font-semibold mb-2">✓</div>
                <div className="text-sm text-text-secondary">ZERO LAYOUT SHIFT</div>
              </div>
              <div className="text-center">
                <div className="text-accent text-2xl font-display font-semibold mb-2">✓</div>
                <div className="text-sm text-text-secondary">RESPONSIVE</div>
              </div>
              <div className="text-center">
                <div className="text-accent text-2xl font-display font-semibold mb-2">✓</div>
                <div className="text-sm text-text-secondary">GPU-FRIENDLY MOTION</div>
              </div>
              <div className="text-center">
                <div className="text-accent text-2xl font-display font-semibold mb-2">✓</div>
                <div className="text-sm text-text-secondary">LAZY COMPONENT LOADING</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
