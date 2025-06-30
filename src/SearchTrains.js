import React, { useState } from 'react';

const SearchTrains = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = () => {
    alert(`Searching trains from ${from} to ${to} on ${date}`);
    // TODO: Call backend API here
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Search Trains</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700">From</label>
        <select
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        >
          <option value="">Select departure station</option>
          <option value="Chennai">Chennai</option>
          <option value="Madurai">Madurai</option>
          <option value="Trichy">Trichy</option>
          <option value="Salem">Salem</option>
          <option value="Coimbatore">Coimbatore</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700">To</label>
        <select
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        >
          <option value="">Select arrival station</option>
          <option value="Chennai">Chennai</option>
          <option value="Madurai">Madurai</option>
          <option value="Trichy">Trichy</option>
          <option value="Salem">Salem</option>
          <option value="Coimbatore">Coimbatore</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700">Date</label>
        <input
          type="date"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <button
        onClick={handleSearch}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-200"
      >
        Search Trains
      </button>
    </div>
  );
};

export default SearchTrains;
