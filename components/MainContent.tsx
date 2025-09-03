"use client"
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";


export const MainContent = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      title: "Download the app & Create Your Profile",
      description: "Get started by creating your profile. Tell us about your fitness goals, role, or gym setup, and we'll tailor the experience for you."
    },
    {
      title: "Set Your Goals",
      description: "Define your goals, schedule preferences, and fitness levels. Whether you're training for an event or just staying fit, we've got you covered."
    },
    {
      title: "Connect & Start Training",
      description: "Explore the unique features of FlexET. Learn about personalized workouts, nutrition guidance, and progress tracking tailored to your needs."
    },
    {
      title: "Track Progress & Stay Motivated",
      description: "Monitor your progress through interactive dashboards. Stay motivated with challenges and track your achievements."
    },
    {
      title: "Achieve & Share Results",
      description: "Reach your goals and celebrate your progress with our vibrant community. Inspire and be inspired!"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setActiveStep(index);
            }
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="main-content" className="bg-[#191919] top-18 py-16 md:py-24 overflow-clip relative shrink-0 w-full">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            How it <span className="text-[#0070F0]">Works</span>
          </h2>
          <p className="font-['Karla:Regular',_sans-serif] font-normal text-[#a1a2a1] text-[12px] md:text-[14px] lg:text-[16px] tracking-[0.3826px] max-w-2xl mx-auto">
            FitLife tailors your fitness journey with personalized workouts, nutrition plans, and progress tracking. Ready to experience it?
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Phone mockup - sticky on desktop */}
          <div className="flex-1 lg:sticky lg:top-20 flex justify-center">
            <div className="bg-center bg-cover bg-no-repeat h-[400px] w-[300px] md:h-[500px] md:w-[400px] lg:h-[570px] lg:w-[500px] transition-all duration-700" 
                 style={{ 
                   backgroundImage: `url('/women.png')`,
                   transform: `scale(${0.9 + (activeStep * 0.02)})`,
                   filter: `brightness(${0.8 + (activeStep * 0.05)})`
                 }} />
          </div>

          {/* Scrollable steps */}
          <div className="flex-1 space-y-10 md:space-y-40 lg:space-y-48" ref={containerRef}>
            {steps.map((step, index) => (
              <div 
                key={index} 
                ref={el => { stepRefs.current[index] = el; }}
                className={`flex gap-8 items-start transition-all duration-1000 ease-out min-h-[200px] ${
                  index === activeStep 
                    ? 'opacity-100 translate-y-0' 
                    : index < activeStep 
                      ? 'opacity-30 -translate-y-8' 
                      : 'opacity-30 translate-y-8'
                }`}
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-700 ${
                  index === activeStep 
                    ? 'bg-[#0070F0] scale-110 shadow-lg shadow-[#2196F3]/50' 
                    : index < activeStep
                      ? 'bg-[#0070F0]/70'
                      : 'bg-[#363b3e]'
                }`}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="flex-1">
                  <h3 className={`font-['Roboto_Mono:Regular',_sans-serif] font-normal text-xl md:text-2xl mb-4 transition-all duration-700 ${
                    index === activeStep 
                      ? 'text-[#ffffff] scale-105' 
                      : 'text-[#a1a2a1]'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`font-['Karla:Regular',_sans-serif] font-normal text-base md:text-lg transition-all duration-700 ${
                    index === activeStep 
                      ? 'text-[#ffffff]' 
                      : 'text-[#a1a2a1]'
                  }`}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-12 lg:mt-16">
          {/* <div className="flex gap-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === activeStep 
                    ? 'w-8 bg-[#2196F3]' 
                    : index < activeStep
                      ? 'w-2 bg-[#2196F3]/70'
                      : 'w-2 bg-[#363b3e]'
                }`}
              />
            ))}
          </div> */}
          <Button
            variant="outline"
            className="px-12 py-6 hover:bg-[#2196f3] rounded-md border-2 border-solid border-[#2196f3] bg-[#191919] font-body-large text-[#FFFFFF]"
            onClick={() => {
              window.open("https://forms.gle/zJPRD7YBFCXG89iK9", "_blank");
            }}
          >
              Get The App
          </Button>
        </div>
      </div>
    </div>
  );
}
