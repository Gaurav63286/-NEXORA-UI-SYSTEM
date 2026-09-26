import React from 'react';

const tokens = {
  colors: [
    { name: 'Background 900', hex: '#080808', class: 'bg-base-900' },
    { name: 'Background 800', hex: '#111111', class: 'bg-base-800' },
    { name: 'Background 700', hex: '#171717', class: 'bg-base-700' },
    { name: 'Border', hex: '#222222', class: 'bg-border' },
    { name: 'Text Primary', hex: '#F5F5F0', class: 'bg-text-primary' },
    { name: 'Text Secondary', hex: '#8A8A8A', class: 'bg-text-secondary' },
    { name: 'Accent', hex: '#CCFF00', class: 'bg-accent' },
  ],
  typography: [
    { name: 'Display XL', family: 'Instrument Serif', size: '10vw', weight: 'Normal' },
    { name: 'Heading', family: 'Space Grotesk', size: '3rem', weight: 'Medium' },
    { name: 'Body', family: 'Space Grotesk', size: '1rem', weight: 'Light' },
    { name: 'Mono', family: 'UI Monospace', size: '0.75rem', weight: 'Regular' },
  ]
};

export default function Tokens() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <header className="mb-24 mt-12">
        <div className="font-mono text-xs text-accent uppercase tracking-widest mb-4">Architecture / Design Tokens</div>
        <h1 className="font-serif text-6xl md:text-8xl text-text-primary mb-6">Tokens</h1>
        <p className="text-text-secondary text-xl max-w-2xl font-light">
          The foundational values that drive the NEXORA visual language.
        </p>
      </header>

      <section className="mb-24">
        <h2 className="font-mono text-xs uppercase tracking-widest text-text-secondary border-b border-border pb-4 mb-8">Color Tokens</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {tokens.colors.map(color => (
            <div key={color.name} className="flex flex-col">
              <div className={`w-full aspect-square border border-border mb-4 ${color.class}`}></div>
              <div className="font-mono text-xs text-text-primary mb-1">{color.name}</div>
              <div className="font-mono text-xs text-text-secondary">{color.hex}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-24">
        <h2 className="font-mono text-xs uppercase tracking-widest text-text-secondary border-b border-border pb-4 mb-8">Typography Tokens</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tokens.typography.map(type => (
            <div key={type.name} className="border border-border p-6 bg-base-800/30">
              <div className="flex justify-between items-start mb-8">
                <div className="font-mono text-xs text-accent">{type.name}</div>
                <div className="text-right font-mono text-[10px] text-text-secondary uppercase">
                  <div>{type.family}</div>
                  <div>{type.weight} / {type.size}</div>
                </div>
              </div>
              <div className={`text-4xl ${type.family === 'Instrument Serif' ? 'font-serif text-6xl' : type.family === 'UI Monospace' ? 'font-mono text-sm' : 'font-sans'}`}>
                Interfaces with intention.
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-24">
        <h2 className="font-mono text-xs uppercase tracking-widest text-text-secondary border-b border-border pb-4 mb-8">Motion (Framer)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-sm">
          <div className="border border-border p-6 bg-base-800/30">
            <div className="text-accent mb-4">Spring Standard</div>
            <div className="text-text-secondary">type: "spring"</div>
            <div className="text-text-secondary">stiffness: 400</div>
            <div className="text-text-secondary">damping: 28</div>
          </div>
          <div className="border border-border p-6 bg-base-800/30">
            <div className="text-text-primary mb-4">Spring Slow</div>
            <div className="text-text-secondary">type: "spring"</div>
            <div className="text-text-secondary">stiffness: 200</div>
            <div className="text-text-secondary">damping: 40</div>
          </div>
          <div className="border border-border p-6 bg-base-800/30">
            <div className="text-text-primary mb-4">Spring Snappy</div>
            <div className="text-text-secondary">type: "spring"</div>
            <div className="text-text-secondary">stiffness: 500</div>
            <div className="text-text-secondary">damping: 20</div>
          </div>
        </div>
      </section>
    </div>
  );
}
