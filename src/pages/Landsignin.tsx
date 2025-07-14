
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Landsignin = () => {
  return (
    <div className="min-h-screen flex flex-col px-6 py-8 bg-white text-black">
      {/* Back Arrow */}
      <Link to="/welcome" className="mb-6">
        <FaArrowLeft className="text-xl cursor-pointer" />
      </Link>
   

      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Welcome back !</h1>
        <p className="text-sm text-gray-600 mt-1">Please enter your details.</p>
      </div>

      {/* Form */}
      <form className="flex flex-col space-y-5">
        {/* Email */}
        <div>
          <label className="block mb-2 font-medium text-sm">
            Email Address/phone number
          </label>
          <input
            type="text"
            placeholder="Enter your email/phone number"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-2 font-medium text-sm">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
          />
        </div>

        {/* Forgot Password */}
        <div className="text-right text-sm text-gray-500 -mt-2">
            <Link to="/forget">
          <button className="hover:underline">Forgot Password?</button>
            </Link>
        </div>

        {/* Sign In Button */}
        <Link to="/LandlordDashboard">
        <button
          type="submit"
          className="mt-4 py-3 px-32 ml-5 rounded-md text-white text-sm font-semibold"
          style={{
              background: 'linear-gradient(to right, #0d1b2a, #4b0082, #8b0000)',
            }}
            >
                
          Sign In
          
        </button>
            </Link>
      </form>

      {/* Sign Up */}
      <div className="text-center mt-6 text-sm">
        Don’t have an account?{' '}
        <button className="text-blue-600 hover:underline font-medium">
          <Link to="/landsignup">
            Sign up
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Landsignin;
