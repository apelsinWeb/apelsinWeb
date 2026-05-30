import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

const montserrat = Montserrat({
    subsets: ['latin', 'cyrillic'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-montserrat',
});

const bahnschrift = localFont({
    src: '../../public/fonts/bahnschrift.ttf',
    weight: '300 700',
    variable: '--font-bahnschrift',
});
export default function ImageSection() {
    return (
        <section className={`${montserrat.variable} ${bahnschrift.variable} w-full`} style={{ fontFamily: 'var(--font-montserrat)' }}>

            <div className="max-w-[360px]  min-[430px]:max-w-[400px] md:max-w-xl mx-auto flex flex-col rounded-xl shadow-lg px-3 min-[430px]:px-6 md:px-8 py-6 min-[430px]:py-8 bg-[#FFE783] gap-5 min-[430px]:gap-6">

                <h3 className="text-[20px] font-bold text-center text-[#00651D]">
                    ЗНАКОМО?
                </h3>
                <div className='w-full'>
                    <ul className="space-y-2 text-[13px] flex flex-col gap-3 font-[400] px-5 mx-auto min-[430px]:text-[16px]" style={{ fontFamily: 'var(--font-bahnschrift)' }}>
                        <li className="flex gap-3 items-start">
                            <div className="w-[5px] h-[5px] shrink-0 mt-2 bg-[#00651D] rounded-full"></div>
                            <span>
                                РЕБЁНОК ПОНИМАЕТ РУССКУЮ РЕЧЬ,
                                <br className="md:hidden" />
                                НО ОТВЕЧАЕТ НА ЯЗЫКЕ СТРАНЫ
                            </span>
                        </li>
                        <li className="flex gap-3 items-start">
                            <div className="w-[5px] h-[5px] shrink-0 mt-2 bg-[#00651D] rounded-full"></div>
                            <span>ГОВОРИТ МАЛО, С ТРУДОМ ПОДБИРАЕТ СЛОВА</span>
                        </li>
                        <li className="flex gap-3 items-start">
                            <div className="w-[5px] h-[5px] shrink-0 mt-2 bg-[#00651D] rounded-full"></div>
                            <span>СТЕСНЯЕТСЯ ГОВОРИТЬ ПО-РУССКИ</span>
                        </li>
                        <li className="flex gap-3 items-start">
                            <div className="w-[5px] h-[5px] shrink-0 mt-2 bg-[#00651D] rounded-full"></div>
                            <span>РУССКИЕ КНИГИ НЕ ВЫЗЫВАЮТ ИНТЕРЕСА</span>
                        </li>
                        <li className="flex gap-3 items-start">
                            <div className="w-[5px] h-[5px] shrink-0 mt-2 bg-[#00651D] rounded-full"></div>
                            <span>НЕ ХВАТАЕТ РУССКОЯЗЫЧНОЙ СРЕДЫ</span>
                        </li>
                    </ul>
                </div>

                <div className='flex flex-col items-center gap-2'>
                    <h2 className="text-center text-[18px] flex flex-col" style={{ fontFamily: 'var(--font-bahnschrift)' }}>ЕСЛИ ВЫ УЗНАЛИ СВОЕГО РЕБЁНКА —</h2>
                    <span className="font-bold text-[#00651D] sm:text-3xl text-[22px]" style={{ fontFamily: 'var(--font-bahnschrift)' }}>ВАЖНО НЕ ЖДАТЬ.</span>
                </div>
            </div>

        </section>
    );
}
