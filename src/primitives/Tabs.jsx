import { useState } from 'react';
import { motion } from 'framer-motion';
import { springConfig } from '../animations/spring';

export default function Tabs({ defaultValue, children, className = '' }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className={className}>
      {children.map((child) => {
        if (child.type === TabsList) {
          return (
            <child.type
              key="list"
              {...child.props}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          );
        }
        if (child.type === TabsContent) {
          return (
            <child.type
              key={child.props.value}
              {...child.props}
              isActive={activeTab === child.props.value}
            />
          );
        }
        return child;
      })}
    </div>
  );
}

function TabsList({ children, activeTab, onTabChange, className = '' }) {
  return (
    <div className={`flex border-b border-border ${className}`}>
      {children.map((child) => (
        <child.type
          key={child.props.value}
          {...child.props}
          isActive={activeTab === child.props.value}
          onClick={() => onTabChange(child.props.value)}
        />
      ))}
    </div>
  );
}

Tabs.List = TabsList;

function TabsTrigger({ value, children, isActive, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`relative px-4 py-2 text-sm font-medium transition-colors ${
        isActive ? 'text-accent' : 'text-text-secondary hover:text-text-primary'
      } ${className}`}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
          transition={springConfig}
        />
      )}
    </button>
  );
}

Tabs.Trigger = TabsTrigger;

function TabsContent({ value, children, isActive, className = '' }) {
  if (!isActive) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={springConfig}
      className={`pt-4 ${className}`}
    >
      {children}
    </motion.div>
  );
}

Tabs.Content = TabsContent;
