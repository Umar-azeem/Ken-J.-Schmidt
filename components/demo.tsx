"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function MeetMarkCohen() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#000D1E] via-[#000A19] to-[#000D1E] py-20 md:py-28">
      {/* Background blur effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#236193] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#236193] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Tagline */}
            <p className="text-[#236193] font-semibold tracking-wide text-lg">
              DECADES OF EXPERTISE.
              <br />
              ONE ADVOCATE WORKING FOR YOU.
            </p>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              MEET MARK COHEN
            </h2>

            {/* Description */}
            <div className="space-y-4 text-slate-200">
              <p className="text-lg leading-relaxed">
                For 15 consecutive years, Mark Cohen has ranked in the top 1% of mortgage brokers nationwide. 
                In 2026, he was named the #1 Mortgage Broker in the U.S. and the #1 Non-QM Originator by the 
                Scotsman Guide.
              </p>
              <p className="text-lg leading-relaxed">
                Over his career, Mark has originated more than 31,200 loans totaling over $18 billion in volume, 
                and remains the only mortgage broker in the U.S. to average $1 billion in annual loan volume 
                for 11 consecutive years.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you're purchasing your first home, financing a luxury property, or navigating a complex 
                lending situation, Mark and his team bring an unmatched depth of experience to every transaction.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-[#236193] hover:bg-[#1a4a70] text-white px-8 py-6 text-lg">
                LEARN MORE ABOUT MARK
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                MEET OUR TEAM
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/mark-cohen.jpg"
                alt="Mark Cohen"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#236193] rounded-lg opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}