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
  return (
    <footer
      className="
        relative
        mt-10
        w-full
        overflow-hidden
        rounded-tr-[130px]
        bg-[#021E3A]
        text-white

        max-md:rounded-tr-[80px]
      "
    >
      {/* ==================== Footer Accent ==================== */}

      <div
        className="
          absolute
          left-0
          top-0
          h-0.75
          w-45
          bg-linear-to-r
          from-[#354FC4]
          via-[#A83DFF]
          to-transparent

          max-md:w-30
        "
      />

      {/* ==================== Main Footer ==================== */}

      <div
        className="
          grid
          w-full
          min-h-100
          grid-cols-[1.7fr_0.85fr_1.15fr_1.25fr]
          gap-x-11
          px-8
          py-12.5

          lg:px-12

          xl:px-16

          max-lg:grid-cols-[1.5fr_0.9fr_1fr_1fr]
          max-lg:gap-x-7

          max-md:grid-cols-2
          max-md:gap-x-7
          max-md:gap-y-10
          max-md:px-5
          max-md:py-12

          max-sm:grid-cols-1
          max-sm:gap-y-8
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

          <a
            href="/"
            className="
              inline-flex
              items-center
            "
            aria-label="NexaERP"
          >
            <img
              src={logo}
              alt="NexaERP"
              className="
                h-19.5
                w-auto
                object-contain

                max-lg:h-18

                max-md:h-17

                max-sm:h-15
              "
            />
          </a>

          {/* Payment Text */}

          <p
            className="
              mt-4.5
              text-sm
              font-normal
              leading-[1.8]
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
              mt-4
              text-sm
              leading-[1.9]
              text-white/78

              max-lg:text-[13px]

              max-md:text-sm
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
              text-[17px]
              font-bold
              leading-[1.45]
              text-white
            "
          >
            Important
            <br />
            Links
          </h3>

          <div
            className="
              mt-5.5
              flex
              flex-col
              gap-3
            "
          >
            <a
              href="#pricing"
              className="
                w-fit
                text-sm
                leading-[1.4]
                text-white/72
                transition-all
                duration-300
                hover:translate-x-0.5
                hover:text-[#A83DFF]
              "
            >
              Pricing
            </a>

            <a
              href="#solutions"
              className="
                w-fit
                text-sm
                leading-[1.4]
                text-white/72
                transition-all
                duration-300
                hover:translate-x-0.5
                hover:text-[#A83DFF]
              "
            >
              Programs
            </a>

            <a
              href="#contact"
              className="
                w-fit
                text-sm
                leading-[1.4]
                text-white/72
                transition-all
                duration-300
                hover:translate-x-0.5
                hover:text-[#A83DFF]
              "
            >
              Contact
            </a>
          </div>
        </div>

        {/* ==================== Site Policies ==================== */}

        <div className="pt-1">
          <h3
            className="
              text-[17px]
              font-bold
              leading-[1.45]
              text-white
            "
          >
            Site Policies
          </h3>

          <div
            className="
              mt-5.5
              flex
              flex-col
              gap-3
            "
          >
            <a
              href="#about"
              className="
                w-fit
                text-sm
                leading-[1.4]
                text-white/72
                transition-all
                duration-300
                hover:translate-x-0.5
                hover:text-[#A83DFF]
              "
            >
              About Us
            </a>

            <a
              href="#terms"
              className="
                w-fit
                text-sm
                leading-[1.4]
                text-white/72
                transition-all
                duration-300
                hover:translate-x-0.5
                hover:text-[#A83DFF]
              "
            >
              Terms and Conditions
            </a>

            <a
              href="#privacy"
              className="
                w-fit
                text-sm
                leading-[1.4]
                text-white/72
                transition-all
                duration-300
                hover:translate-x-0.5
                hover:text-[#A83DFF]
              "
            >
              Privacy Policy
            </a>
          </div>
        </div>

        {/* ==================== Contact ==================== */}

        <div className="pt-1">
          <h3
            className="
              text-[17px]
              font-bold
              leading-[1.45]
              text-white
            "
          >
            Contact
          </h3>

          {/* Social Icons */}

          <div
            className="
              mt-5.5
              grid
              grid-cols-5
              gap-2.5

              max-lg:grid-cols-4

              max-md:grid-cols-4
            "
          >
            {/* Email */}

            <a
              href="#"
              aria-label="Email"
              className="
                flex
                size-9.5
                items-center
                justify-center
                rounded-md
                border
                border-[#A83DFF]/35
                bg-[#7C4DFF]/15
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#7C4DFF]
                hover:bg-[#7C4DFF]
              "
            >
              <Mail size={17} strokeWidth={2} />
            </a>

            {/* WhatsApp */}

            <a
              href="#"
              aria-label="WhatsApp"
              className="
                flex
                size-9.5
                items-center
                justify-center
                rounded-md
                border
                border-[#A83DFF]/35
                bg-[#7C4DFF]/15
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#7C4DFF]
                hover:bg-[#7C4DFF]
              "
            >
              <FaWhatsapp size={18} />
            </a>

            {/* Instagram */}

            <a
              href="#"
              aria-label="Instagram"
              className="
                flex
                size-9.5
                items-center
                justify-center
                rounded-md
                border
                border-[#A83DFF]/35
                bg-[#7C4DFF]/15
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#7C4DFF]
                hover:bg-[#7C4DFF]
              "
            >
              <FaInstagram size={18} />
            </a>

            {/* X */}

            <a
              href="#"
              aria-label="X"
              className="
                flex
                size-9.5
                items-center
                justify-center
                rounded-md
                border
                border-[#A83DFF]/35
                bg-[#7C4DFF]/15
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#7C4DFF]
                hover:bg-[#7C4DFF]
              "
            >
              <FaXTwitter size={17} />
            </a>

            {/* LinkedIn */}

            <a
              href="#"
              aria-label="LinkedIn"
              className="
                flex
                size-9.5
                items-center
                justify-center
                rounded-md
                border
                border-[#A83DFF]/35
                bg-[#7C4DFF]/15
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#7C4DFF]
                hover:bg-[#7C4DFF]
              "
            >
              <FaLinkedinIn size={18} />
            </a>

            {/* Facebook */}

            <a
              href="#"
              aria-label="Facebook"
              className="
                flex
                size-9.5
                items-center
                justify-center
                rounded-md
                border
                border-[#A83DFF]/35
                bg-[#7C4DFF]/15
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#7C4DFF]
                hover:bg-[#7C4DFF]
              "
            >
              <FaFacebookF size={18} />
            </a>

            {/* YouTube */}

            <a
              href="#"
              aria-label="YouTube"
              className="
                flex
                size-9.5
                items-center
                justify-center
                rounded-md
                border
                border-[#A83DFF]/35
                bg-[#7C4DFF]/15
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#7C4DFF]
                hover:bg-[#7C4DFF]
              "
            >
              <FaYoutube size={18} />
            </a>

            {/* Snapchat */}

            <a
              href="#"
              aria-label="Snapchat"
              className="
                flex
                size-9.5
                items-center
                justify-center
                rounded-md
                border
                border-[#A83DFF]/35
                bg-[#7C4DFF]/15
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#7C4DFF]
                hover:bg-[#7C4DFF]
              "
            >
              <FaSnapchat size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* ==================== Bottom Bar ==================== */}

      <div
        className="
          w-full
          border-t
          border-[rgba(82,153,196,0.7)]
        "
      >
        <div
          className="
            flex
            min-h-19.5
            w-full
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
                text-[25px]
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
              text-xs
              leading-normal
              text-white/60
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
