import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
    subsets: ['latin', 'cyrillic'],
    weight: ['400', '600', '700'],
    variable: '--font-open-sans',
});

export default function HeroSection() {
    return (
        <section className={`${openSans.variable} w-full overflow-hidden`} style={{ fontFamily: 'var(--font-open-sans)' }}>

            <div className="bottom-0 w-full py-6 px-4 text-center text-[16px] sm:text-[19px]">

                <h2 className="font-bold my-2">
                    Для детей 4 - 12 лет
                </h2>

                <p className="text-gray-800">
                    Помогаем детям-билингвам<br/>
                    живущим за границей говорить,<br/>
                    читать и думать на русском языке!
                </p>

            </div>
        </section>
    );
}
