import dataProtectionIcon from "../../../assets/icons/data-protection.png";
import scalabilityIcon from "../../../assets/icons/scalability.png";
import efficiencyIcon from "../../../assets/icons/efficiency.png";
import customerServiceIcon from "../../../assets/icons/customer-service.png";
import maintenanceIcon from "../../../assets/icons/maintenance.png";
import integrationsIcon from "../../../assets/icons/integrations.png";

const advantages = [
  {
    title: "Data Protection",
    description:
      "Protect your business data with strong security and privacy standards.",
    icon: dataProtectionIcon,
  },
  {
    title: "Scalability",
    description:
      "Grow your business effortlessly with a system that adapts to your evolving needs.",
    icon: scalabilityIcon,
  },
  {
    title: "Higher Efficiency",
    description:
      "Streamline operations and boost productivity through a unified platform that reduces operational costs.",
    icon: efficiencyIcon,
  },
  {
    title: "Customer Service",
    description:
      "Get reliable support and continuous assistance to keep your business running efficiently.",
    icon: customerServiceIcon,
  },
  {
    title: "Maintenance",
    description:
      "Benefit from regular monitoring and continuous updates to keep your platform running efficiently.",
    icon: maintenanceIcon,
  },
  {
    title: "Seamless Integrations",
    description:
      "Connect your favorite tools and systems to simplify management and enhance performance.",
    icon: integrationsIcon,
  },
];

const Advantages = () => {
  return (
    <section
      id="advantages"
      className="
        bg-white
        px-5
        pb-12
        pt-6
        sm:px-6
        sm:pb-14
        sm:pt-8
        lg:px-12
        lg:pb-16
        lg:pt-10
      "
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <div
          className="
            mx-auto
            mb-8
            max-w-2xl
            text-center
            sm:mb-10
          "
        >
          <h2
            className="
              text-3xl
              font-bold
              leading-tight
              text-primary
              sm:text-4xl
              lg:text-5xl
            "
          >
            Advantages of Choosing NexaERP
          </h2>

          <p
            className="
              mt-3
              text-sm
              leading-6
              text-slate-500
              sm:mt-4
              sm:text-base
              sm:leading-7
              lg:text-lg
            "
          >
            Innovative solutions that support your goals and contribute to the
            sustainable growth of your business.
          </p>
        </div>

        {/* Advantages Grid */}
        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {advantages.map((advantage) => (
            <div
              key={advantage.title}
              className="
                group
                flex
                min-w-0
                flex-col
                items-center
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-6
                py-8
                text-center
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#32214B]
                hover:bg-[#32214B]
                hover:shadow-xl
                sm:px-7
                sm:py-9
              "
            >
              {/* Icon */}
              <div
                className="
                  mb-5
                  flex
                  size-20
                  shrink-0
                  items-center
                  justify-center
                  bg-[#E9E6F2]
                  transition-colors
                  duration-300
                  group-hover:bg-white
                  [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)]
                "
              >
                <img
                  src={advantage.icon}
                  alt={advantage.title}
                  className="
                    block
                    h-14
                    w-14
                    object-contain
                  "
                />
              </div>

              {/* Title */}
              <h3
                className="
                  mb-3
                  text-lg
                  font-semibold
                  text-primary
                  transition-colors
                  duration-300
                  group-hover:text-white
                  sm:text-xl
                "
              >
                {advantage.title}
              </h3>

              {/* Description */}
              <p
                className="
                  max-w-md
                  text-sm
                  leading-6
                  text-slate-500
                  transition-colors
                  duration-300
                  group-hover:text-white/80
                  sm:leading-7
                "
              >
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
