import { useEffect, useState } from "react";
import logo from "../../../assets/Logo.png";

const navLinks = [
  { name: "Solutions", path: "#solutions" },
  { name: "Benefits", path: "#benefits" },
  { name: "How It Works", path: "#how-it-works" },
  { name: "Integrations", path: "#integrations" },
  { name: "FAQs", path: "#faqs" },
  { name: "Pricing", path: "#pricing" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`
                    fixed
                    top-0
                    left-0
                    z-50
                    w-full
                    transition-all
                    duration-500
                    ${
                      isScrolled
                        ? "bg-[#021e3a]/95 py-3 text-white shadow-md backdrop-blur-lg"
                        : "bg-[#301E44] py-5 text-white"
                    }
                `}
      >
        <div className="flex h-22 w-full items-center justify-between px-8 lg:px-12 xl:px-16">
          {/* Logo */}
          <a
            href="/"
            className="flex shrink-0 items-center"
            aria-label="NexaERP"
          >
            <img
              src={logo}
              alt="NexaERP"
              className="h-16 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex lg:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="
                                    group
                                    flex
                                    flex-col
                                    gap-1
                                    text-sm
                                    font-medium
                                    text-white
                                "
              >
                <span>{link.name}</span>

                <span
                  className="
                                        h-px
                                        w-0
                                        bg-white
                                        transition-all
                                        duration-300
                                        group-hover:w-full
                                    "
                />
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 md:flex">
            {/* Login */}
            <a
              href="/login"
              className="
                                rounded-full
                                border
                                border-white/70
                                px-5
                                py-2.5
                                text-sm
                                font-medium
                                text-white
                                transition-all
                                duration-300
                                hover:bg-white
                                hover:text-primary
                            "
            >
              Login
            </a>

            {/* Get Started */}
            <a
              href="/register"
              className="
                                rounded-full
                                bg-white
                                px-6
                                py-2.5
                                text-sm
                                font-medium
                                text-primary
                                shadow-[0_0_25px_rgba(255,255,255,0.2)]
                                transition-all
                                duration-300
                                hover:bg-primary
                                hover:text-white
                                hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]
                            "
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden"
            aria-label="Open menu"
          >
            <svg
              className="size-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="4" y1="6" x2="20" y2="6" />

              <line x1="4" y1="12" x2="20" y2="12" />

              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
                    fixed
                    inset-0
                    z-60
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-6
                    bg-primary
                    text-white
                    transition-transform
                    duration-500
                    md:hidden
                    ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
                `}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          className="absolute right-6 top-6"
          aria-label="Close menu"
        >
          <svg
            className="size-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />

            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Mobile Logo */}
        <a href="/" onClick={() => setIsMenuOpen(false)} className="mb-8">
          <img
            src={logo}
            alt="NexaERP"
            className="h-16 w-auto object-contain"
          />
        </a>

        {/* Mobile Navigation */}
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="
                            text-lg
                            font-medium
                            transition-colors
                            duration-300
                            hover:text-[#D8C9E5]
                        "
          >
            {link.name}
          </a>
        ))}

        {/* Mobile Actions */}
        <div className="mt-6 flex items-center gap-4">
          {/* Login */}
          <a
            href="/login"
            onClick={() => setIsMenuOpen(false)}
            className="
                            rounded-full
                            border
                            border-white/70
                            px-6
                            py-2.5
                            text-sm
                            font-medium
                            text-white
                            transition-all
                            duration-300
                            hover:bg-white
                            hover:text-primary
                        "
          >
            Login
          </a>

          {/* Get Started */}
          <a
            href="/register"
            onClick={() => setIsMenuOpen(false)}
            className="
                            rounded-full
                            bg-white
                            px-6
                            py-2.5
                            text-sm
                            font-medium
                            text-primary
                            transition-all
                            duration-300
                            hover:bg-primary
                        "
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
