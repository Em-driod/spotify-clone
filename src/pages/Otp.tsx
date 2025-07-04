import { Link } from "react-router-dom";

const Otp = () => {
  return (
    <div className="min-h-screen flex flex-col items-center  font-sans">
      <div className="w-full p-8">
        <div className="flex items-center mb-8">
         < Link to="/back" >
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
          <h1 className="text-2xl font-bold text-gray-800">
            Verify code
          </h1>
        </div>

        <p className="text-sm text-gray-600 text-center mb-8 leading-relaxed">
          Enter the 6-digit code sent to your email
        </p>

        <div className="w-full mb-6">
          <input
            type="text"
            id="code"
            placeholder="Enter 6-digit code"
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex justify-between mb-8 space-x-3">
          {/* These are just visual placeholders based on the image,
              for actual OTP input, you'd typically have one input field
              or handle separate inputs with state. */}
          <input
            type="text"
            maxLength={1}
            className="w-1/5 aspect-square text-center text-2xl font-bold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-100 text-gray-500"
            value="5"
            readOnly // Make it readOnly as it's a visual clone
          />
          <input
            type="text"
            maxLength={1}
            className="w-1/5 aspect-square text-center text-2xl font-bold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-100 text-gray-500"
            value="4"
            readOnly
          />
          <input
            type="text"
            maxLength={1}
            className="w-1/5 aspect-square text-center text-2xl font-bold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-100 text-gray-500"
            value="8"
            readOnly
          />
          <input
            type="text"
            maxLength={1}
            className="w-1/5 aspect-square text-center text-2xl font-bold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-100 text-gray-500"
            value="4"
            readOnly
          />
          <input
            type="text"
            maxLength={1}
            className="w-1/5 aspect-square text-center text-2xl font-bold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-100 text-gray-500"
            value="2"
            readOnly
          />
        </div>

        <button
          className="w-full py-4 rounded-lg text-lg font-bold text-white shadow-md transition-all duration-300 mb-4
                    bg-gradient-to-r from-[#0d1b2a] via-[#4b0082] to-[#8b0000] hover:from-purple-900 hover:to-purple-600"
        >
          Verify
        </button>

        <p className="text-sm text-gray-600 text-center">
          Don't get the code?{' '}
          <a href="#" className="text-purple-600 font-semibold hover:underline">
            Resend
          </a>
        </p>
      </div>
    </div>
  );
};

export default Otp;