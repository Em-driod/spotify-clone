import { Link } from "react-router-dom";

const Third = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 font-sans p-5">
      <div className="flex flex-col items-center text-center">
        {/* Checkmark Icon */}
        <div className="mb-6">
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4B0082" // Deep purple color
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-check-circle"
            style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-8.66"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>

        {/* Listing Submitted Text */}
        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          Listing submitted
        </h1>

        {/* Description Text */}
        <p className="text-sm text-gray-600 mb-8 max-w-xs">
          Your listing was submitted successfully and will be reviewed by an admin shortly.
        </p>

        {/* Go to manage listing Button */}
        <Link to='/manage'>
        <button
          className="w-full max-w-sm py-4 px-36 rounded-lg text-lg font-bold text-white shadow-md transition-all duration-300 mb-4
          bg-gradient-to-r from-[#0d1b2a] via-[#4b0082] to-[#8b0000] hover:from-purple-900 hover:to-purple-600"
          >
          Go to manage listing
        </button>
          </Link>

        {/* Back to dashboard Link */}
        <Link to='/First'>
        <p
         
         className="text-purple-700 font-semibold text-base hover:underline"
         >
          Back to dashboard
        </p>
          </Link>
      </div>
    </div>
  );
};

export default Third;