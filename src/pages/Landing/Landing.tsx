import Advantages from "./components/Advantages/Advantages";
import BusinessStats from "./components/BusinessStats/BusinessStats";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Integrations from "./components/Integrations/Integrations";
import PlatformFeatures from "./components/PlatformFeatures/PlatformFeatures";
import Pricing from "./components/Pricing/Pricing";
import WhyNexaERP from "./components/WhyNexaERP/WhyNexaERP";

export function LandingPage() {
  return (
    <>
      <Hero />
      <PlatformFeatures />
      <Integrations />
      <WhyNexaERP />
      <Advantages />
      <HowItWorks />
      <Pricing />
      <BusinessStats />
    </>
  );
}

export default LandingPage;
