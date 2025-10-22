import ProductDetail from '@/components/ProductDetail';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { EmailResultsButton } from '@/components/EmailResultsButton';
import { Building2 } from 'lucide-react';
import { useState } from 'react';

export default function Medicare() {
  const [age, setAge] = useState(65);
  const [income, setIncome] = useState(50000);
  const [supplementType, setSupplementType] = useState('');
  const [result, setResult] = useState<{ partB: number; supplement: number; total: number } | null>(null);

  const calculate = () => {
    // Medicare Part B premium (2024 standard amount)
    const partB = 174.70;

    // Supplement premiums (approximate 2024 rates)
    let supplement = 0;
    if (supplementType === 'plan-f') supplement = 239;
    else if (supplementType === 'plan-g') supplement = 219;
    else if (supplementType === 'plan-n') supplement = 117;

    // Income-based adjustment for Part B (simplified)
    let adjustedPartB = partB;
    if (income > 100000) adjustedPartB *= 1.2; // Simplified adjustment

    const total = adjustedPartB + supplement;

    setResult({ partB: adjustedPartB, supplement, total });
  };

  return (
    <ProductDetail
      icon={<Building2 className="w-8 h-8" />}
      title="Medicare"
      description="At 64, Robert was confused about Medicare. 'Part A, Part B, Medigap, Advantage—what does it all mean?' Our advisor walked him through every option. Now at 68, he has the perfect plan covering his heart medication, doctor visits, and recent hip surgery. Medicare doesn't have to be complicated."
      whyImportant={[
        '65 million Americans rely on Medicare',
        'Original Medicare covers only 80% of costs',
        'Missing enrollment deadlines costs you money',
      ]}
      keyPoints={[
        'Part A: Hospital insurance (usually premium-free)',
        'Part B: Doctor visits and outpatient care ($174.70/month in 2024)',
        'Part C: Medicare Advantage (all-in-one alternative)',
        'Part D: Prescription drug coverage',
      ]}
      benefits={[
        'Access to 1M+ doctors and hospitals nationwide',
        'Preventive care at no cost',
        'Prescription drug coverage with low copays',
        'Supplemental plans cover the 20% gap',
      ]}
    >
      <div className="my-12">
        <h3 className="text-2xl font-bold text-center mb-8">Estimate Your Medicare Costs</h3>
        <Card className="p-6 max-w-2xl mx-auto">
          <div className="space-y-6" role="form" aria-labelledby="medicare-calculator-heading">
            <h4 id="medicare-calculator-heading" className="text-lg font-semibold">Calculate Your Medicare Premiums</h4>

            <div>
              <Label htmlFor="medicare-age">Your Age</Label>
              <Input
                id="medicare-age"
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="mt-2"
                min="65"
                max="120"
                aria-describedby="medicare-age-help"
              />
              <p id="medicare-age-help" className="text-sm text-gray-600 mt-1">Must be 65 or older for Medicare eligibility</p>
            </div>

            <div>
              <Label htmlFor="medicare-income">Annual Income</Label>
              <Input
                id="medicare-income"
                type="number"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="mt-2"
                min="0"
                step="1000"
                aria-describedby="income-help"
              />
              <p id="income-help" className="text-sm text-gray-600 mt-1">Affects Part B premium adjustments</p>
            </div>

            <div>
              <Label htmlFor="supplement-type">Medigap Supplement Plan (Optional)</Label>
              <Select value={supplementType} onValueChange={setSupplementType}>
                <SelectTrigger className="mt-2" aria-describedby="supplement-help">
                  <SelectValue placeholder="Select supplement plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No Supplement (Original Medicare only)</SelectItem>
                  <SelectItem value="plan-f">Plan F - Comprehensive coverage</SelectItem>
                  <SelectItem value="plan-g">Plan G - Similar to F, lower premium</SelectItem>
                  <SelectItem value="plan-n">Plan N - Lower premium, higher cost-sharing</SelectItem>
                </SelectContent>
              </Select>
              <p id="supplement-help" className="text-sm text-gray-600 mt-1">Supplemental plans cover Medicare's 20% gaps</p>
            </div>

            <Button
              onClick={calculate}
              className="w-full"
              aria-describedby="medicare-calculate-help"
            >
              Calculate Premiums
            </Button>
            <p id="medicare-calculate-help" className="text-sm text-gray-600 text-center">
              Estimate your monthly Medicare costs
            </p>

            {result && (
              <div
                className="mt-6 p-4 bg-blue-50 rounded-lg border-2 border-blue-200 animate-in fade-in"
                role="region"
                aria-labelledby="medicare-results-heading"
              >
                <p id="medicare-results-heading" className="text-sm text-blue-800 mb-2">Estimated Monthly Premiums:</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Part B (Medical):</span>
                    <span className="font-semibold" aria-label={`Part B premium: ${result.partB} dollars`}>
                      ${result.partB.toFixed(2)}
                    </span>
                  </div>
                  {result.supplement > 0 && (
                    <div className="flex justify-between">
                      <span>Medigap Supplement:</span>
                      <span className="font-semibold" aria-label={`Supplement premium: ${result.supplement} dollars`}>
                        ${result.supplement.toFixed(2)}
                      </span>
                    </div>
                  )}
                  <hr className="my-2" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Monthly:</span>
                    <span aria-label={`Total monthly premium: ${result.total} dollars`}>
                      ${result.total.toFixed(2)}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-blue-600 mt-3">
                  Rates are estimates for 2024. Actual premiums vary by location and plan selection.
                </p>
                <EmailResultsButton results={{ coverage: result.total }} type="coverage" />
              </div>
            )}
          </div>
        </Card>
      </div>
    </ProductDetail>
  );
}
