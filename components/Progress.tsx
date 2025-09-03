"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";


export const Progress = () => {
  // Data for the progress tracking features
  const progressFeatures = [
    {
      title: "Set Your Goals",
      description:
        "Define your fitness goals. Be it weight loss, muscle gain, or improving stamina, we've got you covered.",
      imagePosition: "right",
    },
    {
      title: "Track Your Progress",
      description:
        "Visualize your progress with our interactive tracker. Each workout, each healthy meal takes you one step closer to your goal.",
      imagePosition: "left",
    },
    {
      title: "Celebrate Milestones",
      description:
        "Unlock milestones and celebrate your achievements. Every milestone is a testament to your dedication and hard work.",
      imagePosition: "right",
    },
    {
      title: "Stay Motivated",
      description:
        '"Keep track of your progress and stay inspired. Remember, every step counts in your fitness journey."',
      imagePosition: "left",
    },
  ];

  return (
    <section id="how-it-works" className="w-full bg-[#191919] py-20">
      
      <div className="flex flex-col items-center max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-4 mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Track Your Fit<span className="text-[#0070F0]">ness with ease!</span>
          </h2>
          <p className="font-body-large text-[#a1a2a1] text-center max-w-3xl">
            With our Interactive Progress Tracker, monitor your progress in
            real-time and stay motivated.
          </p>
        </div>

        {/* Features Section */}
        <div className="flex flex-col gap-[72px]">
          {progressFeatures.map((feature, index) => (
            <Card key={index} className="bg-transparent border-none">
              <CardContent className="p-0">
                <div className="flex flex-row items-center justify-between gap-8">
                  {feature.imagePosition === "left" && (
                    <Image
                      className=" object-cover"
                      alt="Fitness app"
                      src="/image-2-1.png"
                      width={228}
                      height={456}
                    />
                  )}

                  <div className="flex flex-col items-start gap-[9px] max-w-[465px]">
                    <h3 className="font-['Montserrat',Helvetica] font-normal text-white text-[22.5px] leading-[31.5px]">
                      {feature.title}
                    </h3>
                    <p className="font-['Karla',Helvetica] font-normal text-[#a1a2a1] text-lg tracking-[0.56px] leading-[27px]">
                      {feature.description}
                    </p>
                  </div>

                  {feature.imagePosition === "right" && (
                    <Image
                      className=" object-cover"
                      alt="Fitness app"
                      src="/image-2-1.png"
                      width={228}
                      height={456}
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-6 mt-20">
          <p className="font-['Karla',Helvetica] font-normal text-ash text-lg text-center tracking-[0.56px] leading-[27px] max-w-[636px] text-[#A1A2A1]">
            Ready to start tracking your fitness journey? Download our app now
            and take the first step towards a healthier you!
          </p>
          <Button
            variant="outline"
            className="px-12 py-6 hover:bg-[#2196f3] rounded-md border-2 border-solid border-[#2196f3] bg-[#191919] font-body-large text-[#FFFFFF]"
            onClick={() => {
              window.open("https://forms.gle/zJPRD7YBFCXG89iK9", "_blank");
            }}
          >
              Download the App
          </Button>
        </div>
      </div>
    </section>
  );
};
