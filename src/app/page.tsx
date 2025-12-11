import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Work from '@/components/Work';
import LocalSection from '@/components/LocalSection';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <LocalSection />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
