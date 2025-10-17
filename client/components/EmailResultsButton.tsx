import { Mail, CheckCircle } from 'lucide-react';
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

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 text-green-600 animate-in fade-in">
        <CheckCircle className="w-5 h-5" />
        <span className="font-semibold">Results sent to {email}!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
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
  );
}
