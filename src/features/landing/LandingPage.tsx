import Advantages from "./Advantages/Advantages";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import PlatformFeatures from "./PlatformFeatures/PlatformFeatures";
import WhyNexaERP from "./WhyNexaERP/WhyNexaERP";

export function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <PlatformFeatures />
      <WhyNexaERP />
      <Advantages />
      <main>
        <section className="min-h-screen">
          <h1>Welcome to NexaERP</h1>
        </section>
      </main>
    </>
  );
}

export default LandingPage;
