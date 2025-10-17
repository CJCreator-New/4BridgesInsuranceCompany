import { Download, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const screenshots = [
  { name: 'Home', filename: 'home.png', path: '/' },
  { name: 'Life Insurance', filename: 'life-insurance.png', path: '/life-insurance' },
  { name: 'Retirement Planning', filename: 'retirement-planning.png', path: '/retirement-planning' },
  { name: 'Health Insurance', filename: 'health-insurance.png', path: '/health-insurance' },
  { name: 'Medicare', filename: 'medicare.png', path: '/medicare' },
  { name: 'Final Expense', filename: 'final-expense.png', path: '/final-expense' },
  { name: 'Final Expense (Alt)', filename: 'final-expense-insurance.png', path: '/final-expense-insurance' },
  { name: 'Estate Planning', filename: 'estate-planning.png', path: '/estate-planning' },
  { name: 'About Us', filename: 'about-us.png', path: '/about-us' },
  { name: 'Careers', filename: 'careers.png', path: '/careers' },
  { name: 'Contact', filename: 'contact.png', path: '/contact' },
  { name: 'Partners', filename: 'partners.png', path: '/partners' },
  { name: 'Pages Gallery', filename: 'pages-gallery.png', path: '/pages-gallery' },
  { name: 'Download Gallery', filename: 'download-gallery.png', path: '/download-gallery' },
];

export default function DownloadGallery() {
  const handleDownload = (filename: string) => {
    const link = document.createElement('a');
    link.href = `/screenshots/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadAll = () => {
    screenshots.forEach((screenshot, index) => {
      setTimeout(() => {
        handleDownload(screenshot.filename);
      }, index * 500); // Stagger downloads to avoid browser blocking
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Screenshots Gallery</h1>
          <p className="text-xl text-gray-600 mb-6">Download or view all page screenshots</p>
          <Button onClick={handleDownloadAll} size="lg" className="gap-2">
            <Download className="w-5 h-5" />
            Download All Screenshots
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((screenshot) => (
            <Card key={screenshot.filename} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center justify-between">
                  {screenshot.name}
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(`/screenshots/${screenshot.filename}`, '_blank')}
                      className="gap-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDownload(screenshot.filename)}
                      className="gap-1"
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <img
                  src={`/screenshots/${screenshot.filename}`}
                  alt={screenshot.name}
                  className="w-full h-48 object-cover object-top cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => window.open(`/screenshots/${screenshot.filename}`, '_blank')}
                />
                <div className="p-4 bg-gray-50 text-sm text-gray-600 font-mono">
                  {screenshot.path}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
