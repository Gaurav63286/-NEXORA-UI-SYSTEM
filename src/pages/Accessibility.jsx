import { motion } from 'framer-motion';
import { springConfig } from '../animations/spring';
import { Check, X } from 'lucide-react';

const accessibilityFeatures = [
  {
    category: 'WAI-ARIA',
    features: [
      { name: 'Semantic HTML', status: true },
      { name: 'ARIA Labels', status: true },
      { name: 'Role Attributes', status: true },
      { name: 'Live Regions', status: true },
    ],
  },
  {
    category: 'KEYBOARD NAVIGATION',
    features: [
      { name: 'Tab Navigation', status: true },
      { name: 'Arrow Key Support', status: true },
      { name: 'Escape to Close', status: true },
      { name: 'Focus Trapping', status: true },
      { name: 'Skip Links', status: false },
    ],
  },
  {
    category: 'SCREEN READER',
    features: [
      { name: 'Announcements', status: true },
      { name: 'Hidden Labels', status: true },
      { name: 'Error Messages', status: true },
      { name: 'Status Updates', status: true },
    ],
  },
  {
    category: 'VISUAL',
    features: [
      { name: 'Focus Indicators', status: true },
      { name: 'Color Contrast', status: true },
      { name: 'Text Scaling', status: true },
      { name: 'Reduced Motion', status: true },
    ],
  },
];

export default function Accessibility() {
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
            ACCESSIBILITY
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight mb-4">
            Accessibility
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl">
            NEXORA is built with accessibility as a core requirement. Every component
            follows WAI-ARIA guidelines and supports keyboard navigation.
          </p>
        </motion.div>

        {/* WCAG Target */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springConfig, delay: 0.1 }}
          className="bg-surface border border-border p-8 rounded-lg mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="text-4xl font-display font-semibold text-accent">
              WCAG AAA
            </div>
            <div className="text-text-secondary">Target</div>
          </div>
          <p className="text-text-secondary">
            All components are designed to meet WCAG 2.1 Level AAA standards for
            color contrast, keyboard accessibility, and screen reader support.
          </p>
        </motion.div>

        {/* Accessibility Features */}
        <div className="space-y-8">
          {accessibilityFeatures.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springConfig, delay: 0.2 + categoryIndex * 0.1 }}
            >
              <h2 className="text-xs font-mono text-text-secondary tracking-widest mb-4">
                {category.category}
              </h2>
              <div className="bg-surface border border-border rounded-lg overflow-hidden">
                {category.features.map((feature, featureIndex) => (
                  <div
                    key={feature.name}
                    className={`flex items-center justify-between p-4 ${
                      featureIndex !== category.features.length - 1
                        ? 'border-b border-border'
                        : ''
                    }`}
                  >
                    <span className="text-text-primary">{feature.name}</span>
                    {feature.status ? (
                      <Check size={20} className="text-accent" />
                    ) : (
                      <X size={20} className="text-text-secondary" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Keyboard Shortcuts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springConfig, delay: 0.5 }}
          className="mt-12"
        >
          <h2 className="text-xs font-mono text-text-secondary tracking-widest mb-6">
            KEYBOARD SHORTCUTS
          </h2>
          <div className="bg-surface border border-border p-6 rounded-lg">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <kbd className="px-3 py-1 bg-background border border-border rounded text-sm font-mono">
                  Tab
                </kbd>
                <span className="text-text-secondary">Navigate between focusable elements</span>
              </div>
              <div className="flex items-center gap-4">
                <kbd className="px-3 py-1 bg-background border border-border rounded text-sm font-mono">
                  Shift + Tab
                </kbd>
                <span className="text-text-secondary">Navigate in reverse order</span>
              </div>
              <div className="flex items-center gap-4">
                <kbd className="px-3 py-1 bg-background border border-border rounded text-sm font-mono">
                  Enter
                </kbd>
                <span className="text-text-secondary">Activate buttons and links</span>
              </div>
              <div className="flex items-center gap-4">
                <kbd className="px-3 py-1 bg-background border border-border rounded text-sm font-mono">
                  Escape
                </kbd>
                <span className="text-text-secondary">Close modals and drawers</span>
              </div>
              <div className="flex items-center gap-4">
                <kbd className="px-3 py-1 bg-background border border-border rounded text-sm font-mono">
                  Arrow Keys
                </kbd>
                <span className="text-text-secondary">Navigate within components</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reduced Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springConfig, delay: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-xs font-mono text-text-secondary tracking-widest mb-6">
            REDUCED MOTION
          </h2>
          <div className="bg-surface border border-border p-6 rounded-lg">
            <p className="text-text-secondary mb-4">
              NEXORA respects the user's motion preferences. When reduced motion is
              enabled in system preferences, all animations are replaced with instant
              or simplified transitions.
            </p>
            <div className="bg-background border border-border p-4 rounded">
              <code className="text-sm font-mono text-text-secondary">
                @media (prefers-reduced-motion: reduce) {'{'} ... {'}'}
              </code>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
