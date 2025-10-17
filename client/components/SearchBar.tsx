import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const searchItems = [
    { title: 'Life Insurance', path: '/life-insurance', keywords: 'life insurance death benefit protection' },
    { title: 'Health Insurance', path: '/health-insurance', keywords: 'health medical coverage doctor' },
    { title: 'Retirement Planning', path: '/retirement-planning', keywords: 'retirement 401k ira pension' },
    { title: 'Medicare', path: '/medicare', keywords: 'medicare senior healthcare' },
    { title: 'Final Expense', path: '/final-expense-insurance', keywords: 'final expense funeral burial' },
    { title: 'Estate Planning', path: '/estate-planning', keywords: 'estate will trust legacy' },
    { title: 'About Us', path: '/about-us', keywords: 'about company mission values' },
    { title: 'Contact', path: '/contact', keywords: 'contact phone email address' },
  ];

  const filteredItems = query.length > 0
    ? searchItems.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelect = (path: string) => {
    navigate(path);
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-100"
        aria-label="Search"
      >
        <Search className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4">
            <div className="p-4 border-b border-gray-200 flex items-center">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for insurance products, pages..."
                className="flex-1 outline-none text-lg"
                autoFocus
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close search"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {filteredItems.length > 0 && (
              <div className="max-h-96 overflow-y-auto">
                {filteredItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleSelect(item.path)}
                    className="w-full text-left px-6 py-4 hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-0"
                  >
                    <div className="font-semibold text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.path}</div>
                  </button>
                ))}
              </div>
            )}

            {query.length > 0 && filteredItems.length === 0 && (
              <div className="p-8 text-center text-gray-500">
                No results found for "{query}"
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
