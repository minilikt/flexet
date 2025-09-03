"use client"
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Tadesse",
      role: "University Student",
      image: "ST",
      rating: 5,
      quote: "The AI workout plans are spot-on! FlexET understands exactly what I need for my busy schedule as a student.",
    },
    {
      name: "Michael Alemayehu",
      role: "Software Developer",
      image: "MA",
      rating: 5,
      quote: "Finally, a fitness app that works offline! Perfect for our internet situation here. The progress tracking is amazing.",
    },
    {
      name: "Helen Bekele",
      role: "Marketing Professional",
      image: "HB",
      rating: 5,
      quote: "I love how FlexET adapts to my equipment limitations. No gym? No problem! The bodyweight workouts are fantastic.",
    },
    {
      name: "Daniel Girma",
      role: "Teacher",
      image: "DG",
      rating: 5,
      quote: "The running tracker has helped me improve my 5K time significantly. The AI coaching tips are incredibly helpful.",
    },
    {
      name: "Rebecca Tesfaye",
      role: "Entrepreneur",
      image: "RT",
      rating: 5,
      quote: "As a busy entrepreneur, FlexET's personalized quick workouts fit perfectly into my schedule. Highly recommended!",
    },
    {
      name: "Yonas Haile",
      role: "Medical Student",
      image: "YH",
      rating: 5,
      quote: "The scientific approach behind FlexET's AI recommendations impressed me. It's like having a personal trainer in my pocket.",
    },
  ];

  // Duplicate the testimonials for the infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 bg-[#191919]">
      {/* Section Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Real <span className="text-[#0070F0]">Results</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          See what our beta users are saying about their FlexET experience and transformation.
        </p>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full overflow-x-auto py-12 testimonials-scroll-container">
        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .testimonials-scroll-container:hover .testimonials-scroll-content {
            animation-play-state: paused;
          }
          .testimonials-scroll-container::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <div 
          className="flex space-x-8 animate-[scroll_40s_linear_infinite] will-change-transform testimonials-scroll-content"
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={index} className="flex-none w-64">
              {/* This div acts as the card with a fixed height */}
              <div
                className="rounded-xl border  text-card-foreground shadow bg-gray-800/50 border-gray-700 hover:border-[#0070F0]/50 transition-all duration-300 backdrop-blur-sm h-80"
              >
                {/* This div acts as the card content with proper spacing */}
                <div className="p-6 flex flex-col h-full justify-between">
                  <div>
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-4">
                      <Quote className="h-8 w-8 text-[#0070F0] opacity-60" />
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-300 text-center mb-6 italic leading-relaxed">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>
                  
                  {/* User Info */}
                  <div className="flex items-center justify-center space-x-3 mt-auto">
                    <div className="w-12 h-12 bg-[#0070F0] rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.image}
                      </span>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-semibold">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
