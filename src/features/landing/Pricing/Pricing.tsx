import { useState } from "react";
import { Check, ChevronDown, BriefcaseBusiness, Rocket } from "lucide-react";

import "./Pricing.css";

type BillingCycle = "monthly" | "yearly";

type Plan = {
  name: string;
  monthly: number;
  yearly: number;
};

type Feature = {
  name: string;
  values: {
    basic: string | boolean;
    professional: string | boolean;
    enterprise: string | boolean;
  };
};

type FeatureGroup = {
  name: string;
  features: Feature[];
};

/* ==================== Categories ==================== */

const categories = [
  "Retail",
  "Manufacturing",
  "Lms",
  "Healthcare",
  "Realestate",
];

/* ==================== Pricing By Category ==================== */

const pricingByCategory: Record<string, Plan[]> = {
  Retail: [
    {
      name: "Basic",
      monthly: 212,
      yearly: 1999,
    },
    {
      name: "Professional",
      monthly: 424,
      yearly: 3999,
    },
    {
      name: "Enterprise",
      monthly: 749,
      yearly: 6999,
    },
  ],

  Manufacturing: [
    {
      name: "Basic",
      monthly: 300,
      yearly: 2799,
    },
    {
      name: "Professional",
      monthly: 550,
      yearly: 4999,
    },
    {
      name: "Enterprise",
      monthly: 950,
      yearly: 8999,
    },
  ],

  Lms: [
    {
      name: "Basic",
      monthly: 250,
      yearly: 2299,
    },
    {
      name: "Professional",
      monthly: 500,
      yearly: 4499,
    },
    {
      name: "Enterprise",
      monthly: 850,
      yearly: 7999,
    },
  ],

  Healthcare: [
    {
      name: "Basic",
      monthly: 350,
      yearly: 3199,
    },
    {
      name: "Professional",
      monthly: 650,
      yearly: 5999,
    },
    {
      name: "Enterprise",
      monthly: 1100,
      yearly: 9999,
    },
  ],

  Realestate: [
    {
      name: "Basic",
      monthly: 280,
      yearly: 2599,
    },
    {
      name: "Professional",
      monthly: 580,
      yearly: 5299,
    },
    {
      name: "Enterprise",
      monthly: 1000,
      yearly: 8999,
    },
  ],
};

/* ==================== Features ==================== */

const featureGroups: FeatureGroup[] = [
  {
    name: "Permissions",
    features: [
      {
        name: "User Management",
        values: {
          basic: "3 مستخدمين",
          professional: "5 مستخدمين",
          enterprise: "8 مستخدمين",
        },
      },
      {
        name: "Storage Capacity",
        values: {
          basic: "10 جيجا",
          professional: "15 جيجا",
          enterprise: "20 جيجا",
        },
      },
      {
        name: "Backup Management",
        values: {
          basic: "شهري",
          professional: "اسبوعي",
          enterprise: "يومي",
        },
      },
      {
        name: "Technical Support",
        values: {
          basic: "هاتف + واتس اب + بريد الكتروني",
          professional: "هاتف + واتس اب + بريد الكتروني",
          enterprise: "متاح 24/7",
        },
      },
    ],
  },

  {
    name: "Purchasing management",
    features: [
      {
        name: "Suppliers",
        values: {
          basic: true,
          professional: true,
          enterprise: true,
        },
      },
      {
        name: "Requests for Quotation (RFQs)",
        values: {
          basic: true,
          professional: true,
          enterprise: true,
        },
      },
      {
        name: "Purchase Orders",
        values: {
          basic: true,
          professional: true,
          enterprise: true,
        },
      },
      {
        name: "Purchase Invoices",
        values: {
          basic: true,
          professional: true,
          enterprise: true,
        },
      },
    ],
  },

  {
    name: "Sales Management",
    features: [
      {
        name: "Customers",
        values: {
          basic: true,
          professional: true,
          enterprise: true,
        },
      },
      {
        name: "Quotations",
        values: {
          basic: true,
          professional: true,
          enterprise: true,
        },
      },
      {
        name: "Sales Orders",
        values: {
          basic: true,
          professional: true,
          enterprise: true,
        },
      },
      {
        name: "Sales Invoices",
        values: {
          basic: true,
          professional: true,
          enterprise: true,
        },
      },
    ],
  },
];

