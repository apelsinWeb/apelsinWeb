'use client';

import { useState, useRef, useEffect } from "react";

const testimonials = [
  {
    text: "Здравствуйте. Сыну 11 лет. Мы участники в Детский клуб «Апельсин». Учимся онлайн по чтению, правописание. Состоим в клубе два года. Результат нас очень порадовал. Сын стал на много лучше читать, писать прописью, уверенность, по сравнению с тем, что было до этого. Все грамотно, организовано. Педагоги очень добрые, подход к каждому ребёнку индивидуальный.",
    author: "МАМА ДИМЫ, 11 ЛЕТ",
    tag: "(Чтение, письмо)",
  },
  {
    text: "Мы начали интенсивные уроки по русскому языку в конце октября, и уже за 15 дней я вижу значительные результаты. Исмоил с удовольствием занимается, осознанно подходит к учебе и быстро прогрессирует. Сейчас у нас три индивидуальных занятия в неделю, и сын уже начал читать. Преподаватель уверенно направляет его, помогая освоить чтение и письмо.",
    author: "МАМА ИСМОИЛА, 10 ЛЕТ",
    tag: "(Чтение, каллиграфия)",
  },
  {
    text: "Дочке 5 лет. Занимаемся онлайн «Развитием речи» и «Чтением». Благодаря занятиям получается поддерживать интерес к русской культуре и иметь контакт с такими же детьми-билингвами. При встрече с русскоговорящими ребенок комфортно себя чувствует, вспоминает накопленное и может общаться. Есть прогресс в понимании прочитанного, падежей и множественного числа, дочь стала задавать вопросы, как правильно сказать.",
    author: "МАМА МИО, 5 ЛЕТ",
    tag: "(Развитие речи с нуля, чтение)",
  },
  {
    text: "Моей дочери 6 лет, она занимается в школе около 9 месяцев, два раза в неделю онлайн. За это время у неё значительно расширился словарный запас. Раньше она часто предпочитала отвечать на языке среды, а сейчас легко отвечает на русском и гораздо лучше понимает речь. Дочке очень нравится формат занятий, и мы видим хороший прогресс.",
    author: "МАМА АЙИ, 6 ЛЕТ",
    tag: "(Развитие речи, письмо)",
  },
  {
    text: "Моей дочери 10 лет, она занимается в школе около 9 месяцев, два раза в неделю онлайн. За это время мы заметили значительные изменения: улучшилась разговорная речь, она научилась писать прописью, появилось понимание грамматики. Речь стала грамматически более правильной, значительно расширился словарный запас. Мы очень довольны результатом и тем, как построены занятия.",
    author: "МАМА ЯСМИН, 10 ЛЕТ",
    tag: "(Русский язык начальной школы)",
  },
  {
    text: "Хочу оставить отзыв о занятиях по «Окружающему миру». Мой сын занимается в «Апельсине» с 4-х лет, сейчас ему 9. Постепенно от легких программ перешли в более предметные. Основной акцент был на то, чтобы ребенок билинг как можно больше получал знания именно на русском языке. Наблюдая за сыном, понимаю, что у него есть большой интерес к познанию мира, как раз то, что и преподают по предмету. Вижу большой прогресс и желание ребенка продолжать получать знания.",
    author: "МАМА НИКИТЫ, 9 ЛЕТ",
    tag: "(Окружающий мир)",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goTo = (index: number) => {
    setCurrent(index);
    resetTimer();
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    resetTimer();
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    resetTimer();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goNext() : goPrev();
    }
  };

  const t = testimonials[current];

  return (
    <section className="py-10 sm:py-14 lg:py-20 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">

        <h2 className="text-green-700 text-[20px] sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-wide">
          Отзывы
        </h2>

        <div
          className="shadow-gray-60000 shadow-xl flex flex-col justify-between p-5 sm:p-8 mt-6 sm:mt-8 w-full max-w-md sm:max-w-lg lg:max-w-2xl bg-[#FFE783] rounded-2xl sm:rounded-3xl lg:p-10 h-[480px] min-[430px]:h-[440px] sm:h-[380px] lg:h-[350px]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="rounded-2xl bg-white p-5 sm:p-8 flex-1 overflow-y-auto flex items-center">
            <p className="text-gray-800 text-sm sm:text-2xl text-left leading-relaxed sm:leading-7 lg:leading-8">
              {t.text}
            </p>
          </div>

          <div>
            <p className="text-green-700 text-base sm:text-lg lg:text-xl font-extrabold py-1">
              – {t.author}
            </p>
            <p className="text-xs sm:text-sm lg:text-base font-bold text-green-700 uppercase tracking-wider mt-0.5">
              {t.tag}
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-5 sm:mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Отзыв ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${i === current
                ? "w-6 bg-green-700"
                : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>

        <button className="mt-8 sm:mt-10 bg-[#FD9001] text-white text-sm sm:text-base lg:text-lg font-medium px-6 sm:px-8 py-3 rounded-full hover:bg-green-800 transition">
          Подобрать занятия
        </button>

      </div>
    </section>
  );
}


// 'use client';

// import { useState, useEffect, useRef, useLayoutEffect } from "react";

// const testimonials = [

//   {
//     text: "Мы живём в Германии, и сын начал терять русский. За полгода занятий он стал уверенно строить предложения, пересказывать сказки и даже сочинять свои истории. Педагог находит подход — уроки проходят через игру, поэтому ребёнок каждый раз ждёт занятия с нетерпением. Очень рекомендую!",
//     author: "Мама Артёма, 7 лет",
//     tag: "развитие речи",
//   },
//   {
//     text: "Дочка с рождения растёт в двуязычной среде. Мы переживали, что она путает языки и не сможет нормально говорить ни на одном. После трёх месяцев занятий она чётко разделяет языки и стала гораздо увереннее общаться по-русски. Спасибо педагогу за терпение и профессионализм!",
//     author: "Мама Алисы, 5 лет",
//     tag: "развитие речи",
//   },
//   {
//     text: "Сын ходит на индивидуальные занятия уже 4 месяца. Раньше он стеснялся говорить по-русски, отвечал на все вопросы на английском. Сейчас сам инициирует разговоры на русском, задаёт вопросы, читает простые книжки. Прогресс видим каждую неделю.",
//     author: "Папа Миши, 8 лет",
//     tag: "развитие речи",
//   },
// ];

// export default function Testimonials() {
//   const [current, setCurrent] = useState(0);
//   const [cardHeight, setCardHeight] = useState<number | undefined>(undefined);
//   const cardRef = useRef<HTMLDivElement>(null);
//   const touchStartX = useRef(0);
//   const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

//   // Measure full card height (content + padding + border)
//   useLayoutEffect(() => {
//     if (!cardRef.current) return;
//     // Temporarily set height to auto to measure natural height
//     cardRef.current.style.height = "auto";
//     const naturalHeight = cardRef.current.offsetHeight;
//     // If we already had a height, snap back to it so transition works
//     if (cardHeight !== undefined) {
//       cardRef.current.style.height = `${cardHeight}px`;
//       // Force reflow
//       cardRef.current.offsetHeight;
//     }
//     setCardHeight(naturalHeight);
//   }, [current]);

//   // Apply animated height after state update
//   useEffect(() => {
//     if (cardRef.current && cardHeight !== undefined) {
//       cardRef.current.style.height = `${cardHeight}px`;
//     }
//   }, [cardHeight]);

//   // Auto-rotate
//   const resetTimer = () => {
//     if (timerRef.current) clearInterval(timerRef.current);
//     timerRef.current = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % testimonials.length);
//     }, 7000);
//   };

//   useEffect(() => {
//     resetTimer();
//     return () => {
//       if (timerRef.current) clearInterval(timerRef.current);
//     };
//   }, []);

//   const goTo = (index: number) => {
//     setCurrent(index);
//     resetTimer();
//   };

//   const goNext = () => {
//     setCurrent((prev) => (prev + 1) % testimonials.length);
//     resetTimer();
//   };

//   const goPrev = () => {
//     setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//     resetTimer();
//   };

//   // Swipe
//   const handleTouchStart = (e: React.TouchEvent) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = (e: React.TouchEvent) => {
//     const diff = touchStartX.current - e.changedTouches[0].clientX;
//     if (Math.abs(diff) > 50) {
//       diff > 0 ? goNext() : goPrev();
//     }
//   };

//   const t = testimonials[current];

//   return (
//     <section className="py-10 sm:py-14 lg:py-20 px-4">
//       <div className="max-w-3xl mx-auto flex flex-col items-center text-center">

//         <h2 className="text-green-700 text-[20px] sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-wide">
//           Отзывы
//         </h2>

//         {/* Card */}
//         <div
//           ref={cardRef}
//           className="p-5 sm:p-8 mt-6 sm:mt-8 w-full max-w-md sm:max-w-lg lg:max-w-2xl bg-[#FFE783] rounded-2xl sm:rounded-3xl  lg:p-10  overflow-hidden"
//           style={{ transition: "height 0.5s ease" }}
//           onTouchStart={handleTouchStart}
//           onTouchEnd={handleTouchEnd}
//         >
//           <div className=" rounded-2xl bg-white p-5 sm:p-8 ">
//             <p className="text-gray-800 text-sm sm:text-2xl text-left leading-relaxed sm:leading-7 lg:leading-8 ">
//               {t.text}
//             </p>
//           </div>

//           <div className="mt-5 sm:mt-7 ">
//             <p className="text-green-700 text-base sm:text-lg lg:text-xl font-extrabold ">
//               – {t.author}
//             </p>
//             <p className="text-xs sm:text-sm lg:text-base font-bold text-green-700 uppercase tracking-wider mt-0.5">
//               ({t.tag})
//             </p>
//           </div>
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center gap-2 mt-5 sm:mt-6">
//           {testimonials.map((_, i) => (
//             <button
//               key={i}
//               type="button"
//               onClick={() => goTo(i)}
//               aria-label={`Отзыв ${i + 1}`}
//               className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${i === current
//                 ? "w-6 bg-green-700"
//                 : "w-2.5 bg-gray-300 hover:bg-gray-400"
//                 }`}
//             />
//           ))}
//         </div>

//         <button className="mt-8 sm:mt-10 bg-[#FD9001] text-white text-sm sm:text-base lg:text-lg font-medium px-6 sm:px-8 py-3 rounded-full hover:bg-green-800 transition">
//           Записаться на диагностику
//         </button>

//       </div>
//     </section>
//   );
// }
