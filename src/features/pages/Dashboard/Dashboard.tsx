import {
  ArrowDownRight,
  ArrowUpRight,
  FileText,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";

type StatCard = {
  title: string;
  value: string;
  change: string;
  description: string;
  icon: React.ElementType;
  trend: "up" | "down";
};

const stats: StatCard[] = [
  {
    title: "Customers",
    value: "1,248",
    change: "+12.5%",
    description: "from last month",
    icon: Users,
    trend: "up",
  },
  {
    title: "Products",
    value: "856",
    change: "+8.2%",
    description: "from last month",
    icon: Package,
    trend: "up",
  },
  {
    title: "Orders",
    value: "342",
    change: "+18.4%",
    description: "from last month",
    icon: ShoppingCart,
    trend: "up",
  },
  {
    title: "Invoices",
    value: "284",
    change: "-3.1%",
    description: "from last month",
    icon: FileText,
    trend: "down",
  },
];

const Dashboard = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-muted">
            Welcome back! Here's what's happening with your business today.
          </p>
        </div>

        <div className="text-sm text-muted">September 8, 2026</div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          const isPositive = stat.trend === "up";

          return (
            <div
              key={stat.title}
              className="
                rounded-2xl
                border border-border
                bg-white
                p-5
                shadow-sm
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-md
              "
            >
              {/* Top */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-muted">{stat.title}</p>

                  <p className="mt-2 text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                </div>

                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light">
                  <Icon size={21} strokeWidth={1.8} className="text-accent" />
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-4 flex items-center gap-1.5 text-xs">
                <span
                  className={`
                    inline-flex items-center gap-0.5 font-semibold
                    ${isPositive ? "text-emerald-600" : "text-red-500"}
                  `}
                >
                  {isPositive ? (
                    <ArrowUpRight size={14} />
                  ) : (
                    <ArrowDownRight size={14} />
                  )}

                  {stat.change}
                </span>

                <span className="text-[#8A8491]">{stat.description}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Placeholder for Charts */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Sales Overview */}
        <div className="rounded-2xl border border-border bg-white p-5 shadow-sm xl:col-span-2">
          <div>
            <h2 className="text-lg font-semibold text-foregroundd">
              Sales Overview
            </h2>

            <p className="mt-1 text-sm text-muted">
              Overview of your sales performance.
            </p>
          </div>

          <div className="mt-6 flex h-72 items-center justify-center rounded-xl bg-[#FAF9FB]">
            <span className="text-sm text-[#8A8491]">
              Sales chart will be added here
            </span>
          </div>
        </div>

        {/* Order Summary */}
        <div className="rounded-2xl border border-border-white p-5 shadow-sm">
          <div>
            <h2 className="text-lg font-semibold text-foregroundd">
              Order Summary
            </h2>

            <p className="mt-1 text-sm text-muted">Current order status.</p>
          </div>

          <div className="mt-6 space-y-5">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-muted">Pending</span>

                <span className="font-semibold text-foreground">42</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-[#F0EDF3]">
                <div className="h-full w-[35%] rounded-full bg-accent" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-muted">Confirmed</span>

                <span className="font-semibold text-foreground">86</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-[#F0EDF3]">
                <div className="h-full w-[55%] rounded-full bg-[#31214E]" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-muted">Shipped</span>

                <span className="font-semibold text-foreground">64</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-[#F0EDF3]">
                <div className="h-full w-[42%] rounded-full bg-secondary" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-muted">Delivered</span>

                <span className="font-semibold text-foreground">150</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-[#F0EDF3]">
                <div className="h-full w-[78%] rounded-full bg-emerald-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
        <div className="border-b border-border px-5 py-4">
          <h2 className="text-lg font-semibold text-foreground">
            Recent Orders
          </h2>

          <p className="mt-1 text-sm text-muted">
            Latest orders from your customers.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-160">
            <thead>
              <tr className="border-b border-border bg-[#FAF9FB]">
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted">
                  Order
                </th>

                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted">
                  Customer
                </th>

                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted">
                  Status
                </th>

                <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-muted">
                  Amount
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-5 py-4 text-sm font-medium text-foreground">
                  #ORD-1024
                </td>

                <td className="px-5 py-4 text-sm text-muted">Ahmed Mohamed</td>

                <td className="px-5 py-4">
                  <span className="rounded-full bg-[#E7F4EF] px-2.5 py-1 text-xs font-medium text-[#315B4A]">
                    Delivered
                  </span>
                </td>

                <td className="px-5 py-4 text-right text-sm font-semibold text-foreground">
                  $2,450
                </td>
              </tr>

              <tr>
                <td className="px-5 py-4 text-sm font-medium text-foreground">
                  #ORD-1023
                </td>

                <td className="px-5 py-4 text-sm text-muted">Sara Ali</td>

                <td className="px-5 py-4">
                  <span className="rounded-full bg-primary-light px-2.5 py-1 text-xs font-medium text-[#31214E]">
                    Confirmed
                  </span>
                </td>

                <td className="px-5 py-4 text-right text-sm font-semibold text-foreground">
                  $1,820
                </td>
              </tr>

              <tr>
                <td className="px-5 py-4 text-sm font-medium text-foreground">
                  #ORD-1022
                </td>

                <td className="px-5 py-4 text-sm text-muted">Omar Hassan</td>

                <td className="px-5 py-4">
                  <span className="rounded-full bg-[#FFF4E5] px-2.5 py-1 text-xs font-medium text-[#A15C00]">
                    Pending
                  </span>
                </td>

                <td className="px-5 py-4 text-right text-sm font-semibold text-foreground">
                  $950
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
