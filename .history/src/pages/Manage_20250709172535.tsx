import React, { useState, useMemo } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { MdEdit, MdDelete } from 'react-icons/md';

// Define the interface for a Listing object
interface Listing {
  id: number;
  image: string;
  type: string;
  price: string;
  location: string;
  status: string;
}

const Manage: React.FC = () => {
  // Initialize listings using useState with the Listing array type
  const [listings, setListings] = useState<Listing[]>([
    {
      id: 1,
      image: '/path/to/your/bedroom-apartment.png', // Replace with actual image paths
      type: '2-Bedroom Apartment in Ilorin.',
      price: '₦ 450,000/year',
      location: 'Ilorin, tanke area.',
      status: 'Approved',
    },
    {
      id: 2,
      image: '/path/to/your/duplex.png',
      type: '2-Bedroom Duplex in Ilorin.',
      price: '₦ 600,000/year',
      location: 'Ilorin, Agric estate.',
      status: 'Approved',
    },
    {
      id: 3,
      image: '/path/to/your/room-parlour.png',
      type: 'A room and parlour in Ilorin.',
      price: '₦ 220,000/year',
      location: 'Ilorin, pipeline area.',
      status: 'Approved',
    },
    {
      id: 4,
      image: '/path/to/your/room.png',
      type: 'A room in Ilorin.',
      price: '₦ 150,000/year',
      location: 'Ilorin, tanke area.',
      status: 'Approved',
    },
    {
      id: 5,
      image: '/path/to/your/self-contain.png',
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

  const handleEdit = (id: number) => {
    const listingToEdit = listings.find((listing) => listing.id === id);
    if (listingToEdit) {
      const newType = prompt('Edit listing type:', listingToEdit.type);
      const newPrice = prompt('Edit listing price:', listingToEdit.price);
      const newLocation = prompt('Edit listing location:', listingToEdit.location);

      if (newType !== null && newPrice !== null && newLocation !== null) {
        setListings(
          listings.map((listing) =>
            listing.id === id
              ? { ...listing, type: newType, price: newPrice, location: newLocation }
              : listing
          )
        );
        alert(`Listing with ID: ${id} updated!`);
      }
    }
  };

  const handleDelete = (id: number) => {
    if (window.confirm(`Are you sure you want to delete listing with ID: ${id}?`)) {
      setListings(listings.filter((listing) => listing.id !== id));
      alert(`Listing with ID: ${id} deleted!`);
    }
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
      {/* Header */}
      <div className="flex items-center mb-6 sm:mb-8">
        <IoIosArrowBack size={24} className="text-gray-600 mr-4 cursor-pointer" />
        <h1 className="text-xl sm:text-2xl font-bold text-center flex-grow">Manage Listing</h1>
      </div>

      {/* Search and Filter Inputs */}
      {/* Changed to flex-col on mobile, then md:flex for larger screens */}
      <div className="flex flex-col md:flex-row gap-3 mb-5">
        <input
          type="text"
          placeholder="Search listings..." // Changed placeholder back
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5a1f8e] text-black bg-white text-sm md:text-base"
          value={generalSearchQuery}
          onChange={(e) => setGeneralSearchQuery(e.target.value)}
        />
        <input
          type="text"
          placeholder="All listings..." // Changed placeholder back
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8a2be2] text-black bg-white text-sm md:text-base"
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
                {/* Text sizes adjusted for mobile */}
                <h3 className="text-sm font-bold mb-0.5 break-words sm:text-base">{listing.type}</h3>
                <p className="text-xs text-black mb-0.5 sm:text-sm">{listing.price}</p>
                <p className="text-[0.7rem] text-gray-600 italic mb-1 sm:text-xs">{listing.location}</p>
                <div className="flex items-center justify-between mt-1 sm:mt-2">
                  <p className="text-xs text-black font-bold sm:text-sm">{listing.status}</p>
                  <div className="flex items-center space-x-3 sm:space-x-4"> {/* Adjusted spacing for actions */}
                    <MdEdit size={18} className="text-gray-400 cursor-pointer" onClick={() => handleEdit(listing.id)} />
                    <MdDelete size={18} className="text-gray-400 cursor-pointer" onClick={() => handleDelete(listing.id)} />
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
    </div>
  );
};

export default Manage;