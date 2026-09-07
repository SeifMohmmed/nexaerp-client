import { Check, ChevronDown, Eye, EyeOff, X } from "lucide-react";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import logo from "../../../assets/sign_up_logo.png";
import registerBackground from "../../../assets/register-background.jpg";
import { useRegister } from "../../../Services/Auth/Auth";
import { toast } from "sonner";
import { useAuthStore } from "../../../Services/Auth/AuthState";

type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  whatsapp: string;
  companyName: string;
  subdomain: string;
  country: string;
  hasInvitationCode: boolean;
  invitationCode: string;
};

const Register = () => {
  const [searchParams] = useSearchParams();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const setTokens = useAuthStore((state) => state.setTokens);

  /* =========================================================
      Query Parameters
  ========================================================= */

  const industry = searchParams.get("industry") || "Retail";
  const billingType = searchParams.get("type") || "monthly";
  const plan = searchParams.get("plan") || "Basic";

  const subscriptionPlan = `${plan} Plan - ${
    billingType === "yearly" ? "Yearly" : "Monthly"
  }`;

  /* =========================================================
      React Hook Form
  ========================================================= */

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    mode: "onChange",

    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      whatsapp: "",
      companyName: "",
      subdomain: "",
      country: "",
      hasInvitationCode: false,
      invitationCode: "",
    },
  });

  const password = watch("password");
  const hasInvitationCode = watch("hasInvitationCode");

  /* =========================================================
      Password Validation State
  ========================================================= */

  const passwordRequirements = {
    minLength: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    digit: /[0-9]/.test(password),
    specialCharacter: /[^a-zA-Z0-9]/.test(password),
  };

  /* =========================================================
      Submit
  ========================================================= */

  const registerMutation = useRegister();

  const onSubmit = async (formData: RegisterFormData) => {
    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await registerMutation.mutateAsync(data);

      setTokens({
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
      });

      toast.success("Registration successful!");
    } catch (error) {
      console.error("Registration failed:", error);

      toast.error("Registration failed. Please try again.");
    }
  };

  const isLoading = isSubmitting || registerMutation.isPending;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#17256F] px-4 py-5 sm:px-6 lg:px-8">
      {/* =========================================================
          Background
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Background Image */}
        <img
          src={registerBackground}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Main Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-[#17256F]/75 via-[#31214E]/55 to-[#A744F3]/45" />

        {/* Soft Center Glow */}
        <div className="absolute left-1/2 top-1/2 h-162.5 w-162.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[120px]" />

        {/* Subtle Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(15,23,42,0.35)_100%)]" />

        {/* Top Light */}
        <div className="absolute -left-32 -top-32 h-112.5 w-112.5 rounded-full bg-[#354FC4]/20 blur-[110px]" />

        {/* Bottom Purple Light */}
        <div className="absolute -bottom-40 -right-32 h-125 w-125 rounded-full bg-accent/20 blur-[120px]" />
      </div>

      {/* =========================================================
          Register Card
      ========================================================= */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-260 items-center justify-center py-5 sm:px-4 sm:py-8 lg:max-w-275">
        <div className="grid w-full overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_rgba(15,23,42,0.35)] lg:grid-cols-2">
          {/* =====================================================
              LEFT SIDE
          ===================================================== */}
          <section className="relative flex min-h-140 flex-col items-center justify-center overflow-hidden bg-[#F7F9FC] px-8 py-12 text-center sm:px-12 lg:min-h-180">
            {/* Subtle Background */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(167,68,243,0.08),transparent_40%)]" />

            <div className="relative z-10 w-full max-w-105">
              {/* Logo */}
              <div className="mb-8 flex justify-center">
                <Link to="/">
                  <img
                    src={logo}
                    alt="NexaERP"
                    className="h-auto w-47.5 object-contain sm:w-52.5"
                  />
                </Link>
              </div>

              {/* Heading */}
              <h1 className="text-2xl font-bold leading-tight text-[#111827] sm:text-[28px]">
                Create your account and start
                <br />
                your journey
              </h1>

              {/* Description */}
              <p className="mx-auto mt-5 max-w-97.5 text-sm leading-7 text-[#64748B] sm:text-[15px]">
                Start your journey with{" "}
                <strong className="font-semibold text-[#475569]">
                  NexaERP
                </strong>{" "}
                today and enjoy all our innovative cloud services.
              </p>

              {/* Divider */}
              <div className="my-10 h-px w-full bg-[#DDE3EC]" />

              {/* Selected Information */}
              <div className="space-y-5 text-center">
                {/* Industry */}
                <div>
                  <p className="text-sm font-medium text-[#475569]">
                    Industry:
                  </p>

                  <p className="mt-2 text-sm font-bold text-[#334155]">
                    {industry}
                  </p>
                </div>

                {/* Subscription Plan */}
                <div>
                  <p className="text-sm font-medium text-[#475569]">
                    Subscription Plan:
                  </p>

                  <p className="mt-2 text-sm font-bold text-[#334155]">
                    {subscriptionPlan}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================
              RIGHT SIDE
          ===================================================== */}
          <section className="bg-white px-6 py-10 sm:px-10 sm:py-12 lg:px-8 xl:px-10">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mx-auto w-full max-w-140"
            >
              {/* =================================================
                  Form Grid
              ================================================= */}
              <div className="grid grid-cols-1 gap-x-5 gap-y-6 sm:grid-cols-2">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-semibold text-[#1F2937]"
                  >
                    First Name
                  </label>

                  <input
                    id="firstName"
                    type="text"
                    placeholder="Your first name"
                    className={`h-13.25 w-full rounded-[13px] border bg-[#F8FAFC] px-4 text-sm text-[#1F2937] outline-none transition-all placeholder:text-[#8A8F98] focus:bg-white focus:ring-4 focus:ring-[#A744F3]/10 ${
                      errors.firstName
                        ? "border-red-400 focus:border-red-400"
                        : "border-[#DCE3ED] focus:border-accent"
                    }`}
                    {...register("firstName", {
                      required: "First name is required.",
                      maxLength: {
                        value: 100,
                        message: "First name must not exceed 100 characters.",
                      },
                    })}
                  />

                  {errors.firstName && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-semibold text-[#1F2937]"
                  >
                    Last Name
                  </label>

                  <input
                    id="lastName"
                    type="text"
                    placeholder="Your last name"
                    className={`h-13.25 w-full rounded-[13px] border bg-[#F8FAFC] px-4 text-sm text-[#1F2937] outline-none transition-all placeholder:text-[#8A8F98] focus:bg-white focus:ring-4 focus:ring-[#A744F3]/10 ${
                      errors.lastName
                        ? "border-red-400 focus:border-red-400"
                        : "border-[#DCE3ED] focus:border-accent"
                    }`}
                    {...register("lastName", {
                      required: "Last name is required.",
                      maxLength: {
                        value: 100,
                        message: "Last name must not exceed 100 characters.",
                      },
                    })}
                  />

                  {errors.lastName && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-[#1F2937]"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className={`h-13.25 w-full rounded-[13px] border bg-[#F8FAFC] px-4 text-sm text-[#1F2937] outline-none transition-all placeholder:text-[#8A8F98] focus:bg-white focus:ring-4 focus:ring-[#A744F3]/10 ${
                      errors.email
                        ? "border-red-400 focus:border-red-400"
                        : "border-[#DCE3ED] focus:border-accent"
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

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-semibold text-[#1F2937]"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className={`h-13.25 w-full rounded-[13px] border bg-[#F8FAFC] px-4 pr-12 text-sm text-[#1F2937] outline-none transition-all placeholder:text-[#8A8F98] focus:bg-white focus:ring-4 focus:ring-[#A744F3]/10 ${
                        errors.password
                          ? "border-red-400 focus:border-red-400"
                          : "border-[#DCE3ED] focus:border-accent"
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

                    <button
                      type="button"
                      onClick={() => setShowPassword((value) => !value)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A94A3] transition-colors hover:text-[#31214E]"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>

                  {/* Password Requirements */}
                  <div className="mt-3 space-y-1.5">
                    <PasswordRequirement
                      valid={passwordRequirements.minLength}
                      text="At least 8 characters"
                    />

                    <PasswordRequirement
                      valid={passwordRequirements.uppercase}
                      text="At least one uppercase letter"
                    />

                    <PasswordRequirement
                      valid={passwordRequirements.lowercase}
                      text="At least one lowercase letter"
                    />

                    <PasswordRequirement
                      valid={passwordRequirements.digit}
                      text="At least one digit"
                    />

                    <PasswordRequirement
                      valid={passwordRequirements.specialCharacter}
                      text="At least one special character"
                    />
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-semibold text-[#1F2937]"
                  >
                    Confirm Password
                  </label>

                  <div className="relative">
                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className={`h-13.25 w-full rounded-[13px] border bg-[#F8FAFC] px-4 pr-12 text-sm text-[#1F2937] outline-none transition-all placeholder:text-[#8A8F98] focus:bg-white focus:ring-4 focus:ring-[#A744F3]/10 ${
                        errors.confirmPassword
                          ? "border-red-400 focus:border-red-400"
                          : "border-[#DCE3ED] focus:border-accent"
                      }`}
                      {...register("confirmPassword", {
                        required: "Please confirm your password.",

                        validate: (value) =>
                          value === watch("password") ||
                          "Passwords do not match.",
                      })}
                    />

                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((value) => !value)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A8F98] transition-colors hover:text-[#31214E]"
                      aria-label={
                        showConfirmPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>

                  {errors.confirmPassword && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                {/* =================================================
                    WhatsApp
                ================================================= */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="whatsapp"
                    className="mb-2 block text-sm font-semibold text-[#1F2937]"
                  >
                    WhatsApp Number
                  </label>

                  <div className="grid grid-cols-[115px_1fr] gap-2">
                    {/* Country Code */}
                    <div className="relative">
                      <select
                        defaultValue="SA +966"
                        className="h-13.25 w-full appearance-none rounded-[13px] border border-[#DCE3ED] bg-[#F8FAFC] px-4 pr-9 text-xs text-[#374151] outline-none transition-all focus:border-accent focus:bg-white focus:ring-4 focus:ring-[#A744F3]/10"
                      >
                        <option>SA +966</option>
                        <option>EG +20</option>
                        <option>AE +971</option>
                        <option>US +1</option>
                      </select>

                      <ChevronDown
                        size={16}
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#374151]"
                      />
                    </div>

                    {/* WhatsApp Number */}
                    <input
                      id="whatsapp"
                      type="tel"
                      placeholder="501234567"
                      className={`h-13.25 w-full rounded-[13px] border bg-[#F8FAFC] px-4 text-sm text-[#1F2937] outline-none transition-all placeholder:text-[#8A8F98] focus:bg-white focus:ring-4 focus:ring-[#A744F3]/10 ${
                        errors.whatsapp
                          ? "border-red-400 focus:border-red-400"
                          : "border-[#DCE3ED] focus:border-accent"
                      }`}
                      {...register("whatsapp", {
                        required: "WhatsApp number is required.",

                        pattern: {
                          value: /^[0-9]+$/,
                          message: "WhatsApp number can only contain numbers.",
                        },

                        minLength: {
                          value: 7,
                          message: "WhatsApp number must be at least 7 digits.",
                        },

                        maxLength: {
                          value: 15,
                          message: "WhatsApp number must not exceed 15 digits.",
                        },
                      })}
                    />
                  </div>

                  {errors.whatsapp && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.whatsapp.message}
                    </p>
                  )}
                </div>

                {/* Company Name */}
                <div>
                  <label
                    htmlFor="companyName"
                    className="mb-2 block text-sm font-semibold text-[#1F2937]"
                  >
                    Company Name
                  </label>

                  <input
                    id="companyName"
                    type="text"
                    placeholder="Your company name"
                    className={`h-13.25 w-full rounded-[13px] border bg-[#F8FAFC] px-4 text-sm text-[#1F2937] outline-none transition-all placeholder:text-[#8A8F98] focus:bg-white focus:ring-4 focus:ring-[#A744F3]/10 ${
                      errors.companyName
                        ? "border-red-400 focus:border-red-400"
                        : "border-[#DCE3ED] focus:border-accent"
                    }`}
                    {...register("companyName", {
                      required: "Company name is required.",

                      maxLength: {
                        value: 200,
                        message: "Company name must not exceed 200 characters.",
                      },
                    })}
                  />

                  {errors.companyName && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.companyName.message}
                    </p>
                  )}
                </div>

                {/* Subdomain */}
                <div>
                  <label
                    htmlFor="subdomain"
                    className="mb-2 block text-sm font-semibold text-[#1F2937]"
                  >
                    Subdomain{" "}
                    <span className="text-xs font-normal">
                      (without .nexaerp.com)
                    </span>
                  </label>

                  <input
                    id="subdomain"
                    type="text"
                    placeholder="yourcompany"
                    className={`h-13.25 w-full rounded-[13px] border bg-[#F8FAFC] px-4 text-sm text-[#1F2937] outline-none transition-all placeholder:text-[#8A8F98] focus:bg-white focus:ring-4 focus:ring-[#A744F3]/10 ${
                      errors.subdomain
                        ? "border-red-400 focus:border-red-400"
                        : "border-[#DCE3ED] focus:border-accent"
                    }`}
                    {...register("subdomain", {
                      required: "Subdomain is required.",

                      minLength: {
                        value: 3,
                        message: "Subdomain must be at least 3 characters.",
                      },

                      maxLength: {
                        value: 63,
                        message: "Subdomain must not exceed 63 characters.",
                      },

                      pattern: {
                        value: /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                        message:
                          "Subdomain can only contain lowercase letters, numbers, and hyphens.",
                      },
                    })}
                  />

                  {errors.subdomain && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.subdomain.message}
                    </p>
                  )}
                </div>

                {/* Country */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="country"
                    className="mb-2 block text-sm font-semibold text-[#1F2937]"
                  >
                    Country
                  </label>

                  <div className="relative">
                    <select
                      id="country"
                      defaultValue=""
                      className={`h-13.25 w-full appearance-none rounded-[13px] border bg-[#F8FAFC] px-4 pr-10 text-sm text-[#374151] outline-none transition-all focus:bg-white focus:ring-4 focus:ring-[#A744F3]/10 ${
                        errors.country
                          ? "border-red-400 focus:border-red-400"
                          : "border-[#DCE3ED] focus:border-accent"
                      }`}
                      {...register("country", {
                        required: "Please select your country.",
                      })}
                    >
                      <option value="" disabled>
                        Select your country
                      </option>

                      <option>Saudi Arabia</option>
                      <option>Egypt</option>
                      <option>United Arab Emirates</option>
                      <option>United States</option>
                    </select>

                    <ChevronDown
                      size={17}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#374151]"
                    />
                  </div>

                  {errors.country && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.country.message}
                    </p>
                  )}
                </div>
              </div>

              {/* =================================================
                  Invitation Code
              ================================================= */}
              <div className="mt-7">
                <label className="flex cursor-pointer items-center gap-3 text-sm font-medium text-[#374151]">
                  <input
                    type="checkbox"
                    className="size-4 rounded border-[#BFC7D2] accent-accent"
                    {...register("hasInvitationCode")}
                  />

                  <span>I have an invitation code / discount coupon</span>
                </label>

                {hasInvitationCode && (
                  <div className="mt-4">
                    <input
                      type="text"
                      placeholder="Enter invitation code"
                      className={`h-13.25 w-full rounded-[13px] border bg-[#F8FAFC] px-4 text-sm text-[#1F2937] outline-none transition-all placeholder:text-[#8A8F98] focus:bg-white focus:ring-4 focus:ring-[#A744F3]/10 ${
                        errors.invitationCode
                          ? "border-red-400 focus:border-red-400"
                          : "border-[#DCE3ED] focus:border-accent"
                      }`}
                      {...register("invitationCode", {
                        validate: (value) => {
                          if (hasInvitationCode && !value.trim()) {
                            return "Invitation code is required.";
                          }

                          return true;
                        },
                      })}
                    />

                    {errors.invitationCode && (
                      <p className="mt-1.5 text-xs text-red-500">
                        {errors.invitationCode.message}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* =================================================
                  Submit
              ================================================= */}
              <button
                type="submit"
                disabled={isLoading}
                className="mt-8 h-14 w-full rounded-[13px] bg-accent px-5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(167,68,243,0.25)] transition-all duration-300 hover:bg-[#9635E2] hover:shadow-[0_10px_25px_rgba(167,68,243,0.35)] focus:outline-none focus:ring-4 focus:ring-[#A744F3]/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
};

/* =========================================================
    Password Requirement Component
========================================================= */

type PasswordRequirementProps = {
  valid: boolean;
  text: string;
};

const PasswordRequirement = ({ valid, text }: PasswordRequirementProps) => {
  return (
    <div
      className={`flex items-center gap-2 text-xs transition-colors ${
        valid ? "text-green-600" : "text-[#8A8F98]"
      }`}
    >
      {valid ? (
        <Check size={14} strokeWidth={2.5} />
      ) : (
        <X size={14} strokeWidth={2} />
      )}

      <span>{text}</span>
    </div>
  );
};

export default Register;
