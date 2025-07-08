import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const Navigation = () => {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <div className="flex flex-col items-start relative">
      <div className="relative w-full h-[800px] bg-[#191919]">
        {/* Main content section */}
        <div className="relative w-full max-w-[1284px] h-[600px] mx-auto mt-[156px]">
          {/* Left content area */}
          <div className="gap-2 absolute top-[50px] left-0 flex flex-col items-start">
            {/* Badge */}
            <Badge className="flex items-center gap-2 px-4 py-2 bg-[#ffffff1a] rounded-2xl hover:bg-[#ffffff1a]">
              <Image className="w-3 h-3" alt="Barbell" src="/barbell.svg" width={12} height={12} />
              <span className="[font-family:'Roboto_Mono',Helvetica] font-medium text-white text-[11px] tracking-[0.50px] leading-4 whitespace-nowrap">
              #1 CUTTING EDGE HEALTH &amp; FITNESS SOLUTION
              </span>
            </Badge>

            {/* Headline, paragraph and buttons */}
            <div className="flex flex-col items-start gap-12">
              <div className="flex flex-col items-start gap-6">
                <h1 className="w-[670.2px] [font-family:'Roboto_Mono',Helvetica] font-medium text-white text-[67px] tracking-[-5.00px] leading-[75.2px]">
                  New way to track <br />
                  your progression
                </h1>

                <p className="w-[456px] font-body-medium text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] font-[number:var(--body-medium-font-weight)] text-white [font-style:var(--body-medium-font-style)]">
                  Track your workouts, monitor your progress, and stay
                  motivated with our easy-to-use health and fitness mobile
                  app.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  className="px-12 py-6 rounded-lg bg-[#363B3E] font-body-large text-[#FFFFFF]"
                >
                  Download Now and Get Fit
                </Button>

                <Button
                  variant="outline"
                  className="px-12 py-6 rounded-md border-2 border-solid border-[#2196f3] bg-[#191919] font-body-large text-[#FFFFFF]"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* Blue glow effect */}
          <div className="absolute w-[600px] h-[600px] top-0 left-[684px] bg-[#2196f3] rounded-[300px] blur-[250px] opacity-50" />

          <Image
            className="absolute w-[712px] h-[534px] top-[33px] left-[572px] object-cover"
            alt="Fitness app screenshot"
            src="/multiplescreens.png"
            width={712}
            height={534}
          />
        </div>

        {/* Navigation bar */}
        <div className="w-full absolute top-[21px] left-0 backdrop-blur-[12.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12.5px)_brightness(100%)]">
            <div className="flex items-center justify-between px-[109px] py-6 w-full">
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

            {/* Navigation menu */}
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-6">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={item.href}
                  className="[font-family:'Roboto_Mono',Helvetica] font-bold text-white text-base tracking-[-0.50px] leading-6 whitespace-nowrap"
                >
                  {item.label}
                </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Language selector */}
            <Image
              className="w-8 h-8 object-cover"
              alt="Language"
              src="/language.png"
              width={32}
              height={32}
            />
            </div>
        </div>
      </div>
    </div>
  );
};
