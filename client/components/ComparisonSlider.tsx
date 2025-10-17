import { useState } from 'react';
import { Card } from './ui/card';

interface ComparisonSliderProps {
  leftContent: { title: string; items: string[] };
  rightContent: { title: string; items: string[] };
}

export function ComparisonSlider({ leftContent, rightContent }: ComparisonSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg">
      <div className="absolute inset-0 flex">
        <Card className="flex-1 p-6 bg-red-50 border-red-200">
          <h3 className="text-xl font-bold text-red-900 mb-4">{leftContent.title}</h3>
          <ul className="space-y-2">
            {leftContent.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-red-800">
                <span className="text-red-500">✗</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="flex-1 p-6 bg-green-50 border-green-200">
          <h3 className="text-xl font-bold text-green-900 mb-4">{rightContent.title}</h3>
          <ul className="space-y-2">
            {rightContent.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-green-800">
                <span className="text-green-500">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
      <div 
        className="absolute inset-y-0 w-1 bg-white shadow-lg cursor-ew-resize z-10"
        style={{ left: `${position}%` }}
        onMouseDown={(e) => {
          const onMove = (moveEvent: MouseEvent) => {
            const rect = e.currentTarget.parentElement?.getBoundingClientRect();
            if (rect) {
              const newPos = ((moveEvent.clientX - rect.left) / rect.width) * 100;
              setPosition(Math.max(0, Math.min(100, newPos)));
            }
          };
          const onUp = () => {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
          };
          document.addEventListener('mousemove', onMove);
          document.addEventListener('mouseup', onUp);
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <span className="text-xs">⟷</span>
        </div>
      </div>
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Card className="absolute left-0 top-0 bottom-0 w-1/2 p-6 bg-red-50 border-red-200">
          <h3 className="text-xl font-bold text-red-900 mb-4">{leftContent.title}</h3>
          <ul className="space-y-2">
            {leftContent.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-red-800">
                <span className="text-red-500">✗</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
