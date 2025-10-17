import ProductDetail from '@/components/ProductDetail';
import { RetirementCalculator } from '@/components/RetirementCalculator';
import { Target } from 'lucide-react';

export default function RetirementPlanning() {
  return (
    <ProductDetail
      icon={<Target className="w-8 h-8" />}
      title="Retirement Planning"
      description="Tom and Linda from Arizona retired at 62 with $1.2M saved. They travel 6 months a year, help their grandkids with college, and never worry about money. With proper planning, this can be your story too."
      whyImportant={[
        'Only 36% of Americans feel confident about retirement savings',
        'Average retirement lasts 20-30 years—you need a solid plan',
        'Social Security replaces only 40% of pre-retirement income',
      ]}
      keyPoints={[
        '401(k) plans with employer matching (free money!)',
        'Traditional and Roth IRA options for tax advantages',
        'Annuities for guaranteed lifetime income',
        'Social Security optimization strategies',
      ]}
      benefits={[
        'Tax-deferred growth in 401(k) and Traditional IRA',
        'Tax-free withdrawals from Roth accounts',
        'Protection from market volatility with annuities',
        'Personalized plans for early, normal, or late retirement',
      ]}
    >
      <div className="my-12">
        <h3 className="text-2xl font-bold text-center mb-8">Plan Your Retirement</h3>
        <RetirementCalculator />
      </div>
    </ProductDetail>
  );
}
