import { ArrowLeft, BookOpen, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useMemo } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  category: string;
}

const glossaryData: GlossaryTerm[] = [
  {
    id: 'term-life-insurance',
    term: 'Term Life Insurance',
    definition: 'A type of life insurance that provides coverage for a specific period of time (term), such as 10, 20, or 30 years. It pays a death benefit if the insured dies during the term, but offers no cash value or investment component.',
    category: 'Life Insurance'
  },
  {
    id: 'whole-life-insurance',
    term: 'Whole Life Insurance',
    definition: 'A type of permanent life insurance that provides lifetime coverage and builds cash value over time. Premiums are fixed and never increase, and policyholders can borrow against the accumulated cash value.',
    category: 'Life Insurance'
  },
  {
    id: 'death-benefit',
    term: 'Death Benefit',
    definition: 'The amount of money paid to beneficiaries when the insured person passes away. This is the primary purpose of life insurance - to provide financial protection for loved ones.',
    category: 'Life Insurance'
  },
  {
    id: 'premium',
    term: 'Premium',
    definition: 'The amount of money paid regularly to maintain an insurance policy. Premiums can be paid monthly, quarterly, semi-annually, or annually, and vary based on coverage amount, age, health, and other factors.',
    category: 'General'
  },
  {
    id: 'deductible',
    term: 'Deductible',
    definition: 'The amount you must pay out-of-pocket before your insurance coverage begins to pay. Higher deductibles typically mean lower premiums but more out-of-pocket costs when you need care.',
    category: 'Health Insurance'
  },
  {
    id: 'coinsurance',
    term: 'Coinsurance',
    definition: 'The percentage of costs you share with your insurance company after meeting your deductible. For example, 80/20 coinsurance means you pay 20% of covered costs and insurance pays 80%.',
    category: 'Health Insurance'
  },
  {
    id: 'copayment',
    term: 'Copayment (Copay)',
    definition: 'A fixed amount you pay for covered services, such as $20 for a doctor visit or $10 for a prescription. Copays are common in HMO plans and are paid at the time of service.',
    category: 'Health Insurance'
  },
  {
    id: 'ppo',
    term: 'PPO (Preferred Provider Organization)',
    definition: 'A type of health insurance plan that offers more flexibility in choosing doctors and hospitals. You can see any provider, but using in-network providers costs less. Premiums are higher than HMOs.',
    category: 'Health Insurance'
  },
  {
    id: 'hmo',
    term: 'HMO (Health Maintenance Organization)',
    definition: 'A type of health insurance that requires you to use doctors and hospitals within the plan\'s network. You typically need referrals to see specialists. HMOs have lower premiums but more restrictions.',
    category: 'Health Insurance'
  },
  {
    id: 'medicare-advantage',
    term: 'Medicare Advantage (Part C)',
    definition: 'Private insurance plans that replace Original Medicare (Parts A and B). These plans often include prescription drug coverage (Part D) and may offer additional benefits like vision, dental, and hearing coverage.',
    category: 'Medicare'
  },
  {
    id: 'medicare-supplement',
    term: 'Medicare Supplement (Medigap)',
    definition: 'Private insurance policies that help pay for costs not covered by Original Medicare, such as copayments, coinsurance, and deductibles. These plans work alongside Original Medicare.',
    category: 'Medicare'
  },
  {
    id: 'open-enrollment',
    term: 'Open Enrollment',
    definition: 'The annual period when you can enroll in or change health insurance plans through the Health Insurance Marketplace. Outside this period, you can only make changes during special enrollment periods due to qualifying life events.',
    category: 'Health Insurance'
  },
  {
    id: 'underwriting',
    term: 'Underwriting',
    definition: 'The process insurance companies use to evaluate risk and determine whether to issue a policy and at what premium rate. Factors considered include age, health, occupation, lifestyle, and medical history.',
    category: 'General'
  },
  {
    id: 'rider',
    term: 'Rider',
    definition: 'An add-on to a basic insurance policy that provides additional coverage or modifies the policy\'s terms. Common riders include waiver of premium (if disabled), accidental death benefit, and long-term care riders.',
    category: 'Life Insurance'
  },
  {
    id: 'beneficiary',
    term: 'Beneficiary',
    definition: 'The person or entity designated to receive the death benefit from a life insurance policy. You can name primary and contingent beneficiaries, and change them as needed during your lifetime.',
    category: 'Life Insurance'
  },
  {
    id: '401k',
    term: '401(k) Plan',
    definition: 'An employer-sponsored retirement savings plan that allows employees to contribute pre-tax dollars from their paycheck. Many employers offer matching contributions, which is essentially "free money" for retirement.',
    category: 'Retirement'
  },
  {
    id: 'ira',
    term: 'IRA (Individual Retirement Account)',
    definition: 'A personal retirement savings account that offers tax advantages. Traditional IRAs provide tax deductions on contributions, while Roth IRAs offer tax-free withdrawals in retirement. Contribution limits apply annually.',
    category: 'Retirement'
  },
  {
    id: 'annuity',
    term: 'Annuity',
    definition: 'An insurance product that provides guaranteed income payments, typically in retirement. You can purchase immediate annuities (start payments right away) or deferred annuities (grow tax-deferred until retirement).',
    category: 'Retirement'
  },
  {
    id: 'estate-planning',
    term: 'Estate Planning',
    definition: 'The process of arranging for the management and disposal of your estate during your life and after death. This includes wills, trusts, power of attorney, healthcare directives, and beneficiary designations.',
    category: 'Estate Planning'
  },
  {
    id: 'probate',
    term: 'Probate',
    definition: 'The legal process of validating a will and distributing assets after death. Probate can be time-consuming (1-2 years) and expensive (3-7% of estate value). Trusts and beneficiary designations can help avoid probate.',
    category: 'Estate Planning'
  },
  {
    id: 'trust',
    term: 'Trust',
    definition: 'A legal arrangement where one party (trustee) holds property for the benefit of another (beneficiary). Living trusts can help avoid probate, maintain privacy, and provide asset protection. Revocable trusts can be changed during your lifetime.',
    category: 'Estate Planning'
  }
];

