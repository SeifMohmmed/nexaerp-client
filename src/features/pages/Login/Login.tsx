import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import logo from "../../../assets/sign_up_logo.png";
import registerBackground from "../../../assets/register-background.jpg";

import { useLogin } from "../../../Services/Auth/Auth";
import { useAuthStore } from "../../../Services/Auth/AuthState";

type LoginFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const loginMutation = useLogin();

  const setTokens = useAuthStore((state) => state.setTokens);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (formData: LoginFormData) => {
    try {
      const response = await loginMutation.mutateAsync({
        email: formData.email,
        password: formData.password,
      });

      setTokens({
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
      });

      toast.success("Login successful!");
    } catch (error) {
      console.error("Login failed:", error);

      toast.error("Invalid email or password.");
    }
  };

  const isLoading = isSubmitting || loginMutation.isPending;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#17256F] px-4 py-5 sm:px-6 lg:px-8">
      {/* =========================================================
          Background
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src={registerBackground}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>

      {/* =========================================================
          Login Card
      ========================================================= */}
      <div className="relative z-10 flex min-h-[calc(100vh-40px)] items-center justify-center">
        <div className="w-full max-w-125 overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
          {/* =====================================================
              Header
          ===================================================== */}
          <div className="bg-[#F7F9FC] px-6 py-8 text-center sm:px-10">
            {/* Logo */}
            <Link to="/">
              <img
                src={logo}
                alt="NexaERP"
                className="mx-auto mb-6 h-12 w-auto"
              />
            </Link>

            {/* Heading */}
            <h1 className="text-3xl font-bold text-[#31214E]">Welcome Back</h1>

            {/* Description */}
            <p className="mt-2 text-sm text-muted">
              Sign in to your NexaERP account
            </p>
          </div>

          {/* =====================================================
              Form
          ===================================================== */}
          <div className="px-6 py-8 sm:px-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* =================================================
                  Email
              ================================================= */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#31214E]"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className={`h-12 w-full rounded-lg border bg-white px-4 text-sm text-foreground outline-none transition placeholder:text-[#9A949F] focus:ring-2 focus:ring-[#A744F3]/10 ${
                    errors.email
                      ? "border-red-400 focus:border-red-400"
                      : "border-border focus:border-accent"
                  }`}
                  {...register("email", {
                    required: "Email is required.",

                    maxLength: {
                      value: 300,
                      message: "Email must not exceed 300 characters.",
                    },

                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address.",
                    },
                  })}
                />

                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* =================================================
                  Password
              ================================================= */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-[#31214E]"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className={`h-12 w-full rounded-lg border bg-white px-4 pr-12 text-sm text-foreground outline-none transition placeholder:text-[#9A949F] focus:ring-2 focus:ring-[#A744F3]/10 ${
                      errors.password
                        ? "border-red-400 focus:border-red-400"
                        : "border-border focus:border-accent"
                    }`}
                    {...register("password", {
                      required: "Password is required.",

                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters.",
                      },

                      validate: {
                        uppercase: (value) =>
                          /[A-Z]/.test(value) ||
                          "Password must contain at least one uppercase letter.",

                        lowercase: (value) =>
                          /[a-z]/.test(value) ||
                          "Password must contain at least one lowercase letter.",

                        digit: (value) =>
                          /[0-9]/.test(value) ||
                          "Password must contain at least one digit.",

                        specialCharacter: (value) =>
                          /[^a-zA-Z0-9]/.test(value) ||
                          "Password must contain at least one special character.",
                      },
                    })}
                  />

                  {/* Show / Hide Password */}
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted transition hover:text-[#31214E]"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* =================================================
                  Remember / Forgot
              ================================================= */}
              <div className="flex items-center justify-between gap-4">
                <label className="flex cursor-pointer items-center gap-2 text-sm text-muted">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-border accent-accent"
                  />

                  <span>Remember me</span>
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm font-semibold text-accent transition hover:text-[#31214E]"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* =================================================
                  Login Button
              ================================================= */}
              <button
                type="submit"
                disabled={isLoading}
                className="h-12 w-full rounded-button bg-[#31214E] text-sm font-semibold text-white transition hover:bg-[#3B2963] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </button>
            </form>

            {/* =====================================================
                Register
            ===================================================== */}
            <p className="mt-7 text-center text-sm text-muted">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-accent transition hover:text-[#31214E]"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
