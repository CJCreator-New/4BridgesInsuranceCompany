import ProductDetail from '@/components/ProductDetail';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { EmailResultsButton } from '@/components/EmailResultsButton';
import { Stethoscope } from 'lucide-react';
import { useState } from 'react';
import { FadeIn, InfoBanner } from '@/components/bits';
import { EnhancedFormInput } from '@/components/EnhancedFormInput';
import { motion } from 'framer-motion';

export default function HealthInsurance() {
  const [age, setAge] = useState(35);
  const [zipCode, setZipCode] = useState('');
  const [coverageType, setCoverageType] = useState('');
  const [householdSize, setHouseholdSize] = useState(1);
  const [result, setResult] = useState<{ monthly: number; annual: number } | null>(null);

  const calculate = () => {
    // Simplified calculation based on age and coverage type
    let baseRate = 0;
    if (coverageType === 'individual') baseRate = 300;
    else if (coverageType === 'family') baseRate = 800;
    else if (coverageType === 'medicare') baseRate = 150;

    const ageMultiplier = age < 30 ? 0.8 : age < 50 ? 1.0 : age < 65 ? 1.3 : 1.1;
    const householdMultiplier = coverageType === 'family' ? householdSize * 0.3 : 1;

    const monthlyPremium = Math.round(baseRate * ageMultiplier * householdMultiplier);
    const annualPremium = monthlyPremium * 12;

    setResult({ monthly: monthlyPremium, annual: annualPremium });
  };

  return (
    <ProductDetail
      icon={<Stethoscope className="w-8 h-8" />}
      title="Health Insurance"
      description="When Sarah from Ohio needed emergency surgery, her health insurance covered $87,000 in medical bills. She paid just $2,500. That's the peace of mind we provide to thousands of American families."
      whyImportant={[
        'Average US hospital stay costs $15,000+ without insurance',
        'Access to 500,000+ in-network providers nationwide',
        'Preventive care saves lives—early detection is key',
      ]}
      keyPoints={[
        'ACA-compliant plans covering essential health benefits',
        'HSA-compatible high-deductible options',
        'Nationwide PPO and HMO network access',
        'Telemedicine included at no extra cost',
      ]}
      benefits={[
        'Zero-cost preventive care (annual checkups, vaccines)',
        'Prescription drug coverage with mail-order savings',
        'Mental health and substance abuse coverage',
        'Maternity and newborn care included',
      ]}
      banner={
        <InfoBanner
          type="info"
          message="Open Enrollment Period: Apply for 2024 coverage through December 15th!"
        />
      }
    >
      <div className="my-12">
        <FadeIn duration={0.6} delay={0.1}>
          <h3 className="text-2xl font-bold text-center mb-8">Estimate Your Health Insurance Premium</h3>
        </FadeIn>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-6 max-w-2xl mx-auto">
            <div className="space-y-6" role="form" aria-labelledby="health-calculator-heading">
              <h4 id="health-calculator-heading" className="text-lg font-semibold">Get a Premium Estimate</h4>

              <div>
                <EnhancedFormInput
                  label="Your Age"
                  type="number"
                  value={age.toString()}
                  onChange={(e) => setAge(Number(e.target.value))}
                  required
                />
                <p className="text-sm text-gray-600 mt-1">Age affects premium rates</p>
              </div>

              <div>
                <EnhancedFormInput
                  label="ZIP Code"
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder="12345"
                  required
                />
                <p className="text-sm text-gray-600 mt-1">Location affects available plans and rates</p>
              </div>

              <div>
                <Label htmlFor="coverage-type">Coverage Type</Label>
                <Select value={coverageType} onValueChange={setCoverageType}>
                  <SelectTrigger className="mt-2" aria-describedby="coverage-help">
                    <SelectValue placeholder="Select coverage type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual</SelectItem>
                    <SelectItem value="family">Family</SelectItem>
                    <SelectItem value="medicare">Medicare Supplement</SelectItem>
                  </SelectContent>
                </Select>
                <p id="coverage-help" className="text-sm text-gray-600 mt-1">Choose the type of coverage you need</p>
              </div>

              {coverageType === 'family' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <EnhancedFormInput
                      label="Household Size"
                      type="number"
                      value={householdSize.toString()}
                      onChange={(e) => setHouseholdSize(Number(e.target.value))}
                      required
                    />
                    <p className="text-sm text-gray-600 mt-1">Number of people to cover</p>
                  </div>
                </motion.div>
              )}

              <Button
                onClick={calculate}
                className="w-full"
                disabled={!coverageType || !zipCode}
                aria-describedby="health-calculate-help"
              >
                Estimate Premium
              </Button>
              <p id="health-calculate-help" className="text-sm text-gray-600 text-center">
                Get an estimate for your health insurance premium
              </p>

              {result && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="mt-6 p-4 bg-blue-50 rounded-lg border-2 border-blue-200"
                  role="region"
                  aria-labelledby="health-results-heading"
                >
                  <p id="health-results-heading" className="text-sm text-blue-800 mb-2">Estimated Premium:</p>
                  <p className="text-2xl font-bold text-blue-900" aria-label={`Monthly premium: ${result.monthly} dollars`}>
                    ${result.monthly}/month
                  </p>
                  <p className="text-sm text-blue-700 mt-1" aria-label={`Annual premium: ${result.annual} dollars`}>
                    (${result.annual.toLocaleString()}/year)
                  </p>
                  <p className="text-xs text-blue-600 mt-2">
                    This is an estimate only. Actual rates vary by location, health status, and plan selection.
                  </p>
                  <EmailResultsButton results={{ coverage: result.monthly }} type="coverage" />
                </motion.div>
              )}
            </div>
          </Card>
        </motion.div>
      </div>
    </ProductDetail>
  );
}
