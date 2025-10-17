import ProductDetail from '@/components/ProductDetail';
import { FileText } from 'lucide-react';

export default function EstatePlanning() {
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
    />
  );
}
