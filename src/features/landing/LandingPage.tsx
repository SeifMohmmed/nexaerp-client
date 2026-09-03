import Advantages from "./Advantages/Advantages";
import BusinessStats from "./BusinessStats/BusinessStats";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import HowItWorks from "./HowItWorks/HowItWorks";
import Integrations from "./Integrations/Integrations";
import Navbar from "./Navbar/Navbar";
import PlatformFeatures from "./PlatformFeatures/PlatformFeatures";
import Pricing from "./Pricing/Pricing";
import WhyNexaERP from "./WhyNexaERP/WhyNexaERP";

export function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <PlatformFeatures />
      <Integrations />
      <WhyNexaERP />
      <Advantages />
      <HowItWorks />
      <Pricing />
      <BusinessStats />
      <Footer />
    </>
  );
}

export default LandingPage;
