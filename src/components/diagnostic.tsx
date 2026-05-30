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

export default function DiagnosticPage() {
  return (
    <section className={`${montserrat.variable} ${bahnschrift.variable} pb-10 sm:py-14 lg:py-20 px-4`}>
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">

        <h2 className="text-[20px] font-bold text-center text-[#00651D]" style={{ fontFamily: 'var(--font-montserrat)' }}>
          ДИАГНОСТИКА РЕЧИ
        </h2>

        <p className="mt-4 sm:mt-6 text-[16px] min-[430px]:text-[17px]" style={{ fontFamily: 'var(--font-bahnschrift)' }}>
          ЗА <span className="font-bold">20</span> МИНУТ ВЫ УЗНАЕТЕ:
        </p>

        <div className="mt-6 sm:mt-8 w-full max-w-md text-left flex flex-col gap-6 mx-auto" style={{ fontFamily: 'var(--font-bahnschrift)' }}>
          <div className="text-[16px] min-[430px]:text-[17px] flex"><div className="bg-orange-500 mr-2 shrink-0 rounded-full h-[8px] w-[8px] mt-[6px]"></div> <p>УРОВЕНЬ РУССКОГО ЯЗЫКА РЕБЕНКА</p></div>
          <div className="text-[16px] min-[430px]:text-[17px] flex"><div className="bg-orange-500 mr-2 shrink-0 rounded-full h-[8px] w-[8px] mt-[6px]"></div> <p>ПОЧЕМУ ОН НЕ ГОВОРИТ ПО-РУССКИ <br/>ИЛИ ОТВЕЧАЕТ НА ДРУГОМ ЯЗЫКЕ</p></div>
          <div className="text-[16px] min-[430px]:text-[17px] flex"><div className="bg-orange-500 mr-2 shrink-0 rounded-full h-[8px] w-[8px] mt-[6px]"></div> <p>РЕКОМЕНДАЦИИ ПО РАЗВИТИЮ РЕЧИ</p></div>
          <div className="text-[16px] min-[430px]:text-[17px] flex"><div className="bg-orange-500 mr-2 shrink-0 rounded-full h-[8px] w-[8px] mt-[6px]"></div> <p> КАКОЙ ФОРМАТ ЗАНЯТИЙ ПОДОЙДЁТ
          <br/>ИМЕННО ВАШЕМУ РЕБЁНКУ </p></div>
        </div>

      </div>
    </section>
  );
}
