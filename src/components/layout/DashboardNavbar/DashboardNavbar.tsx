import { Bell, Menu, Search } from "lucide-react";

type DashboardNavbarProps = {
  onMenuClick: () => void;
};

const DashboardNavbar = ({ onMenuClick }: DashboardNavbarProps) => {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center border-b border-[#E8E5EB] bg-white px-4 sm:px-6 lg:px-8">
      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Open navigation"
        className="
          flex h-9 w-9 items-center justify-center
          rounded-lg
          text-muted
          transition
          hover:bg-[#F7F4FA]
          hover:text-[#31214E]
          lg:hidden
        "
      >
        <Menu size={21} strokeWidth={1.8} />
      </button>

      {/* Right Side */}
      <div className="ml-auto flex items-center gap-3">
        {/* Search */}
        <div className="relative hidden sm:block">
          <Search
            size={18}
            strokeWidth={1.8}
            className="
              absolute left-3 top-1/2
              -translate-y-1/2
              text-[#8A8491]
            "
          />

          <input
            type="text"
            placeholder="Search or type a command (Ctrl + G)"
            className="
              h-10 w-64 rounded-xl
              border border-border
              bg-white
              pl-10 pr-4
              text-sm text-foreground
              outline-none
              transition-all
              placeholder:text-[#8A8491]
              focus:border-accent
              focus:ring-2
              focus:ring-[#A744F3]/10
              lg:w-80
            "
          />
        </div>

        {/* Notifications */}
        <button
          type="button"
          aria-label="Notifications"
          className="
            relative flex h-10 w-10
            items-center justify-center
            rounded-xl
            text-muted
            transition
            hover:bg-[#F7F4FA]
            hover:text-[#31214E]
          "
        >
          <Bell size={20} strokeWidth={1.8} />

          <span
            className="
              absolute right-2 top-2
              h-2 w-2
              rounded-full
              bg-accent
            "
          />
        </button>

        {/* Divider */}
        <div className="hidden h-7 w-px bg-border sm:block" />

        {/* Avatar */}
        <button
          type="button"
          aria-label="Open profile menu"
          className="
            flex h-10 w-10
            items-center justify-center
            rounded-full
            bg-[#E7F4EF]
            text-sm font-semibold
            text-[#315B4A]
            transition
            hover:ring-2
            hover:ring-[#A744F3]/20
          "
        >
          A
        </button>
      </div>
    </header>
  );
};

export default DashboardNavbar;
