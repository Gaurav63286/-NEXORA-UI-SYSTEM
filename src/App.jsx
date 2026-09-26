import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Components from './pages/Components';
import Playground from './pages/Playground';
import Tokens from './pages/Tokens';
import Accessibility from './pages/Accessibility';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-text-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/tokens" element={<Tokens />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
