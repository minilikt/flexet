import { Users, Target, Globe, Award } from "lucide-react";
// import { Card, CardContent } from "./ui/card";

export function About() {
  // const founders = [
  //   {
  //     name: "Abraham Mulugeta",
  //     role: "CEO & Co-Founder",
  //     image: "AM",
  //     bio: "Passionate about leveraging AI to solve real-world problems in fitness and health. Abraham brings experience in product strategy and a deep understanding of the Ethiopian tech landscape.",
  //   },
  //   {
  //     name: "Kaleab Denbel",
  //     role: "CTO & Co-Founder",
  //     image: "KD",
  //     bio: "Expert in AI/ML and mobile development with a focus on creating robust, offline-capable applications. Kaleab leads our technical vision and product architecture.",
  //   },
  // ];

  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "We build for the Ethiopian community, understanding local needs and creating solutions that work in our unique context.",
    },
    {
      icon: Target,
      title: "AI-Powered Precision",
      description: "Our advanced algorithms learn from every user interaction to provide increasingly personalized fitness experiences.",
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Fitness should be accessible to everyone, regardless of equipment, location, or internet connectivity.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We're committed to delivering the highest quality fitness technology that genuinely improves lives.",
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {/* <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            About <span className="text-[#0070F0]">FlexET</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Founded in October 2023, FlexET is revolutionizing fitness in Ethiopia with AI-powered personalization and accessibility.
          </p>
        </div> */}

        {/* Mission Statement */}
        {/* <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 lg:p-12 rounded-2xl border border-gray-700 mb-16 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
            Our Mission
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            To empower every Ethiopian with AI-driven fitness solutions that work in their daily lives. We believe that geography, equipment limitations, or connectivity should never be barriers to achieving your fitness goals.
          </p>
        </div> */}

        {/* Founders */}
        {/* <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Meet Our <span className="text-[#0070F0]">Founders</span>
          </h3>
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:border-[#0070F0]/50 transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-[#0070F0] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-2xl">
                      {founder.image}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {founder.name}
                  </h4>
                  <p className="text-[#0070F0] font-medium mb-4">
                    {founder.role}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {founder.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Company Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Our <span className="text-[#0070F0]">Values</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 text-center hover:border-[#0070F0]/50 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0070F0]/20 rounded-full mb-4">
                    <IconComponent className="h-6 w-6 text-[#0070F0]" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vision & Future */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Our <span className="text-[#0070F0]">Vision for 2027</span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#0070F0] rounded-full mt-2"></div>
                <div>
                  <p className="text-gray-300">
                    <strong className="text-white">AI-Integrated Equipment:</strong> Smart fitness devices designed for Ethiopian homes and gyms
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#0070F0] rounded-full mt-2"></div>
                <div>
                  <p className="text-gray-300">
                    <strong className="text-white">Coach Certification Platform:</strong> Training Ethiopian fitness professionals in AI-assisted coaching
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#0070F0] rounded-full mt-2"></div>
                <div>
                  <p className="text-gray-300">
                    <strong className="text-white">Regional Expansion:</strong> Bringing FlexET to fitness enthusiasts across East Africa
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
            <h4 className="text-xl font-semibold text-white mb-4">
              Current Traction
            </h4>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0070F0] mb-1">50+</div>
                <div className="text-sm text-gray-400">Beta Testers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0070F0] mb-1">80%</div>
                <div className="text-sm text-gray-400">Retention</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0070F0] mb-1">100+</div>
                <div className="text-sm text-gray-400">Pre-signups</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0070F0] mb-1">1K</div>
                <div className="text-sm text-gray-400">Goal by Dec &apos;25</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-center text-gray-300 text-sm">
                Founded: <span className="text-[#0070F0] font-semibold">October 2, 2023</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}