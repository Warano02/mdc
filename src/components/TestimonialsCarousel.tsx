"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  video: string;
  poster: string;
  name: string;
  text: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [index, setIndex] = useState(0);

  const canGoPrev = index > 0;
  const canGoNext = index < testimonials.length - 1;

  return (
    <div className="w-full max-w-[26em]">
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((t) => (
            <div key={t.name} className="w-full shrink-0 flex flex-col gap-4">
              <video
                src={t.video}
                poster={t.poster}
                controls
                className="w-full aspect-video bg-black object-cover"
              />
              <p className="text-sm leading-relaxed text-gray-700">
                <span className="font-bold text-primary">{t.name}</span> {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          type="button"
          aria-label="Previous testimonial"
          disabled={!canGoPrev}
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          className="w-10 h-10 rounded-full border border-primary text-primary flex items-center justify-center cursor-pointer transition-colors hover:bg-primary hover:text-white disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-primary"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          disabled={!canGoNext}
          onClick={() => setIndex((i) => Math.min(testimonials.length - 1, i + 1))}
          className="w-10 h-10 rounded-full border border-primary text-primary flex items-center justify-center cursor-pointer transition-colors hover:bg-primary hover:text-white disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-primary"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
