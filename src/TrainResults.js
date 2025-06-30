import React from "react";
import { useLocation, Link } from "react-router-dom";

function TrainResults() {
  const location = useLocation();
  const { results = [], fromStation, toStation, date } = location.state || {};

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        🚄 Trains from {fromStation} to {toStation} on {date}
      </h2>

      {results.length > 0 ? (
        <div className="w-full max-w-5xl mx-auto mt-6 overflow-x-auto">
          <table className="min-w-full bg-white text-black rounded shadow-md">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="py-3 px-4">Train No.</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Departure</th>
                <th className="py-3 px-4">Arrival</th>
                <th className="py-3 px-4">Days</th>
                <th className="py-3 px-4">Coaches</th>
              </tr>
            </thead>
            <tbody>
              {results.map((train, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2 px-4">{train.number}</td>
                  <td className="py-2 px-4">{train.name}</td>
                  <td className="py-2 px-4">{train.departure}</td>
                  <td className="py-2 px-4">{train.arrival}</td>
                  <td className="py-2 px-4">{train.days.join(", ")}</td>
                  <td className="py-2 px-4">
                    {Object.entries(train.coaches || {}).map(
                      ([coach, seats], i) => (
                        <div key={i}>
                          {coach}: {seats} seats
                        </div>
                      )
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center mt-10 text-lg">No trains found for this route.</p>
      )}

      <div className="mt-6 text-center">
        <Link
          to="/"
          className="bg-white text-blue-700 px-4 py-2 rounded shadow hover:bg-gray-200"
        >
          🔙 Back to Search
        </Link>
      </div>
    </div>
  );
}

export default TrainResults;
