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
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
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
    <div
      className={`w-full fixed top-0 left-0 z-50 transition-all ${
        isScrolled ? "backdrop-blur-md bg-black/50" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 lg:px-24 py-4 w-full">
        {/* Logo */}
        <div className="relative w-[133px] h-[37px] flex items-center">
          <Image
            alt="flexet logo"
            src="/logo.svg"
            width={19}
            height={19}
            className="mr-2"
          />
          <span className="font-mono text-white text-2xl">FlexET</span>
        </div>

        {/* Desktop Nav */}
        {!isMobile && (
          <div className="flex items-center gap-6">
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
        )}

        {/* Language or Mobile Menu */}
        {isMobile ? (
          
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
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
          <Image
            src="/language.png"
            alt="Language"
            width={32}
            height={32}
            className="object-cover"
          />
        )}
      </div>
    </div>
  );
};
