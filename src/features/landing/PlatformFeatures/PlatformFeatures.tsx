import {
  BarChart3,
  Calculator,
  CircleDollarSign,
  Boxes,
  BriefcaseBusiness,
  Award,
  ShoppingCart,
  Handshake,
  FileChartColumn,
  WalletCards,
  ShoppingBasket,
  Headphones,
  Factory,
  Hotel,
  CarFront,
  Building2,
  GraduationCap,
  Hospital,
} from "lucide-react";

const features = [
  {
    name: "Project",
    icon: BarChart3,
  },
  {
    name: "Accounting",
    icon: Calculator,
  },
  {
    name: "Selling",
    icon: CircleDollarSign,
  },
  {
    name: "Stock",
    icon: Boxes,
  },
  {
    name: "HR",
    icon: BriefcaseBusiness,
  },
  {
    name: "Quality Management",
    icon: Award,
  },
  {
    name: "Point of sale (POS)",
    icon: ShoppingCart,
  },
  {
    name: "CRM",
    icon: Handshake,
  },
  {
    name: "Assets Management",
    icon: FileChartColumn,
  },
  {
    name: "Payroll",
    icon: WalletCards,
  },
  {
    name: "Buying",
    icon: ShoppingBasket,
  },
  {
    name: "Customer Support",
    icon: Headphones,
  },
  {
    name: "Manufacture",
    icon: Factory,
  },
  {
    name: "Restaurant and Hotel Management",
    icon: Hotel,
  },
  {
    name: "Fleet Management System",
    icon: CarFront,
  },
  {
    name: "Real Estate Development",
    icon: Building2,
  },
  {
    name: "Education Management System",
    icon: GraduationCap,
  },
  {
    name: "Healthcare & Hospital Management",
    icon: Hospital,
  },
];

export function PlatformFeatures() {
  return (
    <section
      id="solutions"
      className="
        bg-white
        px-5
        pb-12
        pt-4
        sm:px-6
        sm:pb-14
        sm:pt-6
        lg:px-12
        lg:pb-16
        lg:pt-8
      "
    >
      <div className="mx-auto w-full max-w-[1620px]">
        {/* Header */}
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
            Powerful Business Management
            <br />
            <span className="text-primary/80">All in One ERP Platform</span>
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
            "
          >
            Manage your business operations with powerful, integrated tools
            designed to work together.
          </p>
        </div>

        {/* Features Grid */}
        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-6
            xl:gap-5
          "
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.name}
                className="
                  group
                  flex
                  min-h-24
                  min-w-0
                  flex-col
                  items-center
                  justify-center
                  rounded-[22px]
                  border
                  border-primary/15
                  bg-white
                  px-4
                  py-4
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/30
                  hover:shadow-[0_10px_30px_rgba(48,30,68,0.08)]
                "
              >
                {/* Icon */}
                <div
                  className="
                    mb-2.5
                    flex
                    size-10
                    items-center
                    justify-center
                  "
                >
                  <Icon
                    size={36}
                    strokeWidth={1.8}
                    className="text-[#354FC4]"
                  />
                </div>

                {/* Name */}
                <h3
                  className="
                    text-sm
                    font-medium
                    leading-5
                    text-slate-800
                  "
                >
                  {feature.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PlatformFeatures;
