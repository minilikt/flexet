"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  // { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  // { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`w-full fixed left-0 z-50 transition-all ${
    isScrolled ? "top-4" : "top-0"
  }`}>
  <div className="flex items-center justify-between px-6 lg:px-24 py-4 w-full">
    {/* Logo (left) */}
    <div  className={`${isScrolled ? "hidden" : "flex"}`}>
      <Image
        alt="flexet logo"
        src="/logo.svg"
        width={19}
        height={19}
        className="mr-2"
      />
      <span className="font-mono text-white text-2xl">FlexET</span>
    </div>

    {/* Desktop Nav (center) */}
    {!isMobile && (
      <div className="absolute left-1/2 -translate-x-1/2 ">
        <div
          className={`flex items-center ${
            isScrolled
              ? "backdrop-blur-md bg-black/50 py-3 gap-6 rounded-full px-8"
              : "bg-transparent gap-6"
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="font-mono font-bold text-white text-base hover:text-blue-400 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    )}

    {/* Language / Mobile Menu (right) */}
    {isMobile ? (
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open menu" className="rounded-full shadow-[0_0_10px_2px_rgba(59,130,246,0.4)] hover:shadow-[0_0_14px_4px_rgba(59,130,246,0.6)] flex items-center justify-center">
              <Menu className="w-5 h-5 text-white" />
            </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-[#191919] text-white">
          <div className="mt-12 flex flex-col gap-6 px-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-lg font-semibold hover:text-blue-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    ) : (
      <div className="hidden"></div>
    )}
  </div>
</div>
  );
};
