import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative w-full bg-[#191919] pt-[150px] pb-16">
      <div className="max-w-[1284px] mx-auto  flex flex-col lg:flex-row items-center justify-between ">
        {/* Left Side: Text Content */}
        <div className="flex flex-col items-start gap-12 ml-12 lg:w-1/2">
          {/* Badge */}
          <Badge className="flex items-center gap-2 px-4 py-2 bg-[#ffffff1a] rounded-2xl hover:bg-[#ffffff1a]">
            <Image src="/barbell.svg" alt="Barbell" width={12} height={12} />
            <span className="[font-family:'Roboto_Mono',Helvetica] font-medium text-white text-[11px] tracking-[0.50px] leading-4 whitespace-nowrap">
              #1 CUTTING EDGE HEALTH & FITNESS SOLUTION
            </span>
          </Badge>

          {/* Text */}
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-white text-[40px] sm:text-[52px] lg:text-[67px] leading-tight tracking-[-3px] font-medium [font-family:'Roboto_Mono',Helvetica]">
              New way to track <br />
              your progression
            </h1>

            <p className="text-white w-full max-w-[456px] font-body-medium text-base leading-relaxed">
              Track your workouts, monitor your progress, and stay motivated with our easy-to-use health and fitness mobile app.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button className="px-8 py-4 rounded-lg bg-[#363B3E] text-white font-body-large">
              Download Now and Get Fit
            </Button>
            <Button className="px-8 py-4 rounded-md border-2 border-[#2196f3] bg-[#191919] text-white font-body-large">
              Learn More
            </Button>
          </div>
        </div>
      <div>

          {/* Blue glow effect */}
          {/* <div className="absolute w-[600px] h-[600px] top-0 left-[684px] bg-[#2196f3] rounded-[300px] blur-[250px] opacity-50" /> */}
          <div
  className="
    absolute 
    bg-[#2196f3] rounded-full opacity-50
    lg:right-4

    /* Mobile styles */
    top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] blur-[120px]

    /* Medium and up */
    md:top-0 md:left-[684px] md:w-[600px] md:h-[600px] md:blur-[250px]
  "
/>

        {/* Right Side: Image */}
        <div className="relative lg:w-1/2 lg:left-24 w-full flex justify-center">

          <Image
            src="/multiplescreens.png"
            alt="Fitness app screenshot"
            width={1000}
            height={534}
            className="object-cover"
            priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
