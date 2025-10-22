import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, Calendar, Clock, User, ArrowRight, Tag, Search, Share2, Facebook, Linkedin, Twitter, Mail } from 'lucide-react';
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
  author: 'Sarah Johnson',
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
  author: 'Jennifer Martinez',
    date: 'October 5, 2025',
    readTime: '6 min read',
    category: 'Retirement Planning',
    tags: ['Retirement', 'Financial Planning', 'Mistakes'],
    image: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg'
  },
  {
    id: 'what-is-life-insurance',
    title: 'What is Life Insurance? A Beginner\'s Guide',
    excerpt: 'Life insurance basics explained simply. Learn what life insurance is, why you need it, and how to choose the right coverage for you and your family.',
  author: 'Sarah Johnson',
    date: 'September 28, 2025',
    readTime: '5 min read',
    category: 'Insurance 101',
    tags: ['Life Insurance', 'Beginners', 'Basics'],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'
  },
  {
    id: 'understanding-health-insurance',
    title: 'Understanding Health Insurance: Coverage Types Explained',
    excerpt: 'Demystify health insurance terminology. Learn about PPO vs HMO, deductibles, copays, and how to navigate your health coverage options.',
  author: 'Michael Chen',
    date: 'September 25, 2025',
    readTime: '7 min read',
    category: 'Insurance 101',
    tags: ['Health Insurance', 'PPO', 'HMO', 'Coverage'],
    image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg'
  },
  {
    id: 'medicare-basics-everyone-should-know',
    title: 'Medicare Basics Everyone Should Know',
    excerpt: 'Your complete Medicare 101 guide. Understand Medicare Parts A, B, C, and D, enrollment periods, and what\'s covered at age 65+.',
  author: 'Jennifer Martinez',
    date: 'September 20, 2025',
    readTime: '9 min read',
    category: 'Insurance 101',
    tags: ['Medicare', 'Seniors', 'Healthcare', 'Enrollment'],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg'
  }
];

const categories = ['All', 'Life Insurance', 'Health Insurance', 'Medicare', 'Retirement Planning', 'Estate Planning', 'Insurance 101'];

const POSTS_PER_PAGE = 2;

const authorProfiles: Record<string, { role: string; bio: string; teamAnchor: string }> = {
  'Sarah Johnson': {
    role: 'President & CEO',
    bio: 'Founder of 4 Bridges Insurance Company with 25 years leading life insurance and retirement planning strategies nationwide.',
    teamAnchor: 'sarah-johnson'
  },
  'Michael Chen': {
    role: 'Senior Insurance Advisor',
    bio: 'Health and Medicare strategist serving West Coast families with comprehensive benefits and bilingual support.',
    teamAnchor: 'michael-chen'
  },
  'Jennifer Martinez': {
    role: 'Client Relations Manager',
    bio: 'Customer experience champion focused on personalized policy reviews and 5-star service for American families.',
    teamAnchor: 'jennifer-martinez'
  }
};

export default function Blog() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeCategory]);

  const filteredPosts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return blogPosts.filter((post) => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const haystack = `${post.title} ${post.excerpt} ${post.tags.join(' ')} ${post.author}`.toLowerCase();
      const matchesSearch = query.length === 0 || haystack.includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  const featuredPost = useMemo(() => filteredPosts.find((post) => post.featured), [filteredPosts]);

  const nonFeaturedPosts = useMemo(() => {
    return filteredPosts.filter((post) => post.id !== featuredPost?.id);
  }, [filteredPosts, featuredPost]);

  const totalPages = Math.max(1, Math.ceil(nonFeaturedPosts.length / POSTS_PER_PAGE));
  const currentPagePosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return nonFeaturedPosts.slice(start, start + POSTS_PER_PAGE);
  }, [currentPage, nonFeaturedPosts]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const buildShareTargets = (post: BlogPost) => {
    const baseUrl = `https://4bridgesinsurance.com/blog/${post.id}`;
    const encodedUrl = encodeURIComponent(baseUrl);
    const encodedTitle = encodeURIComponent(post.title);
    return [
      { label: 'Facebook', icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
      { label: 'LinkedIn', icon: Linkedin, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` },
      { label: 'X', icon: Twitter, href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}` },
      { label: 'Email', icon: Mail, href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}` }
    ];
  };

  return (
    <Layout>
      <SEO
        title="Insurance Blog"
        description="Stay informed with the latest insurance news, tips, and insights from 4 Bridges Insurance Company. Expert advice on life insurance, health coverage, Medicare, and retirement planning."
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

                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <Share2 className="w-4 h-4 text-blue-600" aria-hidden="true" />
                      <span>Share</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {buildShareTargets(featuredPost).map((target) => {
                        const Icon = target.icon;
                        return (
                          <a
                            key={target.label}
                            href={target.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors"
                            aria-label={`Share ${featuredPost.title} on ${target.label}`}
                          >
                            <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                            {target.label}
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  {authorProfiles[featuredPost.author] && (
                    <div className="border-t border-gray-200 pt-6 mt-6">
                      <div className="text-sm font-semibold text-gray-900">{featuredPost.author}</div>
                      <div className="text-xs uppercase tracking-wide text-blue-600 mt-1">{authorProfiles[featuredPost.author].role}</div>
                      <p className="text-sm text-gray-600 mt-2">{authorProfiles[featuredPost.author].bio}</p>
                      <a
                        href={`/team#${authorProfiles[featuredPost.author].teamAnchor}`}
                        className="mt-3 inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
                      >
                        View {featuredPost.author.split(' ')[0]}'s bio
                        <ArrowRight className="ml-1 w-4 h-4" aria-hidden="true" />
                      </a>
                    </div>
                  )}

                  <button
                    type="button"
                    className="mt-6 inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Search & Category Filter */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto space-y-6 md:space-y-0 md:flex md:items-center md:justify-between">
          <form
            className="w-full md:w-auto md:flex-1 max-w-xl"
            role="search"
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor="blog-search" className="sr-only">
              Search articles
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
              <input
                id="blog-search"
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search articles, authors, or topics"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
          </form>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter articles by category">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={
                    isActive
                      ? 'px-4 py-2 rounded-full text-sm font-semibold bg-blue-600 text-white shadow'
                      : 'px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors'
                  }
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPagePosts.length === 0 ? (
              <div className="col-span-full bg-white rounded-xl shadow p-10 text-center">
                <p className="text-lg font-semibold text-gray-900 mb-2">No articles found</p>
                <p className="text-sm text-gray-600">Try adjusting your search or selecting a different category.</p>
              </div>
            ) : (
              currentPagePosts.map((post) => {
                const profile = authorProfiles[post.author];
                return (
                  <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow" aria-labelledby={`post-${post.id}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />

                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            post.category === 'Life Insurance'
                              ? 'bg-blue-100 text-blue-800'
                              : post.category === 'Health Insurance'
                              ? 'bg-green-100 text-green-800'
                              : post.category === 'Medicare'
                              ? 'bg-purple-100 text-purple-800'
                              : post.category === 'Retirement Planning'
                              ? 'bg-cyan-100 text-cyan-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {post.category}
                        </span>
                      </div>

                      <div>
                        <h3 id={`post-${post.id}`} className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                        <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" aria-hidden="true" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" aria-hidden="true" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" aria-hidden="true" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                          <Share2 className="w-4 h-4 text-blue-600" aria-hidden="true" />
                          <span>Share</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {buildShareTargets(post).map((target) => {
                            const Icon = target.icon;
                            return (
                              <a
                                key={target.label}
                                href={target.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors"
                                aria-label={`Share ${post.title} on ${target.label}`}
                              >
                                <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                                {target.label}
                              </a>
                            );
                          })}
                        </div>
                      </div>

                      {profile && (
                        <div className="border-t border-gray-100 pt-4 text-sm text-gray-600">
                          <div className="font-semibold text-gray-900">{post.author}</div>
                          <div className="text-xs uppercase tracking-wide text-blue-600 mt-1">{profile.role}</div>
                          <p className="mt-1 text-sm">{profile.bio}</p>
                          <a
                            href={`/team#${profile.teamAnchor}`}
                            className="mt-2 inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
                          >
                            View {post.author.split(' ')[0]}'s bio
                            <ArrowRight className="ml-1 w-4 h-4" aria-hidden="true" />
                          </a>
                        </div>
                      )}
                    </div>
                  </article>
                );
              })
            )}
          </div>

          {/* Pagination */}
          {currentPagePosts.length > 0 && totalPages > 1 && (
            <nav className="mt-10 flex items-center justify-center gap-3" aria-label="Blog pagination">
              <button
                type="button"
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:border-blue-500 hover:text-blue-600"
                aria-label="Previous page"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1;
                const isActive = page === currentPage;
                return (
                  <button
                    key={page}
                    type="button"
                    onClick={() => handlePageChange(page)}
                    className={
                      isActive
                        ? 'px-3 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold shadow'
                        : 'px-3 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-600 hover:border-blue-500 hover:text-blue-600'
                    }
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {page}
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:border-blue-500 hover:text-blue-600"
                aria-label="Next page"
              >
                Next
              </button>
            </nav>
          )}

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