const categories = ['All', 'Life Insurance', 'Health Insurance', 'Medicare', 'Retirement', 'Estate Planning', 'General'];

export default function InsuranceGlossary() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const filteredGlossary = useMemo(() => {
    let filtered = selectedCategory === 'All'
      ? glossaryData
      : glossaryData.filter(item => item.category === selectedCategory);

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [selectedCategory, searchTerm]);

  return (
    <Layout>
      <SEO
        title="Insurance Glossary"
        description="Comprehensive insurance glossary with definitions of key terms for life insurance, health insurance, Medicare, retirement planning, and estate planning."
        keywords="insurance glossary, insurance terms, definitions, life insurance terms, health insurance terms"
      />
      <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>

          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
              <BookOpen className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Insurance Glossary</h1>
          </div>
          <span className="sr-only">glossary</span>
          <p className="text-xl text-blue-100 max-w-2xl">
            Understanding insurance terminology is key to making informed decisions. Browse our comprehensive glossary of insurance terms.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search terms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Showing {filteredGlossary.length} of {glossaryData.length} terms
          </p>
        </div>
      </section>

      {/* Glossary Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredGlossary.map(item => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <h3 className="text-lg font-semibold text-gray-900">{item.term}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.category === 'Life Insurance' ? 'bg-blue-100 text-blue-800' :
                      item.category === 'Health Insurance' ? 'bg-green-100 text-green-800' :
                      item.category === 'Medicare' ? 'bg-purple-100 text-purple-800' :
                      item.category === 'Retirement' ? 'bg-cyan-100 text-cyan-800' :
                      item.category === 'Estate Planning' ? 'bg-orange-100 text-orange-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {item.category}
                    </span>
                  </div>
                  {expandedItems.has(item.id) ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>

                {expandedItems.has(item.id) && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">{item.definition}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredGlossary.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No terms found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          )}

          {/* Contact CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help Understanding Insurance?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our insurance experts can explain complex terms and help you understand your options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Ask an Expert
              </button>
              <button
                onClick={() => navigate('/faq')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                View FAQ
              </button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}