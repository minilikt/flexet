import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="w-full py-16 relative bg-[#191919] overflow-hidden">
      {/* Blue gradient effects */}
      <div className="absolute w-[597px] h-[587px] top-[-334px] left-[-500px] bg-[#2196f3] rounded-[298.45px/293.36px] rotate-[-26.53deg] blur-[500px]" />
      <div className="absolute w-[597px] h-[587px] bottom-[-250px] right-[-400px] bg-[#2196f3] rounded-[298.45px/293.36px] rotate-[-26.53deg] blur-[500px]" />

      <Card className="max-w-7xl mx-auto border-none bg-transparent">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-8 max-w-[599px]">
              <div className="flex flex-col gap-4">
                <h2 className="font-['Montserrat',Helvetica] font-semibold text-white text-[57px] tracking-[-0.25px] leading-[64px]">
                  Ready to Ignite Your Fitness Journey?
                </h2>
                <p className="font-body-medium font-[number:var(--body-medium-font-weight)] text-white text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
                  Don&apos;t just take our word for it, experience the
                  transformation yourself! Download FlexET now and step into a
                  world of personalized fitness and health. Your journey to a
                  healthier, fitter you starts here.
                </p>
              </div>

              <Button className="bg-[#363b3e] hover:bg-[#4a5054] rounded-[3px] shadow-[0px_0px_22.2px_#00000040] px-6 py-4 h-auto w-fit">
                <span className="font-['Karla',Helvetica] font-medium text-m-3white text-sm tracking-[0.10px] leading-5 whitespace-nowrap">
                  Download Now and Get Fit
                </span>
              </Button>
            </div>

            <div className="w-full md:w-[512px] h-96">
              <Image
                className="w-full h-full object-cover"
                alt="Fitness journey image"
                src="/screens.png"
                width={512}
                height={384}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
