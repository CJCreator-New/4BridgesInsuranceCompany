import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export function LiveChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110"
        aria-label="Open live chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-lg shadow-2xl border border-gray-200">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">Chat with Us</h3>
            <button onClick={() => setIsOpen(false)} aria-label="Close chat">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-6 text-center">
            <p className="text-gray-600 mb-4">
              This is a demo version. In production, this would connect to a live chat service.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              For immediate assistance, please call:<br />
              <strong className="text-blue-600">(555) 123-4567</strong>
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
