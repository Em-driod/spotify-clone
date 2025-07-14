import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaComments, FaPlusCircle, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import MyListings from './MyListing';
import EditListing from './EditListing';
import LandlordChats from './LandlordChat';
import { Property } from './types'; // Assuming you have a types.ts for Property

type DashboardSection = 'listings' | 'edit-listing' | 'chats' | 'profile';
  // Dummy profile content
  const ProfileSection = () => (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <FaUser size={48} className="mb-4 text-[#4A00B7]" />
      <h2 className="text-xl font-bold mb-2">Landlord Profile</h2>
      <p className="text-gray-700">Name: Abeki 👩‍🦱</p>
      <p className="text-gray-700">Email: abeki@example.com</p>
      <p className="text-gray-700">Phone: +234 800 000 0000</p>
      <p className="text-gray-700 mt-2">You can edit your profile details here soon.</p>
    </div>
  );

const LandlordDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState<DashboardSection>('listings');
  const [selectedListing, setSelectedListing] = useState<Property | null>(null);

  const handleEditListing = (listing: Property | null = null) => {
    setSelectedListing(listing);
    setCurrentSection('edit-listing');
  };

  const handleViewChats = () => {
    setCurrentSection('chats');
  };

  const handleBackToDashboard = () => {
    setCurrentSection('listings');
    setSelectedListing(null); // Clear selected listing when returning
  };

  // Dummy Data for demonstration
  const [properties, setProperties] = useState<Property[]>([
    {
      id: 'prop1',
      title: 'Spacious 2-Bedroom Flat',
      location: 'Tanko Ilorin, Kwara',
      price: 300000,
      period: 'year',
      bedrooms: 2,
      bathrooms: 2,
      description: 'Modern flat with balcony and ample parking.',
      imageUrl: '/bed1.png',
      isPublished: true,
    },
    {
      id: 'prop2',
      title: 'Cozy Studio Apartment',
      location: 'GRA, Ilorin',
      price: 150000,
      period: 'year',
      bedrooms: 1,
      bathrooms: 1,
      description: 'Compact and affordable for singles.',
      imageUrl: '/bed2.png',
      isPublished: false,
    },
    // Add more dummy data as needed
  ]);

  // Function to simulate saving/updating a listing
  const handleSaveListing = (updatedListing: Property) => {
    if (updatedListing.id) {
      // Update existing
      setProperties((prev) =>
        prev.map((prop) => (prop.id === updatedListing.id ? updatedListing : prop))
      );
    } else {
      // Add new (generate a simple ID)
      setProperties((prev) => [...prev, { ...updatedListing, id: `prop${Date.now()}` }]);
    }
    setCurrentSection('listings'); // Go back to listings after saving
  };

  const handleDeleteListing = (id: string) => {
    setProperties((prev) => prev.filter((prop) => prop.id !== id));
    setCurrentSection('listings');
  };

  return (
    <motion.div
      className="landlord-dashboard-container font-sans max-w-md mx-auto border border-gray-300 min-h-screen shadow-md bg-gray-50 flex flex-col relative"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.4 }}
    >
      {/* Top Navigation / Header */}
      <motion.div
        className="dashboard-header  bg-gradient-to-r from-[#0d1b2a] via-[#4b0082] to-[#8b0000] text-white p-4 text-center font-bold text-xl flex items-center justify-between relative"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Back arrow if not on listings */}
        {currentSection !== 'listings' && (
          <span
            onClick={handleBackToDashboard}
            className="cursor-pointer text-2xl mr-2"
          >
            &#8592;
          </span>
        )}
        <div className="flex flex-col flex-grow items-center">
          <span className="text-2xl font-extrabold tracking-wide">
            {currentSection === 'listings' && 'My Properties'}
            {currentSection === 'edit-listing' && (selectedListing ? 'Edit Listing' : 'New Listing')}
            {currentSection === 'chats' && 'Messages'}
          </span>
          <span className="text-sm font-normal mt-1 tracking-wide">
            Welcome, Abeki 👩‍🦱! 
          </span>
        </div>
        {currentSection === 'listings' && (
          <motion.button
            onClick={() => handleEditListing(null)}
            className="bg-[#6A1BC9] text-white border-none rounded-md py-2 px-3 cursor-pointer text-sm hover:bg-opacity-90 transition-opacity"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            + Add New
          </motion.button>
        )}
      </motion.div>

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          className="dashboard-content flex-grow p-4"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4 }}
        >
          {currentSection === 'listings' && (
            <MyListings
              properties={properties}
              onEdit={handleEditListing}
              onDelete={handleDeleteListing}
              onChat={handleViewChats}
            />
          )}
          {currentSection === 'edit-listing' && (
            <EditListing
              initialData={selectedListing}
              onSave={handleSaveListing}
              onCancel={handleBackToDashboard}
            />
          )}
          {currentSection === 'chats' && <LandlordChats />}
          {currentSection === 'profile' && <ProfileSection />}
        </motion.div>
      </AnimatePresence>

      {/* Bottom Navigation (with Logout bottom left) */}
      <motion.div
        className="bottom-nav bg-white border-t border-gray-200 flex justify-between items-end p-2 relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Logout icon bottom left */}
        <button
          onClick={() => navigate('/landsignin')}
          className="flex flex-col items-center bg-none border-none cursor-pointer py-2 px-3 text-gray-600 hover:text-red-400 transition"
          style={{ minWidth: 48 }}
          title="Logout"
        >
          <FaSignOutAlt size={22} />
          <span className="text-xs mt-1">Logout</span>
        </button>
        <div className="flex flex-1 justify-around">
          <button
            onClick={() => setCurrentSection('listings')}
            className={`flex flex-col items-center bg-none border-none cursor-pointer py-2 px-3 ${
              currentSection === 'listings' ? 'text-[#4A00B7] font-bold' : 'text-gray-600'
            }`}
          >
            <FaHome size={22} />
            <span className="text-xs mt-1">Dashboard</span>
          </button>
          <button
            onClick={() => setCurrentSection('chats')}
            className={`flex flex-col items-center bg-none border-none cursor-pointer py-2 px-3 ${
              currentSection === 'chats' ? 'text-[#4A00B7] font-bold' : 'text-gray-600'
            }`}
          >
            <FaComments size={22} />
            <span className="text-xs mt-1">Chat</span>
          </button>
          <button
            onClick={() => handleEditListing(null)}
            className={`flex flex-col items-center bg-none border-none cursor-pointer py-2 px-3 text-gray-600`}
          >
            <FaPlusCircle size={22} />
            <span className="text-xs mt-1">Add</span>
          </button>
          <button
            onClick={() => setCurrentSection('profile')}
            className={`flex flex-col items-center bg-none border-none cursor-pointer py-2 px-3 ${
              currentSection === 'profile' ? 'text-[#4A00B7] font-bold' : 'text-gray-600'
            }`}
          >
            <FaUser size={22} />
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LandlordDashboard;