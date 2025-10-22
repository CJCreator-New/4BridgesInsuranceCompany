import { useState } from 'react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { EmailResultsButton } from './EmailResultsButton';

export function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(35);
  const [retirementAge, setRetirementAge] = useState(65);
  const [currentSavings, setCurrentSavings] = useState(50000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [result, setResult] = useState<{ total: number; monthly: number } | null>(null);

  const calculate = () => {
    const years = retirementAge - currentAge;
    const rate = 0.07 / 12;
    const months = years * 12;
    
    const futureValue = currentSavings * Math.pow(1 + rate, months) +
      monthlyContribution * ((Math.pow(1 + rate, months) - 1) / rate);
    
    const monthlyIncome = (futureValue * 0.04) / 12;
    
    setResult({ total: futureValue, monthly: monthlyIncome });
  };

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-6" id="retirement-calculator-heading">Plan Your Retirement</h3>

      <div className="space-y-6" role="form" aria-labelledby="retirement-calculator-heading">
        <div>
          <Label htmlFor="current-age-slider">Current Age: {currentAge}</Label>
          <Slider
            value={[currentAge]}
            onValueChange={([v]) => setCurrentAge(v)}
            min={18}
            max={80}
            className="mt-2"
            aria-label={`Current age: ${currentAge} years`}
            aria-valuemin={18}
            aria-valuemax={80}
            aria-valuenow={currentAge}
            aria-valuetext={`${currentAge} years old`}
          />
        </div>

        <div>
          <Label htmlFor="retirement-age-slider">Retirement Age: {retirementAge}</Label>
          <Slider
            value={[retirementAge]}
            onValueChange={([v]) => setRetirementAge(v)}
            min={currentAge + 1}
            max={85}
            className="mt-2"
            aria-label={`Retirement age: ${retirementAge} years`}
            aria-valuemin={currentAge + 1}
            aria-valuemax={85}
            aria-valuenow={retirementAge}
            aria-valuetext={`${retirementAge} years old`}
          />
        </div>

        <div>
          <Label htmlFor="savings">Current Savings (401k, IRA, etc.)</Label>
          <Input
            id="savings"
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(Number(e.target.value))}
            className="mt-2"
            aria-describedby="savings-help"
            min="0"
            step="1000"
          />
          <p id="savings-help" className="text-sm text-gray-600 mt-1">Total amount in retirement accounts</p>
        </div>

        <div>
          <Label htmlFor="monthly">Monthly Contribution</Label>
          <Input
            id="monthly"
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(Number(e.target.value))}
            className="mt-2"
            aria-describedby="monthly-help"
            min="0"
            step="10"
          />
          <p id="monthly-help" className="text-sm text-gray-600 mt-1">Amount you plan to save each month</p>
        </div>

        <Button
          onClick={calculate}
          className="w-full"
          aria-describedby="retirement-calculate-help"
        >
          Calculate Retirement
        </Button>
        <p id="retirement-calculate-help" className="text-sm text-gray-600 text-center">
          Get a projection of your retirement savings and monthly income
        </p>

        {result && (
          <div
            className="mt-6 p-4 bg-green-50 rounded-lg border-2 border-green-200 animate-in fade-in slide-in-from-bottom-4"
            role="region"
            aria-labelledby="retirement-results-heading"
          >
            <p id="retirement-results-heading" className="text-sm text-green-800 mb-2">Projected at Retirement:</p>
            <p className="text-3xl font-bold text-green-900" aria-label={`Projected retirement savings: ${result.total.toLocaleString()} dollars`}>
              ${result.total.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
            <p className="text-sm text-green-700 mt-2">
              Monthly income: ${result.monthly.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
            <p className="text-xs text-green-600 mt-2">
              Based on 7% annual return and 4% withdrawal rate
            </p>
            <EmailResultsButton results={{ retirement: result.total, monthlyIncome: result.monthly }} type="retirement" />
          </div>
        )}
      </div>
    </Card>
  );
}
