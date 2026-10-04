'use client';

export function ScrollToButton({ targetId, children, className }) {
  return (
    <button 
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }}
      className={className}
    >
      {children}
    </button>
  );
}
