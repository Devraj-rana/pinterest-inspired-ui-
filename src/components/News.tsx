// import React from 'react';
// import Image from 'next/image';

// interface BlogPost {
//   id: number;
//   title: string;
//   excerpt: string;
//   category: string;
//   date: string;
//   image: string;
//   slug: string;
// }

// const blogPosts: BlogPost[] = [
//   {
//     id: 1,
//     title: "Minimalist UI Design: Benefits and Best Practices",
//     excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
//     category: "App UI UX Design",
//     date: "21 May 2024",
//     image: "/blog1.jpg",
//     slug: "minimalist-ui-design"
//   },
//   {
//     id: 2,
//     title: "Improving User Experience: Best Practices for Web Design...",
//     excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
//     category: "Website UI UX Design",
//     date: "20 May 2024",
//     image: "/blog2.jpg",
//     slug: "improving-user-experience"
//   },
//   {
//     id: 3,
//     title: "Understanding the Color Wheel: Basics Every Designer...",
//     excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
//     category: "Color Theory",
//     date: "19 May 2024",
//     image: "/blog3.jpg",
//     slug: "understanding-color-wheel"
//   }
// ];

// const News: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="mb-16">
//           {/* Heading Line */}
//           <div className="flex items-center mb-4">
//             <div className="w-10 h-1 bg-yellow-400 mr-3 rounded-full"></div>
//             <span className="text-black text-xl sm:text-2xl font-medium tracking-wide">
//               News & Blogs
//             </span>
//           </div>

//           {/* Title + Button Section */}
//           <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
//             {/* Text Section */}
//             <div className="text-left">
//               <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 leading-tight">
//                 Our Latest
//               </h1>
//               <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-500 italic leading-tight">
//                 News & Blogs
//               </h2>
//             </div>
//                 </div>

//             {/* CTA Button */}
//            <button className="group relative bg-yellow-500 flex items-center rounded-full p-1 hover:bg-yellow-600 transition duration-300 mt-5">
//             <div className="bg-green-800 text-white px-8 py-3 rounded-full text-base font-medium text-center group-hover:bg-green-900">
//               View All Blogs
//             </div>
//             <div className="h-10 w-10 rounded-full bg-white text-green-800 font-bold text-2xl ml-3 flex items-center justify-center group-hover:bg-gray-100">
//               →
//             </div>
//           </button>
          
//         </div>

//         {/* Blog Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {blogPosts.map((post) => (
//             <div
//               key={post.id}
//               className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
//             >
//               {/* Blog Image */}
//               <div className="relative h-64">
//                 <Image
//                   src={post.image}
//                   alt={post.title}
//                   fill
//                   className="object-cover hover:scale-105 transition-transform duration-300"
//                 />
//                 {/* Tags */}
//                 <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
//                   <span className="bg-yellow-500 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
//                     {post.category}
//                   </span>
//                   <span className="bg-yellow-500 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
//                     {post.date}
//                   </span>
//                 </div>
//               </div>

//               {/* Blog Content */}
//               <div className="p-6">
//                 <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
//                   {post.title}
//                 </h3>

//                 <button className="text-gray-800 font-semibold hover:text-orange-400 transition-colors duration-300 flex items-center">
//                   Read More
//                   <svg
//                     className="w-4 h-4 ml-2"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M17 8l4 4m0 0l-4 4m4-4H3"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default News;



'use client';
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
    title: 'Minimalist UI Design: Benefits and Best Practices',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
    category: 'App UI UX Design',
    date: '21 May 2024',
    image: '/blog1.jpg',
    slug: 'minimalist-ui-design',
  },
  {
    id: 2,
    title: 'Improving User Experience: Best Practices for Web Design...',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
    category: 'Website UI UX Design',
    date: '20 May 2024',
    image: '/blog2.jpg',
    slug: 'improving-user-experience',
  },
  {
    id: 3,
    title: 'Understanding the Color Wheel: Basics Every Designer...',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
    category: 'Color Theory',
    date: '19 May 2024',
    image: '/blog3.jpg',
    slug: 'understanding-color-wheel',
  },
];

const News: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          {/* Heading Line */}
          <div className="flex justify-center lg:justify-start items-center mb-4">
            <div className="w-10 h-1 bg-yellow-400 mr-3 rounded-full"></div>
            <span className="text-black text-xl sm:text-2xl font-medium tracking-wide">
              News & Blogs
            </span>
          </div>

          {/* Title + Button Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 leading-tight">
                Our Latest
              </h1>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-500 italic leading-tight">
                News & Blogs
              </h2>
            </div>

            {/* CTA Button */}
            <button className="group relative bg-yellow-500 flex items-center rounded-full p-1 hover:bg-yellow-600 transition duration-300 mt-5">
              <div className="bg-green-800 text-white px-8 py-3 rounded-full text-base font-medium text-center group-hover:bg-green-900">
                View All Blogs
              </div>
              <div className="h-10 w-10 rounded-full bg-white text-green-800 font-bold text-2xl ml-3 flex items-center justify-center group-hover:bg-gray-100">
                →
              </div>
            </button>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Blog Image */}
              <div className="relative h-64">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                {/* Tags */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  <span className="bg-yellow-500 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                  <span className="bg-yellow-500 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {post.date}
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">{post.title}</h3>

                <button className="text-gray-800 font-semibold hover:text-orange-400 transition-colors duration-300 flex items-center">
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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
