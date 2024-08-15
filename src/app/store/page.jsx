// app/store/page.js

'use client';

import { useState } from 'react';
import VoiceSearch from '../components/VoiceSearch';
import StoreMap from '../components/StoreMap';

export default function StorePage() {
  const [searchedItem, setSearchedItem] = useState('');

  // Sample item locations (replace with actual data)
  const itemLocations = [
    { itemName: 'Milk', latitude: 37.7749, longitude: -122.4194 },
    { itemName: 'Bread', latitude: 37.8044, longitude: -122.2712 },
    { itemName: 'Eggs', latitude: 37.7749, longitude: -122.4313 },
  ];

  // Function to handle search
  const handleSearch = (item) => {
    setSearchedItem(item);
    console.log(`User searched for: ${item}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Search Products in the Store</h1>
      <VoiceSearch onSearch={handleSearch} /> {/* Pass handleSearch correctly */}
      <StoreMap itemLocations={itemLocations} />
    </div>
  );
}
