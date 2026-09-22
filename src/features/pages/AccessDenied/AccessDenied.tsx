import { useNavigate } from "react-router-dom";

const AccessDenied = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-16">
          {/* ========================= */}
          {/* Left Content */}
          {/* ========================= */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-slate-800">
              403
            </h1>

            <h2 className="mt-2 text-2xl sm:text-3xl font-medium text-slate-500">
              Access forbidden
            </h2>

            <p className="mt-4 max-w-md mx-auto md:mx-0 text-base sm:text-lg leading-7 text-slate-400">
              You've tried to access a page you did not have prior authorization
              for.
            </p>

            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="
                mt-7
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-purple-700
                px-7
                py-3
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-purple-700/20
                transition-all
                duration-200
                hover:bg-purple-800
                hover:-translate-y-0.5
                focus:outline-none
                focus:ring-4
                focus:ring-purple-700/20
              "
            >
              Go to Dashboard
            </button>
          </div>

          {/* ========================= */}
          {/* Right Illustration */}
          {/* ========================= */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-full max-w-md">
              <svg
                viewBox="0 0 500 360"
                className="w-full h-auto"
                role="img"
                aria-label="Access forbidden illustration"
              >
                {/* Ground */}
                <line
                  x1="40"
                  y1="305"
                  x2="460"
                  y2="305"
                  stroke="#AEB9C8"
                  strokeWidth="3"
                />

                {/* Small grass */}
                <path
                  d="M210 305
                     C207 290 207 279 211 266
                     M211 305
                     C215 290 218 282 222 275
                     M211 305
                     C204 292 199 284 197 276"
                  fill="none"
                  stroke="#8BC48A"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Door shadow */}
                <ellipse cx="340" cy="308" rx="72" ry="7" fill="#E5E7EB" />

                {/* Door */}
                <path
                  d="M255 305V105
                     C255 61 289 30 333 30
                     C377 30 411 61 411 105
                     V305Z"
                  fill="#21082F"
                />

                {/* Purple side */}
                <path
                  d="M333 30
                     C377 30 411 61 411 105
                     V305
                     H387
                     V105
                     C387 66 363 38 333 30Z"
                  fill="#6919A8"
                />

                {/* Door highlight */}
                <path
                  d="M333 30
                     C289 30 255 61 255 105
                     V305"
                  fill="none"
                  stroke="#17051F"
                  strokeWidth="3"
                  opacity="0.5"
                />

                {/* Face */}
                <line
                  x1="292"
                  y1="103"
                  x2="300"
                  y2="103"
                  stroke="#F5F5F5"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <line
                  x1="325"
                  y1="103"
                  x2="333"
                  y2="103"
                  stroke="#F5F5F5"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* No Entry Tape */}
                <rect x="222" y="174" width="225" height="25" fill="#E6CF5C" />

                {/* Tape stripes */}
                <line
                  x1="250"
                  y1="174"
                  x2="250"
                  y2="199"
                  stroke="#C8B13F"
                  strokeWidth="1"
                />

                <line
                  x1="325"
                  y1="174"
                  x2="325"
                  y2="199"
                  stroke="#C8B13F"
                  strokeWidth="1"
                />

                <line
                  x1="400"
                  y1="174"
                  x2="400"
                  y2="199"
                  stroke="#C8B13F"
                  strokeWidth="1"
                />

                {/* No Entry Text */}
                <text
                  x="235"
                  y="191"
                  fontSize="10"
                  fontWeight="700"
                  fill="#6B5D1A"
                >
                  NO ENTRY
                </text>

                <text
                  x="307"
                  y="191"
                  fontSize="10"
                  fontWeight="700"
                  fill="#6B5D1A"
                >
                  NO ENTRY
                </text>

                <text
                  x="380"
                  y="191"
                  fontSize="10"
                  fontWeight="700"
                  fill="#6B5D1A"
                >
                  NO ENTRY
                </text>

                {/* Tape poles */}
                <rect
                  x="216"
                  y="166"
                  width="7"
                  height="139"
                  rx="2"
                  fill="#D7DDE5"
                />

                <rect
                  x="447"
                  y="166"
                  width="7"
                  height="139"
                  rx="2"
                  fill="#D7DDE5"
                />

                {/* Pole shadows */}
                <rect x="216" y="295" width="7" height="10" fill="#B8C1CC" />

                <rect x="447" y="295" width="7" height="10" fill="#B8C1CC" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessDenied;
