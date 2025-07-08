"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
];

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const isActive = (href: string) =>
  //   typeof window !== "undefined" && window.location.pathname === href;

  return (
    <div className="w-full absolute top-[21px] left-0 backdrop-blur-[12.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12.5px)_brightness(100%)] z-50">
      <div className="flex items-center justify-between px-[24px] lg:px-[109px] py-6 w-full">
        {/* Logo */}
        <div className="relative w-[133.04px] h-[37px]">
          <div className="absolute w-[18px] h-[9px] top-1 left-0 rounded-[18.32px_0px_17.62px_0px] border-[2.21px] border-solid border-[#2196f3]" />
          <Image
            className="absolute w-[19px] h-[19px] top-[15px] -left-px"
            alt="Vector"
            src="/vector-1.svg"
            width={19}
            height={19}
          />
          <div className="absolute top-0 left-[30px] [font-family:'Roboto_Mono',Helvetica] font-normal text-white text-[27.8px] tracking-[0] leading-[normal]">
            FlexET
          </div>
        </div>

        {/* Desktop Nav */}
        {!isMobile && (
          <div className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="[font-family:'Roboto_Mono',Helvetica] font-bold text-white text-base tracking-[-0.50px] leading-6 whitespace-nowrap hover:text-blue-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}

        {/* Language or Mobile Menu */}
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#191919] text-white">
              <div className="mt-12 flex flex-col gap-6 px-2">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-lg font-semibold hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </Link>
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
