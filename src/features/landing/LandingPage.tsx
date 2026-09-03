import Advantages from "./Advantages/Advantages";
import BusinessStats from "./BusinessStats/BusinessStats";
import Hero from "./Hero/Hero";
import HowItWorks from "./HowItWorks/HowItWorks";
import Integrations from "./Integrations/Integrations";
import PlatformFeatures from "./PlatformFeatures/PlatformFeatures";
import Pricing from "./Pricing/Pricing";
import WhyNexaERP from "./WhyNexaERP/WhyNexaERP";

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
