import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';




const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});


const bahnschrift = localFont({
  src: '../../public/fonts/bahnschrift.ttf',
  weight: '300 700',
  variable: '--font-bahnschrift',
});
export default function SectionLevel() {
  return (
    <section className={` ${montserrat.variable} ${bahnschrift.variable} py-10 sm:py-14 lg:py-20 px-4`}>
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">

        <button className="bg-[#FD9001] text-white text-sm sm:text-base lg:text-lg font-medium px-5 sm:px-7 py-2.5 sm:py-3 rounded-full hover:bg-orange-600 transition ">
          Проверить уровень русского языка
        </button>

        <h2 className="text-[20px] font-bold text-center text-[#00651D] mt-10" style={{ fontFamily: 'var(--font-montserrat)' }}>
          ЧЕМ МЫ МОЖЕМ ПОМОЧЬ?
        </h2>

        <ul className="mt-6 sm:mt-8 w-full max-w-md text-left flex flex-col gap-6 w-full mx-auto pl-6">
          {[
            "ЗАПУСК И РАЗВИТИЕ РЕЧИ",
            "РЕБЕНОК НАЧНЕТ ГОВОРИТЬ УВЕРЕНЕЕ",
            "ПОЯВЯТСЯ ФРАЗЫ И СВЯЗНАЯ РЕЧЬ",
            "НАУЧИТСЯ ЧИТАТЬ И ПИСАТЬ",
          ].map((item, index) => (
            <li
              key={index}
              className="relative whitespace-nowrap text-[16px] min-[430px]:text-[17px] leading-none before:content-[''] before:w-[8px] before:h-[8px] before:-translate-x-5 before:absolute before:left-0 before:top-1/3 before:-translate-y-1/3 before:rounded-full before:bg-orange-500"
              style={{ fontFamily: 'var(--font-bahnschrift)' }}
            >
              {item}
            </li>
          ))}
          <li
  className="relative whitespace-nowrap text-[16px] min-[430px]:text-[17px] leading-relaxed before:content-[''] before:w-[8px] before:h-[8px] before:-translate-x-5 before:absolute before:left-0 before:top-1/5 before:-translate-y-1/3 before:rounded-full before:bg-orange-500"
  style={{ fontFamily: 'var(--font-bahnschrift)' }}
>
  ИСЧЕЗНЕТ СТРАХ И СТЕСНЕНИЕ <br/> ГОВОРИТЬ ПО-РУССКИ
</li>
        </ul>

      </div>
    </section>
  );
}
