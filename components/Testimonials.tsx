"use client";
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Quote } from 'lucide-react';
import Image from 'next/image';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      text: "FitLife completely transformed my approach to health. I've lost 25 pounds and gained so much energy! The personalized workouts and nutrition guidance made all the difference.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marathon Runner",
      text: "As a competitive runner, I needed a program that could adapt to my intense training schedule. FitLife's recovery-focused approach helped me reduce injuries and improve my PR by 8 minutes!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Yoga Instructor",
      text: "I've tried countless fitness apps, but FitLife stands out with its holistic approach. The mindfulness sessions combined with strength training created the perfect balance for my busy lifestyle.",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);

  const handlePreviousTestimonial = () => {
    const currentIndex = testimonials.findIndex(t => t.id === activeTestimonial.id);
    const prevIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    setActiveTestimonial(testimonials[prevIndex]);
  };

  const handleNextTestimonial = () => {
    const currentIndex = testimonials.findIndex(t => t.id === activeTestimonial.id);
    const nextIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    setActiveTestimonial(testimonials[nextIndex]);
  };

  const handleProfileClick = (id: number) => {
    const testimonial = testimonials.find(t => t.id === id);
    if (testimonial) {
      setActiveTestimonial(testimonial);
    }
  };

  return (
    <section className="w-full bg-[#191919] py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center gap-4 mb-12 md:mb-16">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white text-center max-w-3xl">
            Transformations, Triumphs, and Testimonials
          </h2>
          <p className="max-w-3xl font-medium text-lg text-[#a1a2a1] text-center">
            Experience the FitLife difference through the stories of our users. From fitness breakthroughs to lifestyle overhauls, see how FitLife has sparked change and inspired healthier lives.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 relative">
            {/* Shadow Layers */}
            <div className="hidden md:block absolute w-[90%] h-[85%] top-0 left-[5%] bg-[#454749] rounded-xl"></div>
            <div className="hidden md:block absolute w-[95%] h-[90%] top-[5%] left-[2.5%] bg-[#8c8786] rounded-xl"></div>
            
            {/* Navigation Arrows */}
            <button
              onClick={handlePreviousTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group hover:bg-[#ff9800] border border-slate-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors" />
            </button>

            <button
              onClick={handleNextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group hover:bg-[#ff9800] border border-slate-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors" />
            </button>

            {/* Main Card */}
            <div className="relative w-full bg-[#ff9800] overflow-hidden border-none rounded-xl md:mt-9">
              <div className="p-6 md:p-8 flex flex-col items-center justify-center min-h-[400px] md:min-h-[450px] relative">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-8 border-4 border-white">
                  <div className="flex items-center justify-center w-full h-full bg-white/80">
                    <Quote className="w-8 h-8 text-[#ff9800]" />
                    
                  </div>
                  
                </div>

                <p className="max-w-2xl text-center text-white font-medium text-base md:text-lg leading-relaxed">
                  &quot;{activeTestimonial.text}&quot;
                </p>

                <div className="mt-8 text-center">
                  <h3 className="font-bold text-xl text-white">{activeTestimonial.name}</h3>
                  <p className="text-[#f5f5f5]">{activeTestimonial.role}</p>
                </div>

                
              </div>
            </div>
          </div>
          
          {/* Profile Selector */}
          <div className="flex justify-center items-center flex-wrap gap-4 md:gap-6">
            {testimonials.map((testimonial) => (
              <button
                key={testimonial.id}
                onClick={() => handleProfileClick(testimonial.id)}
                className={`transition-all duration-300 ${
                  testimonial.id === activeTestimonial.id
                    ? 'scale-110 ring-2 ring-[#ff9800]'
                    : 'opacity-80 hover:opacity-100'
                }`}
                aria-label={`View ${testimonial.name}'s testimonial`}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden relative">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 48px, 56px"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

