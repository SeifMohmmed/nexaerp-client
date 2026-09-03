import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaSnapchat,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { Mail } from "lucide-react";

import logo from "../../../assets/Logo.png";

const Footer = () => {
  const importantLinks = [
    { label: "Pricing", href: "#pricing" },
    { label: "Programs", href: "#solutions" },
    { label: "Contact", href: "#contact" },
  ];

  const policyLinks = [
    { label: "About Us", href: "#about" },
    { label: "Terms and Conditions", href: "#terms" },
    { label: "Privacy Policy", href: "#privacy" },
  ];

  const socialLinks = [
    {
      label: "Email",
      href: "mailto:info@nexaerp.com",
      icon: <Mail size={17} strokeWidth={2} />,
    },
    {
      label: "WhatsApp",
      href: "#",
      icon: <FaWhatsapp size={18} />,
    },
    {
      label: "Instagram",
      href: "#",
      icon: <FaInstagram size={18} />,
    },
    {
      label: "X",
      href: "#",
      icon: <FaXTwitter size={17} />,
    },
    {
      label: "LinkedIn",
      href: "#",
      icon: <FaLinkedinIn size={18} />,
    },
    {
      label: "Facebook",
      href: "#",
      icon: <FaFacebookF size={18} />,
    },
    {
      label: "YouTube",
      href: "#",
      icon: <FaYoutube size={18} />,
    },
    {
      label: "Snapchat",
      href: "#",
      icon: <FaSnapchat size={18} />,
    },
  ];

  return (
    <footer
      className="
        relative
        mt-10
        w-full
        overflow-hidden
        rounded-tr-[120px]
        bg-primary-hover
        text-white
        sm:rounded-tr-[140px]
        max-md:rounded-tr-[72px]
      "
    >
      {/* ==================== Footer Accent ==================== */}

      <div
        className="
          absolute
          left-0
          top-0
          h-0.75
          w-44
          bg-linear-to-r
          from-[#354FC4]
          via-[#A744F3]
          to-transparent
          sm:w-52
          max-md:w-28
        "
      />

      {/* ==================== Main Footer ==================== */}

      <div
        className="
          mx-auto
          grid
          w-full
          max-w-380
          grid-cols-[1.7fr_0.85fr_1.15fr_1.25fr]
          gap-x-10
          px-8
          py-12
          lg:px-12
          lg:gap-x-8
          xl:px-16
          xl:gap-x-11

          max-lg:grid-cols-[1.5fr_0.9fr_1fr_1fr]
          max-lg:gap-x-6

          max-md:grid-cols-2
          max-md:gap-x-8
          max-md:gap-y-10
          max-md:px-6
          max-md:py-11

          max-sm:grid-cols-1
          max-sm:gap-y-8
          max-sm:px-5
          max-sm:py-10
        "
      >
        {/* ==================== Company ==================== */}

        <div
          className="
            min-w-0
            max-md:col-span-2
            max-sm:col-span-1
          "
        >
          {/* Logo */}

          <a href="/" className="inline-flex items-center" aria-label="NexaERP">
            <img
              src={logo}
              alt="NexaERP"
              className="
                h-18.5
                w-auto
                object-contain
                sm:h-19.5
                lg:h-20
              "
            />
          </a>

          {/* Payment Text */}

          <p
            className="
              mt-4
              text-sm
              leading-7
              text-white
              max-lg:text-[13px]
              max-md:text-sm
            "
          >
            We support installment payments via Tamara and
            <br className="max-md:hidden" />
            Tabby.
          </p>

          {/* Description */}

          <p
            className="
              mt-3
              max-w-xl
              text-sm
              leading-7
              text-white/70
              max-lg:text-[13px]
              max-md:text-sm
              max-md:leading-7
            "
          >
            NexaERP is an integrated business management
            <br className="max-lg:hidden" />
            system that helps you organize your company and
            <br className="max-lg:hidden" />
            increase productivity.
          </p>
        </div>

        {/* ==================== Important Links ==================== */}

        <div className="pt-1">
          <h3
            className="
              text-base
              font-bold
              leading-6
              text-white
              sm:text-[17px]
            "
          >
            Important
            <br />
            Links
          </h3>

          <nav className="mt-5 flex flex-col gap-3">
            {importantLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
                  w-fit
                  text-[13px]
                  leading-6
                  text-white/65
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-accent
                  sm:text-sm
                "
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* ==================== Site Policies ==================== */}

        <div className="pt-1">
          <h3
            className="
              text-base
              font-bold
              leading-6
              text-white
              sm:text-[17px]
            "
          >
            Site Policies
          </h3>

          <nav className="mt-5 flex flex-col gap-3">
            {policyLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
                  w-fit
                  text-[13px]
                  leading-6
                  text-white/65
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-accent
                  sm:text-sm
                "
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* ==================== Contact ==================== */}

        <div className="pt-1">
          <h3
            className="
              text-base
              font-bold
              leading-6
              text-white
              sm:text-[17px]
            "
          >
            Contact
          </h3>

          {/* Social Icons */}

          <div
            className="
              mt-5
              grid
              max-w-52.5
              grid-cols-4
              gap-2.5
            "
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="
                  flex
                  size-9.5
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-accent/25
                  bg-white/6
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-accent/70
                  hover:bg-accent
                  hover:shadow-[0_8px_20px_rgba(167,68,243,0.2)]
                "
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ==================== Bottom Bar ==================== */}

      <div className="border-t border-white/10">
        <div
          className="
            mx-auto
            flex
            min-h-19.5
            w-full
            max-w-380
            items-center
            justify-between
            gap-7
            px-8
            lg:px-12
            xl:px-16

            max-md:flex-col
            max-md:justify-center
            max-md:gap-4
            max-md:px-5
            max-md:py-5
          "
        >
          {/* ==================== Payment Methods ==================== */}

          <div
            className="
              flex
              items-center
              gap-5
              whitespace-nowrap
            "
          >
            {/* Tamara */}

            <span
              className="
                text-base
                font-bold
                text-white
              "
            >
              تمارا
            </span>

            {/* Tabby */}

            <span
              className="
                text-[24px]
                font-extrabold
                tracking-[-1px]
                text-white
              "
            >
              tabby
            </span>

            {/* Mastercard */}

            <span
              className="
                relative
                flex
                h-7.5
                w-12
                items-center
              "
              aria-label="Mastercard"
            >
              <span
                className="
                  absolute
                  left-0
                  size-7
                  rounded-full
                  bg-[#EB001B]
                "
              />

              <span
                className="
                  absolute
                  right-0
                  size-7
                  rounded-full
                  bg-[#F79E1B]
                "
              />
            </span>
          </div>

          {/* ==================== Copyright ==================== */}

          <p
            className="
              m-0
              text-[11px]
              leading-5
              text-white/45
              sm:text-xs
              max-md:text-center
            "
          >
            All rights reserved © 2025 | This site is protected with 256-bit SSL
            technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
