import { motion } from 'framer-motion';
import { springConfig } from '../animations/spring';

const colorTokens = [
  { name: 'Background', value: '#080808', class: 'bg-background' },
  { name: 'Surface', value: '#111111', class: 'bg-surface' },
  { name: 'Surface Elevated', value: '#171717', class: 'bg-surface-elevated' },
  { name: 'Border', value: '#222222', class: 'bg-border' },
  { name: 'Text Primary', value: '#F5F5F0', class: 'bg-text-primary' },
  { name: 'Text Secondary', value: '#8A8A8A', class: 'bg-text-secondary' },
  { name: 'Accent', value: '#BFFF00', class: 'bg-accent' },
];

const spacingTokens = [
  { name: '4px', value: '4px' },
  { name: '8px', value: '8px' },
  { name: '12px', value: '12px' },
  { name: '16px', value: '16px' },
  { name: '24px', value: '24px' },
  { name: '32px', value: '32px' },
  { name: '48px', value: '48px' },
  { name: '64px', value: '64px' },
  { name: '96px', value: '96px' },
  { name: '128px', value: '128px' },
];

const typographyTokens = [
  { name: 'Display XL', class: 'text-6xl font-display font-semibold' },
  { name: 'Display LG', class: 'text-5xl font-display font-semibold' },
  { name: 'Heading', class: 'text-3xl font-display font-semibold' },
  { name: 'Body', class: 'text-base' },
  { name: 'Small', class: 'text-sm' },
  { name: 'Caption', class: 'text-xs' },
  { name: 'Mono', class: 'text-sm font-mono' },
];

const motionTokens = [
  { name: 'Spring Stiffness', value: '400' },
  { name: 'Spring Damping', value: '28' },
  { name: 'Fast Duration', value: '0.2s' },
  { name: 'Normal Duration', value: '0.3s' },
  { name: 'Slow Duration', value: '0.5s' },
];

export default function Tokens() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

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
            DESIGN TOKENS
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight mb-4">
            Tokens
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl">
            Design tokens that power the NEXORA system. Click to copy values.
          </p>
        </motion.div>

        {/* Color Tokens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springConfig, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-xs font-mono text-text-secondary tracking-widest mb-6">
            COLOR TOKENS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {colorTokens.map((token, index) => (
              <motion.div
                key={token.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springConfig, delay: 0.1 + index * 0.05 }}
                className="bg-surface border border-border p-4 rounded cursor-pointer hover:border-accent transition-colors"
                onClick={() => copyToClipboard(token.value)}
              >
                <div className={`h-16 w-full ${token.class} rounded mb-3`} />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-text-primary">
                      {token.name}
                    </div>
                    <div className="text-xs font-mono text-text-secondary">
                      {token.value}
                    </div>
                  </div>
                  <div className="text-xs text-accent">Copy</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Spacing Tokens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springConfig, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-xs font-mono text-text-secondary tracking-widest mb-6">
            SPACING TOKENS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {spacingTokens.map((token, index) => (
              <motion.div
                key={token.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springConfig, delay: 0.2 + index * 0.05 }}
                className="bg-surface border border-border p-4 rounded cursor-pointer hover:border-accent transition-colors"
                onClick={() => copyToClipboard(token.value)}
              >
                <div className="h-8 bg-accent/20 rounded mb-3" style={{ width: token.value }} />
                <div className="text-sm font-medium text-text-primary">
                  {token.name}
                </div>
                <div className="text-xs font-mono text-text-secondary">
                  {token.value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Typography Tokens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springConfig, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-xs font-mono text-text-secondary tracking-widest mb-6">
            TYPOGRAPHY TOKENS
          </h2>
          <div className="space-y-4">
            {typographyTokens.map((token, index) => (
              <motion.div
                key={token.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springConfig, delay: 0.3 + index * 0.05 }}
                className="bg-surface border border-border p-6 rounded cursor-pointer hover:border-accent transition-colors"
                onClick={() => copyToClipboard(token.class)}
              >
                <div className="flex items-center justify-between">
                  <div className={token.class}>The quick brown fox</div>
                  <div className="text-xs text-accent">Copy</div>
                </div>
                <div className="text-xs font-mono text-text-secondary mt-2">
                  {token.class}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Motion Tokens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springConfig, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-xs font-mono text-text-secondary tracking-widest mb-6">
            MOTION TOKENS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {motionTokens.map((token, index) => (
              <motion.div
                key={token.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springConfig, delay: 0.4 + index * 0.05 }}
                className="bg-surface border border-border p-4 rounded cursor-pointer hover:border-accent transition-colors"
                onClick={() => copyToClipboard(token.value)}
              >
                <div className="text-sm font-medium text-text-primary mb-2">
                  {token.name}
                </div>
                <div className="text-xs font-mono text-text-secondary">
                  {token.value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
