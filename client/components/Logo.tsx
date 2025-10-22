import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'full' | 'icon' | 'text';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function Logo({ variant = 'full', size = 'md', className }: LogoProps) {
  const iconSizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 64 64"
        className={cn(iconSizeClasses[size], className)}
        role="img"
        aria-label="4 Bridges Insurance Company Logo"
      >
        {/* Bridge Structure */}
        <path
          d="M8 40 L16 32 L24 36 L32 28 L40 32 L48 24 L56 28"
          stroke="#1e40af"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Bridge Pillars */}
        <rect x="6" y="40" width="4" height="12" fill="#1e40af" rx="2" />
        <rect x="26" y="32" width="4" height="20" fill="#1e40af" rx="2" />
        <rect x="46" y="28" width="4" height="24" fill="#1e40af" rx="2" />
        <rect x="54" y="28" width="4" height="24" fill="#1e40af" rx="2" />

        {/* Shield Protection Symbol */}
        <path
          d="M32 12 L26 18 L26 26 L32 32 L38 26 L38 18 Z"
          fill="#dc2626"
          stroke="#991b1b"
          strokeWidth="2"
        />

        {/* Shield Inner Design */}
        <path
          d="M32 16 L28 20 L28 24 L32 28 L36 24 L36 20 Z"
          fill="#ffffff"
          opacity="0.9"
        />

        {/* Number 4 on Shield */}
        <text
          x="32"
          y="24"
          textAnchor="middle"
          fontSize="8"
          fontWeight="bold"
          fill="#1e40af"
          fontFamily="Arial, sans-serif"
        >
          4
        </text>
      </svg>
    );
  }

  if (variant === 'text') {
    return (
      <div className={cn('flex flex-col', className)}>
        <span className="font-bold text-blue-600 leading-tight">
          4 BRIDGES
        </span>
        <span className="text-sm text-gray-600 font-medium">
          Insurance Company
        </span>
      </div>
    );
  }

  // Full logo (default)
  return (
    <div className={cn('flex items-center space-x-3', className)}>
      <svg
        viewBox="0 0 64 64"
        className={cn(iconSizeClasses[size])}
        role="img"
        aria-label="4 Bridges Insurance Company Logo"
      >
        {/* Bridge Structure */}
        <path
          d="M8 40 L16 32 L24 36 L32 28 L40 32 L48 24 L56 28"
          stroke="#1e40af"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Bridge Pillars */}
        <rect x="6" y="40" width="4" height="12" fill="#1e40af" rx="2" />
        <rect x="26" y="32" width="4" height="20" fill="#1e40af" rx="2" />
        <rect x="46" y="28" width="4" height="24" fill="#1e40af" rx="2" />
        <rect x="54" y="28" width="4" height="24" fill="#1e40af" rx="2" />

        {/* Shield Protection Symbol */}
        <path
          d="M32 12 L26 18 L26 26 L32 32 L38 26 L38 18 Z"
          fill="#dc2626"
          stroke="#991b1b"
          strokeWidth="2"
        />

        {/* Shield Inner Design */}
        <path
          d="M32 16 L28 20 L28 24 L32 28 L36 24 L36 20 Z"
          fill="#ffffff"
          opacity="0.9"
        />

        {/* Number 4 on Shield */}
        <text
          x="32"
          y="24"
          textAnchor="middle"
          fontSize="8"
          fontWeight="bold"
          fill="#1e40af"
          fontFamily="Arial, sans-serif"
        >
          4
        </text>
      </svg>

      <div className="flex flex-col">
        <span className="font-bold text-blue-600 leading-tight text-lg">
          4 BRIDGES
        </span>
        <span className="text-sm text-gray-600 font-medium">
          Insurance Company
        </span>
      </div>
    </div>
  );
}

// Alternative logo variations for different use cases

export function LogoMinimal({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn('w-8 h-8', className)}
      role="img"
      aria-label="4 Bridges Insurance Company Logo"
    >
      {/* Simplified Bridge */}
      <path
        d="M8 40 L16 32 L24 36 L32 28 L40 32 L48 24 L56 28"
        stroke="#1e40af"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />

      {/* Shield */}
      <path
        d="M32 12 L26 18 L26 26 L32 32 L38 26 L38 18 Z"
        fill="#dc2626"
        stroke="#991b1b"
        strokeWidth="2"
      />

      <text
        x="32"
        y="24"
        textAnchor="middle"
        fontSize="8"
        fontWeight="bold"
        fill="#1e40af"
        fontFamily="Arial, sans-serif"
      >
        4
      </text>
    </svg>
  );
}

export function LogoHorizontal({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <svg
        viewBox="0 0 64 64"
        className="w-10 h-10 flex-shrink-0"
        role="img"
        aria-label="4 Bridges Insurance Company Logo"
      >
        {/* Bridge Structure */}
        <path
          d="M8 40 L16 32 L24 36 L32 28 L40 32 L48 24 L56 28"
          stroke="#1e40af"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Bridge Pillars */}
        <rect x="6" y="40" width="4" height="12" fill="#1e40af" rx="2" />
        <rect x="26" y="32" width="4" height="20" fill="#1e40af" rx="2" />
        <rect x="46" y="28" width="4" height="24" fill="#1e40af" rx="2" />
        <rect x="54" y="28" width="4" height="24" fill="#1e40af" rx="2" />

        {/* Shield Protection Symbol */}
        <path
          d="M32 12 L26 18 L26 26 L32 32 L38 26 L38 18 Z"
          fill="#dc2626"
          stroke="#991b1b"
          strokeWidth="2"
        />

        {/* Shield Inner Design */}
        <path
          d="M32 16 L28 20 L28 24 L32 28 L36 24 L36 20 Z"
          fill="#ffffff"
          opacity="0.9"
        />

        {/* Number 4 on Shield */}
        <text
          x="32"
          y="24"
          textAnchor="middle"
          fontSize="8"
          fontWeight="bold"
          fill="#1e40af"
          fontFamily="Arial, sans-serif"
        >
          4
        </text>
      </svg>

      <div className="flex flex-col">
        <span className="font-bold text-blue-600 leading-tight">
          4 BRIDGES INSURANCE
        </span>
        <span className="text-xs text-gray-500 font-medium">
          Protecting American Families Since 1999
        </span>
      </div>
    </div>
  );
}