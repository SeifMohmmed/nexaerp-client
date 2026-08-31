import dashboard from "../../../assets/dashboard.png";

const Hero = () => {
  return (
    <section
      className="
        overflow-hidden
        bg-primary
        px-5
        pb-12
        pt-24
        text-white
        sm:px-6
        sm:pb-16
        sm:pt-28
        lg:px-12
        lg:pb-20
        lg:pt-32
        xl:px-20
        2xl:px-24
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-7xl
          flex-col
          items-center
          gap-8
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:gap-10
          xl:gap-14
        "
      >
        {/* Content */}
        <div
          className="
            w-full
            max-w-2xl
            text-center
            lg:text-left
          "
        >
          {/* Heading */}
          <h1
            className="
              text-3xl
              font-bold
              leading-[1.15]
              sm:text-4xl
              md:text-5xl
              lg:text-5xl
              xl:text-6xl
              mt-7
            "
          >
            Smart ERP System
            <br />
            to Manage Your
            <br />
            Business Efficiently
          </h1>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-sm
              leading-6
              text-white/75
              sm:mt-6
              sm:text-base
              sm:leading-7
              lg:mx-0
            "
          >
            Manage products, customers, suppliers, orders, purchases, inventory,
            and more — all from one powerful ERP platform.
          </p>

          {/* Actions */}
          <div
            className="
              mt-7
              flex
              flex-col
              items-stretch
              gap-3
              sm:flex-row
              sm:items-center
              sm:justify-center
              sm:gap-4
              lg:justify-start
            "
          >
            {/* Get Started */}
            <a
              href="/register"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-white
                px-6
                py-2.5
                text-sm
                font-semibold
                text-primary
                shadow-lg
                transition-colors
                duration-300
                hover:bg-primary-light
                sm:px-7
                sm:py-3
              "
            >
              Get Started
            </a>

            {/* Explore Features */}
            <a
              href="#solutions"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-white/50
                px-6
                py-2.5
                text-sm
                font-semibold
                text-white
                transition-colors
                duration-300
                hover:bg-white/10
                sm:px-7
                sm:py-3
              "
            >
              Explore Features
            </a>
          </div>
        </div>

        {/* Dashboard */}
        <div
          className="
            w-full
            max-w-lg
            lg:w-[48%]
            lg:max-w-none
          "
        >
          <img
            src={dashboard}
            alt="NexaERP Dashboard"
            className="
              block
              h-auto
              w-full
              rounded-xl
              shadow-2xl
              sm:rounded-2xl
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
