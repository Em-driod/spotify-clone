

import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';
import { MdEdit, MdDelete } from 'react-icons/md';

const Manage = () => {
  const listings = [
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
      type: 'A room and parlour in Ilorin',
      price: '₦ 220,000/year',
      location: 'Ilorin, pipeline area.',
      status: 'Approved',
    },
    {
      id: 4,
      image: '/path/to/your/room.png',
      type: 'A room in Ilorin',
      price: '₦ 150,000/year',
      location: 'Ilorin, tanke area.',
      status: 'Approved',
    },
    {
      id: 5,
      image: '/path/to/your/self-contain.png',
      type: 'Self contain in Ilorin',
      price: '₦ 250,000/year',
      location: 'Ilorin, tanke area.',
      status: 'Approved',
    },
  ];

  return (
    <div className="min-h-screen p-5 bg-white text-black font-sans">
      {/* Header */}
      <div className="flex items-center mb-8">
        <IoIosArrowBack size={24} className="text-white mr-5 cursor-pointer" />
        <h1 className="text-2xl font-bold text-center ml-9">Manage listing</h1>
      </div>

      {/* Search and Filter */}
      <div className="flex justify-between mb-5">
        <button className="bg-[#5a1f8e] text-white rounded-lg px-5 py-3 text-base cursor-pointer flex-1 mr-2">
          Search listings...
        </button>
        <button className="bg-[#8a2be2] text-white rounded-lg px-5 py-3 text-base cursor-pointer flex items-center">
          All listings <IoIosArrowDown size={16} className="ml-1 rotate-90" />
        </button>
      </div>

      {/* Listings */}
      <div>
        {listings.map((listing) => (
          <div key={listing.id} className="bg-white rounded-xl p-4 mb-4 flex items-center shadow-lg">
            <div className="relative mr-4">
              {/* Verified Badge */}
              <span className="absolute top-1 left-1 bg-black text-white text-xs px-2 py-1 rounded-md z-10">Verified</span>
              <img src={listing.image} alt={listing.type} className="w-20 h-20 rounded-lg object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-bold mb-1">{listing.type}</h3>
              <p className="text-sm text-gray-400 mb-0.5">{listing.price}</p>
              <p className="text-xs text-gray-400 mb-2">{listing.location}</p>
              <p className="text-xs text-green-500 font-bold">{listing.status}</p>
            </div>
            <div className="flex items-center">
              <MdEdit size={20} className="text-gray-400 ml-4 cursor-pointer" />
              <MdDelete size={20} className="text-gray-400 ml-4 cursor-pointer" />
              <IoIosArrowBack size={20} className="text-gray-400 ml-4 cursor-pointer rotate-180" /> {/* Rotated for forward */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manage;