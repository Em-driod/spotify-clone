import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowBack } from 'react-icons/io';
// import { MdEdit, MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

// Define the interface for a Listing object
export interface Listing { // Export Listing interface if Edit.tsx needs it
  id: number;
  image: string;
  type: string;
  price: string;
  location: string;
  status: string;
}

const Customer: React.FC = () => {
  // const navigate = useNavigate(); // Removed unused navigate

  // Initialize listings using useState with the Listing array type
  const [listings] = useState<Listing[]>([
    {
      id: 1,
      image: '/bed1.png', // Corrected path assumption
      type: '2-Bedroom Apartment in Ilorin.',
      price: '₦ 450,000/year',
      location: 'Ilorin, tanke area.',
      status: 'Approved',
    },
    {
      id: 2,
      image: '/bed2.png', // Corrected path assumption
      type: '2-Bedroom Duplex in Ilorin.',
      price: '₦ 600,000/year',
      location: 'Ilorin, Agric estate.',
      status: 'Approved',
    },
    {
      id: 3,
      image: '/bed 1.png', // Corrected path assumption
      type: 'A room and parlour in Ilorin.',
      price: '₦ 220,000/year',
      location: 'Ilorin, pipeline area.',
      status: 'Approved',
    },
    {
      id: 4,
      image: '/bed.png', // Corrected path assumption
      type: 'A room in Ilorin.',
      price: '₦ 150,000/year',
      location: 'Ilorin, tanke area.',
      status: 'Approved',
    },
    {
      id: 5,
      image: '/bed1.png', // Corrected path assumption
      type: 'Self contain in Ilorin.',
      price: '₦ 250,000/year',
      location: 'Ilorin, tanke area.',
      status: 'Approved',
    },
  ]);

  // State for the general search input
  const [generalSearchQuery, setGeneralSearchQuery] = useState<string>('');
  // State for the "All listings" filter/search input (e.g., for status, or another specific filter)
  const [statusFilterQuery, setStatusFilterQuery] = useState<string>('');

  // State for showing the details popup
  const [showDetails, setShowDetails] = useState(false);
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);

  // Handle checking details (show popup)
  const handleCheckDetails = (id: number) => {
    const listingToView = listings.find((listing) => listing.id === id);
    if (listingToView) {
      setSelectedListing(listingToView);
      setShowDetails(true);
    }
  };

  // Handle closing the popup
  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedListing(null);
  };

  // Memoize the filtered listings to avoid unnecessary re-calculations
  const filteredListings = useMemo(() => {
    let currentListings = [...listings]; // Start with a copy of all listings

    // Apply general search filter
    if (generalSearchQuery) {
      const lowerCaseQuery = generalSearchQuery.toLowerCase();
      currentListings = currentListings.filter(
        (listing) =>
          listing.type.toLowerCase().includes(lowerCaseQuery) ||
          listing.location.toLowerCase().includes(lowerCaseQuery) ||
          listing.price.toLowerCase().includes(lowerCaseQuery)
      );
    }

    // Apply status/specific filter (using the statusFilterQuery, previously 'all listings' related)
    if (statusFilterQuery) {
      const lowerCaseStatusQuery = statusFilterQuery.toLowerCase();
      currentListings = currentListings.filter(
        (listing) => listing.status.toLowerCase().includes(lowerCaseStatusQuery)
      );
    }

    return currentListings;
  }, [listings, generalSearchQuery, statusFilterQuery]); // Re-calculate when these dependencies change

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 bg-white text-black font-sans">
      {/* Animated Top Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring', bounce: 0.35 }}
        className="mb-6 sm:mb-8"
      >
        <div className="flex items-center">
          <Link to='/customerProfile'>
            <IoIosArrowBack size={24} className="text-gray-600 mr-4 cursor-pointer" />
          </Link>
          <motion.h1
            className="text-xl sm:text-2xl font-extrabold text-center flex-grow bg-gradient-to-r from-[#6a1bc9] via-[#8a2be2] to-[#4b0082] bg-clip-text text-transparent drop-shadow-md"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, type: 'spring', bounce: 0.3 }}
          >
            Discover Your Next Home
          </motion.h1>
        </div>
        {/* Extra animated content */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, type: 'spring', bounce: 0.4 }}
          className="mt-2 flex items-center justify-between px-2"
        >
          <span className="text-xs sm:text-sm text-[#6a1bc9] font-semibold bg-[#f3e8ff] px-3 py-1 rounded-full shadow-sm animate-pulse">
            Welcome! Find your next home easily
          </span>
          <motion.img
            src="/public/Frame 1.png"
            alt="Decorative"
            className="w-8 h-8 sm:w-10 sm:h-10 ml-2 drop-shadow-lg"
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ type: 'spring', stiffness: 120, delay: 0.5 }}
            style={{ background: 'linear-gradient(135deg, #6a1bc9 30%, #8a2be2 100%)', borderRadius: '50%' }}
          />
        </motion.div>
      </motion.div>

      {/* Search and Filter Inputs */}
      <div className="flex gap-2 mb-5">
        <input
          type="text"
          placeholder="Search house..."
          className="w-1/2 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5a1f8e] text-black bg-white text-xs sm:text-sm md:text-base"
          value={generalSearchQuery}
          onChange={(e) => setGeneralSearchQuery(e.target.value)}
        />
        <input
          type="text"
          placeholder="All house..."
          className="w-1/2 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8a2be2] text-black bg-white text-xs sm:text-sm md:text-base"
          value={statusFilterQuery}
          onChange={(e) => setStatusFilterQuery(e.target.value)}
        />
      </div>

      {/* Listings */}
      <div>
        {filteredListings.length > 0 ? (
          filteredListings.map((listing: Listing) => (
            <div key={listing.id} className="bg-white rounded-xl p-3 mb-3 flex items-start shadow-md sm:p-4 sm:mb-4">
              <div className="relative mr-3 sm:mr-4">
                {/* Verified Badge - adjusted size/position for mobile */}
                <span className="absolute top-0.5 left-0.5 bg-green-500 text-white text-[0.6rem] px-1.5 py-0.5 rounded-md z-10 sm:text-xs">Verified</span>
                <img src={listing.image} alt={listing.type} className="w-16 h-16 rounded-lg object-cover sm:w-20 sm:h-20" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold mb-0.5 break-words sm:text-base">{listing.type}</h3>
                <p className="text-xs text-black font-bold mb-0.5 sm:text-sm">{listing.price}</p>
                <p className="text-[0.7rem] text-black italic mb-1 sm:text-xs">{listing.location}</p>
                <div className="flex items-center justify-between mt-1 sm:mt-2">
                  <p className="text-xs text-black sm:text-sm">{listing.status}</p>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <button
                      className="px-3 py-1 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 text-xs sm:text-sm"
                      onClick={() => handleCheckDetails(listing.id)}
                    >
                      Check Details
                    </button>
                    <IoIosArrowBack size={18} className="text-gray-400 cursor-pointer rotate-180" />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-base mt-8 sm:text-lg">No listings match your search criteria.</p>
        )}
      </div>

      {/* Details Popup */}
      {showDetails && selectedListing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm relative animate-fade-in">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-lg font-bold"
              onClick={handleCloseDetails}
            >
              ×
            </button>
            <div className="flex flex-col items-center">
              <img src={selectedListing.image} alt={selectedListing.type} className="w-24 h-24 rounded-lg object-cover mb-4" />
              <h2 className="text-xl font-bold mb-2 text-center">{selectedListing.type}</h2>
              <p className="text-base text-black font-bold mb-1">{selectedListing.price}</p>
              <p className="text-sm text-gray-700 mb-1">{selectedListing.location}</p>
              <p className="text-sm text-green-600 mb-4">{selectedListing.status}</p>
              <div className="flex gap-3">
                <button
                  className="px-4 py-2 bg-gray-300 text-black rounded-lg font-semibold hover:bg-gray-400 transition-all duration-200"
                  onClick={handleCloseDetails}
                >
                  Cancel
                </button>
                <Link to="/Custdetail">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
                  onClick={() => {
                    setShowDetails(false);
                    setSelectedListing(null);
                    window.location.href = '/Custdetail';
                  }}
                  >
                  More Details
                </button>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customer;