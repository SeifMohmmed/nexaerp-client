import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import PlatformFeatures from "./PlatformFeatures/PlatformFeatures";
import WhyNexaERP from "./WhyNexaERP/WhyNexaERP";

type Props = {};

export function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <PlatformFeatures />
      <WhyNexaERP />
      <main>
        <section className="min-h-screen">
          <h1>Welcome to NexaERP</h1>
        </section>
      </main>
    </>
  );
}

export default LandingPage;
