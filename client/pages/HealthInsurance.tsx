import ProductDetail from '@/components/ProductDetail';
import { Stethoscope } from 'lucide-react';

export default function HealthInsurance() {
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
    />
  );
}
