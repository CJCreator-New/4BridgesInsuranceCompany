import { ArrowLeft, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

export default function FAQ() {
  const navigate = useNavigate();

  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "How do I get an insurance quote?",
          a: "You can get a quote by calling us at (555) 123-4567, filling out our contact form, or using our online calculators. We'll provide personalized quotes based on your specific needs."
        },
        {
          q: "What states are you licensed in?",
          a: "We're licensed in 15 states across the US, including New York, California, Texas, Florida, and more. Contact us to confirm we serve your state."
        },
        {
          q: "How long does it take to get approved?",
          a: "Approval times vary by product. Simple policies like final expense can be approved in 24-48 hours, while life insurance with medical exams may take 4-6 weeks."
        }
      ]
    },
    {
      category: "Life Insurance",
      questions: [
        {
          q: "What's the difference between term and whole life insurance?",
          a: "Term life covers you for a specific period (10, 20, or 30 years) and is more affordable. Whole life covers you for life and builds cash value, but costs more."
        },
        {
          q: "How much life insurance do I need?",
          a: "A common rule is 10x your annual income, but it depends on your debts, dependents, and goals. Use our calculator or speak with an agent for a personalized assessment."
        },
        {
          q: "Can I get life insurance if I have health issues?",
          a: "Yes! We work with multiple carriers who specialize in high-risk cases. Some policies don't require medical exams."
        }
      ]
    },
    {
      category: "Health Insurance",
      questions: [
        {
          q: "What is an ACA-compliant plan?",
          a: "ACA (Affordable Care Act) plans cover essential health benefits including preventive care, emergency services, prescription drugs, and more."
        },
        {
          q: "What's the difference between HMO and PPO?",
          a: "HMO plans require you to use in-network providers and get referrals. PPO plans offer more flexibility to see any doctor but cost more."
        },
        {
          q: "When can I enroll in health insurance?",
          a: "Open enrollment is November 1 - January 15 each year. You can also enroll during special enrollment periods after qualifying life events."
        }
      ]
    },
    {
      category: "Medicare",
      questions: [
        {
          q: "When should I enroll in Medicare?",
          a: "Enroll during your Initial Enrollment Period (3 months before your 65th birthday, your birthday month, and 3 months after). Missing this can result in penalties."
        },
        {
          q: "What's the difference between Medicare Advantage and Original Medicare?",
          a: "Original Medicare (Parts A & B) is run by the government. Medicare Advantage (Part C) is offered by private insurers and often includes extra benefits like dental and vision."
        },
        {
          q: "Do I need a Medigap plan?",
          a: "If you have Original Medicare, Medigap covers the 20% that Medicare doesn't pay. Medicare Advantage plans don't need Medigap."
        }
      ]
    },
    {
      category: "Retirement Planning",
      questions: [
        {
          q: "What's the difference between a 401(k) and IRA?",
          a: "401(k) is employer-sponsored with higher contribution limits ($23,000 in 2024). IRA is individual with lower limits ($7,000) but more investment options."
        },
        {
          q: "Should I choose Traditional or Roth?",
          a: "Traditional gives you a tax deduction now; Roth gives you tax-free withdrawals later. Choose Traditional if you're in a high tax bracket now, Roth if you expect higher taxes in retirement."
        },
        {
          q: "When can I start taking Social Security?",
          a: "You can start at 62, but your benefit is reduced. Full retirement age is 67 for most people. Waiting until 70 maximizes your benefit."
        }
      ]
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Frequently Asked Questions"
        description="Find answers to common questions about life insurance, health insurance, Medicare, retirement planning, and more."
        keywords="insurance faq, insurance questions, medicare questions, life insurance help"
      />
      <div className="bg-gray-50 min-h-screen">
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
              <HelpCircle className="w-12 h-12 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
            </div>
            <span className="sr-only">faq</span>
            <p className="text-xl text-blue-100">Find answers to common insurance questions</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, idx) => (
              <div key={idx} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="bg-white rounded-xl shadow-lg">
                  {category.questions.map((faq, i) => (
                    <AccordionItem key={i} value={`${idx}-${i}`}>
                      <AccordionTrigger className="px-6 text-left hover:bg-gray-50">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-gray-600">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            <div className="bg-blue-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6">Our team is here to help. Contact us for personalized assistance.</p>
              <button
                onClick={() => navigate('/contact')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
