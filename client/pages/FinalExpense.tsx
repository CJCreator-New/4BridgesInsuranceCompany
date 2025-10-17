import ProductDetail from '@/components/ProductDetail';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { EmailResultsButton } from '@/components/EmailResultsButton';
import { Shield } from 'lucide-react';
import { useState } from 'react';

export default function FinalExpense() {
  const [coverage, setCoverage] = useState(15000);
  const [result, setResult] = useState<number | null>(null);
  const estimatedPremium = Math.round((coverage / 1000) * 3.5);

  const calculate = () => {
    setResult(estimatedPremium);
  };

  return (
    <ProductDetail
      title="Final Expense Insurance"
      icon={<Shield className="w-8 h-8" />}
      description="Final expense insurance provides affordable coverage specifically designed to help cover end-of-life expenses, ensuring your loved ones aren't burdened with funeral costs and related expenses during an already difficult time."
      whyImportant={[
        'Funeral costs average $7,000-$12,000 and are rising',
        'Traditional life insurance may not cover all final expenses',
        'Provides peace of mind knowing final arrangements are covered',
        'Helps preserve family savings and inheritance',
      ]}
      keyPoints={[
        'Ages 50-85 qualify with guaranteed acceptance',
        'No medical exam required - just simple health questions',
        'Fixed premiums that never increase',
        'Benefits paid directly to funeral home within 24-48 hours',
        'Coverage amounts from $5,000 to $50,000',
        'Available in all 50 states',
      ]}
      benefits={[
        'Covers funeral service, casket, burial plot',
        'Pays for cremation, memorial service, flowers',
        'Covers outstanding medical bills',
        'Leaves extra for family expenses',
      ]}
    >
      <div className="my-12">
        <h3 className="text-2xl font-bold text-center mb-8">Calculate Your Coverage</h3>
        <Card className="p-6 max-w-2xl mx-auto">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Coverage Amount:</span>
                <span className="text-2xl font-bold text-blue-600">${coverage.toLocaleString()}</span>
              </div>
              <Slider 
                value={[coverage]} 
                onValueChange={([v]) => setCoverage(v)} 
                min={5000} 
                max={50000} 
                step={1000}
                className="mt-2"
              />
            </div>
            <Button onClick={calculate} className="w-full">Calculate Premium</Button>
            {result && (
              <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200 animate-in fade-in">
                <p className="text-sm text-blue-800 mb-2">Estimated Monthly Premium:</p>
                <p className="text-3xl font-bold text-blue-900">${result}/month</p>
                <p className="text-xs text-blue-600 mt-2">Based on age 65, non-smoker. Actual rates may vary.</p>
                <EmailResultsButton results={{ coverage: result }} type="final-expense" />
              </div>
            )}
          </div>
        </Card>
      </div>
    </ProductDetail>
  );
}
