import React from 'react';

interface VeltroLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
  variant?: 'light' | 'dark';
}

export const VeltroLogo: React.FC<VeltroLogoProps> = ({
  size = 'md',
  showTagline = false,
  className = '',
  variant = 'light'
}) => {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-14 h-14'
  };

  const textSizes = {
    sm: 'text-xl tracking-[0.2em]',
    md: 'text-2xl tracking-[0.22em]',
    lg: 'text-3xl tracking-[0.25em]',
    xl: 'text-5xl tracking-[0.28em]'
  };

  const taglineSizes = {
    sm: 'text-[9px] tracking-[0.35em]',
    md: 'text-[10px] tracking-[0.4em]',
    lg: 'text-xs tracking-[0.45em]',
    xl: 'text-sm tracking-[0.5em]'
  };

  const textColor = variant === 'light' ? 'text-white' : 'text-black';
  const subColor = variant === 'light' ? 'text-zinc-400' : 'text-zinc-600';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Aerodynamic High-Performance V Monogram Icon */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]} flex items-center justify-center`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_12px_rgba(255,255,255,0.15)]"
        >
          {/* Left Wing - Dynamic Angled Blade */}
          <path
            d="M6 8L20 40H27L18 8H6Z"
            fill="currentColor"
            className={variant === 'light' ? 'text-white' : 'text-black'}
          />
          {/* Right Wing - Accelerated Sharp Strike */}
          <path
            d="M42 8L28 40H21L30 8H42Z"
            fill="currentColor"
            className={variant === 'light' ? 'text-zinc-300' : 'text-zinc-700'}
          />
          {/* Central Velocity Core Slash */}
          <path
            d="M24 14L19 28H29L24 14Z"
            fill="currentColor"
            className={variant === 'light' ? 'text-zinc-500' : 'text-zinc-400'}
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-heading font-black uppercase ${textSizes[size]} ${textColor} transition-colors`}
          style={{ letterSpacing: '0.22em' }}
        >
          VELTRO
        </span>
        {showTagline && (
          <span
            className={`font-sans font-semibold uppercase mt-0.5 ${taglineSizes[size]} ${subColor}`}
          >
            PLAY BEYOND.
          </span>
        )}
      </div>
    </div>
  );
};
