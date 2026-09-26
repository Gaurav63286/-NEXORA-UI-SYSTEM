import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/primitives/Button';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 max-w-7xl mx-auto relative pt-20">
        <div className="absolute top-32 left-6 text-xs font-mono text-accent uppercase tracking-widest border border-accent/30 px-3 py-1 bg-accent/5 inline-block">
          Open-Source / React UI System
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(4rem,10vw,12rem)] leading-[0.85] uppercase mt-24 mb-12 tracking-tight"
        >
          Interfaces<br/>With<br/>Intention.
        </motion.h1>
        
        <div className="max-w-xl text-text-secondary text-lg md:text-xl font-light mb-12">
          “40+ accessible primitives engineered for modern web teams.”
        </div>
        
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link to="/components">Explore Components</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href="https://github.com/Gaurav63286" target="_blank" rel="noreferrer">View on GitHub</a>
          </Button>
        </div>
      </section>

      {/* Architectural Status Panel */}
      <section className="px-6 py-24 border-y border-border bg-base-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-mono text-xs text-text-secondary uppercase tracking-widest mb-12 border-b border-border pb-4">
            NEXORA.PRIMITIVE_INSPECTOR
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 font-mono text-sm uppercase">
            <div className="space-y-4">
              <div className="text-text-secondary">Accessibility</div>
              <div className="text-3xl text-accent">100 / 100</div>
              <div className="text-xs text-text-secondary">WCAG AAA TARGET</div>
            </div>
            
            <div className="space-y-4">
              <div className="text-text-secondary">Components</div>
              <div className="text-3xl text-text-primary">40+</div>
              <div className="text-xs text-text-secondary">Fully Keyboard Traversable</div>
            </div>
            
            <div className="space-y-4">
              <div className="text-text-secondary">Animation</div>
              <div className="text-xl text-text-primary leading-tight">Spring Physics</div>
              <div className="text-xs text-text-secondary">
                Stiffness: 400<br/>
                Damping: 28
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="text-text-secondary">Rendering</div>
              <div className="text-xl text-text-primary leading-tight">Zero Layout Shift</div>
            </div>
            
            <div className="space-y-4">
              <div className="text-text-secondary">Stack</div>
              <div className="text-xl text-text-primary leading-tight">React<br/>JavaScript<br/>Tailwind</div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Strategy */}
      <section className="px-6 py-32 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h3 className="font-mono text-xs text-text-secondary uppercase tracking-widest mb-8">The Challenge / Bottleneck</h3>
          <h4 className="font-serif text-4xl mb-6">The Problem</h4>
          <div className="text-text-secondary space-y-4 font-light text-lg">
            <p>Most component libraries are either bloated, visually generic, difficult to customize, overly opinionated, inaccessible, or animation-heavy without purpose.</p>
            <p>Creative agencies and modern product teams need primitives that provide strong engineering foundations without imposing a generic visual identity.</p>
          </div>
        </div>
        
        <div>
          <h3 className="font-mono text-xs text-text-secondary uppercase tracking-widest mb-8">The Engineering Strategy</h3>
          <h4 className="font-serif text-4xl mb-6">The Solution</h4>
          <div className="text-text-secondary space-y-4 font-light text-lg">
            <p>Build a lightweight component system based on React, Tailwind CSS, Framer Motion, and semantic HTML with strict WAI-ARIA compliance.</p>
            <p>Keep components composable rather than monolithic.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 font-mono text-xs uppercase tracking-widest text-accent">
            <div className="border border-border p-4 text-center">Accessibility</div>
            <div className="border border-border p-4 text-center">Composability</div>
            <div className="border border-border p-4 text-center">Performance</div>
            <div className="border border-border p-4 text-center">Customization</div>
          </div>
        </div>
      </section>
    </div>
  );
}
