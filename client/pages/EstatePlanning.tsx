import ProductDetail from '@/components/ProductDetail';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { EmailResultsButton } from '@/components/EmailResultsButton';
import { FileText } from 'lucide-react';
import { useState } from 'react';

export default function EstatePlanning() {
  const [estateValue, setEstateValue] = useState(1000000);
  const [state, setState] = useState('');
  const [result, setResult] = useState<{ federalTax: number; stateTax: number; totalTax: number; netInheritance: number } | null>(null);

  const calculate = () => {
    // Federal estate tax (2024 exemption: $13.61M)
    const federalExemption = 13610000;
    const federalTaxable = Math.max(0, estateValue - federalExemption);
    const federalTax = federalTaxable * 0.40; // 40% top rate

    // State estate/inheritance tax (simplified - varies by state)
    let stateTax = 0;
    if (state === 'NY') stateTax = Math.max(0, estateValue - 6110000) * 0.16;
    else if (state === 'CA') stateTax = Math.max(0, estateValue - 1000000) * 0.125;
    else if (state === 'TX') stateTax = 0; // No state estate tax
    else stateTax = Math.max(0, estateValue - 1000000) * 0.10; // Default estimate

    const totalTax = federalTax + stateTax;
    const netInheritance = estateValue - totalTax;

    setResult({ federalTax, stateTax, totalTax, netInheritance });
  };

  return (
    <ProductDetail
      title="Estate Planning"
      icon={<FileText className="w-8 h-8" />}
      description="Estate planning ensures your assets are distributed according to your wishes and helps minimize taxes and legal complications for your loved ones."
      whyImportant={[
        '60% of Americans don\'t have a will or estate plan',
        'Probate costs average $20,000-50,000 and takes 1-2 years',
        'Without a plan, the state decides who gets your assets',
      ]}
      keyPoints={[
        'Wills: Direct who gets your assets',
        'Living Trusts: Avoid probate, maintain privacy',
        'Power of Attorney: Someone manages finances if you can\'t',
        'Healthcare Directives: Your medical wishes in writing',
      ]}
      benefits={[
        'Avoid probate court (saves time and money)',
        'Minimize estate taxes (federal exemption: $13.61M in 2024)',
        'Protect minor children with guardian appointments',
        'Prevent family disputes and legal battles',
      ]}
    >
      <div className="my-12">
        <h3 className="text-2xl font-bold text-center mb-8">Estimate Estate Taxes</h3>
        <Card className="p-6 max-w-2xl mx-auto">
          <div className="space-y-6" role="form" aria-labelledby="estate-calculator-heading">
            <h4 id="estate-calculator-heading" className="text-lg font-semibold">Calculate Potential Estate Taxes</h4>

            <div>
              <Label htmlFor="estate-value">Total Estate Value</Label>
              <Input
                id="estate-value"
                type="number"
                value={estateValue}
                onChange={(e) => setEstateValue(Number(e.target.value))}
                className="mt-2"
                min="0"
                step="10000"
                aria-describedby="estate-help"
              />
              <p id="estate-help" className="text-sm text-gray-600 mt-1">Total value of assets, investments, and property</p>
            </div>

            <div>
              <Label htmlFor="estate-state">State of Residence</Label>
              <select
                id="estate-state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                aria-describedby="state-help"
              >
                <option value="">Select your state</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
              <p id="state-help" className="text-sm text-gray-600 mt-1">State estate tax rates vary significantly</p>
            </div>

            <Button
              onClick={calculate}
              className="w-full"
              disabled={!state}
              aria-describedby="estate-calculate-help"
            >
              Calculate Estate Taxes
            </Button>
            <p id="estate-calculate-help" className="text-sm text-gray-600 text-center">
              Estimate federal and state estate taxes
            </p>

            {result && (
              <div
                className="mt-6 p-4 bg-blue-50 rounded-lg border-2 border-blue-200 animate-in fade-in"
                role="region"
                aria-labelledby="estate-results-heading"
              >
                <p id="estate-results-heading" className="text-sm text-blue-800 mb-2">Estate Tax Estimate:</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Federal Estate Tax:</span>
                    <span className="font-semibold" aria-label={`Federal tax: ${result.federalTax.toLocaleString()} dollars`}>
                      ${result.federalTax.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>State Estate Tax:</span>
                    <span className="font-semibold" aria-label={`State tax: ${result.stateTax.toLocaleString()} dollars`}>
                      ${result.stateTax.toLocaleString()}
                    </span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Taxes:</span>
                    <span aria-label={`Total taxes: ${result.totalTax.toLocaleString()} dollars`}>
                      ${result.totalTax.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-green-700 font-semibold">
                    <span>Net to Heirs:</span>
                    <span aria-label={`Net inheritance: ${result.netInheritance.toLocaleString()} dollars`}>
                      ${result.netInheritance.toLocaleString()}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-blue-600 mt-3">
                  This is a simplified estimate. Consult an estate planning attorney for accurate calculations.
                </p>
                <EmailResultsButton results={{ coverage: result.totalTax }} type="coverage" />
              </div>
            )}
          </div>
        </Card>
      </div>
    </ProductDetail>
  );
}
