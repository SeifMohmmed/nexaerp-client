import {
  ShieldCheck,
  Rocket,
  Zap,
  Headset,
  Wrench,
  PlugZap,
} from "lucide-react";

const advantages = [
  {
    title: "Data Protection",
    description:
      "Protect your business data with strong security and privacy standards.",
    icon: ShieldCheck,
  },
  {
    title: "Scalability",
    description:
      "Grow your business effortlessly with a system that adapts to your evolving needs.",
    icon: Rocket,
  },
  {
    title: "Higher Efficiency",
    description:
      "Streamline operations and boost productivity through a unified platform that reduces operational costs.",
    icon: Zap,
  },
  {
    title: "Customer Service",
    description:
      "Get reliable support and continuous assistance to keep your business running efficiently.",
    icon: Headset,
  },
  {
    title: "Maintenance",
    description:
      "Benefit from regular monitoring and continuous updates to keep your platform running efficiently.",
    icon: Wrench,
  },
  {
    title: "Seamless Integrations",
    description:
      "Connect your favorite tools and systems to simplify management and enhance performance.",
    icon: PlugZap,
  },
];

const Advantages = () => {
  return (
    <section id="advantages" className="bg-white px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2
            className="
              text-4xl
              font-bold
              leading-tight
              text-primary
              sm:text-5xl
            "
          >
            Advantages of Choosing NexaERP
          </h2>

          <p
            className="
              mt-5
              text-base
              leading-7
              text-slate-500
              sm:text-lg
            "
          >
            Innovative solutions that support your goals and contribute to the
            sustainable growth of your business.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage) => {
            const Icon = advantage.icon;

            return (
              <div
                key={advantage.title}
                className="
                  group
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-7
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#354FC4]/30
                  hover:shadow-xl
                "
              >
                {/* Icon */}
                <div
                  className="
                    mb-6
                    flex
                    size-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-linear-to-br
                    from-[#354FC4]
                    to-[#A83DFF]
                    text-white
                    shadow-md
                    transition-all
                    duration-300
                    group-hover:scale-105
                    group-hover:shadow-lg
                  "
                >
                  <Icon
                    size={30}
                    strokeWidth={1.8}
                    className="
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    mb-3
                    text-xl
                    font-semibold
                    text-primary
                  "
                >
                  {advantage.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    text-sm
                    leading-7
                    text-slate-500
                  "
                >
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
