import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { springConfig } from '../animations/spring';

const componentCategories = [
  {
    name: 'FORM',
    components: [
      { name: 'Button', path: '/components/button' },
      { name: 'Input', path: '/components/input' },
      { name: 'Textarea', path: '/components/textarea' },
      { name: 'Select', path: '/components/select' },
      { name: 'Checkbox', path: '/components/checkbox' },
      { name: 'Radio Group', path: '/components/radio' },
      { name: 'Switch', path: '/components/switch' },
      { name: 'Slider', path: '/components/slider' },
      { name: 'Date Picker', path: '/components/datepicker' },
      { name: 'Form Field', path: '/components/formfield' },
    ],
  },
  {
    name: 'NAVIGATION',
    components: [
      { name: 'Tabs', path: '/components/tabs' },
      { name: 'Breadcrumb', path: '/components/breadcrumb' },
      { name: 'Pagination', path: '/components/pagination' },
    ],
  },
  {
    name: 'FEEDBACK',
    components: [
      { name: 'Alert', path: '/components/alert' },
      { name: 'Toast', path: '/components/toast' },
      { name: 'Tooltip', path: '/components/tooltip' },
      { name: 'Progress', path: '/components/progress' },
      { name: 'Skeleton', path: '/components/skeleton' },
      { name: 'Spinner', path: '/components/spinner' },
    ],
  },
  {
    name: 'OVERLAY',
    components: [
      { name: 'Modal', path: '/components/modal' },
      { name: 'Drawer', path: '/components/drawer' },
      { name: 'Popover', path: '/components/popover' },
      { name: 'Dropdown Menu', path: '/components/dropdown' },
      { name: 'Context Menu', path: '/components/contextmenu' },
    ],
  },
  {
    name: 'CONTENT',
    components: [
      { name: 'Card', path: '/components/card' },
      { name: 'Accordion', path: '/components/accordion' },
      { name: 'Badge', path: '/components/badge' },
      { name: 'Avatar', path: '/components/avatar' },
      { name: 'Separator', path: '/components/separator' },
      { name: 'Table', path: '/components/table' },
      { name: 'Timeline', path: '/components/timeline' },
    ],
  },
  {
    name: 'EDITORIAL / CREATIVE',
    components: [
      { name: 'Editorial Modal', path: '/components/editorialmodal' },
      { name: 'Marquee', path: '/components/marquee' },
      { name: 'Reveal', path: '/components/reveal' },
      { name: 'Magnetic Button', path: '/components/magneticbutton' },
      { name: 'Image Reveal', path: '/components/imagereveal' },
      { name: 'Scroll Progress', path: '/components/scrollprogress' },
      { name: 'Kinetic Text', path: '/components/kinetictext' },
      { name: 'Spotlight', path: '/components/spotlight' },
      { name: 'Cursor Preview', path: '/components/cursorpreview' },
      { name: 'Horizontal Gallery', path: '/components/horizontalgallery' },
    ],
  },
];

export default function Components() {
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
            COMPONENT LIBRARY
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight mb-4">
            Components
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl">
            40+ accessible React primitives engineered for modern interfaces.
          </p>
        </motion.div>

        <div className="space-y-12">
          {componentCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springConfig, delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-xs font-mono text-text-secondary tracking-widest mb-6">
                {category.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.components.map((component) => (
                  <Link key={component.name} to={component.path}>
                    <div className="bg-surface border border-border p-6 rounded hover:border-accent hover:translate-x-1 transition-all cursor-pointer">
                      <h3 className="font-medium text-text-primary">{component.name}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