/* ==================== Pricing Component ==================== */

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const [activeCategory, setActiveCategory] = useState("Retail");

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    Permissions: true,
    "Purchasing management": true,
    "Sales Management": true,
  });

  /* ==================== Toggle Feature Group ==================== */

  const toggleGroup = (groupName: string) => {
    setOpenGroups((previous) => ({
      ...previous,
      [groupName]: !previous[groupName],
    }));
  };

  /* ==================== Current Plans ==================== */

  const currentPlans =
    pricingByCategory[activeCategory] || pricingByCategory.Retail;

  /* ==================== Get Price ==================== */

  const getPrice = (plan: Plan) => {
    return billingCycle === "monthly" ? plan.monthly : plan.yearly;
  };

  /* ==================== Plan Key ==================== */

  const getPlanKey = (planName: string) => {
    return planName.toLowerCase() as "basic" | "professional" | "enterprise";
  };

  return (
    <section className="pricing-section" id="pricing">
      {/* ==================== Pricing Intro ==================== */}

      <div className="pricing-intro">
        <span className="pricing-eyebrow">Flexible Pricing</span>

        <h2>
          Choose the Right Plan
          <span> for Your Business</span>
        </h2>

        <p>Flexible plans designed to support your business as it grows.</p>
      </div>

      {/* ==================== Categories ==================== */}

      <div className="pricing-categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`pricing-category ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* ================================================== */}
      {/* ==================== DESKTOP ==================== */}
      {/* ================================================== */}

      <div className="pricing-desktop">
        <div className="pricing-table">
          {/* ==================== Pricing Header ==================== */}

          <div className="pricing-header">
            {/* Billing */}

            <div className="billing-cell">
              <div className="billing-toggle">
                <button
                  type="button"
                  className={
                    billingCycle === "monthly"
                      ? "billing-option active"
                      : "billing-option"
                  }
                  onClick={() => setBillingCycle("monthly")}
                >
                  Monthly
                </button>

                <button
                  type="button"
                  className={`billing-switch ${
                    billingCycle === "yearly" ? "yearly" : ""
                  }`}
                  onClick={() =>
                    setBillingCycle(
                      billingCycle === "monthly" ? "yearly" : "monthly",
                    )
                  }
                  aria-label="Toggle billing cycle"
                >
                  <span className="billing-switch-knob" />
                </button>

                <button
                  type="button"
                  className={
                    billingCycle === "yearly"
                      ? "billing-option active"
                      : "billing-option"
                  }
                  onClick={() => setBillingCycle("yearly")}
                >
                  Yearly
                </button>
              </div>
            </div>

            {/* Plans */}

            {currentPlans.map((plan) => (
              <div className="plan-header" key={plan.name}>
                <h3>{plan.name}</h3>

                <div className="plan-price">
                  <span>{getPrice(plan)}</span>
                  <small>﷼</small>
                </div>

                <button type="button" className="trial-button">
                  <Rocket size={14} />
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>

          {/* ==================== Feature Groups ==================== */}

          {featureGroups.map((group) => {
            const isOpen = openGroups[group.name];

            return (
              <div className="feature-group" key={group.name}>
                <button
                  type="button"
                  className="feature-group-header"
                  onClick={() => toggleGroup(group.name)}
                  aria-expanded={isOpen}
                >
                  <span className="feature-group-title">
                    <BriefcaseBusiness size={15} />

                    {group.name}
                  </span>

                  <ChevronDown size={17} className={isOpen ? "rotate" : ""} />
                </button>

                {isOpen && (
                  <div className="feature-rows">
                    {group.features.map((feature) => (
                      <div className="feature-row" key={feature.name}>
                        <div className="feature-name">{feature.name}</div>

                        <div className="feature-value">
                          <FeatureValue value={feature.values.basic} />
                        </div>

                        <div className="feature-value">
                          <FeatureValue value={feature.values.professional} />
                        </div>

                        <div className="feature-value">
                          <FeatureValue value={feature.values.enterprise} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ================================================== */}
      {/* ==================== MOBILE ==================== */}
      {/* ================================================== */}

      <div className="pricing-mobile">
        {/* ==================== Billing ==================== */}

        <div className="mobile-billing">
          <button
            type="button"
            className={
              billingCycle === "monthly"
                ? "billing-option active"
                : "billing-option"
            }
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>

          <button
            type="button"
            className={`billing-switch ${
              billingCycle === "yearly" ? "yearly" : ""
            }`}
            onClick={() =>
              setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
            }
            aria-label="Toggle billing cycle"
          >
            <span className="billing-switch-knob" />
          </button>

          <button
            type="button"
            className={
              billingCycle === "yearly"
                ? "billing-option active"
                : "billing-option"
            }
            onClick={() => setBillingCycle("yearly")}
          >
            Yearly
          </button>
        </div>

        {/* ==================== Mobile Plans ==================== */}

        <div className="mobile-plans">
          {currentPlans.map((plan) => {
            const planKey = getPlanKey(plan.name);

            return (
              <article className="mobile-plan" key={plan.name}>
                {/* Plan Header */}

                <div className="mobile-plan-header">
                  <div>
                    <span className="mobile-plan-label">NexaERP Plan</span>

                    <h3>{plan.name}</h3>
                  </div>

                  <div className="mobile-plan-price">
                    <span>{getPrice(plan)}</span>

                    <small>﷼</small>
                  </div>
                </div>

                {/* Trial */}

                <button type="button" className="mobile-trial-button">
                  <Rocket size={15} />
                  Start Free Trial
                </button>

                {/* Features */}

                <div className="mobile-plan-features">
                  {featureGroups.map((group) => {
                    const isOpen = openGroups[group.name];

                    return (
                      <div className="mobile-feature-group" key={group.name}>
                        <button
                          type="button"
                          className="mobile-feature-group-header"
                          onClick={() => toggleGroup(group.name)}
                          aria-expanded={isOpen}
                        >
                          <span>
                            <BriefcaseBusiness size={15} />

                            {group.name}
                          </span>

                          <ChevronDown
                            size={17}
                            className={isOpen ? "rotate" : ""}
                          />
                        </button>

                        {isOpen && (
                          <div className="mobile-feature-list">
                            {group.features.map((feature) => (
                              <div
                                className="mobile-feature-item"
                                key={feature.name}
                              >
                                <span className="mobile-feature-name">
                                  {feature.name}
                                </span>

                                <span className="mobile-feature-value">
                                  <FeatureValue
                                    value={feature.values[planKey]}
                                  />
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ==================== Feature Value ==================== */

type FeatureValueProps = {
  value: string | boolean;
};

const FeatureValue = ({ value }: FeatureValueProps) => {
  if (value === true) {
    return <Check size={17} strokeWidth={2.5} className="feature-check" />;
  }

  return <span>{value}</span>;
};

export default Pricing;
