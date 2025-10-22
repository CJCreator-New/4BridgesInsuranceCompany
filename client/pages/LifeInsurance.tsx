import ProductDetail from '@/components/ProductDetail';
import { CoverageCalculator } from '@/components/CoverageCalculator';
import { Heart } from 'lucide-react';
import { Typewriter, InfoBanner } from '@/components/bits';

export default function LifeInsurance() {
  return (
    <ProductDetail
      title="Life Insurance"
      icon={<Heart className="w-8 h-8" />}
      description="Life insurance provides financial protection for your loved ones in the event of your passing, ensuring they can maintain their lifestyle and meet important financial obligations."
      whyImportant={[
        '60% of Americans are underinsured or have no life insurance',
        'Average funeral costs $7,000-12,000 in the US',
        'Your family could lose your home without income replacement',
      ]}
      keyPoints={[
        'Term Life: Affordable coverage for 10, 20, or 30 years',
        'Whole Life: Lifetime coverage with cash value growth',
        'Coverage amounts from $100K to $5M+',
        'No medical exam options available',
      ]}
      benefits={[
        'Tax-free death benefit to your beneficiaries',
        'Replaces lost income for your family',
        'Pays off mortgage, car loans, credit cards',
        'Funds children\'s education',
        'Covers final expenses and estate taxes',
      ]}
      banner={
        <InfoBanner
          type="urgent"
          message="Limited Time: Get 20% off your first year premium when you apply by December 31st!"
        />
      }
    >
      <div className="my-12">
        <Typewriter
          text="Calculate Your Coverage Needs"
          className="text-2xl font-bold text-center mb-8"
          speed={50}
        />
        <CoverageCalculator />
      </div>
    </ProductDetail>
  );
}
