"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// FAQ verilerini tanımlayın
const faqData = [
  {
    category: "regular",
    title: "Regular Questions",
    items: [
      {
        id: "item-1",
        question: "What is WordPress?",
        answer:
          "WordPress is a free and open-source content management system written in PHP and paired with a MySQL or MariaDB database. Features include a plugin architecture and a template system.",
      },
      {
        id: "item-2",
        question: "How do you know when it is time to get support?",
        answer:
          "It's time to get support when you encounter technical issues you can't resolve, need help with customization, or when your website requires maintenance beyond your expertise.",
      },
      {
        id: "item-3",
        question: "What payment methods do you accept?",
        answer:
          "We accept various payment methods including credit cards, PayPal, bank transfers, and other major payment platforms to ensure convenient transactions for our clients.",
      },
    ],
  },
  {
    category: "clients",
    title: "Clients Questions",
    items: [
      {
        id: "item-1",
        question: "How can I become a client?",
        answer:
          "You can become a client by reaching out to our sales team or signing up through our online portal. We'll guide you through the onboarding process.",
      },
    ],
  },
  {
    category: "trending",
    title: "Trending Questions",
    items: [
      {
        id: "item-1",
        question: "What are the latest features?",
        answer:
          "Our latest features include improved performance, enhanced security measures, and new customization options to better serve our clients' needs.",
      },
    ],
  },
];

export default function FaqMain() {
  return (
    <div className="p-4 text-white md:p-8">
      <div className="mx-auto space-y-12">
        <Tabs defaultValue="regular" className="w-full space-y-8">
          <TabsList className="w-full justify-center bg-transparent lg:justify-start">
            {faqData.map((tab) => (
              <TabsTrigger
                key={tab.category}
                value={tab.category}
                className="border-b-2 border-transparent bg-transparent px-2 pb-2 text-xs font-medium text-white/80 sm:px-3 sm:text-sm"
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {faqData.map((tab) => (
            <TabsContent
              key={tab.category}
              value={tab.category}
              className="mt-6"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {tab.items.map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="border-none"
                  >
                    <AccordionTrigger className="rounded-lg bg-white/10 px-1 py-4 text-left hover:bg-white/20 sm:px-6">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="bg-white/5 px-1 py-4 text-gray-300 sm:px-6">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
