import React from "react";
import { Check, X, ArrowRight } from "lucide-react";

interface Feature {
  label: string;
  available: boolean;
}

interface Plan {
  title: string;
  subtitle: string;
  price: string;
  features: Feature[];
  buttonStyle: string;
}

const plans: Plan[] = [
  {
    title: "Free",
    subtitle: "The most basic plan",
    price: "$0",
    features: [
      { label: "300 GB Storage", available: true },
      { label: "Unlimited Photos and Videos", available: true },
      { label: "Exclusive Support", available: true },
      { label: "Custom Branding Strategy", available: false },
      { label: "Free SEO Tools", available: false },
    ],
    buttonStyle: "bg-gray-600 text-white hover:bg-gray-500",
  },
  {
    title: "Basic",
    subtitle: "The most popular plan",
    price: "$29",
    features: [
      { label: "300 GB Storage", available: true },
      { label: "Unlimited Photos and Videos", available: true },
      { label: "Exclusive Support", available: true },
      { label: "Custom Branding Strategy", available: true },
      { label: "Free SEO Tools", available: false },
    ],
    buttonStyle: "bg-blue-600 text-white hover:bg-blue-500",
  },
  {
    title: "Premium",
    subtitle: "The most premium plan",
    price: "$99",
    features: [
      { label: "300 GB Storage", available: true },
      { label: "Unlimited Photos and Videos", available: true },
      { label: "Exclusive Support", available: true },
      { label: "Custom Branding Strategy", available: true },
      { label: "Free SEO Tools", available: true },
    ],
    buttonStyle: "bg-gray-600 text-white hover:bg-gray-500",
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-28 px-6 text-white bg-gradient-to-r from-[#0f172a] to-[#1e293b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 text-transparent bg-clip-text tracking-tight">
            Affordable Pricing With <br /> Simple Plans
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. <br />
            Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#111827] to-[#1e293b] border border-white/10 rounded-3xl p-10 shadow-xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
            >
              <div>
                <h3 className="text-2xl font-bold mb-1">{plan.title}</h3>
                <p className="text-base text-gray-400 mb-6">{plan.subtitle}</p>

                <div className="text-5xl font-extrabold mb-4">
                  {plan.price}
                  <span className="text-lg font-medium text-gray-400">
                    /month
                  </span>
                </div>
                <p className="text-base text-gray-400 mb-10 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec
                  dignissim convallis.
                </p>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg">
                      {feature.available ? (
                        <Check className="text-green-400 w-6 h-6" />
                      ) : (
                        <X className="text-gray-500 w-6 h-6" />
                      )}
                      <span
                        className={feature.available ? "" : "text-gray-500"}
                      >
                        {feature.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition ${plan.buttonStyle}`}
              >
                Join This Plan <ArrowRight size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
