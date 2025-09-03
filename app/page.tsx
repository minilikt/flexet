import { Features } from "@/components/Features";
import  {MainContent}  from "@/components/MainContent";
import { Navbar } from "@/components/Navbar";

import { Hero } from "@/components/Hero";
import { Progress } from "@/components/Progress";
import  {Testimonials}  from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
// import { Pricing } from "@/components/Pricing";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import FAQs from "@/components/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#191919]">
      <Navbar/>
      <Hero/>
      <Features />
      <MainContent />
      <Progress />
      <About />
      <Testimonials />
      {/* <Pricing /> */}
      <FAQs />
      <Contact />
      <Footer />
    </div>
  );
}
