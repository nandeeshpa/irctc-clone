import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import stations from "./stations";
import trains from "./trains";

function SearchForm() {
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const filterStations = (input) =>
    stations.filter((station) =>
      station.toLowerCase().includes(input.toLowerCase())
    );

  const handleSearch = () => {
    const filtered = trains.filter(
      (train) =>
        train.from.toLowerCase().includes(fromStation.toLowerCase()) &&
        train.to.toLowerCase().includes(toStation.toLowerCase())
    );
    navigate("/results", {
      state: { results: filtered, fromStation, toStation, date },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-700 text-white flex flex-col items-center justify-start p-6">
      <h1 className="text-3xl font-bold mb-6 mt-4 text-center">🚆 IRCTC Tamil Nadu Clone</h1>
      <p className="text-lg mb-8 text-center">
        Book trains across Tamil Nadu — faster, simpler, and better!
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl text-black space-y-4">
        {/* From Station */}
        <div>
          <label className="block font-semibold mb-1">From:</label>
          <input
            list="fromStations"
            className="w-full border px-4 py-2 rounded"
            placeholder="Enter or select departure station"
            value={fromStation}
            onChange={(e) => setFromStation(e.target.value)}
          />
          <datalist id="fromStations">
            {filterStations(fromStation).map((station, index) => (
              <option key={index} value={station} />
            ))}
          </datalist>
        </div>

        {/* To Station */}
        <div>
          <label className="block font-semibold mb-1">To:</label>
          <input
            list="toStations"
            className="w-full border px-4 py-2 rounded"
            placeholder="Enter or select destination station"
            value={toStation}
            onChange={(e) => setToStation(e.target.value)}
          />
          <datalist id="toStations">
            {filterStations(toStation).map((station, index) => (
              <option key={index} value={station} />
            ))}
          </datalist>
        </div>

        {/* Date Input */}
        <div>
          <label className="block font-semibold mb-1">Date of Journey:</label>
          <input
            type="date"
            className="w-full border px-4 py-2 rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded w-full"
        >
          Search Trains
        </button>
      </div>
    </div>
  );
}

export default SearchForm;
