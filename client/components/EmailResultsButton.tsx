import { Mail, CheckCircle, Info } from 'lucide-react';
import { useState } from 'react';

interface EmailResultsButtonProps {
  results: {
    coverage?: number;
    retirement?: number;
    monthlyIncome?: number;
  };
  type: 'coverage' | 'retirement' | 'final-expense';
}

export function EmailResultsButton({ results, type }: EmailResultsButtonProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setEmail('');
    }, 3000);
  };

  const resultSummary = () => {
    if (type === 'coverage' && results.coverage) {
      return `Recommended coverage: $${results.coverage.toLocaleString()}`;
    }
    if (type === 'retirement' && results.retirement) {
      return `Retirement nest egg target: $${results.retirement.toLocaleString()}`;
    }
    if (type === 'final-expense' && results.monthlyIncome) {
      return `Projected monthly benefit: $${results.monthlyIncome.toLocaleString()}`;
    }
    return 'Personalized insurance insights ready to send.';
  };

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 text-green-600 animate-in fade-in">
        <CheckCircle className="w-5 h-5" />
        <span className="font-semibold">Results sent to {email}!</span>
      </div>
    );
  }

  return (
    <div className="mt-4 space-y-3">
      <div className="flex items-start gap-2 text-xs text-gray-600 bg-gray-100 rounded-lg px-3 py-2">
        <Info className="w-4 h-4 text-blue-600" aria-hidden="true" />
        <span>{resultSummary()}</span>
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <label htmlFor={`email-results-${type}`} className="sr-only">
          Email address to receive your {type.replace('-', ' ')} results
        </label>
        <input
          id={`email-results-${type}`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <Mail className="w-4 h-4" />
          Email Results
        </button>
      </form>
      <p className="text-xs text-gray-500">
        We’ll send a copy of your {type.replace('-', ' ')} summary and connect you with a licensed advisor.
      </p>
    </div>
  );
}
