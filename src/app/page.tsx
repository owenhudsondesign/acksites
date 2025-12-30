import Image from 'next/image';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Work from '@/components/Work';
import LocalSection from '@/components/LocalSection';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* Fixed orange background that stays in place while content scrolls over */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/orange-background.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
        {/* Nantucket icon - large decorative element */}
        <div className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[-5%] top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <Image
            src="/nantucket-icon-white.svg"
            alt=""
            width={1200}
            height={780}
            className="h-auto w-[140vw] md:w-[65vw] max-w-none"
            aria-hidden="true"
          />
        </div>
      </div>

      <Header />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Work />
        {/* <LocalSection /> */}
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
