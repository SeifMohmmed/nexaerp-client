import { useRef } from "react";
import { ArrowRight, Check } from "lucide-react";
import image from "../../../assets/why-nexaerp.png";
import "./WhyNexaERP.css";

const WhyNexaERP = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="why-nexaerp"
      className="relative isolate min-h-[650px] overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={image}
        alt="NexaERP business management"
        className="
            absolute
            inset-0
            -z-20
            h-full
            w-full
            object-cover
            object-center
        "
      />

      {/* Image Revealer */}
      <div
        className={`
                    home-image-revealer`}
      />

      {/* Brand Gradient */}
      <div className="why-nexaerp-overlay absolute inset-0 -z-10" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-12">
        <div className="ml-auto max-w-xl translate-x-6 text-white sm:translate-x-10 lg:translate-x-16">
          {" "}
          {/* Small Heading */}
          <span
            className="
                            mb-4
                            inline-block
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[0.2em]
                            text-[#A8B7FF]
                        "
          >
            Why NexaERP
          </span>
          {/* Heading */}
          <h2
            className="
                            text-4xl
                            font-bold
                            leading-tight
                            sm:text-5xl
                            lg:text-6xl
                        "
          >
            Everything Your Business Needs,
            <span className="block text-[#A8B7FF]">In One Place</span>
          </h2>
          {/* Description */}
          <p
            className="
                            mt-6
                            max-w-xl
                            text-base
                            leading-8
                            text-white/80
                            sm:text-lg
                        "
          >
            NexaERP connects your core business operations through one
            centralized platform, helping you manage your products, customers,
            suppliers, sales, purchasing, inventory, and invoices with ease.
          </p>
          {/* Benefits */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              "Centralized Management",
              "Real-Time Business Data",
              "Integrated ERP Modules",
              "Built to Scale",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span
                  className="
                        flex
                        size-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-white/10
                        text-[#A8B7FF]
                        backdrop-blur-sm
                    "
                >
                  <Check size={19} strokeWidth={2.5} />
                </span>

                <span className="text-sm text-white/90">{item}</span>
              </div>
            ))}
          </div>
          {/* CTA */}
          <div className="mt-10">
            <a
              href="/register"
              className="
                flex
                w-full
                items-center
                justify-center
                rounded-lg
                bg-gradient-to-r
                from-[#A83DFF]
                to-[#021E3A]
                px-6
                py-3.5
                text-base
                font-semibold
                text-white
                shadow-[0_10px_35px_rgba(48,30,68,0.3)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_15px_40px_rgba(48,30,68,0.4)]
    "
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNexaERP;
