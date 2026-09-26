import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from './components/primitives/Button';
import Landing from './pages/Landing';
import Components from './pages/Components';
import Playground from './pages/Playground';
import Tokens from './pages/Tokens';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b border-border bg-base-900/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl tracking-wide uppercase flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
            <path d="M12 0L24 12L12 24L0 12L12 0Z" fill="currentColor"/>
            <rect x="9" y="9" width="6" height="6" fill="#080808"/>
          </svg>
          NEXORA UI
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-mono uppercase tracking-widest text-text-secondary">
          <Link to="/components" className="hover:text-accent transition-colors">Components</Link>
          <Link to="/playground" className="hover:text-accent transition-colors">Playground</Link>
          <Link to="/tokens" className="hover:text-accent transition-colors">Tokens</Link>
          <a href="https://github.com/Gaurav63286" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">GitHub</a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-text-secondary hidden sm:inline-block border border-border px-2 py-1">v1.0.0</span>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border mt-32 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-5xl md:text-7xl mb-12 uppercase text-text-primary">Build better interfaces.</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 font-mono text-xs text-text-secondary uppercase tracking-widest">
          <div className="flex flex-col gap-4">
            <Link to="/components" className="hover:text-accent">Components</Link>
            <Link to="/playground" className="hover:text-accent">Playground</Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link to="/tokens" className="hover:text-accent">Tokens</Link>
            <Link to="/" className="hover:text-accent">Accessibility</Link>
          </div>
          <div className="flex flex-col gap-4">
            <a href="https://github.com/Gaurav63286" className="hover:text-accent">GitHub</a>
            <a href="#" className="hover:text-accent">Twitter</a>
          </div>
          <div className="flex flex-col gap-4 text-right md:col-start-4">
            <span>NEXORA UI SYSTEM / v1.0</span>
            <span>REACT + TAILWIND + FRAMER MOTION</span>
            <span>OPEN SOURCE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/components" element={<Components />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/tokens" element={<Tokens />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
