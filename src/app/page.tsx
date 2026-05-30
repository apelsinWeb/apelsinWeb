import DiagnosticPage from "@/components/diagnostic";
import Founder from "@/components/founder";
import Header from "@/components/header";
import HeroSection from "@/components/hero";
import ImageSection from "@/components/ImageSection";
import CoursesCarousel from "@/components/photolib";
import Testimonials from "@/components/review";
import SectionLevel from "@/components/russianlevel";
import WhyUs from "@/components/whyus";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="p-3">
        <Header>

        </Header>
        <HeroSection>

        </HeroSection>
        <ImageSection>

        </ImageSection>


        <SectionLevel>

        </SectionLevel>

        <CoursesCarousel>

        </CoursesCarousel>

        <WhyUs></WhyUs>
        <DiagnosticPage></DiagnosticPage>

        <Founder></Founder>

        <Testimonials></Testimonials>


        <Link
  href="https://google.com"
  className="fixed bottom-4 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-6 sm:bottom-6 bg-green-700 text-white px-6 py-3 rounded-full shadow-lg text-center text-[16px] hover:bg-orange-600 transition z-50 whitespace-nowrap"
>
  Связаться и задать вопрос
</Link>



      </main>

    </>

  );
}
