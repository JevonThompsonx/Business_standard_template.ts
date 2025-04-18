import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  content: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Loremx2 ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    author: "SereneSphere Yoga",
  },
  {
    id: 2,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    author: "BlissBodhi Studio",
  },
  {
    id: 3,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    author: "Namaste Yoga",
  },
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-5/6 mx-auto px-4 py-12 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">A Life Changing Experience</h2>
      <p className="text-center text-gray-500 mb-12">Don't just take our word for it. Check out our great reviews!</p>

      {/* Carousel Content */}
      <div className="relative overflow-hidden mb-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={testimonial.id}
            className={`transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? 'opacity-100' : 'opacity-0 absolute'
            }`}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg mb-6 border border-gray-200">
              <p className="text-gray-600 mb-4 leading-relaxed italic">"{testimonial.content}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-800">{testimonial.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mb-12">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-4 h-4 rounded-full transition-colors duration-300 ${
              index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Stats */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <span className="text-3xl font-bold text-gray-800">4.6</span>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        </div>
        <p className="text-gray-500">stars out of 5</p>
        <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
          See 300+ reviews on <i>Insert platform</i> →
        </button>
      </div>
    </div>
  );
}
