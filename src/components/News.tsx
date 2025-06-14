import React from 'react';
import Image from 'next/image';


interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Minimalist UI Design: Benefits and Best Practices",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    category: "App UI UX Design",
    date: "21 May 2024",
    image: "/blog1.jpg",
    slug: "minimalist-ui-design"
  },
  {
    id: 2,
    title: "Improving User Experience: Best Practices for Web Design...",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    category: "Website UI UX Design",
    date: "20 May 2024",
    image: "/blog2.jpg",
    slug: "improving-user-experience"
  },
  {
    id: 3,
    title: "Understanding the Color Wheel: Basics Every Designer...",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    category: "Color Theory",
    date: "19 May 2024",
    image: "/blog3.jpg",
    slug: "understanding-color-wheel"
  }
];

const News: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-left mb-4">
            <div className="w-8 h-0.5 bg-yellow-400 mr-3"></div>
            <span className="text-black text-3xl">News & Blogs</span>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-left mb-8 lg:mb-0">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-2">
                Our Latest
              </h1>
              <h2 className="text-5xl lg:text-6xl font-bold text-yellow-500 italic">
                News & Blogs
              </h2>
            </div>
            
          
               <button className="group relative bg-yellow-500 flex items-center rounded-full p-1 hover:bg-yellow-600 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300">
                <div className="bg-green-800 text-white px-8 py-3 rounded-full text-base font-medium flex-1 text-center transition-colors duration-300 group-hover:bg-green-900">
                  View All Blogs
                </div>

                <div className="flex items-center  justify-center text-center  text-2xl  h-10 w-10 rounded-full bg-white text-green-800  font-bold ml-3 transition-colors duration-300 group-hover:bg-gray-100">
                  →
                </div>
              </button>
           
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                {/* Category and Date Tags */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  <span className="bg-yellow-500 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="bg-yellow-500 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {post.date}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                  {post.title}
                </h3>
                {/* <p className="text-black mb-4 overflow-hidden" style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical'
                }}>
                  {post.excerpt}
                </p> */}
            
                  <button className="text-gray-800 font-semibold hover:text-orange-400 transition-colors duration-300 flex items-center">
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
             
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;