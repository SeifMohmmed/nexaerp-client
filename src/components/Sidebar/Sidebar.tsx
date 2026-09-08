import {
  BriefcaseBusiness,
  ChevronDown,
  CircleDollarSign,
  FileText,
  KeyRound,
  LayoutDashboard,
  Package,
  Settings,
  ShoppingCart,
  Tags,
  Truck,
  UserRound,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import logo from "../../assets/sign_up_logo.png";

type MenuItem = {
  label: string;
  to: string;
  icon: React.ElementType;
};

type MenuGroup = {
  label: string;
  icon: React.ElementType;
  items: MenuItem[];
};

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const menuGroups: MenuGroup[] = [
  {
    label: "Accounting",
    icon: CircleDollarSign,
    items: [
      {
        label: "Invoices",
        to: "/dashboard/invoices",
        icon: FileText,
      },
    ],
  },

  {
    label: "HR",
    icon: BriefcaseBusiness,
    items: [
      {
        label: "Employees",
        to: "/dashboard/employees",
        icon: UserRound,
      },
      {
        label: "Departments",
        to: "/dashboard/departments",
        icon: Users,
      },
    ],
  },

  {
    label: "Buying",
    icon: Truck,
    items: [
      {
        label: "Purchase Orders",
        to: "/dashboard/purchase-orders",
        icon: FileText,
      },
      {
        label: "Suppliers",
        to: "/dashboard/suppliers",
        icon: Truck,
      },
    ],
  },

  {
    label: "Selling",
    icon: ShoppingCart,
    items: [
      {
        label: "Customers",
        to: "/dashboard/customers",
        icon: Users,
      },
      {
        label: "Orders",
        to: "/dashboard/orders",
        icon: ShoppingCart,
      },
      {
        label: "Invoices",
        to: "/dashboard/invoices",
        icon: FileText,
      },
    ],
  },

  {
    label: "Stock",
    icon: Package,
    items: [
      {
        label: "Products",
        to: "/dashboard/products",
        icon: Package,
      },
      {
        label: "Categories",
        to: "/dashboard/categories",
        icon: Tags,
      },
    ],
  },
];

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();

  const [openGroups, setOpenGroups] = useState<string[]>(["Stock"]);

  const toggleGroup = (label: string) => {
    setOpenGroups((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label],
    );
  };

  const isGroupActive = (group: MenuGroup) => {
    return group.items.some((item) => location.pathname.startsWith(item.to));
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={onClose}
          className="
            fixed inset-0 z-40
            bg-black/30
            backdrop-blur-[2px]
            lg:hidden
          "
        />
      )}

      {/* Sidebar */}
      <aside
        className="
          fixed inset-y-0 inset-s-0 z-50
          flex w-60 flex-col
          border-e border-[#E8E5EB]
          bg-white

          transform
          transition-transform
          duration-300
          ease-in-out

          lg:translate-x-0
        "
        style={{
          transform:
            isOpen || window.innerWidth >= 1024
              ? "translateX(0)"
              : "translateX(-100%)",
        }}
      >
        {/* Logo Header */}
        <div className="flex h-24 shrink-0 items-center justify-between px-6">
          <NavLink to="/dashboard" onClick={onClose}>
            <img src={logo} alt="NexaERP" className="w-32 object-contain" />
          </NavLink>

          {/* Mobile Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation"
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-lg
              text-muted
              transition
              hover:bg-[#F7F4FA]
              hover:text-[#31214E]
              lg:hidden
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 pb-6">
          <ul className="space-y-1">
            {/* Home */}
            <li>
              <NavLink
                to="/dashboard"
                end
                onClick={onClose}
                className={({ isActive }) =>
                  `
                  flex items-center gap-3
                  rounded-xl px-4 py-3
                  text-sm font-semibold
                  transition-all duration-200

                  ${
                    isActive
                      ? "bg-linear-to-r from-[#8B2BE2] to-[#A744F3] text-white shadow-md shadow-[#A744F3]/20"
                      : "text-[#272333] hover:bg-[#F7F4FA]"
                  }
                  `
                }
              >
                <LayoutDashboard size={20} strokeWidth={1.9} />

                <span>Home</span>
              </NavLink>
            </li>

            {/* Groups */}
            {menuGroups.map((group) => {
              const isOpenGroup = openGroups.includes(group.label);

              const isActive = isGroupActive(group);

              const GroupIcon = group.icon;

              return (
                <li key={group.label}>
                  {/* Group Button */}
                  <button
                    type="button"
                    onClick={() => toggleGroup(group.label)}
                    className={`
                      flex w-full items-center gap-3
                      rounded-xl px-4 py-3
                      text-sm font-medium
                      transition-all duration-200

                      ${isActive ? "text-[#31214E]" : "text-[#272333]"}

                      hover:bg-[#F7F4FA]
                    `}
                  >
                    <GroupIcon size={20} strokeWidth={1.8} />

                    <span>{group.label}</span>

                    <ChevronDown
                      size={16}
                      strokeWidth={1.8}
                      className={`
                        ms-auto
                        transition-transform
                        duration-200
                        ${isOpenGroup ? "rotate-180" : ""}
                      `}
                    />
                  </button>

                  {/* Submenu */}
                  <div
                    className={`
                      grid
                      transition-all
                      duration-200

                      ${isOpenGroup ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                    `}
                  >
                    <div className="overflow-hidden">
                      <ul className="mt-1 space-y-1 ps-4">
                        {group.items.map((item) => {
                          const ItemIcon = item.icon;

                          return (
                            <li key={item.label}>
                              <NavLink
                                to={item.to}
                                onClick={onClose}
                                className={({ isActive }) =>
                                  `
                                  flex items-center gap-3
                                  rounded-lg px-4 py-2.5
                                  text-sm transition-all

                                  ${
                                    isActive
                                      ? "bg-[#F0E9F6] font-semibold text-[#31214E]"
                                      : "text-muted hover:bg-[#F8F6FA] hover:text-[#31214E]"
                                  }
                                  `
                                }
                              >
                                <ItemIcon size={17} strokeWidth={1.8} />

                                <span>{item.label}</span>
                              </NavLink>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}

            {/* Users */}
            <li>
              <NavLink
                to="/dashboard/users"
                onClick={onClose}
                className={({ isActive }) =>
                  `
                  flex items-center gap-3
                  rounded-xl px-4 py-3
                  text-sm font-medium
                  transition-all

                  ${
                    isActive
                      ? "bg-[#F0E9F6] font-semibold text-[#31214E]"
                      : "text-[#272333] hover:bg-[#F7F4FA]"
                  }
                  `
                }
              >
                <Users size={20} strokeWidth={1.8} />

                <span>Users</span>
              </NavLink>
            </li>

            {/* Roles */}
            <li>
              <NavLink
                to="/dashboard/roles"
                onClick={onClose}
                className={({ isActive }) =>
                  `
                  flex items-center gap-3
                  rounded-xl px-4 py-3
                  text-sm font-medium
                  transition-all

                  ${
                    isActive
                      ? "bg-[#F0E9F6] font-semibold text-[#31214E]"
                      : "text-[#272333] hover:bg-[#F7F4FA]"
                  }
                  `
                }
              >
                <KeyRound size={20} strokeWidth={1.8} />

                <span>Roles</span>
              </NavLink>
            </li>

            {/* Settings */}
            <li className="pt-2">
              <NavLink
                to="/dashboard/settings"
                onClick={onClose}
                className={({ isActive }) =>
                  `
                  flex items-center gap-3
                  rounded-xl px-4 py-3
                  text-sm font-medium
                  transition-all

                  ${
                    isActive
                      ? "bg-[#F0E9F6] font-semibold text-[#31214E]"
                      : "text-[#272333] hover:bg-[#F7F4FA]"
                  }
                  `
                }
              >
                <Settings size={20} strokeWidth={1.8} />

                <span>Settings</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
