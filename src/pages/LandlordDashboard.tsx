import React, { useState } from 'react';
import MyListings from './MyListing';
import EditListing from './EditListing';
import LandlordChats from './LandlordChat';
import { Property } from './types'; // Assuming you have a types.ts for Property

type DashboardSection = 'listings' | 'edit-listing' | 'chats';

const LandlordDashboard: React.FC = () => {
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
    <div
      className="landlord-dashboard-container font-sans max-w-md mx-auto border border-gray-300 min-h-screen shadow-md bg-gray-50 flex flex-col"
    >
      {/* Top Navigation / Header */}
      <div
        className="dashboard-header  bg-gradient-to-r from-[#0d1b2a] via-[#4b0082] to-[#8b0000] text-white p-4 text-center font-bold text-xl flex items-center justify-between"
      >
        {currentSection !== 'listings' && (
          <span
            onClick={handleBackToDashboard}
            className="cursor-pointer text-2xl mr-2"
          >
            &#8592;
          </span>
        )}
        <span className="flex-grow">
          {currentSection === 'listings' && 'My Properties'}
          {currentSection === 'edit-listing' && (selectedListing ? 'Edit Listing' : 'New Listing')}
          {currentSection === 'chats' && 'Messages'}
        </span>
        {currentSection === 'listings' && (
          <button
            onClick={() => handleEditListing(null)}
            className="bg-[#6A1BC9] text-white border-none rounded-md py-2 px-3 cursor-pointer text-sm hover:bg-opacity-90 transition-opacity"
          >
            + Add New
          </button>
        )}
      </div>

      {/* Main Content Area */}
      <div className="dashboard-content flex-grow p-4">
        {currentSection === 'listings' && (
          <MyListings
            properties={properties}
            onEdit={handleEditListing}
            onDelete={handleDeleteListing}
            onChat={handleViewChats} // Option to view chats related to a property
          />
        )}
        {currentSection === 'edit-listing' && (
          <EditListing
            initialData={selectedListing}
            onSave={handleSaveListing}
            onCancel={handleBackToDashboard}
          />
        )}
        {currentSection === 'chats' && (
          <LandlordChats />
        )}
      </div>

      {/* Bottom Navigation (Optional, if you prefer tabs) */}
      <div
        className="bottom-nav bg-white border-t border-gray-200 flex justify-around p-2"
      >
        <button
          onClick={() => setCurrentSection('listings')}
          className={`bg-none border-none cursor-pointer py-2 px-3 ${
            currentSection === 'listings' ? 'text-[#4A00B7] font-bold' : 'text-gray-600'
          }`}
        >
          Listings
        </button>
        <button
          onClick={() => setCurrentSection('chats')}
          className={`bg-none border-none cursor-pointer py-2 px-3 ${
            currentSection === 'chats' ? 'text-[#4A00B7] font-bold' : 'text-gray-600'
          }`}
        >
          Chats
        </button>
        {/* Potentially other sections like 'Settings', 'Analytics' */}
      </div>
    </div>
  );
};

export default LandlordDashboard;