import { Link, useLocation } from 'react-router-dom';
import { Github } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-display font-semibold tracking-tight text-text-primary">
          NEXORA
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/components"
            className={`text-sm font-medium transition-colors ${
              location.pathname === '/components' 
                ? 'text-accent' 
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Components
          </Link>
          <Link
            to="/playground"
            className={`text-sm font-medium transition-colors ${
              location.pathname === '/playground' 
                ? 'text-accent' 
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Playground
          </Link>
          <Link
            to="/tokens"
            className={`text-sm font-medium transition-colors ${
              location.pathname === '/tokens' 
                ? 'text-accent' 
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Tokens
          </Link>
          <Link
            to="/accessibility"
            className={`text-sm font-medium transition-colors ${
              location.pathname === '/accessibility' 
                ? 'text-accent' 
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Accessibility
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium transition-colors ${
              location.pathname === '/about' 
                ? 'text-accent' 
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            About
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden sm:block text-xs font-mono text-text-secondary">
            v1.0.0
          </span>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded hover:border-accent hover:text-accent transition-colors text-text-primary"
          >
            <Github size={16} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
