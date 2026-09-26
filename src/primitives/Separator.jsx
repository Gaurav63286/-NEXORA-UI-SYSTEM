export default function Separator({ orientation = 'horizontal', className = '' }) {
  return (
    <div
      className={`bg-border ${
        orientation === 'horizontal' ? 'w-full h-px' : 'h-full w-px'
      } ${className}`}
    />
  );
}
