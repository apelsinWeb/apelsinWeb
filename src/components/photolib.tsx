'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type Slide =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; alt: string };

const slides: Slide[] = [
  { type: "video", src: "./3.mp4", alt: "Урок произношения" },
  { type: "video", src: "./2.mp4", alt: "Обучение чтению" },
  { type: "video", src: "./1.mp4", alt: "Урок произношения" },
];

export default function CoursesCarousel() {
  const [current, setCurrent] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const touchStartX = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (slides[current]?.type === "video") return;
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === current) {
        video.muted = isMuted;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [current]);

  const toggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      videoRefs.current.forEach((video) => {
        if (video) video.muted = next;
      });
      return next;
    });
  };

  const goTo = (index: number) => setCurrent(index);
  const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);
  const goPrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goNext() : goPrev();
    }
  };

  return (
    <section className="py-10 sm:py-14 lg:py-20 px-4">
      <div className="max-w-md sm:max-w-lg lg:max-w-2xl mx-auto">

        <div
          className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div key={i} className="w-full flex-shrink-0">
                {slide.type === "image" ? (
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={800}
                    height={800}
                    className="w-full h-auto object-cover"
                    priority={i === 0}
                  />
                ) : (
                  <video
                    ref={(el) => { videoRefs.current[i] = el; }}
                    src={slide.src}
                    autoPlay={i === current}
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-auto object-cover"
                    onEnded={goNext}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Mute/Unmute */}
          {slides[current]?.type === "video" && (
            <button
              type="button"
              onClick={toggleMute}
              className="absolute bottom-3 right-3 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition z-10"
              aria-label={isMuted ? "Включить звук" : "Выключить звук"}
            >
              {isMuted ? (
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728" />
                </svg>
              )}
            </button>
          )}

          {/* Arrows */}
          <button
            type="button"
            onClick={goPrev}
            className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full items-center justify-center shadow-md transition"
            aria-label="Назад"
          >
            <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full items-center justify-center shadow-md transition"
            aria-label="Вперёд"
          >
            <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5 sm:mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Слайд ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === current
                  ? "w-6 bg-green-700"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}