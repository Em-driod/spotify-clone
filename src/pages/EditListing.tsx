// EditListing.tsx
import React, { useState, useEffect } from 'react';
import { Property } from './types'; // Assuming you have a types.ts for Property

interface EditListingProps {
  initialData?: Property | null;
  onSave: (property: Property) => void;
  onCancel: () => void;
}

const EditListing: React.FC<EditListingProps> = ({ initialData, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Property>({
    id: '',
    title: '',
    location: '',
    price: 0,
    period: 'year',
    bedrooms: 0,
    bathrooms: 0,
    description: '',
    imageUrl: '',
    isPublished: false,
    ...(initialData || {}), // Merge initialData if provided
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      // Reset form for new listing
      setFormData({
        id: '', // Empty ID for new listings
        title: '',
        location: '',
        price: 0,
        period: 'year',
        bedrooms: 0,
        bathrooms: 0,
        description: '',
        imageUrl: '',
        isPublished: false,
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="edit-listing-container">
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label htmlFor="title" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
          />
        </div>
        <div>
          <label htmlFor="location" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
          />
        </div>
        <div>
          <label htmlFor="price" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            min="0"
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
          />
        </div>
        <div>
          <label htmlFor="period" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Per:</label>
          <select
            id="period"
            name="period"
            value={formData.period}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
          >
            <option value="year">Year</option>
            <option value="month">Month</option>
          </select>
        </div>
        <div>
          <label htmlFor="bedrooms" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Bedrooms:</label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            required
            min="0"
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
          />
        </div>
        <div>
          <label htmlFor="bathrooms" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Bathrooms:</label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            required
            min="0"
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
          />
        </div>
        <div>
          <label htmlFor="description" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd', resize: 'vertical' }}
          ></textarea>
        </div>
        <div>
          <label htmlFor="imageUrl" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Image URL:</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            id="isPublished"
            name="isPublished"
            checked={formData.isPublished}
            onChange={handleChange}
            style={{ marginRight: '10px' }}
          />
          <label htmlFor="isPublished" style={{ fontWeight: 'bold' }}>Publish Listing</label>
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <button
            type="submit"
            style={{
              flex: 1,
              backgroundColor: '#4A00B7',
              color: 'white',
              border: 'none',
              padding: '12px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            Save Listing
          </button>
          <button
            type="button"
            onClick={onCancel}
            style={{
              flex: 1,
              backgroundColor: '#ccc',
              color: '#333',
              border: 'none',
              padding: '12px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditListing;