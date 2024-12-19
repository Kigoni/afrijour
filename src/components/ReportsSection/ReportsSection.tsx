import React, { useState } from 'react';

// Types
interface FeaturedItem {
  type: string;
  icon: string;
  color: string;
  title: string;
  description: string;
  link: string;
}

// Constants
const CATEGORIES = [
  'All Types', 'Award Update', 'Best Practices', 'Blog', 'Community Report',
  'Data Report', 'Editorial', 'Global Report', 'Guide', 'Impact Report',
  'Journal Review', 'Literature Review', 'Newsletter', 'Policy Brief',
  'Presentation', 'Report', 'Repository Guide', 'Research Methods',
  'Research Paper', 'Resource Guide', 'Trend Analysis'
];

const FEATURED_ITEMS: FeaturedItem[] = [
  {
    type: 'Research Initiative',
    icon: '🔬',
    color: 'bg-red-100',
    title: 'Low-Cost Monoclonal Antibody Manufacturing',
    description: 'Details on groundbreaking innovations in monoclonal antibody manufacturing.',
    link: 'https://gcgh.grandchallenges.org/challenge/innovations-exceptionally-low-cost-monoclonal-antibody-mab-manufacturing'
  },
  {
    type: 'Funding Opportunity',
    icon: '💡',
    color: 'bg-yellow-100',
    title: 'Grand Challenges Nigeria Funding',
    description: 'Explore funding opportunities to drive innovative research solutions in Africa.',
    link: 'https://grandchallengesnigeria.org/funding-opportunities/'
  },
  {
    type: 'Report',
    icon: '📄',
    color: 'bg-green-100',
    title: '2024 State of African Journals',
    description: 'An in-depth analysis of the African academic journal landscape in 2024.',
    link: '#'
  },
  {
    type: 'Policy Brief',
    icon: '📚',
    color: 'bg-blue-100',
    title: 'Policy Recommendations for African Academic Growth',
    description: 'A policy brief highlighting key recommendations for improving African research and journals.',
    link: '#'
  }
];

function ReportsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Types');

  const filteredItems = FEATURED_ITEMS.filter((item) =>
    (selectedCategory === 'All Types' || item.type === selectedCategory) &&
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-green-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Publications, Reports & Funding Opportunities
          </h1>
          <p className="text-xl text-gray-700">
            Discover the latest insights, policy recommendations, and funding opportunities in African academia.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Search publications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              className="absolute left-4 top-3.5 h-6 w-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ease-in-out
                ${selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-200'}
                `}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="p-6">
                <div className={`${item.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-medium hover:text-green-800 flex items-center transition-colors duration-300 ease-in-out"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReportsSection;
