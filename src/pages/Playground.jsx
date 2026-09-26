import { useState } from 'react';
import { motion } from 'framer-motion';
import { springConfig } from '../animations/spring';
import Button from '../primitives/Button';
import Input from '../primitives/Input';
import Select from '../primitives/Select';
import Switch from '../primitives/Switch';
import Modal from '../primitives/Modal';

export default function Playground() {
  const [selectedComponent, setSelectedComponent] = useState('Button');
  const [props, setProps] = useState({
    variant: 'primary',
    size: 'md',
    disabled: false,
  });

  const components = ['Button', 'Input', 'Select', 'Switch', 'Modal'];

  const handlePropChange = (key, value) => {
    setProps((prev) => ({ ...prev, [key]: value }));
  };

  const renderPreview = () => {
    switch (selectedComponent) {
      case 'Button':
        return (
          <Button
            variant={props.variant}
            size={props.size}
            disabled={props.disabled}
          >
            Button
          </Button>
        );
      case 'Input':
        return <Input placeholder="Enter text..." disabled={props.disabled} />;
      case 'Select':
        return (
          <Select disabled={props.disabled}>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </Select>
        );
      case 'Switch':
        return <Switch checked={props.checked} onChange={() => {}} />;
      case 'Modal':
        return (
          <div>
            <Button onClick={() => setProps({ ...props, open: true })}>
              Open Modal
            </Button>
            <Modal
              open={props.open}
              onClose={() => setProps({ ...props, open: false })}
            >
              <h2 className="text-2xl font-display font-semibold mb-4">
                Modal Content
              </h2>
              <p className="text-text-secondary">
                This is a modal dialog with spring animations.
              </p>
            </Modal>
          </div>
        );
      default:
        return null;
    }
  };

  const renderControls = () => {
    switch (selectedComponent) {
      case 'Button':
        return (
          <>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-primary">
                Variant
              </label>
              <Select
                value={props.variant}
                onChange={(e) => handlePropChange('variant', e.target.value)}
              >
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="ghost">Ghost</option>
                <option value="outline">Outline</option>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-primary">
                Size
              </label>
              <Select
                value={props.size}
                onChange={(e) => handlePropChange('size', e.target.value)}
              >
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-primary">
                Disabled
              </label>
              <Switch
                checked={props.disabled}
                onChange={() => handlePropChange('disabled', !props.disabled)}
              />
            </div>
          </>
        );
      case 'Input':
      case 'Select':
        return (
          <div className="space-y-2">
            <label className="text-sm font-medium text-text-primary">
              Disabled
            </label>
            <Switch
              checked={props.disabled}
              onChange={() => handlePropChange('disabled', !props.disabled)}
            />
          </div>
        );
      case 'Switch':
        return (
          <div className="space-y-2">
            <label className="text-sm font-medium text-text-primary">
              Checked
            </label>
            <Switch
              checked={props.checked}
              onChange={() => handlePropChange('checked', !props.checked)}
            />
          </div>
        );
      default:
        return null;
    }
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
            INTERACTIVE PLAYGROUND
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight mb-4">
            Playground
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl">
            Experiment with components in real-time. Adjust props and see changes instantly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Component Selector */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...springConfig, delay: 0.1 }}
            className="bg-surface border border-border p-6 rounded-lg"
          >
            <h3 className="text-sm font-medium text-text-primary mb-4">
              Components
            </h3>
            <div className="space-y-2">
              {components.map((component) => (
                <button
                  key={component}
                  onClick={() => setSelectedComponent(component)}
                  className={`w-full text-left px-4 py-2 rounded transition-colors ${
                    selectedComponent === component
                      ? 'bg-accent text-background'
                      : 'hover:bg-surface-elevated text-text-primary'
                  }`}
                >
                  {component}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Live Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springConfig, delay: 0.2 }}
            className="bg-surface border border-border p-6 rounded-lg"
          >
            <h3 className="text-sm font-medium text-text-primary mb-4">
              Preview
            </h3>
            <div className="flex items-center justify-center min-h-[200px] bg-background border border-border rounded p-8">
              {renderPreview()}
            </div>
          </motion.div>

          {/* Properties Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...springConfig, delay: 0.3 }}
            className="bg-surface border border-border p-6 rounded-lg"
          >
            <h3 className="text-sm font-medium text-text-primary mb-4">
              Properties
            </h3>
            <div className="space-y-6">{renderControls()}</div>
          </motion.div>
        </div>

        {/* Generated Code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springConfig, delay: 0.4 }}
          className="mt-6 bg-surface border border-border p-6 rounded-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-text-primary">
              Generated Code
            </h3>
            <Button size="sm">Copy JSX</Button>
          </div>
          <pre className="bg-background p-4 rounded text-sm font-mono text-text-secondary overflow-x-auto">
            <code>{`<${selectedComponent}
  ${Object.entries(props)
    .filter(([_, value]) => value !== undefined && value !== false)
    .map(([key, value]) => `${key}={${typeof value === 'string' ? `"${value}"` : value}}`)
    .join('\n  ')}
/>`}</code>
          </pre>
        </motion.div>
      </div>
    </div>
  );
}
