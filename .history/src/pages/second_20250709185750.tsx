import { Link } from "react-router-dom";
import React, { useState } from 'react'; // Import useState

const Second = () => {
  // State for each input field
  const [propertyTitle, setPropertyTitle] = useState<string>("2-bedroom flat in tanke");
  const [price, setPrice] = useState<string>("250,000/year");
  const [propertyType, setPropertyType] = useState<string>("Bungalow");
  const [customPropertyType, setCustomPropertyType] = useState<string>("");
  const [showCustomPropertyTypeInput, setShowCustomPropertyTypeInput] = useState<boolean>(false);
  const [paymentPlan, setPaymentPlan] = useState<string>("Yearly");
  const [customPaymentPlan, setCustomPaymentPlan] = useState<string>("");
  const [showCustomPaymentPlanInput, setShowCustomPaymentPlanInput] = useState<boolean>(false);
  const [location, setLocation] = useState<string>("Tanke Ilorin");
  const [description, setDescription] = useState<string>("Spacious 2 bedroom flat with water and light");

  // Handler for Property Type dropdown
  const handlePropertyTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setPropertyType(value);
    if (value === "more") {
      setShowCustomPropertyTypeInput(true);
      setCustomPropertyType(""); // Clear custom input when "More" is selected
    } else {
      setShowCustomPropertyTypeInput(false);
      setCustomPropertyType(""); // Clear custom input if another option is chosen
    }
  };

  // Handler for Payment Plan dropdown
  const handlePaymentPlanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setPaymentPlan(value);
    if (value === "more") {
      setShowCustomPaymentPlanInput(true);
      setCustomPaymentPlan(""); // Clear custom input when "More" is selected
    } else {
      setShowCustomPaymentPlanInput(false);
      setCustomPaymentPlan(""); // Clear custom input if another option is chosen
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-8">
      {/* Header */}
      <div className="flex items-center p-5 bg-white shadow-sm">
        <Link to="/first" className="flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-4 cursor-pointer text-gray-700"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <h1 className="text-xl font-bold text-gray-800">
          Add new listing
        </h1>
      </div>

      {/* Property Image */}
      <div className="p-5">
        <div className="relative w-full h-48 rounded-lg overflow-hidden shadow-md">
          <img
            src="/bed 2.png" // Placeholder image
            alt="Property"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Verified Agent
          </div>
        </div>
      </div>

      {/* Form Fields */}
      <div className="px-5 space-y-6">
        {/* Property Title */}
        <div>
          <label htmlFor="propertyTitle" className="block text-base font-semibold text-gray-700 mb-2">
            Property title
          </label>
          <input
            type="text"
            id="propertyTitle"
            value={propertyTitle}
            onChange={(e) => setPropertyTitle(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block text-base font-semibold text-gray-700 mb-2">
            Price
          </label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Property Type */}
        <div>
          <label htmlFor="propertyType" className="block text-base font-semibold text-gray-700 mb-2">
            Property type
          </label>
          <div className="relative">
            <select
              id="propertyType"
              className="appearance-none w-full px-4 py-3 border border-gray-300 rounded-md text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white pr-10"
              value={propertyType}
              onChange={handlePropertyTypeChange}
            >
              <option value="Bungalow">Bungalow</option>
              <option value="2 bedroom">2 bedroom</option>
              <option value="duplex">Duplex</option>
              <option value="room and palor">Room and Parlor</option>
              <option value="4 bedroom apartment">4 Bedroom Apartment</option>
              <option value="more">More...</option> {/* Added "More" option */}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
              </svg>
            </div>
          </div>
          {/* Custom input field for "More" property type */}
          {showCustomPropertyTypeInput && (
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 mt-3"
              placeholder="Enter custom property type"
              value={customPropertyType}
              onChange={(e) => setCustomPropertyType(e.target.value)}
            />
          )}
        </div>

        {/* Payment Plan */}
        <div>
          <label htmlFor="paymentPlan" className="block text-base font-semibold text-gray-700 mb-2">
            Payment plan
          </label>
          <div className="relative">
            <select
              id="paymentPlan"
              className="appearance-none w-full px-4 py-3 border border-gray-300 rounded-md text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white pr-10"
              value={paymentPlan}
              onChange={handlePaymentPlanChange}
            >
              <option value="Yearly">Yearly</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="biannually">Bi-annually</option>
              <option value="more">More...</option> {/* Added "More" option */}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
              </svg>
            </div>
          </div>
          {/* Custom input field for "More" payment plan */}
          {showCustomPaymentPlanInput && (
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 mt-3"
              placeholder="Enter custom payment plan"
              value={customPaymentPlan}
              onChange={(e) => setCustomPaymentPlan(e.target.value)}
            />
          )}
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-base font-semibold text-gray-700 mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-base font-semibold text-gray-700 mb-2">
            Description
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
<Link to="/third">
        <button
          className="w-full py-4 rounded-lg text-lg font-bold text-white shadow-md transition-all duration-300 mb-4
                     bg-gradient-to-r from-[#0d1b2a] via-[#4b0082] to-[#8b0000] hover:from-purple-900 hover:to-purple-600"
        >
          
            Submit
        </button>
        
          </Link>
      </div>
    </div>
  );
};

export default Second;