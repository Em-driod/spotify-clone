import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';
import { MdEdit, MdDelete } from 'react-icons/md';

const Manage = () => {
  // Initialize listings using useState
  const [listings, setListings] = useState([
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

  const handleEdit = (id) => {
    // In a real application, you'd navigate to an edit page or open a modal
    // For this example, we'll use a prompt to simulate editing
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

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete listing with ID: ${id}?`)) {
      setListings(listings.filter((listing) => listing.id !== id));
      alert(`Listing with ID: ${id} deleted!`);
    }
  };

  return (
    <div className="min-h-screen p-5 bg-white text-black font-sans">
      {/* Header */}
      <div className="flex items-center mb-8">
        <IoIosArrowBack size={24} className="text-gray-600 mr-5 cursor-pointer" />
        <h1 className="text-2xl font-bold text-center flex-grow">Manage listing</h1>
      </div>

      {/* Search and Filter */}
      <div className="flex justify-between mb-5">
        <button className="bg-[#5a1f8e] text-white rounded-lg px-5 py-3 text-base cursor-pointer flex-1 mr-2">
          Search listings...
        </button>
        <button className="bg-[#8a2be2] text-white rounded-lg px-5 py-3 text-base cursor-pointer flex items-center">
          All listings <IoIosArrowDown size={16} className="ml-1" />
        </button>
      </div>

      {/* Listings */}
      <div>
        {listings.map((listing) => (
          <div key={listing.id} className="bg-white rounded-xl p-4 mb-4 flex items-start shadow-lg">
            <div className="relative mr-4">
              {/* Verified Badge */}
              <span className="absolute top-1 left-1 bg-green-500 text-white text-xs px-2 py-1 rounded-md z-10">Verified</span>
              <img src={listing.image} alt={listing.type} className="w-20 h-20 rounded-lg object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-bold mb-1 break-words">{listing.type}</h3>
              <p className="text-sm text-black mb-0.5">{listing.price}</p>
              <p className="text-xs text-black-400 italic mb-2">{listing.location}</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-xs text-black font-bold">{listing.status}</p>
                <div className="flex items-center">
                  <MdEdit size={20} className="text-gray-400 ml-4 cursor-pointer" onClick={() => handleEdit(listing.id)} />
                  <MdDelete size={20} className="text-gray-400 ml-4 cursor-pointer" onClick={() => handleDelete(listing.id)} />
                  <IoIosArrowBack size={20} className="text-gray-400 ml-4 cursor-pointer rotate-180" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manage;