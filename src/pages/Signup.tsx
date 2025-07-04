// Signup.jsx
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen px-4 flex flex-col justify-center items-center bg-white">
      <div className="w-full max-w-md">
        <Link to='/back'>
        <button className="text-xl mb-6">&larr;</button>
        </Link>

        <h2 className="text-2xl font-semibold text-center">Create Account</h2>
        <p className="text-sm text-gray-600 text-center mb-8">Join as a landlord</p>

        <form className="space-y-5">
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border rounded-md p-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="w-full border rounded-md p-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-md p-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded-md p-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-black via-purple-900 to-red-900 text-white py-3 rounded-md text-sm font-semibold"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-gray-500">
          Already have an account?{' '}
          <span className="text-blue-500 font-medium cursor-pointer">
            <Link to='/back'>
            Sign in</Link>
        </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
