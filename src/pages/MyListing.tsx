// MyListings.tsx
import React from 'react';
import { Property } from './types'; // Assuming you have a types.ts for Property

export interface MyListingsProps {
  properties: Property[];
  onEdit: (listing?: Property | null) => void;
  onDelete: (id: string) => void;
  onChat: () => void;
}

const MyListings: React.FC<MyListingsProps> = ({ properties, onEdit, onDelete, onChat }) => {
  return (
    <div className="my-listings-container">
      {properties.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666', marginTop: '20px' }}>
          You have no active listings. Click "Add New" to create one!
        </p>
      ) : (
        <ul className="property-list" style={{ listStyle: 'none', padding: 0 }}>
          {properties.map((property) => (
            <li
              key={property.id}
              className="property-card"
              style={{
                backgroundColor: '#fff',
                marginBottom: '15px',
                borderRadius: '8px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <img
                src={property.imageUrl}
                alt={property.title}
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
              />
              <div style={{ padding: '15px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px', color: '#333' }}>
                  {property.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>
                  {property.location}
                </p>
                <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#4A00B7', marginBottom: '10px' }}>
                  ₦{property.price.toLocaleString()}{' '}
                  <span style={{ fontSize: '12px', fontWeight: 'normal', color: '#888' }}>
                    per {property.period}
                  </span>
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#555', marginBottom: '10px' }}>
                  <span>🛏️ {property.bedrooms}</span>
                  <span>🛁 {property.bathrooms}</span>
                  <span style={{
                    color: property.isPublished ? 'green' : 'orange',
                    fontWeight: 'bold',
                  }}>
                    {property.isPublished ? 'Live' : 'Draft'}
                  </span>
                </div>
                <div className="actions" style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => onEdit(property)}
                    style={{
                      flex: 1,
                      backgroundColor: '#007bff',
                      color: 'white',
                      border: 'none',
                      padding: '10px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '14px',
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(property.id)}
                    style={{
                      flex: 1,
                      backgroundColor: '#dc3545',
                      color: 'white',
                      border: 'none',
                      padding: '10px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '14px',
                    }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={onChat}
                    style={{
                      flex: 1,
                      backgroundColor: '#28a745',
                      color: 'white',
                      border: 'none',
                      padding: '10px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '14px',
                    }}
                  >
                    Chat
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyListings;