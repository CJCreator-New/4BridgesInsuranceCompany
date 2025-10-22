import { useMemo, useState } from 'react';
import { ArrowLeft, HelpCircle, Search, Video, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { fadeInDown, fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

export default function FAQ() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "How do I get an insurance quote?",
          a: "You can get a quote by calling us at (800) 427-4343, filling out our contact form, or using our online calculators. We'll provide personalized quotes based on your specific needs."
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

  const filteredFaqs = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) {
      return faqs;
    }

    return faqs
      .map((category) => {
        const matchingQuestions = category.questions.filter((faq) => {
          const haystack = `${faq.q} ${faq.a}`.toLowerCase();
          return haystack.includes(query);
        });
        return matchingQuestions.length > 0
          ? { ...category, questions: matchingQuestions }
          : null;
      })
      .filter((category): category is typeof faqs[number] => Boolean(category));
  }, [faqs, searchTerm]);

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
            <motion.button
              onClick={() => navigate('/')}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </motion.button>
            <motion.div 
              className="flex items-center mb-6"
              variants={fadeInDown}
              initial="hidden"
              animate="visible"
            >
              <HelpCircle className="w-12 h-12 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
            </motion.div>
            <span className="sr-only">faq</span>
            <motion.p 
              className="text-xl text-blue-100"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              Find answers to common insurance questions
            </motion.p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <form
              onSubmit={(event) => event.preventDefault()}
              role="search"
              className="mb-10"
            >
              <label htmlFor="faq-search" className="sr-only">
                Search frequently asked questions
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
                <input
                  id="faq-search"
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search policies, Medicare, retirement, claims, and more"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Tip: Try keywords like “claims”, “Medicare Advantage”, or “retirement age”.
              </p>
            </form>

            {filteredFaqs.length === 0 && (
              <div className="bg-white rounded-xl shadow p-8 text-center mb-12">
                <p className="text-lg font-semibold text-gray-900 mb-2">No answers found</p>
                <p className="text-sm text-gray-600">
                  We couldn’t find an answer for “{searchTerm}”. Please adjust your search or reach out to our licensed team.
                </p>
              </div>
            )}

            {filteredFaqs.map((category, idx) => (
              <motion.div 
                key={idx} 
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.1, duration: 0.3 }}
              >
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
              </motion.div>
            ))}

            <motion.div 
              className="grid gap-6 md:grid-cols-2 mb-12"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div 
                className="bg-white rounded-xl shadow p-6"
                variants={staggerItem}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-8 h-8 text-blue-600" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-gray-900">Live Chat Support (Coming Soon)</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We are finalizing a secure live-chat experience so you can connect with a licensed U.S. agent in under two minutes. Expect launch in Q1 2026 with full transcript downloads for compliance.
                </p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-xl shadow p-6"
                variants={staggerItem}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Video className="w-8 h-8 text-blue-600" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-gray-900">On-Demand Video Library</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our video walkthroughs covering claims filing, Medicare enrollment, and financial wellness are in production. Sign up for the newsletter to be notified when new education content drops.
                </p>
              </motion.div>
            </motion.div>

            <div className="bg-blue-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6">Our team is here to help. Contact us for personalized assistance.</p>
              <motion.button
                onClick={() => navigate('/contact')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
