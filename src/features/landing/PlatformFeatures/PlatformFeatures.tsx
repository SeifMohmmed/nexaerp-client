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
        pt-2
        sm:px-6
        sm:pb-14
        sm:pt-3
        lg:px-12
        lg:pb-16
        lg:pt-4
        xl:px-16
      "
    >
      <div className="mx-auto w-full max-w-380">
        {/* Header */}
        <div
          className="
            mx-auto
            mb-8
            max-w-3xl
            text-center
            sm:mb-10
          "
        >
          <h2
            className="
              text-3xl
              font-bold
              leading-[1.2]
              text-primary
              sm:text-4xl
              lg:text-[38px]
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
              leading-7
              text-muted
              sm:mt-4
              sm:text-base
              sm:leading-8
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
            grid-cols-2
            gap-3
            sm:grid-cols-2
            sm:gap-4
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
                  flex
                  min-h-20
                  min-w-0
                  flex-col
                  items-center
                  justify-center
                  rounded-[18px]
                  border
                  border-[#E8E3F2]
                  bg-white
                  px-2
                  py-2.5
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/20
                  hover:shadow-[0_6px_20px_rgba(49,33,78,0.08)]
                  sm:px-3
                "
              >
                {/* Icon */}
                <div
                  className="
                    mb-1.5
                    flex
                    h-8
                    items-center
                    justify-center
                  "
                >
                  <Icon
                    size={30}
                    strokeWidth={1.8}
                    className="text-[#354FC4]"
                  />
                </div>

                {/* Name */}
                <h3
                  className="
                    text-[12px]
                    font-medium
                    leading-[1.4]
                    tracking-[0.02em]
                    text-[#172033]
                    sm:text-[15px]
                    sm:leading-tight
                    sm:tracking-normal
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
