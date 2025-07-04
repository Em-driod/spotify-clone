


const Fourth = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-4">
      {/* Header */}
      <div className="flex items-center p-5 bg-white shadow-sm">
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
        <h1 className="text-xl font-bold text-gray-800">
          Manage listing
        </h1>
      </div>

      {/* Action Buttons (Search and All listings) */}
      <div className="flex p-5 space-x-3">
        <button
          className="flex-1 py-3 px-4 rounded-lg text-white font-semibold
                     bg-gradient-to-r from-[#0d1b2a] via-[#4b0082] to-[#8b0000] hover:from-purple-900 hover:to-purple-600"
        >
          Search listings...
        </button>
        <div className="relative flex-1">
          <select
            className="appearance-none w-full py-3 px-4 rounded-lg text-white font-semibold pr-10
                        bg-gradient-to-r from-[#0d1b2a] via-[#4b0082] to-[#8b0000] hover:from-purple-900 hover:to-purple-600"
          >
            <option className="bg-purple-800" value="all">All listings</option>
            {/* Add more options here if needed */}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white">
            <svg
              className="fill-current h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Listing Cards */}
      <div className="px-5 space-y-4">
        {/* Listing Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
          <div className="relative w-24 h-24 flex-shrink-0 mr-4">
            <img
              src="https://via.placeholder.com/100x100?text=Listing+1"
              alt="Listing"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute top-1 left-1 bg-green-500 text-white text-xs px-1 py-0.5 rounded-full">
              Verified
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-base font-semibold text-gray-800 flex items-center justify-between">
              2-Bedroom Apartment in Ilorin.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 ml-2"
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

        {/* Listing Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
          <div className="relative w-24 h-24 flex-shrink-0 mr-4">
            <img
              src="https://via.placeholder.com/100x100?text=Listing+2"
              alt="Listing"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute top-1 left-1 bg-green-500 text-white text-xs px-1 py-0.5 rounded-full">
              Verified
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-base font-semibold text-gray-800 flex items-center justify-between">
              2-Bedroom Duplex in Ilorin.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </h3>
            <p className="text-sm text-gray-700 font-bold mt-1">₦ 600,000/year</p>
            <p className="text-xs text-gray-500 mt-1">Ilorin, Agric estate.</p>
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

        {/* Listing Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
          <div className="relative w-24 h-24 flex-shrink-0 mr-4">
            <img
              src="https://via.placeholder.com/100x100?text=Listing+3"
              alt="Listing"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute top-1 left-1 bg-green-500 text-white text-xs px-1 py-0.5 rounded-full">
              Verified
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-base font-semibold text-gray-800 flex items-center justify-between">
              A room and parlour in Ilorin
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </h3>
            <p className="text-sm text-gray-700 font-bold mt-1">₦ 220,000/year</p>
            <p className="text-xs text-gray-500 mt-1">Ilorin, pipeline area.</p>
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

        {/* Listing Card 4 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
          <div className="relative w-24 h-24 flex-shrink-0 mr-4">
            <img
              src="https://via.placeholder.com/100x100?text=Listing+4"
              alt="Listing"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute top-1 left-1 bg-green-500 text-white text-xs px-1 py-0.5 rounded-full">
              Verified
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-base font-semibold text-gray-800 flex items-center justify-between">
              A room in Ilorin
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </h3>
            <p className="text-sm text-gray-700 font-bold mt-1">₦ 150,000/year</p>
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

        {/* Listing Card 5 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
          <div className="relative w-24 h-24 flex-shrink-0 mr-4">
            <img
              src="https://via.placeholder.com/100x100?text=Listing+5"
              alt="Listing"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute top-1 left-1 bg-green-500 text-white text-xs px-1 py-0.5 rounded-full">
              Verified
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-base font-semibold text-gray-800 flex items-center justify-between">
              Self contain in Ilorin
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </h3>
            <p className="text-sm text-gray-700 font-bold mt-1">₦ 250,000/year</p>
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
    </div>
  );
};

export default Fourth;