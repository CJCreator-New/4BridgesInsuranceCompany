import { useState } from 'react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { EmailResultsButton } from './EmailResultsButton';

export function CoverageCalculator() {
  const [age, setAge] = useState(35);
  const [income, setIncome] = useState(75000);
  const [dependents, setDependents] = useState(2);
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const multiplier = age < 40 ? 10 : age < 50 ? 8 : 6;
    const coverage = income * multiplier + (dependents * 100000);
    setResult(coverage);
  };

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-6" id="calculator-heading">Calculate Your Coverage Needs</h3>

      <div className="space-y-6" role="form" aria-labelledby="calculator-heading">
        <div>
          <Label htmlFor="age-slider">Your Age: {age}</Label>
          <Slider
            value={[age]}
            onValueChange={([v]) => setAge(v)}
            min={18}
            max={80}
            className="mt-2"
            aria-label={`Age: ${age} years`}
            aria-valuemin={18}
            aria-valuemax={80}
            aria-valuenow={age}
            aria-valuetext={`${age} years old`}
          />
        </div>

        <div>
          <Label htmlFor="income">Annual Income</Label>
          <Input
            id="income"
            type="number"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            className="mt-2"
            aria-describedby="income-help"
            min="0"
            step="1000"
          />
          <p id="income-help" className="text-sm text-gray-600 mt-1">Enter your gross annual income before taxes</p>
        </div>

        <div>
          <Label htmlFor="dependents-slider">Number of Dependents: {dependents}</Label>
          <Slider
            value={[dependents]}
            onValueChange={([v]) => setDependents(v)}
            min={0}
            max={10}
            className="mt-2"
            aria-label={`Number of dependents: ${dependents}`}
            aria-valuemin={0}
            aria-valuemax={10}
            aria-valuenow={dependents}
            aria-valuetext={`${dependents} ${dependents === 1 ? 'dependent' : 'dependents'}`}
          />
        </div>

        <Button
          onClick={calculate}
          className="w-full"
          aria-describedby="calculate-help"
        >
          Calculate Coverage
        </Button>
        <p id="calculate-help" className="text-sm text-gray-600 text-center">
          Get a personalized coverage recommendation based on your inputs
        </p>

        {result && (
          <div
            className="mt-6 p-4 bg-blue-50 rounded-lg border-2 border-blue-200 animate-in fade-in slide-in-from-bottom-4"
            role="region"
            aria-labelledby="results-heading"
          >
            <p id="results-heading" className="text-sm text-blue-800 mb-2">Recommended Coverage:</p>
            <p className="text-3xl font-bold text-blue-900" aria-label={`Recommended coverage amount: ${result.toLocaleString()} dollars`}>
              ${result.toLocaleString()}
            </p>
            <p className="text-sm text-blue-700 mt-2">
              This ensures your family maintains their lifestyle for {age < 40 ? '10' : age < 50 ? '8' : '6'} years
            </p>
            <EmailResultsButton results={{ coverage: result }} type="coverage" />
          </div>
        )}
      </div>
    </Card>
  );
}
