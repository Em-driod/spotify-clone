import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io'; // For the back arrow icon
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation

// Define the Listing interface (can be imported from Manage.tsx if exported)
interface Listing {
  id: number;
  image: string;
  type: string;
  price: string;
  location: string;
  status: string;
}

const Edit: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Hook to access the current location object

  // State to hold the listing data for the form
  const [listingData, setListingData] = useState<Listing | null>(null);

  // Form states
  const [propertyTitle, setPropertyTitle] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [propertyType, setPropertyType] = useState<string>('Bungalow');
  const [paymentPlan, setPaymentPlan] = useState<string>('Yearly');
  const [locationName, setLocationName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  // useEffect to populate form fields when component mounts or location state changes
  useEffect(() => {
    // Check if location.state exists and contains a 'listing' object
    if (location.state && (location.state as { listing: Listing }).listing) {
      const initialListing = (location.state as { listing: Listing }).listing;
      setListingData(initialListing); // Store the full listing object
      setPropertyTitle(initialListing.type); // Populate type into title
      setPrice(initialListing.price);
      setLocationName(initialListing.location);
      // You'll need to decide how to map initialListing.type to 'propertyType' dropdown
      // For now, let's assume 'type' from listing corresponds to 'Bungalow', 'Flat', etc.
      // If not, you might need more complex logic or a separate field for propertyType in Listing interface
      // setPropertyType(initialListing.type); // This might need parsing
      
      // Placeholder for description and payment plan as they aren't in initial Listing data
      // You would fetch or pass these if they were part of the listing object
      setDescription(`Spacious ${initialListing.type} at ${initialListing.location}`);
      setPaymentPlan('Yearly'); // Default, or get from initialListing if available
    }
  }, [location.state]);

  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the updated data to your backend
    // For this example, we'll just log it and navigate back

    if (listingData) {
      const updatedListing = {
        ...listingData,
        type: propertyTitle, // Mapping propertyTitle back to 'type'
        price: price,
        location: locationName,
        // status: listingData.status, // Keep original status
        // image: listingData.image,   // Keep original image
        // id: listingData.id,         // Keep original ID
      };
      console.log('Updated Listing Data:', updatedListing);
      alert('Listing updated successfully!');

      // After saving, navigate back to the manage listings page
      navigate('/manage'); // Adjust this path if your manage page is different
    } else {
        alert('No listing data to save.');
    }
  };

  if (!listingData) {
    return (
      <div className="min-h-screen p-4 flex items-center justify-center bg-white text-black">
        <p className="text-lg">Loading listing for edit or no listing selected...</p>
        <button onClick={() => navigate('/manage')} className="ml-4 px-4 py-2 bg-blue-500 text-white rounded">
          Go to Manage Listings
        </button>
      </div>
    );
  }

  return (
    <div className="edit-listing-container min-h-screen p-4 sm:p-6 md:p-8 bg-white text-black font-sans">
      <header className="edit-listing-header flex items-center mb-6 sm:mb-8">
        <IoIosArrowBack size={24} className="text-gray-600 mr-4 cursor-pointer" onClick={() => navigate(-1)} /> {/* Go back */}
        <h1 className="text-xl sm:text-2xl font-bold text-center flex-grow">Edit listing</h1>
      </header>

      <div className="listing-image-placeholder mb-5">
        <img src={listingData.image} alt={listingData.type} className="w-full h-48 sm:h-64 rounded-lg object-cover" />
      </div>

      <form className="edit-listing-form" onSubmit={handleSaveChanges}>
        <div className="form-group mb-4">
          <label htmlFor="property-title" className="block text-sm font-semibold mb-1 text-gray-700">Property title</label>
          <input
            type="text"
            id="property-title"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5a1f8e] text-black bg-white text-base"
            value={propertyTitle}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPropertyTitle(e.target.value)}
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="price" className="block text-sm font-semibold mb-1 text-gray-700">Price</label>
          <input
            type="text"
            id="price"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5a1f8e] text-black bg-white text-base"
            value={price}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="property-type" className="block text-sm font-semibold mb-1 text-gray-700">Property type</label>
          <select
            id="property-type"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5a1f8e] text-black bg-white text-base"
            value={propertyType}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPropertyType(e.target.value)}
          >
            <option value="Bungalow">Bungalow</option>
            <option value="Flat">Flat</option>
            <option value="Duplex">Duplex</option>
            <option value="Room and Parlour">Room and Parlour</option>
            <option value="Room">Room</option>
            <option value="Self Contain">Self Contain</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="form-group mb-4">
          <label htmlFor="payment-plan" className="block text-sm font-semibold mb-1 text-gray-700">Payment plan</label>
          <select
            id="payment-plan"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5a1f8e] text-black bg-white text-base"
            value={paymentPlan}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPaymentPlan(e.target.value)}
          >
            <option value="Yearly">Yearly</option>
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
          </select>
        </div>

        <div className="form-group mb-4">
          <label htmlFor="location" className="block text-sm font-semibold mb-1 text-gray-700">Location</label>
          <input
            type="text"
            id="location"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5a1f8e] text-black bg-white text-base"
            value={locationName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocationName(e.target.value)}
          />
        </div>

        <div className="form-group mb-6">
          <label htmlFor="description" className="block text-sm font-semibold mb-1 text-gray-700">Description</label>
          <textarea
            id="description"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5a1f8e] text-black bg-white text-base h-24 resize-y"
            value={description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
            rows={3}
          ></textarea>
        </div>

        <button
          type="submit"
          className="save-changes-button w-full py-3 rounded-lg text-white font-bold text-lg
            bg-gradient-to-r from-[#5a1f8e] to-[#8a2be2] hover:from-[#4a1a7e] hover:to-[#7a26c4]
            focus:outline-none focus:ring-2 focus:ring-[#8a2be2] focus:ring-offset-2 transition duration-200"
        >
          Save changes
        </button>
      </form>
    </div>
  );
};

export default Edit;