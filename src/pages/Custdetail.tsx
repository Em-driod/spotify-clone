
import { Link } from "react-router-dom";
const Custdetail = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-4">
      {/* Header */}
      <div className="w-full max-w-md flex items-center justify-start px-4 mb-4">
        <Link to="/Customer">
          <span className="text-2xl font-bold text-gray-800 cursor-pointer mr-4">&#8592;</span>
        </Link>
        <h2 className="text-xl font-semibold text-gray-800">Property details</h2>
      </div>

      {/* Property Image */}
      <div className="w-full max-w-md rounded-lg overflow-hidden shadow-md mb-6">
        <img
          src="/bed1.png" // Replace with your actual image URL
          alt="Property"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Property Information */}
      <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-md mb-6">
        <p className="text-lg font-medium text-gray-800 mb-1">2 bedroom flat</p>
        <p className="text-sm text-gray-600 mb-1">Tanko Ilorin</p>
        <p className="text-lg font-semibold text-gray-800 mb-1">300,000 per year</p>
        <p className="text-sm text-gray-600 mb-2">Apartment</p>
        <p className="text-sm text-gray-700 leading-relaxed">
          Spacious and modern 2 bedroom apartment with 2 bathrooms, kitchen and balcony
        </p>
      </div>

      {/* Contact Card */}
      <div className="w-full max-w-md bg-gradient-to-r from-[#0d1b2a] via-[#4b0082] to-[#8b0000] text-white p-4 rounded-lg shadow-md flex items-center mb-6">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0 mr-4">
          {/* Avatar placeholder - you can put an image here */}
        </div>
        <div>
          <p className="font-semibold text-lg">Agent Mide or Landlord Musa</p>
          <p className="text-sm">+2348065018165</p>
          <p className="text-sm">dewale@gmail.com</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full max-w-md flex flex-col space-y-3 px-4">
        <button className="w-full bg-gradient-to-r from-[#0d1b2a] via-[#4b0082] to-[#8b0000] text-white py-3 rounded-lg font-semibold text-lg hover:bg-indigo-800 transition-colors duration-200">
          Chat now
        </button>
        <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold text-lg hover:bg-gray-300 transition-colors duration-200">
          Report listing
        </button>
      </div>
    </div>
  );
};

export default Custdetail;