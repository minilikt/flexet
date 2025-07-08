import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const Footer = () => {
  // Company links data
  const companyLinks = [
    "Home",
    "Features",
    "How it works",
    "Testimonials",
    "Download The App",
  ];

  // Resources links data
  const resourceLinks = [
    "Blog post name goes here",
    "Blog post name goes here",
    "Blog post name goes here",
    "See all resources",
  ];

  // About links data
  const aboutLinks = ["Terms & Conditions", "Privacy Policy"];

  return (
    <footer className="flex flex-col items-center gap-10 pt-16 pb-2 px-6 w-full bg-[#191919]">
      <div className="flex items-start justify-between w-full max-w-[960px]">
        {/* Logo Section */}
        <div className="relative w-[200.33px] h-14">
          <div className="absolute w-[27px] h-[13px] top-1.5 left-0 rounded-[18.32px_0px_17.62px_0px] border-[2.21px] border-solid border-[#2196f3]" />
          <Image
            className="absolute w-7 h-7 top-[23px] -left-px"
            alt="Vector"
            src="/vector-1.svg"
            width={28}
            height={28}
          />
          <div className="absolute w-[153px] top-0 left-[45px] [font-family:'Roboto_Mono',Helvetica] font-bold text-white text-[27.8px] tracking-[0] leading-[normal]">
            FlexET
          </div>
        </div>

        {/* Links Section */}
        <div className="flex items-start gap-8 pt-4 w-full max-w-[600px]">
          {/* Company Column */}
          <div className="flex flex-col items-start gap-6 flex-1">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="w-full font-title-medium font-[number:var(--title-medium-font-weight)] text-m-3white text-[length:var(--title-medium-font-size)] tracking-[var(--title-medium-letter-spacing)] leading-[var(--title-medium-line-height)] [font-style:var(--title-medium-font-style)]">
                COMPANY
              </div>
              <div className="flex flex-col items-start gap-2 w-full">
                {companyLinks.map((link, index) => (
                  <div
                    key={`company-link-${index}`}
                    className="w-full font-body-medium font-[number:var(--body-medium-font-weight)] text-m-3white text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]"
                  >
                    {link}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col items-start gap-6 flex-1">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="w-full font-title-medium font-[number:var(--title-medium-font-weight)] text-m-3white text-[length:var(--title-medium-font-size)] tracking-[var(--title-medium-letter-spacing)] leading-[var(--title-medium-line-height)] [font-style:var(--title-medium-font-style)]">
                RESOURCES
              </div>
              <div className="flex flex-col items-start gap-2 w-full">
                {resourceLinks.map((link, index) => (
                  <div
                    key={`resource-link-${index}`}
                    className="w-full font-body-medium font-[number:var(--body-medium-font-weight)] text-m-3white text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]"
                  >
                    {link}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* About Column */}
          <div className="flex flex-col items-start gap-6 flex-1">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="w-full font-title-medium font-[number:var(--title-medium-font-weight)] text-m-3white text-[length:var(--title-medium-font-size)] tracking-[var(--title-medium-letter-spacing)] leading-[var(--title-medium-line-height)] [font-style:var(--title-medium-font-style)]">
                ABOUT
              </div>
              <div className="flex flex-col items-start gap-2 w-full">
                {aboutLinks.map((link, index) => (
                  <div
                    key={`about-link-${index}`}
                    className="w-fit whitespace-nowrap font-body-medium font-[number:var(--body-medium-font-weight)] text-m-3white text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]"
                  >
                    {link}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="w-[940px] bg-[#a1a2a1] opacity-20" />

      <div className="flex w-[940px] items-center justify-center py-4">
        <div className="flex-1 [font-family:'Inter',Helvetica] font-normal text-[#a1a2a1] text-sm text-center tracking-[0] leading-[21px]">
          Copyright © 2025 Zendro
        </div>
      </div>
    </footer>
  );
};
