'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'


export default function FAQs() {
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };
    const faqItems = [
  {
    "id": "item-1",
    "question": "Do I need internet to use FlexET?",
    "answer": "Not always! FlexET works offline for most workouts and progress tracking. Your data will sync automatically once you’re back online."
  },
  {
    "id": "item-2",
    "question": "Who is FlexET designed for?",
    "answer": "FlexET is for anyone—from beginners just starting their fitness journey to athletes training at a high level. Whether you’re at home, outdoors, or in a gym, the app adapts to your lifestyle."
  },
  {
    "id": "item-3",
    "question": "Is FlexET free to use?",
    "answer": "Yes! We offer a free plan with core features like workout plans, progress tracking, and community access. You can upgrade later for advanced AI personalization and nutrition guidance."
  },
  {
    "id": "item-4",
    "question": "Who is FlexET designed for?",
    "answer": "FlexET is for anyone—from beginners just starting their fitness journey to athletes training at a high level. Whether you’re at home, outdoors, or in a gym, the app adapts to your lifestyle."
  },
  {
    "id": "item-5",
    "question": "Is FlexET free to use?",
    "answer": "Yes! We offer a free plan with core features like workout plans, progress tracking, and community access. You can upgrade later for advanced AI personalization and nutrition guidance."
  },
  {
    "id": "item-6",
    "question": "I don’t have gym equipment. Can I still use FlexET?",
    "answer": "Absolutely. FlexET creates custom routines based on what you have—even if that’s just your bodyweight. No gym? No problem!"
  },
  {
    "id": "item-7",
    "question": "How does FlexET track my progress?",
    "answer": "Our app lets you log workouts, meals, and runs. Progress is visualized in simple charts and milestones, so you always know how far you’ve come."
  },
  {
    "id": "item-8",
    "question": "Is my personal data safe?",
    "answer": "Yes. Your fitness data is encrypted and never shared with third parties. Privacy and security are at the heart of everything we do."
  }
]


    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                      Frequently Asked <span className="text-[#0070F0]">Questions</span>
                    </h2>
                    <p className="text-white/80 mt-4 text-balance">Discover quick and comprehensive answers to common questions about our platform, services, and features.</p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-black/50 ring-muted w-full rounded-2xl px-8 py-3 shadow-sm">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-none">
                                <AccordionTrigger className="cursor-pointer text-white hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-white">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <p className="text-white/80 mt-6 px-8">
                        Can&apos;t find what you&apos;re looking for? Contact our{' '}
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="font-sm hover:text-blue-900 hover:underline transition-colors"
                        >
                            customer support team
                        </button>
                    </p>
                </div>
            </div>
        </section>
    )
}