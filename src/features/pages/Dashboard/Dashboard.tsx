import {
  ArrowDownRight,
  ArrowUpRight,
  FileText,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

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

const salesData = [
  { month: "Jan", sales: 4200 },
  { month: "Feb", sales: 5100 },
  { month: "Mar", sales: 4800 },
  { month: "Apr", sales: 6200 },
  { month: "May", sales: 5800 },
  { month: "Jun", sales: 7100 },
  { month: "Jul", sales: 6800 },
  { month: "Aug", sales: 8200 },
  { month: "Sep", sales: 7600 },
  { month: "Oct", sales: 8900 },
  { month: "Nov", sales: 9400 },
  { month: "Dec", sales: 10200 },
];

const orderStatus = [
  {
    label: "Pending",
    value: 42,
    total: 342,
  },
  {
    label: "Confirmed",
    value: 86,
    total: 342,
  },
  {
    label: "Shipped",
    value: 64,
    total: 342,
  },
  {
    label: "Delivered",
    value: 150,
    total: 342,
  },
];

const recentOrders = [
  {
    id: "#ORD-1024",
    customer: "Ahmed Mohamed",
    status: "Delivered",
    amount: "$2,450",
  },
  {
    id: "#ORD-1023",
    customer: "Sara Ali",
    status: "Confirmed",
    amount: "$1,820",
  },
  {
    id: "#ORD-1022",
    customer: "Omar Hassan",
    status: "Pending",
    amount: "$950",
  },
  {
    id: "#ORD-1021",
    customer: "Mariam Ahmed",
    status: "Shipped",
    amount: "$1,240",
  },
];

const Dashboard = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foregroundd sm:text-3xl">
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
              className="rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-muted">{stat.title}</p>

                  <p className="mt-2 text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light">
                  <Icon size={21} strokeWidth={1.8} className="text-accent" />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-1.5 text-xs">
                <span
                  className={`inline-flex items-center gap-0.5 font-semibold ${
                    isPositive ? "text-emerald-600" : "text-red-500"
                  }`}
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

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Sales Overview */}
        <div className="rounded-2xl border border-border bg-white p-5 shadow-sm xl:col-span-2">
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Sales Overview
            </h2>

            <p className="mt-1 text-sm text-muted">
              Overview of your sales performance.
            </p>
          </div>

          <div className="mt-6 h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={salesData}
                margin={{
                  top: 10,
                  right: 10,
                  left: -20,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient
                    id="salesGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#A744F3" stopOpacity={0.25} />

                    <stop offset="100%" stopColor="#A744F3" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E5E1E8"
                />

                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: "#8A8491",
                    fontSize: 12,
                  }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: "#8A8491",
                    fontSize: 12,
                  }}
                  tickFormatter={(value) => `$${value / 1000}k`}
                />

                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid #E5E1E8",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  }}
                  formatter={(value) => [
                    `$${Number(value).toLocaleString()}`,
                    "Sales",
                  ]}
                />

                <Area
                  type="monotone"
                  dataKey="sales"
                  stroke="#A744F3"
                  strokeWidth={2}
                  fill="url(#salesGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Order Summary */}
        <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Order Summary
            </h2>

            <p className="mt-1 text-sm text-muted">Current order status.</p>
          </div>

          <div className="mt-6 space-y-5">
            {orderStatus.map((status) => {
              const percentage = (status.value / status.total) * 100;

              return (
                <div key={status.label}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">
                      {status.label}
                    </span>

                    <span className="text-sm text-muted">{status.value}</span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-[#F0EDF2]">
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-500"
                      style={{
                        width: `${percentage}%`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-7 border-t border-border-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Total Orders</span>

              <span className="text-lg font-bold text-foreground">342</span>
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
          <table className="w-full min-w-150">
            <thead>
              <tr className="border-b border-border bg-[#FAF9FB]">
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted">
                  Order
                </th>

                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted">
                  Customer
                </th>

                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted">
                  Status
                </th>

                <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-muted">
                  Amount
                </th>
              </tr>
            </thead>

            <tbody>
              {recentOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-border last:border-0 hover:bg-[#FCFBFD]"
                >
                  <td className="px-5 py-4 text-sm font-semibold text-[#31214E]">
                    {order.id}
                  </td>

                  <td className="px-5 py-4 text-sm text-foreground">
                    {order.customer}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                        order.status === "Delivered"
                          ? "bg-emerald-50 text-emerald-700"
                          : order.status === "Confirmed"
                            ? "bg-blue-50 text-blue-700"
                            : order.status === "Shipped"
                              ? "bg-purple-50 text-purple-700"
                              : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-right text-sm font-semibold text-foreground">
                    {order.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
