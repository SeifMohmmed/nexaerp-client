import Advantages from "./Advantages/Advantages";
import BusinessStats from "./BusinessStats/BusinessStats";
import Hero from "./Hero/Hero";
import HowItWorks from "./HowItWorks/HowItWorks";
import Integrations from "./Integrations/Integrations";
import Navbar from "./Navbar/Navbar";
import PlatformFeatures from "./PlatformFeatures/PlatformFeatures";
import WhyNexaERP from "./WhyNexaERP/WhyNexaERP";

export function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Integrations />
      <PlatformFeatures />
      <WhyNexaERP />
      <Advantages />
      <HowItWorks />
      <BusinessStats />
      <main>
        <section className="min-h-screen">
          <h1>Welcome to NexaERP</h1>
        </section>
      </main>
    </>
  );
}

export default LandingPage;
