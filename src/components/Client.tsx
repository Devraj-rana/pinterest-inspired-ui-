'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Client = () => {
  return (
    <>
      <section id="client" className="relative py-10 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-black mb-4">
            <span className="text-yellow-500">-</span> Clients Testimonials
          </h2>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
            The Impact Of My Work
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 italic mt-4">
            Clients Testimonials
          </h2>
        </div>
      </section>
      <div className='-mt-25'>
      <TestimonialCards />
      </div>
    </>
  );
};

const TestimonialCards = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5.0,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
      name: "Leslie Alexander",
      title: "Founder, EV Charger Station",
      avatar: "/client1.jpg",
    },
    {
      id: 2,
      rating: 5.0,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
      name: "Albert Flores",
      title: "CTO, Software Agency",
      avatar: "/client2.jpg",
    },
    {
      id: 3,
      rating: 5.0,
      text: "Amazing experience working with this team...",
      name: "Sarah Johnson",
      title: "Marketing Director, Tech Corp",
      avatar: "/client3.jpg",
    },
    {
      id: 4,
      rating: 5.0,
      text: "Professional, efficient, and delivered exactly what we needed...",
      name: "Michael Chen",
      title: "CEO, Digital Solutions",
      avatar: "/client4.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'} fill-current`}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mx-auto max-w-4xl">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="flex gap-1">{renderStars(testimonial.rating)}</div>
                      <span className="text-lg font-semibold text-gray-700 ml-2">
                        {testimonial.rating}
                      </span>
                    </div>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-base sm:text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-sm sm:text-base">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-900 hover:bg-green-600 text-white flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-400 hover:bg-yellow-300 text-white flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-orange-400' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
