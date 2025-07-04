

const Change = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-2 bg-gray-50 font-sans">
      <div className="w-full mt-14  p-4">
        <div className="flex items-center mb-0 ">
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
          <h1 className="text-3xl text-center font-bold text-gray-800">
            Forgot password
          </h1>
        </div>

        <p className="text-sm text-gray-600 p-10 text-center mb-0 leading-relaxed">
          Enter your phone number or email to receive a reset code
        </p>

        <div className="w-full mb-6">
          <label htmlFor="emailOrPhone" className="block text-sm font-bold text-gray-700 mb-2">
            Enter email or phone number
          </label>
          <input
            type="text"
            id="emailOrPhone"
            placeholder="Enter your email or phone number"
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          className="w-full py-3 rounded-lg text-lg font-bold text-white shadow-md transition-all duration-300
                    bg-gradient-to-r from-[#0d1b2a] via-[#4b0082] to-[#8b0000]"
        >
          Send OTP
        </button>
      </div>
    </div>
  );
};

export default Change;