import React from "react";

const plans = [
  {
    name: "Free",
    price: "₹0.00",
    description: "Price is inclusive of 18% GST",
    buttonText: "Activated",
    active: false,
    // active: true,
  },
  {
    name: "Monthly",
    price: "₹1999.00",
    description: "Price is inclusive of 18% GST",
    buttonText: "Choose Plan",
    active: false,
  },
  {
    name: "Yearly",
    price: "₹17999.00",
    description: "Price is inclusive of 18% GST",
    buttonText: "Choose Plan",
    active: false,
  },
];

const SubscriptionPlan = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <p className="mt-2 text-lg">
          Unbiased Actionable Research driven by Logic & Probabilities
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 ${
              plan.active ? "bg-gray-100 text-gray-600" : "bg-white border"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
            <p className="text-3xl font-bold mb-4">{plan.price}</p>
            <p className="text-sm mb-6">{plan.description}</p>
            {/* <button
              className={`w-full py-2 rounded-lg transition-colors duration-300 ${
                plan.active
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              } font-semibold`}
              disabled={plan.active}
            >
              {plan.buttonText}
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlan;
