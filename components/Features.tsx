import { Card, CardContent } from "@/components/ui/card";
import { Bell, ForkKnifeCrossed, LucideClockFading, Pen, Target, User2, Users } from "lucide-react";
import Image from "next/image";

export const Features = () => {
  const featureCards = [
    {
      icon: User2,
      title: "Personalized Workout Plans",
      description: "Tailored fitness routines to meet your unique goals.",
      position: "top-0 left-[156px]",
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Set health targets, we'll help reach them.",
      position: "top-0 left-[800px]",
    },
    {
      icon: Pen,
      title: "Educational Content",
      description:
        "Learn more about health and wellness with our curated articles.",
      position: "top-[212px] left-0",
    },
    {
      icon: LucideClockFading,
      title: "Progress Tracking",
      description: "Track your health easily and visualize progress.",
      position: "top-[212px] left-[980px]",
    },
    {
      icon: Bell,
      title: "Reminders and Notifications",
      description: "Stay on track with timely reminders and notifications.",
      position: "top-[424px] left-0",
    },
    {
      icon: Users,
      title: "Community Features",
      description: "Join a supportive community of fitness enthusiasts.",
      position: "top-[624px] left-[900px]",
    },
    {
      icon: ForkKnifeCrossed,
      title: "Nutrition Tracking",
      description: "Monitor your diet to fuel your body right.",
      position: "top-[636px] left-[87px]",
      textColor: "text-white",
    },
    {
      icon: Users,
      title: "Integration with Other Apps/Devices",
      description:
        "Seamlessly sync with your favorite health apps and devices.",
      position: "top-[750px] left-[500px]",
      textColor: "text-white",
    },
  ];

  return (
    <section id="features" className="relative w-full bg-[#191919] py-36">
      <div className="relative w-full max-w-[1440px] mx-auto px-4">
        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <h2 className="font-headline-large text-white text-3xl sm:text-4xl">
            Features Tailored for Your Success
          </h2>
          <p className="max-w-[796px] text-[#a1a2a1] text-base sm:text-lg">
            Explore our range of features designed to support you every step of
            the way. From personalized workout plans to nutrition tracking,
            we&apos;ve got you covered!
          </p>
        </div>

        <div className="hidden lg:block relative h-[1000px]">
          <div className="absolute w-[1199px] h-[1200px] top-0 left-1/2 -translate-x-1/2">
            <div className="relative h-[1200px] rounded-full">
              <div className="absolute w-[685px] h-[629px] top-[429px] left-1/2 -translate-x-1/2 bg-[#2196f3] rounded-full blur-[100px] opacity-20" />
              <div className="absolute w-[579px] h-[580px] top-[310px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#3b9cea] to-[#94ccf3] rounded-full" />
              <div className="absolute w-[849px] h-[850px] top-[175px] left-1/2 -translate-x-1/2 border border-[#a1a2a180] rounded-full opacity-50" />
              <div className="absolute w-[1199px] h-[1200px] top-0 left-0 border border-[#a1a2a180] rounded-full opacity-50" />
            <Image
              src="/phone.png"
              alt="Phone"
              height={800}
              width={800}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain rounded-full"
            />
            </div>
          </div>

          <div className="absolute w-full  top-[100px] left-0">
            {featureCards.map((feature, index) => (
              <Card
  key={`feature-${index}`}
  className={`absolute ${feature.position} bg-[#ffffff1a] shadow-[0px_2px_4px_#00000040] border-none w-[260px]`}
>
  <CardContent className="flex flex-col items-start gap-1.5 p-4">
    <div className="flex items-center gap-1 w-full">
      {Array.isArray(feature.icon) ? (
        feature.icon.map((IconComponent, i) => (
          <IconComponent
            key={`icon-${index}-${i}`}
            className="size-4 text-white"
            aria-label={`${feature.title} icon`}
          />
        ))
      ) : (
        <feature.icon 
          className="size-4 text-white" 
          aria-label={`${feature.title} icon`} 
        />
      )}
      <h3 className="font-title-medium text-white text-sm leading-tight">
        {feature.title}
      </h3>
    </div>
    <p className={`font-body-medium ${feature.textColor || "text-[#a1a2a1]"} text-xs leading-snug`}>
      {feature.description}
    </p>
  </CardContent>
</Card>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:hidden items-center gap-6">
          {featureCards.map((feature, index) => (
            <Card key={index} className="bg-[#ffffff1a] border-none shadow-md w-full">
              <CardContent className="p-6 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  {Array.isArray(feature.icon) ? (
                    feature.icon.map((IconComponent, i) => (
                      <IconComponent
                        key={i}
                        className="w-2 h-2 text-white"
                        aria-label={`${feature.title} icon`}
                      />
                    ))
                  ) : (
                    <feature.icon
                      className="w-5 h-5 text-white"
                      aria-label={`${feature.title} icon`}
                    />
                  )}
                  <h3 className="text-white font-title-medium text-lg">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-[#a1a2a1] text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}

          <div className="relative mt-12 w-[300px] h-[300px]">
            <div className="absolute inset-0 bg-[#2196f3] rounded-full blur-[100px] opacity-20" />
            <div className="absolute inset-0 border border-[#a1a2a180] rounded-full opacity-50" />
            <div className="absolute top-[15%] left-[15%] w-[70%] h-[70%] bg-gradient-to-r from-[#3b9cea] to-[#94ccf3] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
