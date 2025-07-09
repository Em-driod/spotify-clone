
import { Link } from "react-router-dom";
const First = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20"> {/* Added pb-20 for bottom navigation */}
      {/* Top Section */}
      <div className="bg-gradient-to-r from-[#0d1b2a] via-[#4b0082] to-[#8b0000] text-white p-5 pb-8 relative overflow-hidden rounded-b-lg">
        {/* Decorative dots based on the image */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.1) 1%, transparent 10%), radial-gradient(circle at 90% 80%, rgba(255,255,255,0.1) 1%, transparent 10%)',
          backgroundSize: '20px 20px',
        }}></div>

        <div className="relative z-10">
          <p className="text-xl font-bold mb-1 flex items-center">
            Welcome back! <span role="img" aria-label="waving hand" className="ml-2 text-2xl">👋</span>
          </p>
          <p className="text-sm opacity-90">
            Manage your property listings
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-5 -mt-6 relative z-20">
        <div className="bg-white rounded-lg shadow-md flex items-center p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search by location, price, or property type"
            className="flex-grow text-sm outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-5  mt-6 space-y-4">
        <Link to="/second">
          <button className="w-full flex items-center justify-center p-4 bg-green-800 text-white rounded-lg shadow-md hover:bg-green-700 transition-colors mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
          </svg>
          Post Property
        </button>
              </Link>
        <button className="w-full flex items-center justify-center p-4 bg-blue-800 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 4v-4z"
            />
          </svg>
          Messages
        </button>
      </div>

      {/* Featured Properties */}
      <div className="px-5 mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Featured Properties</h2>
          <a href="#" className="text-sm text-blue-600 font-semibold hover:underline">View all</a>
        </div>

        {/* Property Card */}
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
          <div className="relative w-24 h-24 flex-shrink-0 mr-4">
            <img
              src="/bed.png"
              alt="Property"
              className="w-full h-full object-cover rounded-md"
            />
            {/* The "100 x 100" overlay is for visual cloning, not functional */}
            <div className="absolute bottom-0 left-0 bg-blue-600 text-white text-xs px-1 py-0.5 rounded-br-md rounded-tl-md">
              100 × 100
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-base font-semibold text-gray-800 flex items-center">
              2-Bedroom flat in Ilorin.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </h3>
            <p className="text-sm text-gray-700 font-bold mt-1">₦ 450,000/year</p>
            <p className="text-xs text-gray-500 mt-1">Ilorin, tanke area.</p>
            <p className="text-xs text-green-600 font-medium mt-1">Approved</p>
            <div className="flex justify-end space-x-3 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Chats */}
      <div className="px-5 mt-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Recent chats</h2>
        <div className="space-y-4">
          {/* Chat Item 1 */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0 mr-3"></div> {/* Placeholder for avatar */}
            <div>
              <p className="font-semibold text-gray-800">Olayinka:</p>
              <p className="text-sm text-gray-600">Hello, I am interested in your listing...</p>
            </div>
          </div>
          {/* Chat Item 2 */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0 mr-3"></div> {/* Placeholder for avatar */}
            <div>
              <p className="font-semibold text-gray-800">Olamide:</p>
              <p className="text-sm text-gray-600">Hello, I am interested in your listing...</p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <Link to='/Manage' >
          <button className="px-6 py-3 bg-purple-900 text-white rounded-lg shadow-md hover:bg-purple-800 transition-colors">
            View All
          </button>
          </Link>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg flex justify-around items-center h-16">
        <button className="flex flex-col items-center text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="text-xs mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span className="text-xs mt-1">Search</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 4v-4z"
            />
          </svg>
          <span className="text-xs mt-1">Messages</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default First;