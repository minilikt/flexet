import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

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

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Real <span className="text-[#0070F0]">Results</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See what our beta users are saying about their FlexET experience and transformation.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:border-[#0070F0]/50 transition-all duration-300 backdrop-blur-sm"
            >
              <CardContent className="p-6">
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

                {/* User Info */}
                <div className="flex items-center justify-center space-x-3">
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
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#0070F0] mb-2">50+</div>
              <div className="text-gray-300 text-sm">Beta Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0070F0] mb-2">80%</div>
              <div className="text-gray-300 text-sm">Retention Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0070F0] mb-2">90%</div>
              <div className="text-gray-300 text-sm">Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0070F0] mb-2">100+</div>
              <div className="text-gray-300 text-sm">Pre-Signups</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">
            Join the FlexET Community
          </h3>
          <p className="text-gray-300 mb-6">
            Be part of Ethiopia&apos;s growing fitness revolution powered by AI.
          </p>
          <Button
            variant="outline"
            className="px-12 py-6 rounded-[3px] border-2 border-solid border-[#2196f3] bg-[#191919] font-body-large text-[#FFFFFF]"
          >
              Get Early Access
          </Button>
        </div>
      </div>
    </section>
  );
}