import { Link } from 'react-router-dom';
import {  IoIosArrowDropright } from 'react-icons/io';


import { useNavigate } from 'react-router-dom';

const CustomerProfile = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 relative">
      {/* Logout Button */}
      <button
        onClick={() => navigate('/welcome')}
        className="absolute left-4 top-4 flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full shadow hover:bg-red-600 transition-colors z-20"
        title="Logout"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m-6-3h12m0 0l-3-3m3 3l-3 3" />
        </svg>
        Logout
      </button> 
     
      <div className="w-full max-w-md bg-white  overflow-hidden">
        {/* Profile Header */}
        <div className="relative h-32 bg-gradient-to-r from-pink-500 to-indigo-600">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
              <img
                src="https://api.dicebear.com/7.x/initials/svg?seed=Ab" // Placeholder for user initial avatar
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="text-center p-6 pt-16">
           <Link className='left-20' to='/Customer'>
          <IoIosArrowDropright size={44} className="text-gray-600 ml-60 mr-4 cursor-pointer" />
        </Link>
          <h2 className="text-2xl font-bold text-gray-800">Abeki</h2>
          <p className="text-gray-600">abeki@example.com</p>
          <p className="text-gray-600">+234123-4567</p>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300">
            Edit Profile
          </button>
        </div>

        <hr className="my-4 border-gray-200" />

        {/* Profile Sections */}
        <div className="p-6 space-y-6">
          {/* Order History */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Order History</h3>
            <ul className="space-y-2">
              <li className="flex justify-between items-center text-gray-700">
                <span> Self contain in Ilorin.</span>
                <span className="font-medium text-green-600">₦234,059.99</span>
              </li>
              <li className="flex justify-between items-center text-gray-700">
                <span> FLAT in Tanke.</span>
                <span className="font-medium text-green-600">₦240,000.50</span>
              </li>
              <li className="flex justify-between items-center text-gray-700">
                <span> A room and parlour in Ilorin.</span>
                <span className="font-medium text-green-600">₦120,000.00</span>
              </li>
            </ul>
            <button className="mt-4 text-blue-500 hover:underline">View All Orders</button>
          </div>

          {/* Shipping Addresses */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Shipping Addresses</h3>
            <ul className="space-y-2">
              <li className="text-gray-700">
                <p className="font-medium">Home</p>
                <p>123 asadam , ilorin</p>
              </li>
              <li className="text-gray-700">
                <p className="font-medium">Work</p>
                <p>Product manager</p>
              </li>
            </ul>
            <button className="mt-4 text-blue-500 hover:underline">Manage Addresses</button>
          </div>

          {/* Payment Methods */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Payment Methods</h3>
            <ul className="space-y-2">
              <li className="flex justify-between items-center text-gray-700">
                <span>Visa ending in **** 1234</span>
                <span className="text-sm text-gray-500">Exp. 12/26</span>
              </li>
              <li className="flex justify-between items-center text-gray-700">
                <span>Mastercard ending in **** 5678</span>
                <span className="text-sm text-gray-500">Exp. 08/25</span>
              </li>
            </ul>
            <button className="mt-4 text-blue-500 hover:underline">Manage Payment Methods</button>
          </div>

          {/* Settings/Preferences (Optional) */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Preferences</h3>
            <ul className="space-y-2">
              <li className="flex justify-between items-center text-gray-700">
                <span>Notifications</span>
                <label htmlFor="toggle-notifications" className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input type="checkbox" id="toggle-notifications" className="sr-only" defaultChecked />
                    <div className="block bg-gray-300 w-10 h-6 rounded-full"></div>
                    <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform"></div>
                  </div>
                </label>
              </li>
              <li className="flex justify-between items-center text-gray-700">
                <span>Dark Mode</span>
                <label htmlFor="toggle-darkmode" className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input type="checkbox" id="toggle-darkmode" className="sr-only" />
                    <div className="block bg-gray-300 w-10 h-6 rounded-full"></div>
                    <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform"></div>
                  </div>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;