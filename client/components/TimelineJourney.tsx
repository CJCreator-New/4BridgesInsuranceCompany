import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card } from './ui/card';

interface TimelineStep {
  age: string;
  title: string;
  description: string;
  icon: string;
}

interface TimelineJourneyProps {
  steps: TimelineStep[];
}

export function TimelineJourney({ steps }: TimelineJourneyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative py-12">
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200" />
      
      <div className="space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
          >
            <Card className={`flex-1 p-6 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
              <div className="text-sm font-semibold text-blue-600 mb-2">{step.age}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </Card>
            
            <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white text-2xl shadow-lg">
              {step.icon}
            </div>
            
            <div className="flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
