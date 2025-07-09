
import { HiOutlineHome, HiOutlineUser, HiOutlineOfficeBuilding, HiOutlineKey } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      {/* Logo */}
      <div className="bg-gradient-to-tr from-purple-900 to-black rounded-full p-4 mb-6">
        <HiOutlineHome className="text-white text-3xl" />
      </div>

      {/* Welcome Text */}
      <h1 className="text-lg font-medium">Welcome to Spacefinder NG</h1>
      <p className="text-sm text-gray-500 mb-8">How would you like to use our platform?</p>

      {/* Options */}
      <div className="w-full max-w-xs space-y-4">
        <button className="w-full border border-blue-400 rounded-xl p-4 flex items-center gap-3 hover:bg-blue-50 transition">
          <HiOutlineUser className="text-blue-500 text-xl" />
          <div className="text-left">
            <Link to="/back" >
            <p className="text-sm font-semibold text-black">I'm looking for a property</p>
            <p className="text-xs text-gray-500">Find your next home</p>
            </Link>
          </div>
        </button>
<Link to="/back">
        <button className="w-full border border-green-400 rounded-xl p-4 flex items-center gap-3 hover:bg-green-50 transition">
          <HiOutlineOfficeBuilding className="text-green-500 text-xl" />
          <div className="text-left">
            
              <p className="text-sm font-semibold text-black">I'm a Real Estate Agent</p>
              <p className="text-xs text-gray-500">List and manage properties</p>
           
          </div>
           
        </button>
         </Link>
 <Link to="/back">
        <button className="w-full border border-orange-400 rounded-xl p-4 flex items-center gap-3 hover:bg-orange-50 transition">
          <HiOutlineKey className="text-orange-500 text-xl" />
          <div className="text-left">
           
              <p className="text-sm font-semibold text-black">I'm a Landlord</p>
              <p className="text-xs text-gray-500">Rent out my properties</p>
          
          </div>
        </button>
          </Link>
      </div>

      {/* Sign in */}
      <p className="text-xs text-gray-500 mt-2 ml-56">
        <Link to="/back">
          <span className="text-blue-600 cursor-pointer hover:underline">Sign in</span>
        </Link>
      </p>
    </div>
  );
};

export default Welcome;
