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
      <h3 className="text-2xl font-bold mb-6">Plan Your Retirement</h3>
      
      <div className="space-y-6">
        <div>
          <Label>Current Age: {currentAge}</Label>
          <Slider value={[currentAge]} onValueChange={([v]) => setCurrentAge(v)} min={18} max={80} className="mt-2" />
        </div>

        <div>
          <Label>Retirement Age: {retirementAge}</Label>
          <Slider value={[retirementAge]} onValueChange={([v]) => setRetirementAge(v)} min={currentAge + 1} max={85} className="mt-2" />
        </div>

        <div>
          <Label htmlFor="savings">Current Savings (401k, IRA, etc.)</Label>
          <Input 
            id="savings"
            type="number" 
            value={currentSavings} 
            onChange={(e) => setCurrentSavings(Number(e.target.value))}
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="monthly">Monthly Contribution</Label>
          <Input 
            id="monthly"
            type="number" 
            value={monthlyContribution} 
            onChange={(e) => setMonthlyContribution(Number(e.target.value))}
            className="mt-2"
          />
        </div>

        <Button onClick={calculate} className="w-full">Calculate Retirement</Button>

        {result && (
          <div className="mt-6 p-4 bg-green-50 rounded-lg border-2 border-green-200 animate-in fade-in slide-in-from-bottom-4">
            <p className="text-sm text-green-800 mb-2">Projected at Retirement:</p>
            <p className="text-3xl font-bold text-green-900">
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
