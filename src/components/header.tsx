import Image from "next/image";

import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});






export default function Header() {
  return (
    <header className={`${montserrat.variable} w-full justify-center bg-[#FFE783] px-2 rounded-xl py-4 flex items-center`}>

      <div className="flex items-center gap-3">
        <Image
  src="./logo.png"
  alt="Апельсин"
  width={80}
  height={80}
  className="object-contain w-[80px] h-[80px]"
/>
      </div>

      <div className="text-[#013D10] font-bold leading-tight flex flex-col items-center">

        <h1
    className="md:text-xl text-[13px] text-center w-fit font-bold"
    style={{ fontFamily: 'var(--font-montserrat)' }}
  >
          МЕЖДУНАРОДНЫЙ
          ОНЛАЙН-ЦЕНТР<br />
          РАЗВИТИЯ РЕЧИ ДЛЯ БИЛИНГВОВ<br />
          «АПЕЛЬСИН»<br />

        </h1>

      </div>
    </header>
  );
}