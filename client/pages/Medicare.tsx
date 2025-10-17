import ProductDetail from '@/components/ProductDetail';
import { Building2 } from 'lucide-react';

export default function Medicare() {
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
    />
  );
}
