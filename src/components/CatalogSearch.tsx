import React from 'react';
import { CatalogItem } from '../types/catalog';
import { catalogItems } from '../constants/catalog';

const CatalogSearch: React.FC = () => (
  <aside className="w-full md:w-1/2 lg:w-2/5 bg-gray-50 p-6 rounded-lg shadow">
    <h2 className="text-lg font-bold mb-4">OIL & GAS MATERIALS</h2>
    <input
      type="text"
      placeholder="Search"
      className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring"
    />
    <ul>
      {catalogItems.map((item) => (
        <li key={item.name} className="flex items-center mb-6">
          <img src={item.image} alt={item.name} className="h-12 w-12 object-contain mr-4" />
          <div className="flex-1">
            <div className="font-medium">{item.name}</div>
            <div className="text-gray-600">{item.price}</div>
          </div>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 ml-4">Add to Cart</button>
        </li>
      ))}
    </ul>
  </aside>
);

export default CatalogSearch; 