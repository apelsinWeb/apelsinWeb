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

export default function WhyUs() {
  return (
    <section className={`${montserrat.variable} ${bahnschrift.variable} py-10 sm:py-14 lg:py-20 px-4 `}>
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">

        <h2 className="text-[20px] min-[430px]:text-[18px] font-bold text-center text-[#00651D]" style={{ fontFamily: 'var(--font-montserrat)' }}>
          ПОЧЕМУ РОДИТЕЛИ ВЫБИРАЮТ НАС?
        </h2>




        <div className="mt-6 pl-4 sm:mt-8 w-full max-w-md text-left flex flex-col gap-6" style={{ fontFamily: 'var(--font-bahnschrift)' }}>
          <p className="text-[18px] min-[430px]:text-[20px] leading-snug relative pl-3">
            <svg className="w-[23px] h-[23px] absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5" viewBox="0 0 8 8" fill="none">
              <path d="M1 4l2 2 4-4" stroke="#00651D" strokeWidth="1.5" />
            </svg> 10 лет опыта работы с билингвами</p>
          <p className="text-[18px] min-[430px]:text-[20px] leading-snug relative pl-3">
            <svg className="w-[23px] h-[23px] absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5" viewBox="0 0 8 8" fill="none">
              <path d="M1 4l2 2 4-4" stroke="#00651D" strokeWidth="1.5" />
            </svg> Мини-группы до 4 детей</p>
          <p className="text-[18px] min-[430px]:text-[20px] leading-snug relative pl-3">
            <svg className="w-[23px] h-[23px] absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5" viewBox="0 0 8 8" fill="none">
              <path d="M1 4l2 2 4-4" stroke="#00651D" strokeWidth="1.5" />
            </svg> Занятия на русском языке</p>
          <p className="text-[18px] min-[430px]:text-[20px] leading-snug relative pl-3">
            <svg className="w-[23px] h-[23px] absolute left-0 top-1/2 -translate-y-1/1 -translate-x-5" viewBox="0 0 8 8" fill="none">
              <path d="M1 4l2 2 4-4" stroke="#00651D" strokeWidth="1.5" />
            </svg> Игровой формат, детям интересно говорить на русском языке</p>
          <p className="text-[18px] min-[430px]:text-[20px] leading-snug relative pl-3">
            <svg className="w-[23px] h-[23px] absolute left-0 top-1/2 -translate-y-1/1 -translate-x-5" viewBox="0 0 8 8" fill="none">
              <path d="M1 4l2 2 4-4" stroke="#00651D" strokeWidth="1.5" />
            </svg> Удобное время для детей из разных часовых поясов</p>

          <p className="text-[18px] min-[430px]:text-[20px] leading-snug relative pl-3">
            <svg className="w-[23px] h-[23px] absolute left-0 top-1/2 -translate-y-1/1 -translate-x-5" viewBox="0 0 8 8" fill="none">
              <path d="M1 4l2 2 4-4" stroke="#00651D" strokeWidth="1.5" />
            </svg> Адаптируем занятия под любой уровень
            развития ребенка</p>
        </div>



        <button className="mt-8 sm:mt-10 bg-[#FD9001] text-white text-sm sm:text-base lg:text-lg font-medium px-6 sm:px-8 py-3 rounded-full hover:bg-orange-600 transition">
          Пройти бесплатную диагностику речи
        </button>

      </div>
    </section>
  );
}
