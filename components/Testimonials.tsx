import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";


export const Testimonials = () => {
  // Define testimonial data
  const testimonial = {
    text: "The user experience of this app is fantastic! It's intuitive and easy to navigate. The personalized workout plans have really helped me stay consistent with my fitness routine.",
    avatar: "/union.png",
  };

  // Define user avatars data with opacity values
  const userAvatars = [
    { src: "/union.png", opacity: "opacity-20", position: "top-1 left-9" },
    {
      src: "/union.png",
      opacity: "opacity-30",
      position: "top-1 left-1",
    },
    {
      src: "/union.png",
      opacity: "opacity-40",
      position: "top-1 left-1",
    },
    {
      src: "/union.png",
      opacity: "opacity-60",
      position: "top-1 left-1",
    },
    {
      src: "/union.png",
      opacity: "opacity-70",
      position: "top-1 left-1",
    },
    {
      src: "/union.png",
      opacity: "opacity-80",
      position: "top-1 left-1",
    },
    {
      src: "/union.png",
      opacity: "opacity-80",
      position: "top-1 left-1",
    },
    {
      src: "/union.png",
      opacity: "opacity-70",
      position: "top-1 left-1",
    },
    {
      src: "/union.png",
      opacity: "opacity-60",
      position: "top-1 left-1",
    },
    {
      src: "/union.png",
      opacity: "opacity-40",
      position: "top-1 left-1",
    },
    {
      src: "/union.png",
      opacity: "opacity-30",
      position: "top-1 left-1",
    },
    {
      src: "/union.png",
      opacity: "opacity-20",
      position: "top-1 left-1",
    },
  ];

  return (
    <section className="w-full bg-[#191919] py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center gap-4 mb-16">
          <h2 className="font-headline-large font-[number:var(--headline-large-font-weight)] text-white text-[length:var(--headline-large-font-size)] text-center tracking-[var(--headline-large-letter-spacing)] leading-[var(--headline-large-line-height)] whitespace-nowrap [font-style:var(--headline-large-font-style)]">
            Transformations, Triumphs, and Testimonials
          </h2>
          <p className="max-w-4xl font-body-large font-[number:var(--body-large-font-weight)] text-[#a1a2a1] text-[length:var(--body-large-font-size)] text-center tracking-[var(--body-large-letter-spacing)] leading-[var(--body-large-line-height)] [font-style:var(--body-large-font-style)]">
            Experience the FitLife difference through the stories of our users.
            From fitness breakthroughs to lifestyle overhauls, see how FitLife
            has sparked change and inspired healthier lives.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-3xl mx-auto">
          <div className="relative">
            {/* Card Shadow Layers */}
            <div className="absolute w-[90%] h-[404px] top-0 left-[5%] bg-[#454749]"></div>
            <div className="absolute w-[95%] h-[423px] top-[18px] left-[2.5%] bg-[#8c8786]"></div>

            {/* Main Testimonial Card */}
            <Card className="relative w-full bg-[#ff9800] overflow-hidden border-none mt-9">
              <CardContent className="p-8 flex flex-col items-center justify-center min-h-[450px] relative">
                <Avatar className="w-[66px] h-[66px] mb-12">
                  <AvatarImage
                    src={testimonial.avatar}
                    alt="Testimonial user"
                  />
                </Avatar>

                <p className="max-w-[536px] text-center text-m-3white font-['Karla',Helvetica] font-normal text-[15px] leading-[21px] tracking-[0]">
                  {testimonial.text}
                </p>

                <div className="absolute w-[108px] h-[108px] bottom-0 left-1/2 transform -translate-x-1/2 bg-[#191919] rounded-[54px]"></div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full">
                <Button
                variant="outline"
                className="w-[75px] h-[75px] bg-[#363b3e] border-none rounded-none p-0 flex items-center justify-center"
                >
                <Image
                  width={12}
                  height={15}
                  className="w-3 h-[15px]"
                  alt="Previous"
                  src="/previous-icon.png"
                />
                </Button>

                <Button
                variant="outline"
                className="w-[75px] h-[75px] bg-[#363b3e] border-none rounded-none p-0 flex items-center justify-center"
                >
                <Image
                  width={12}
                  height={15}
                  className="w-3 h-[15px]"
                  alt="Next"
                  src="/next-icon.png"
                />
                </Button>
            </div>

            {/* Bottom Avatar */}
            <Avatar className="w-24 h-24 absolute -bottom-12 left-1/2 transform -translate-x-1/2">
              <AvatarImage
                src="/ellipse-10.png"
                alt="Featured user"
                className="object-cover"
              />
            </Avatar>
          </div>
        </div>

        {/* User Avatars Carousel */}
        <div className="mt-32 relative">
          <Carousel className="w-full">
            <CarouselContent className="flex justify-center">
              <CarouselItem className="flex justify-center gap-6 basis-auto">
                {userAvatars.slice(0, 6).map((avatar, index) => (
                  <div
                    key={`avatar-left-${index}`}
                    className={`relative ${avatar.opacity}`}
                  >
                    <div className="relative w-[88px] h-[88px] bg-[#dfdcd9] rounded-[44px]">
                      <Image
                      width={80}
                      height={80}
                      className={`absolute w-20 h-20 ${avatar.position} object-cover`}
                      alt={`User ${index + 1}`}
                      src={avatar.src}
                      />
                    </div>
                  </div>
                ))}
              </CarouselItem>

              <div className="flex flex-col items-center justify-center gap-2 mx-12">
                <div className="w-[114px] h-4 font-title-medium font-[number:var(--title-medium-font-weight)] text-white tracking-[var(--title-medium-letter-spacing)] text-[length:var(--title-medium-font-size)] text-center leading-[var(--title-medium-line-height)] whitespace-nowrap [font-style:var(--title-medium-font-style)]">
                  TALENT SYNC
                </div>
                <div className="w-[126px] h-[19px] font-body-large font-[number:var(--body-large-font-weight)] text-[#a1a2a1] tracking-[var(--body-large-letter-spacing)] text-[length:var(--body-large-font-size)] text-center leading-[var(--body-large-line-height)] whitespace-nowrap [font-style:var(--body-large-font-style)]">
                  Talent Discovery
                </div>
              </div>

              <CarouselItem className="flex justify-center gap-6 basis-auto">
                {userAvatars.slice(6).map((avatar, index) => (
                  <div
                    key={`avatar-right-${index}`}
                    className={`relative ${avatar.opacity}`}
                  >
                    <div className="relative w-[88px] h-[88px] bg-[#dfdcd9] rounded-[44px]">
                      <Image
                      width={80}
                      height={80}
                      className={`absolute w-20 h-20 ${avatar.position} object-cover`}
                      alt={`User ${index + 7}`}
                      src={avatar.src}
                      />
                    </div>
                  </div>
                ))}
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
