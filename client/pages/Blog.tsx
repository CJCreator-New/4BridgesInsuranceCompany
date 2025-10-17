import { ArrowLeft, Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 'understanding-life-insurance-options',
    title: 'Understanding Life Insurance Options: Term vs. Whole Life',
    excerpt: 'Confused about term and whole life insurance? This comprehensive guide breaks down the differences, benefits, and when each type makes sense for your family\'s protection needs.',
    author: 'Sarah Rodriguez',
    date: 'October 15, 2025',
    readTime: '8 min read',
    category: 'Life Insurance',
    tags: ['Term Life', 'Whole Life', 'Coverage Options'],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    featured: true
  },
  {
    id: 'medicare-enrollment-guide-2025',
    title: 'Medicare Enrollment Guide 2025: What You Need to Know',
    excerpt: 'Navigate Medicare enrollment with confidence. Learn about Parts A, B, C, and D, enrollment periods, costs, and how to choose the right plan for your healthcare needs.',
    author: 'Michael Chen',
    date: 'October 10, 2025',
    readTime: '12 min read',
    category: 'Medicare',
    tags: ['Medicare', 'Enrollment', 'Healthcare'],
    image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg'
  },
  {
    id: 'retirement-planning-mistakes',
    title: '7 Common Retirement Planning Mistakes to Avoid',
    excerpt: 'Don\'t let these costly mistakes derail your retirement dreams. Learn from others\' errors and discover proven strategies for building a secure financial future.',
    author: 'Jennifer Walsh',
    date: 'October 5, 2025',
    readTime: '6 min read',
    category: 'Retirement Planning',
    tags: ['Retirement', 'Financial Planning', 'Mistakes'],
    image: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg'
  }
];

const categories = ['All', 'Life Insurance', 'Health Insurance', 'Medicare', 'Retirement Planning', 'Estate Planning'];

export default function Blog() {
  const navigate = useNavigate();

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <Layout>
      <SEO
        title="Insurance Blog"
        description="Stay informed with the latest insurance news, tips, and insights from 4 Bridges Insurance. Expert advice on life insurance, health coverage, Medicare, and retirement planning."
        keywords="insurance blog, insurance news, life insurance tips, Medicare advice, retirement planning"
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
              <Tag className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Insurance Insights</h1>
          </div>

          <p className="text-xl text-blue-100 max-w-2xl">
            Expert advice, industry insights, and practical tips to help you make informed insurance decisions.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden post">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-gray-500">Featured</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>

                  <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg font-semibold mb-4">Browse by Category:</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map(post => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow post">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      post.category === 'Life Insurance' ? 'bg-blue-100 text-blue-800' :
                      post.category === 'Health Insurance' ? 'bg-green-100 text-green-800' :
                      post.category === 'Medicare' ? 'bg-purple-100 text-purple-800' :
                      post.category === 'Retirement Planning' ? 'bg-cyan-100 text-cyan-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <button className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Informed</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insurance insights, tips, and industry updates delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-white rounded-xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Have Insurance Questions?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team of insurance experts is here to help you understand your options and find the right coverage for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Expert Help
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