import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight mb-4 text-text-primary">
            BUILD BETTER INTERFACES.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <Link
            to="/components"
            className="text-sm text-text-secondary hover:text-accent transition-colors"
          >
            Components
          </Link>
          <Link
            to="/playground"
            className="text-sm text-text-secondary hover:text-accent transition-colors"
          >
            Playground
          </Link>
          <Link
            to="/tokens"
            className="text-sm text-text-secondary hover:text-accent transition-colors"
          >
            Tokens
          </Link>
          <Link
            to="/accessibility"
            className="text-sm text-text-secondary hover:text-accent transition-colors"
          >
            Accessibility
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary hover:text-accent transition-colors"
          >
            GitHub
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-border">
          <div className="text-xs font-mono text-text-secondary space-y-1">
            <p>NEXORA UI SYSTEM / v1.0</p>
            <p>REACT + TAILWIND + FRAMER MOTION</p>
            <p>OPEN SOURCE</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
