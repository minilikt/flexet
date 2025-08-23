"use client"
import { Check, Star, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

export function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with AI-powered fitness",
      popular: false,
      features: [
        "Basic AI workout plans",
        "Progress tracking",
        "Running/walking tracker",
        "Offline workout access",
        "Community support",
        "Basic analytics",
      ],
      limitations: [
        "Limited workout variety",
        "Basic progress reports",
        "Standard support",
      ],
    },
    {
      name: "Premium",
      price: "$5",
      period: "per month",
      description: "Unlock the full potential of AI-powered fitness",
      popular: true,
      features: [
        "Advanced AI workout personalization",
        "Unlimited workout variations",
        "Detailed progress analytics",
        "Advanced running metrics",
        "Nutrition guidance",
        "Custom goal setting",
        "Priority customer support",
        "Workout plan exports",
        "Integration with fitness devices",
        "Ad-free experience",
      ],
      limitations: [],
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Choose Your <span className="text-[#0070F0]">Plan</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start free and upgrade when you're ready for advanced AI-powered features and analytics.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-gray-800/50 border-2 transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular
                  ? "border-[#0070F0] bg-gradient-to-b from-gray-800/80 to-gray-900/80"
                  : "border-gray-700 hover:border-[#0070F0]/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-[#0070F0] text-white px-4 py-1 text-sm font-semibold">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-[#0070F0]">{plan.price}</span>
                  <span className="text-gray-400 ml-1">/{plan.period}</span>
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-white mb-3 flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-[#0070F0]" />
                    What's Included
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-[#0070F0] mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Limitations for Free Plan */}
                {plan.limitations.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-400 mb-3">Limitations</h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, limitIndex) => (
                        <li key={limitIndex} className="text-gray-500 text-sm">
                          • {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                <Button
                  className={`w-full py-3 font-semibold ${
                    plan.popular
                      ? "bg-[#0070F0] hover:bg-[#0060E0] text-white"
                      : "bg-gray-700 hover:bg-gray-600 text-white border border-gray-600"
                  }`}
                  size="lg"
                >
                  {plan.name === "Free" ? "Get Started Free" : "Upgrade to Premium"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center space-y-8">
          {/* Money Back Guarantee */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-2">
              30-Day Money-Back Guarantee
            </h3>
            <p className="text-gray-300">
              Try FlexET Premium risk-free. If you're not completely satisfied, we'll refund your subscription within 30 days.
            </p>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-gray-800/30 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Can I cancel anytime?</h4>
                <p className="text-gray-300 text-sm">
                  Yes, you can cancel your Premium subscription at any time. You'll continue to have access until the end of your billing period.
                </p>
              </div>
              <div className="bg-gray-800/30 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Is my data secure?</h4>
                <p className="text-gray-300 text-sm">
                  Absolutely. We use industry-standard encryption and never share your personal fitness data with third parties.
                </p>
              </div>
              <div className="bg-gray-800/30 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Works offline?</h4>
                <p className="text-gray-300 text-sm">
                  Yes! Both Free and Premium plans work offline. Your data syncs when you're back online.
                </p>
              </div>
              <div className="bg-gray-800/30 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Equipment needed?</h4>
                <p className="text-gray-300 text-sm">
                  No equipment required! FlexET specializes in bodyweight and minimal equipment workouts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}