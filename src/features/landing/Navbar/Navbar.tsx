import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../../../assets/Logo.png";

const navLinks = [
  {
    name: "Home",
    path: "/",
    type: "route",
  },
  {
    name: "Solutions",
    path: "/#solutions",
    type: "anchor",
  },
  {
    name: "Benefits",
    path: "/#advantages",
    type: "anchor",
  },
  {
    name: "How It Works",
    path: "/#how-it-works",
    type: "anchor",
  },
  {
    name: "Integrations",
    path: "/#integrations",
    type: "anchor",
  },
  {
    name: "About",
    path: "/about",
    type: "route",
  },
  {
    name: "Pricing",
    path: "/#pricing",
    type: "anchor",
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * ================================
   * Scroll To Section
   * ================================
   */

  const scrollToSection = (path: string) => {
    const hash = path.split("#")[1];

    if (!hash) {
      navigate("/");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    /*
     * If we are already on Home,
     * just scroll to the section.
     */
    if (location.pathname === "/") {
      const element = document.getElementById(hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      window.history.replaceState(null, "", `/#${hash}`);

      return;
    }

    /*
     * If we are on another page such as About,
     * navigate to Home first.
     */
    navigate(`/#${hash}`);

    /*
     * Wait until LandingPage is rendered,
     * then scroll to the requested section.
     */
    setTimeout(() => {
      const element = document.getElementById(hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    link: {
      name: string;
      path: string;
      type: string;
    },
  ) => {
    if (link.type === "anchor") {
      event.preventDefault();

      closeMenu();

      scrollToSection(link.path);
    } else {
      closeMenu();
    }
  };

  return (
    <>
      {/* ==================== Navbar ==================== */}

      <nav
        className={`
          fixed
          left-0
          top-0
          z-999
          w-full
          text-white
          transition-all
          duration-500
          ${
            isScrolled
              ? "bg-primary-hover py-3 text-white shadow-md"
              : "bg-primary py-5 text-white"
          }
        `}
      >
        <div
          className="
            flex
            h-22
            w-full
            items-center
            justify-between
            px-8
            lg:px-12
            xl:px-16
          "
        >
          {/* ==================== Logo ==================== */}

          <Link
            to="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center"
            aria-label="NexaERP Home"
          >
            <img
              src={logo}
              alt="NexaERP"
              className="
                h-16
                w-auto
                object-contain
              "
            />
          </Link>

          {/* ==================== Desktop Navigation ==================== */}

          <div
            className="
              hidden
              items-center
              gap-7
              lg:flex
              xl:gap-9
            "
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(event) => handleNavigation(event, link)}
                className="
                  group
                  flex
                  flex-col
                  gap-1
                  whitespace-nowrap
                  text-sm
                  font-medium
                  text-white
                  transition-opacity
                  duration-300
                  hover:opacity-80
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
              </Link>
            ))}
          </div>

          {/* ==================== Desktop Actions ==================== */}

          <div
            className="
              hidden
              items-center
              gap-4
              lg:flex
            "
          >
            {/* Login */}

            <Link
              to="/login"
              className="
                whitespace-nowrap
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
            </Link>

            {/* Get Started */}

            <Link
              to="/register"
              className="
                whitespace-nowrap
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
                hover:bg-primary-light
                hover:text-primary
                hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]
              "
            >
              Get Started
            </Link>
          </div>

          {/* ==================== Mobile / Tablet Menu Button ==================== */}

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="
              flex
              size-10
              items-center
              justify-center
              rounded-lg
              transition-colors
              duration-300
              hover:bg-white/10
              lg:hidden
            "
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
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

      {/* ==================== Mobile / Tablet Menu ==================== */}

      <div
        id="mobile-navigation"
        className={`
          fixed
          inset-0
          z-1000
          flex
          flex-col
          items-center
          justify-center
          gap-6
          bg-primary
          text-white
          transition-transform
          duration-500
          lg:hidden
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        aria-hidden={!isMenuOpen}
      >
        {/* ==================== Close Button ==================== */}

        <button
          type="button"
          onClick={closeMenu}
          className="
            absolute
            right-6
            top-6
            flex
            size-10
            items-center
            justify-center
            rounded-lg
            transition-colors
            duration-300
            hover:bg-white/10
          "
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

        {/* ==================== Mobile / Tablet Logo ==================== */}

        <Link
          to="/"
          onClick={closeMenu}
          className="mb-8"
          aria-label="NexaERP Home"
        >
          <img
            src={logo}
            alt="NexaERP"
            className="
              h-16
              w-auto
              object-contain
            "
          />
        </Link>

        {/* ==================== Mobile / Tablet Navigation ==================== */}

        <div className="flex flex-col items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={(event) => handleNavigation(event, link)}
              className="
                text-lg
                font-medium
                text-white
                transition-colors
                duration-300
                hover:text-primary-light
              "
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* ==================== Mobile / Tablet Actions ==================== */}

        <div
          className="
            mt-6
            flex
            items-center
            gap-4
          "
        >
          {/* Login */}

          <Link
            to="/login"
            onClick={closeMenu}
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
          </Link>

          {/* Get Started */}

          <Link
            to="/register"
            onClick={closeMenu}
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
              hover:bg-primary-light
            "
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
