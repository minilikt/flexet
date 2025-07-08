import { CallToAction } from "@/components/CallToAction";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import  {MainContent}  from "@/components/MainContent";
import { Navbar } from "@/components/Navbar";

import { Hero } from "@/components/Hero";
import { Progress } from "@/components/Progress";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#191919]">
      {/* <Navigation /> */}
      <Navbar/>
      <Hero/>
      <Features />
      <MainContent />
      <Progress />
      <Testimonials />
      <CallToAction />
      {/* <Footer /> */}
    </div>
  );
}
