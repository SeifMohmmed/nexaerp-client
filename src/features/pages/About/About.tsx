import { Lightbulb, Handshake, UsersRound, ShieldCheck } from "lucide-react";

import image from "../../../assets/about-nexaerp.png";

const coreValues = [
  {
    title: "Innovation",
    description:
      "We embrace innovation and continuous improvement to deliver smart, future-ready solutions.",
    icon: Lightbulb,
  },
  {
    title: "Transparency",
    description:
      "We believe in honesty and transparency in everything we do with our clients and partners.",
    icon: Handshake,
  },
  {
    title: "Customer Focus",
    description:
      "Our customers are at the heart of our decisions. We listen, we care, and we deliver.",
    icon: UsersRound,
  },
  {
    title: "Security",
    description:
      "We follow high standards of security to protect your business data and ensure peace of mind.",
    icon: ShieldCheck,
  },
];

const About = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* ==================== About Hero ==================== */}

      <section
        id="about"
        className="
          px-5
          pb-14
          pt-28
          sm:px-6
          sm:pb-16
          sm:pt-32
          lg:px-12
          lg:pb-20
          lg:pt-36
          xl:px-16
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-380
            flex-col
            gap-10
            lg:flex-row
            lg:items-center
            lg:gap-14
            xl:gap-16
          "
        >
          {/* ==================== Image ==================== */}

          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-[28px]
              lg:w-1/2
              lg:rounded-4xl
            "
          >
            <div
              className="
                absolute
                inset-0
                z-10
                pointer-events-none
                bg-linear-to-tr
                from-[#31214E]/10
                via-transparent
                to-[#A744F3]/10
              "
            />

            <img
              src={image}
              alt="NexaERP business management platform"
              className="
                block
                h-90
                w-full
                object-cover
                object-left
                sm:h-110
                lg:h-155
                xl:h-162.5
              "
            />
          </div>

          {/* ==================== Content ==================== */}

          <div
            className="
              w-full
              lg:w-1/2
            "
          >
            {/* Label */}

            <span
              className="
                inline-block
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-accent
              "
            >
              About
            </span>

            {/* Heading */}

            <h1
              className="
                mt-2
                text-3xl
                font-bold
                leading-[1.15]
                text-primary
                sm:text-4xl
                lg:text-[42px]
                xl:text-[48px]
              "
            >
              NexaERP
            </h1>

            {/* Accent */}

            <div
              className="
                mt-4
                h-1
                w-14
                rounded-full
                bg-linear-to-r
                from-[#354FC4]
                to-[#A744F3]
              "
            />

            {/* Introduction */}

            <div
              className="
                mt-6
                space-y-4
                text-sm
                leading-7
                text-muted
                sm:text-[15px]
                sm:leading-8
              "
            >
              <p>
                <strong className="font-semibold text-primary">NexaERP</strong>{" "}
                is an all-in-one enterprise resource planning platform designed
                to help businesses streamline their operations, integrate
                departments, and make smarter decisions.
              </p>

              <p>
                We empower companies of different sizes to manage their business
                from a single platform, helping them save time, reduce
                operational complexity, and support sustainable growth.
              </p>

              <p>
                Built with modern technology and a flexible architecture,
                NexaERP adapts to evolving business needs and brings essential
                operations together in one unified system.
              </p>
            </div>

            {/* ==================== Core Values ==================== */}

            <div className="mt-8 sm:mt-10">
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    size-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-primary-light
                    text-accent
                  "
                >
                  <ShieldCheck size={21} strokeWidth={1.8} />
                </div>

                <h2
                  className="
                    text-lg
                    font-bold
                    text-primary
                    sm:text-xl
                  "
                >
                  Our Core Values
                </h2>
              </div>

              {/* Values */}

              <div
                className="
                  mt-5
                  grid
                  grid-cols-1
                  gap-4
                  sm:grid-cols-2
                  sm:gap-5
                "
              >
                {coreValues.map((value) => {
                  const Icon = value.icon;

                  return (
                    <div
                      key={value.title}
                      className="
                        group
                        flex
                        min-w-0
                        gap-3
                        rounded-2xl
                        border
                        border-border
                        bg-white
                        p-4
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-primary/20
                        hover:shadow-[0_8px_24px_rgba(49,33,78,0.08)]
                      "
                    >
                      {/* Icon */}

                      <div
                        className="
                          flex
                          size-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-primary-light
                          text-accent
                          transition-colors
                          duration-300
                          group-hover:bg-primary
                          group-hover:text-white
                        "
                      >
                        <Icon size={19} strokeWidth={1.8} />
                      </div>

                      {/* Text */}

                      <div className="min-w-0">
                        <h3
                          className="
                            text-sm
                            font-semibold
                            leading-6
                            text-primary
                          "
                        >
                          {value.title}
                        </h3>

                        <p
                          className="
                            mt-1
                            text-xs
                            leading-5
                            text-muted
                          "
                        >
                          {value.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
