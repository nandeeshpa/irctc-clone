import React, { useState } from "react";

// Sample stations data
const stations = [
  "Chennai Central", "Chennai Egmore", "Coimbatore Junction", "Madurai Junction",
  "Trichy Junction", "Salem Junction", "Tirunelveli Junction", "Vellore Cantonment",
  "Erode Junction", "Thanjavur Junction", "Kanyakumari", "Rameswaram",
  "Karur Junction", "Dindigul Junction", "Cuddalore Port", "Villupuram Junction",
  "Tirupur", "Karaikudi Junction", "Nagercoil Junction","Tambaram","Chidambaram", "Tenkasi Junction"
];

// Sample trains data with detailed seat availability
const trains = [
  {
    number: "12635",
    name: "Vaigai Express",
    from: "Chennai Egmore",
    to: "Madurai Junction",
    departure: "13:40",
    arrival: "21:25",
    duration: "7h 45m",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    seats: {
      "SL": { available: 45, waiting: 12, price: 285 },
      "3A": { available: 8, waiting: 25, price: 785 },
      "2A": { available: 2, waiting: 45, price: 1125 },
      "1A": { available: 0, waiting: 15, price: 1890 }
    }
  },
  {
    number: "12635",
    name: "Pandian Express",
    from: "Chennai Egmore",
    to: "Madurai Junction",
    departure: "7:40",
    arrival: "15:25",
    duration: "7h 45m",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    seats: {
      "SL": { available: 45, waiting: 12, price: 285 },
      "3A": { available: 8, waiting: 25, price: 785 },
      "2A": { available: 2, waiting: 45, price: 1125 },
      "1A": { available: 0, waiting: 15, price: 1890 }
    }
  },
  {
    number: "12674",
    name: "Cheran Express",
    from: "Chennai Egmore",
    to: "Coimbatore Junction",
    departure: "20:30",
    arrival: "06:15",
    duration: "9h 45m",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    seats: {
      "SL": { available: 112, waiting: 0, price: 315 },
      "3A": { available: 25, waiting: 8, price: 845 },
      "2A": { available: 12, waiting: 18, price: 1205 },
      "1A": { available: 3, waiting: 8, price: 2015 }
    }
  },
   {
    number: "12674",
    name: "Tambaram Express",
    from: "Tambaram",
    to: "Chidambaram",
    departure: "17:30",
    arrival: "22:15",
    duration: "3h 45m",
    days: ["Mon", "Tue", "Wed", "Sat", "Sun"],
    seats: {
      "SL": { available: 212, waiting: 0, price: 215 },
      "3A": { available: 25, waiting: 8, price: 845 },
      "2A": { available: 12, waiting: 18, price: 1205 },
      "1A": { available: 3, waiting: 8, price: 2015 }
    }
  },
  {
    number: "12674",
    name: "Pallavan Express",
    from: "Tambaram",
    to: "Chidambaram",
    departure: "11:30",
    arrival: "15:15",
    duration: "4h 45m",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    seats: {
      "SL": { available: 112, waiting: 0, price: 315 },
      "3A": { available: 25, waiting: 8, price: 845 },
      "2A": { available: 12, waiting: 18, price: 1205 },
      "1A": { available: 3, waiting: 8, price: 2015 }
    }
  },
  {
    number: "12674",
    name: "BoatMail Express",
    from: "Tambaram",
    to: "Chidambaram",
    departure: "6:30",
    arrival: "10:15",
    duration: "4h 45m",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    seats: {
      "SL": { available: 12, waiting: 0, price: 315 },
      "3A": { available: 25, waiting: 8, price: 845 },
      "2A": { available: 12, waiting: 18, price: 1205 },
      "1A": { available: 3, waiting: 8, price: 2015 }
    }
  },
   {
    number: "12674",
    name: "Chidambaram Express",
    from: "Tambaram",
    to: "Chidambaram",
    departure: "16:30",
    arrival: "21:15",
    duration: "9h 45m",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    seats: {
      "SL": { available: 143, waiting: 0, price: 315 },
      "3A": { available: 5, waiting: 8, price: 645 },
      "2A": { available: 12, waiting: 18, price: 987 },
      "1A": { available: 3, waiting: 8, price: 1012 }
    }
  },
  {
    number: "16724",
    name: "Anantapuri Express",
    from: "Coimbatore Junction",
    to: "Chennai Central",
    departure: "15:45",
    arrival: "23:30",
    duration: "7h 45m",
    days: ["Mon", "Wed", "Fri", "Sun"],
    seats: {
      "SL": { available: 78, waiting: 5, price: 295 },
      "3A": { available: 18, waiting: 12, price: 795 },
      "2A": { available: 6, waiting: 22, price: 1135 }
    }
  },
  {
    number: "12666",
    name: "Howrah Express",
    from: "Chennai Central",
    to: "Trichy Junction",
    departure: "22:00",
    arrival: "05:45",
    duration: "7h 45m",
    days: ["Tue", "Thu", "Sat"],
    seats: {
      "SL": { available: 89, waiting: 15, price: 265 },
      "3A": { available: 32, waiting: 3, price: 725 },
      "2A": { available: 15, waiting: 8, price: 1025 },
      "1A": { available: 4, waiting: 5, price: 1785 }
    }
  },
  {
    number: "12634",
    name: "Kanyakumari Express",
    from: "Madurai Junction",
    to: "Kanyakumari",
    departure: "06:30",
    arrival: "10:15",
    duration: "3h 45m",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    seats: {
      "SL": { available: 156, waiting: 0, price: 185 },
      "3A": { available: 42, waiting: 2, price: 485 },
      "2A": { available: 28, waiting: 5, price: 685 }
    }
  }
];

function App() {
  const [currentPage, setCurrentPage] = useState("search"); // "search" or "results"
  const [searchParams, setSearchParams] = useState({
    fromStation: "",
    toStation: "",
    travelDate: "",
    coachFilter: "",
    sortBy: "departure"
  });
  const [results, setResults] = useState([]);
  const [paymentStep, setPaymentStep] = useState("payment");
const [paymentData, setPaymentData] = useState({
  method: "",
  cardNumber: "",
  expiryDate: "",
  cvv: "",
  nameOnCard: "",
  upiId: "",
  walletType: ""
});
const [bookingConfirmation, setBookingConfirmation] = useState(null);
  const [selectedTrain, setSelectedTrain] = useState(null);
const [bookingStep, setBookingStep] = useState("coach");
const [bookingData, setBookingData] = useState({
  selectedCoach: "",
  passengers: [{ name: "", age: "", gender: "", berth: "" }]
});

  const handleInputChange = (field, value) => {
    setSearchParams(prev => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
    if (!searchParams.fromStation || !searchParams.toStation) {
      alert("Please select both departure and destination stations");
      return;
    }

    // Filter trains based on search criteria
    const filtered = trains.filter(train => 
      train.from.toLowerCase().includes(searchParams.fromStation.toLowerCase()) &&
      train.to.toLowerCase().includes(searchParams.toStation.toLowerCase())
    );

    setResults(filtered);
    setCurrentPage("results");
  };

  const filterStations = (input) => {
    return stations.filter(station =>
      station.toLowerCase().includes(input.toLowerCase())
    );
  };

  const sortResults = (trains, sortBy) => {
    const sorted = [...trains];
    switch (sortBy) {
      case "departure":
        return sorted.sort((a, b) => a.departure.localeCompare(b.departure));
      case "arrival":
        return sorted.sort((a, b) => a.arrival.localeCompare(b.arrival));
      case "duration":
        return sorted.sort((a, b) => a.duration.localeCompare(b.duration));
      case "price":
        return sorted.sort((a, b) => {
          const priceA = Math.min(...Object.values(a.seats).map(s => s.price));
          const priceB = Math.min(...Object.values(b.seats).map(s => s.price));
          return priceA - priceB;
        });
      default:
        return sorted;
    }
  };

  const getFilteredAndSortedResults = () => {
    let filtered = results;
    
    // Apply coach filter
    if (searchParams.coachFilter) {
      filtered = filtered.filter(train => 
        train.seats && train.seats[searchParams.coachFilter]
      );
    }
    
    // Apply sorting
    return sortResults(filtered, searchParams.sortBy);
  };

  const getSeatStatus = (seatInfo) => {
    if (seatInfo.available > 0) {
      return { status: "available", color: "text-green-600", text: "Available" };
    } else if (seatInfo.waiting > 0) {
      return { status: "waiting", color: "text-orange-600", text: `WL ${seatInfo.waiting}` };
    } else {
      return { status: "unavailable", color: "text-red-600", text: "Unavailable" };
    }
  };

  const handleBookNow = (train) => {
  setSelectedTrain(train);
  setCurrentPage("booking");
  setBookingStep("coach");
};

// Add this function to handle booking form changes
const handleBookingChange = (field, value, passengerIndex = null) => {
  if (passengerIndex !== null) {
    setBookingData(prev => ({
      ...prev,
      passengers: prev.passengers.map((passenger, index) => 
        index === passengerIndex ? { ...passenger, [field]: value } : passenger
      )
    }));
  } else {
    setBookingData(prev => ({ ...prev, [field]: value }));
  }
};

// Add this function to add more passengers
const addPassenger = () => {
  setBookingData(prev => ({
    ...prev,
    passengers: [...prev.passengers, { name: "", age: "", gender: "", berth: "" }]
  }));
};


// Add this function to remove passenger
const removePassenger = (index) => {
  if (bookingData.passengers.length > 1) {
    setBookingData(prev => ({
      ...prev,
      passengers: prev.passengers.filter((_, i) => i !== index)
    }));
  }
};

const handlePaymentChange = (field, value) => {
  setPaymentData(prev => ({ ...prev, [field]: value }));
};

// Add this function to calculate total fare
const calculateTotalFare = () => {
  const basePrice = selectedTrain?.seats[bookingData.selectedCoach]?.price || 0;
  const passengerCount = bookingData.passengers.length;
  const subtotal = basePrice * passengerCount;
  const convenienceFee = Math.round(subtotal * 0.02); // 2% convenience fee
  const gst = Math.round(subtotal * 0.05); // 5% GST
  return {
    basePrice,
    passengerCount,
    subtotal,
    convenienceFee,
    gst,
    total: subtotal + convenienceFee + gst
  };
};

// Add this function to generate PNR
const generatePNR = () => {
  return Math.random().toString(36).substr(2, 10).toUpperCase();
};

// Add this function to handle payment processing
const processPayment = () => {
  if (!paymentData.method) {
    alert("Please select a payment method");
    return;
  }

  // Validate payment details based on method
  if (paymentData.method === "card") {
    if (!paymentData.cardNumber || !paymentData.expiryDate || !paymentData.cvv || !paymentData.nameOnCard) {
      alert("Please fill all card details");
      return;
    }
  } else if (paymentData.method === "upi") {
    if (!paymentData.upiId) {
      alert("Please enter UPI ID");
      return;
    }
  } else if (paymentData.method === "wallet") {
    if (!paymentData.walletType) {
      alert("Please select a wallet");
      return;
    }
  }

  // Simulate payment processing
  const confirmation = {
    pnr: generatePNR(),
    bookingId: `BK${Date.now()}`,
    status: "Confirmed",
    fare: calculateTotalFare(),
    train: selectedTrain,
    coach: bookingData.selectedCoach,
    passengers: bookingData.passengers,
    bookingDate: new Date().toLocaleDateString(),
    paymentMethod: paymentData.method
  };

  setBookingConfirmation(confirmation);
  setPaymentStep("confirmation");
};



  

  if (currentPage === "search") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              🚆 IRCTC Tamil Nadu
            </h1>
            <p className="text-xl text-blue-100">
              Book trains across Tamil Nadu — faster, simpler, and better!
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center font-semibold mb-2 text-blue-100">
                    <span className="mr-2">📍</span>
                    From
                  </label>
                  <input
                    list="fromStations"
                    className="w-full bg-white/90 border border-white/30 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter departure station"
                    value={searchParams.fromStation}
                    onChange={(e) => handleInputChange("fromStation", e.target.value)}
                  />
                  <datalist id="fromStations">
                    {filterStations(searchParams.fromStation).map((station, index) => (
                      <option key={index} value={station} />
                    ))}
                  </datalist>
                </div>

                <div>
                  <label className="flex items-center font-semibold mb-2 text-blue-100">
                    <span className="mr-2">📍</span>
                    To
                  </label>
                  <input
                    list="toStations"
                    className="w-full bg-white/90 border border-white/30 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter destination station"
                    value={searchParams.toStation}
                    onChange={(e) => handleInputChange("toStation", e.target.value)}
                  />
                  <datalist id="toStations">
                    {filterStations(searchParams.toStation).map((station, index) => (
                      <option key={index} value={station} />
                    ))}
                  </datalist>
                </div>
              </div>

              <div>
                <label className="flex items-center font-semibold mb-2 text-blue-100">
                  <span className="mr-2">📅</span>
                  Date of Journey
                </label>
                <input
                  type="date"
                  className="w-full bg-white/90 border border-white/30 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={searchParams.travelDate}
                  onChange={(e) => handleInputChange("travelDate", e.target.value)}
                />
              </div>

              <button
                onClick={handleSearch}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Search Trains
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === "booking") {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setCurrentPage("results")}
            className="flex items-center text-blue-200 hover:text-white transition-colors"
          >
            <span className="mr-1">←</span>
            Back to Results
          </button>
          <h1 className="text-2xl font-bold">Book Your Ticket</h1>
          <div className="w-24"></div>
        </div>

        {/* Selected Train Info */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-6 border border-white/20">
          <h3 className="text-xl font-bold mb-2">{selectedTrain?.name}</h3>
          <div className="flex items-center gap-4 text-sm">
            <span>{selectedTrain?.from} → {selectedTrain?.to}</span>
            <span>{selectedTrain?.departure} - {selectedTrain?.arrival}</span>
            <span>{selectedTrain?.duration}</span>
          </div>
        </div>

        {bookingStep === "coach" && (
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">🚂</span>
              Select Coach Class
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {Object.entries(selectedTrain?.seats || {}).map(([coach, info]) => {
                const seatStatus = getSeatStatus(info);
                const isAvailable = info.available > 0;
                
                return (
                  <div 
                    key={coach}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      bookingData.selectedCoach === coach 
                        ? "bg-blue-500/30 border-blue-400" 
                        : "bg-white/10 border-white/20 hover:bg-white/20"
                    } ${!isAvailable ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={() => isAvailable && handleBookingChange("selectedCoach", coach)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-lg">{coach}</span>
                      <span className={`font-semibold ${seatStatus.color}`}>
                        {seatStatus.text}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-green-400">₹{info.price}</span>
                      {isAvailable && (
                        <span className="text-sm text-blue-200">{info.available} seats available</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => setBookingStep("details")}
              disabled={!bookingData.selectedCoach}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Continue to Passenger Details
            </button>
          </div>
        )}

        {bookingStep === "details" && (
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold flex items-center">
                <span className="mr-2">👥</span>
                Passenger Details
              </h3>
              <button
                onClick={() => setBookingStep("coach")}
                className="text-blue-200 hover:text-white text-sm"
              >
                Change Coach
              </button>
            </div>

            {/* Selected Coach Info */}
            <div className="bg-blue-500/20 rounded-lg p-3 mb-6">
              <span className="font-semibold">Selected: {bookingData.selectedCoach} - ₹{selectedTrain?.seats[bookingData.selectedCoach]?.price}</span>
            </div>

            <div className="space-y-6">
              {bookingData.passengers.map((passenger, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold">Passenger {index + 1}</h4>
                    {bookingData.passengers.length > 1 && (
                      <button
                        onClick={() => removePassenger(index)}
                        className="text-red-400 hover:text-red-300 text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        className="w-full bg-white/90 border border-white/30 px-3 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter full name"
                        value={passenger.name}
                        onChange={(e) => handleBookingChange("name", e.target.value, index)}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Age</label>
                      <input
                        type="number"
                        className="w-full bg-white/90 border border-white/30 px-3 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Age"
                        value={passenger.age}
                        onChange={(e) => handleBookingChange("age", e.target.value, index)}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Gender</label>
                      <select
                        className="w-full bg-white/90 border border-white/30 px-3 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={passenger.gender}
                        onChange={(e) => handleBookingChange("gender", e.target.value, index)}
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Berth Preference</label>
                      <select
                        className="w-full bg-white/90 border border-white/30 px-3 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={passenger.berth}
                        onChange={(e) => handleBookingChange("berth", e.target.value, index)}
                      >
                        <option value="">No Preference</option>
                        <option value="Lower">Lower</option>
                        <option value="Middle">Middle</option>
                        <option value="Upper">Upper</option>
                        <option value="Side Lower">Side Lower</option>
                        <option value="Side Upper">Side Upper</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={addPassenger}
                className="flex-1 bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                + Add Passenger
              </button>
              
              <button
  onClick={() => {
    if (!bookingData.passengers.every(p => p.name && p.age && p.gender)) {
      alert("Please fill all passenger details");
      return;
    }
    setCurrentPage("payment");
    setPaymentStep("payment");
  }}
  disabled={!bookingData.passengers.every(p => p.name && p.age && p.gender)}
  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
>
  Proceed to Payment
</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

  const sortedResults = getFilteredAndSortedResults();
  // This is the complete payment page - add this after your booking page
if (currentPage === "payment") {
  const fareDetails = calculateTotalFare();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setCurrentPage("booking")}
            className="flex items-center text-blue-200 hover:text-white transition-colors"
          >
            <span className="mr-1">←</span>
            Back to Booking
          </button>
          <h1 className="text-2xl font-bold">
            {paymentStep === "payment" ? "Payment" : "Booking Confirmed"}
          </h1>
          <div className="w-24"></div>
        </div>

        {paymentStep === "payment" && (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Payment Methods */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <span className="mr-2">💳</span>
                  Select Payment Method
                </h3>

                {/* Payment Method Selection */}
                <div className="space-y-4 mb-6">
                  <div 
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      paymentData.method === "card" ? "bg-blue-500/30 border-blue-400" : "bg-white/10 border-white/20 hover:bg-white/20"
                    }`}
                    onClick={() => handlePaymentChange("method", "card")}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">💳</span>
                      <span className="font-semibold">Credit/Debit Card</span>
                    </div>
                  </div>

                  <div 
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      paymentData.method === "upi" ? "bg-blue-500/30 border-blue-400" : "bg-white/10 border-white/20 hover:bg-white/20"
                    }`}
                    onClick={() => handlePaymentChange("method", "upi")}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">📱</span>
                      <span className="font-semibold">UPI</span>
                    </div>
                  </div>

                  <div 
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      paymentData.method === "wallet" ? "bg-blue-500/30 border-blue-400" : "bg-white/10 border-white/20 hover:bg-white/20"
                    }`}
                    onClick={() => handlePaymentChange("method", "wallet")}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">👛</span>
                      <span className="font-semibold">Digital Wallet</span>
                    </div>
                  </div>
                </div>

                {/* Payment Details Form */}
                {paymentData.method === "card" && (
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Card Details</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <input
                          type="text"
                          placeholder="Card Number"
                          className="w-full bg-white/90 border border-white/30 px-4 py-3 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          value={paymentData.cardNumber}
                          onChange={(e) => handlePaymentChange("cardNumber", e.target.value)}
                          maxLength="19"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full bg-white/90 border border-white/30 px-4 py-3 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          value={paymentData.expiryDate}
                          onChange={(e) => handlePaymentChange("expiryDate", e.target.value)}
                          maxLength="5"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="CVV"
                          className="w-full bg-white/90 border border-white/30 px-4 py-3 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          value={paymentData.cvv}
                          onChange={(e) => handlePaymentChange("cvv", e.target.value)}
                          maxLength="4"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <input
                          type="text"
                          placeholder="Name on Card"
                          className="w-full bg-white/90 border border-white/30 px-4 py-3 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          value={paymentData.nameOnCard}
                          onChange={(e) => handlePaymentChange("nameOnCard", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentData.method === "upi" && (
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">UPI Details</h4>
                    <input
                      type="text"
                      placeholder="Enter UPI ID (e.g., user@paytm)"
                      className="w-full bg-white/90 border border-white/30 px-4 py-3 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={paymentData.upiId}
                      onChange={(e) => handlePaymentChange("upiId", e.target.value)}
                    />
                  </div>
                )}

                {paymentData.method === "wallet" && (
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Select Wallet</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {["Paytm", "PhonePe", "GooglePay", "AmazonPay"].map(wallet => (
                        <div
                          key={wallet}
                          className={`p-3 rounded-lg border cursor-pointer text-center transition-all ${
                            paymentData.walletType === wallet ? "bg-blue-500/30 border-blue-400" : "bg-white/10 border-white/20 hover:bg-white/20"
                          }`}
                          onClick={() => handlePaymentChange("walletType", wallet)}
                        >
                          {wallet}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Fare Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 sticky top-6">
                <h3 className="text-xl font-bold mb-4">Fare Summary</h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Base Fare ({fareDetails.passengerCount} passengers)</span>
                    <span>₹{fareDetails.subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Convenience Fee</span>
                    <span>₹{fareDetails.convenienceFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GST</span>
                    <span>₹{fareDetails.gst}</span>
                  </div>
                  <div className="border-t border-white/20 pt-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total Amount</span>
                      <span className="text-green-400">₹{fareDetails.total}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={processPayment}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 px-6 rounded-lg mt-6 transition-all duration-300"
                >
                  Pay ₹{fareDetails.total}
                </button>
              </div>
            </div>
          </div>
        )}

        {paymentStep === "confirmation" && bookingConfirmation && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20 text-center">
              <div className="text-6xl mb-4">✅</div>
              <h2 className="text-3xl font-bold text-green-400 mb-2">Booking Confirmed!</h2>
              <p className="text-blue-200 mb-6">Your ticket has been booked successfully</p>
              
              <div className="bg-green-500/20 rounded-lg p-4 mb-6">
                <div className="text-2xl font-bold">PNR: {bookingConfirmation.pnr}</div>
                <div className="text-sm text-green-200">Booking ID: {bookingConfirmation.bookingId}</div>
              </div>

              <div className="text-left space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-blue-200">Train:</span>
                    <div className="font-semibold">{bookingConfirmation.train.name}</div>
                  </div>
                  <div>
                    <span className="text-blue-200">Coach:</span>
                    <div className="font-semibold">{bookingConfirmation.coach}</div>
                  </div>
                  <div>
                    <span className="text-blue-200">Date:</span>
                    <div className="font-semibold">{bookingConfirmation.bookingDate}</div>
                  </div>
                  <div>
                    <span className="text-blue-200">Amount Paid:</span>
                    <div className="font-semibold text-green-400">₹{bookingConfirmation.fare.total}</div>
                  </div>
                </div>

                <div>
                  <span className="text-blue-200">Passengers:</span>
                  <div className="mt-2 space-y-1">
                    {bookingConfirmation.passengers.map((passenger, index) => (
                      <div key={index} className="bg-white/10 rounded p-2 text-sm">
                        {passenger.name} ({passenger.age}) - {passenger.gender}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setCurrentPage("search")}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Book Another Ticket
                </button>
                <button
                  onClick={() => window.print()}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Print Ticket
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setCurrentPage("search")}
            className="flex items-center text-blue-200 hover:text-white transition-colors"
          >
            <span className="mr-1">←</span>
            Back to Search
          </button>
          <h1 className="text-2xl font-bold">Train Search Results</h1>
          <div className="w-24"></div>
        </div>

        {/* Search Summary */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-6 border border-white/20">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="flex items-center">
              <span className="mr-1">📍</span>
              {searchParams.fromStation} → {searchParams.toStation}
            </span>
            {searchParams.travelDate && (
              <span className="flex items-center">
                <span className="mr-1">📅</span>
                {new Date(searchParams.travelDate).toLocaleDateString()}
              </span>
            )}
            <span className="text-blue-200">
              {sortedResults.length} trains found
            </span>
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-6 border border-white/20">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span>🔍</span>
              <span className="font-semibold">Filters:</span>
            </div>
            
            <select
              className="bg-white/20 border border-white/30 px-3 py-2 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={searchParams.coachFilter}
              onChange={(e) => handleInputChange("coachFilter", e.target.value)}
            >
              <option value="">All Classes</option>
              <option value="SL">Sleeper (SL)</option>
              <option value="3A">3rd AC (3A)</option>
              <option value="2A">2nd AC (2A)</option>
              <option value="1A">1st AC (1A)</option>
            </select>

            <select
              className="bg-white/20 border border-white/30 px-3 py-2 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={searchParams.sortBy}
              onChange={(e) => handleInputChange("sortBy", e.target.value)}
            >
              <option value="departure">Sort by Departure</option>
              <option value="arrival">Sort by Arrival</option>
              <option value="duration">Sort by Duration</option>
              <option value="price">Sort by Price</option>
            </select>
          </div>
        </div>

        {/* Results */}
        {sortedResults.length > 0 ? (
          <div className="space-y-4">
            {sortedResults.map((train, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 overflow-hidden">
                <div className="p-6">
                  {/* Train Header */}
                  <div className="flex flex-wrap items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{train.name}</h3>
                      <p className="text-blue-200">#{train.number}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-blue-200">Runs on:</p>
                      <p className="text-white">{train.days.join(", ")}</p>
                    </div>
                  </div>

                  {/* Route and Timing */}
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-blue-200">From</p>
                      <p className="font-semibold">{train.from}</p>
                      <p className="flex items-center text-lg font-bold text-green-400">
                        <span className="mr-1">🕐</span>
                        {train.departure}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-blue-200">Duration</p>
                      <p className="font-semibold text-white">{train.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-blue-200">To</p>
                      <p className="font-semibold">{train.to}</p>
                      <p className="flex items-center justify-end text-lg font-bold text-red-400">
                        <span className="mr-1">🕐</span>
                        {train.arrival}
                      </p>
                    </div>
                  </div>

                  {/* Seat Availability */}
                  <div className="border-t border-white/20 pt-4">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <span className="mr-2">👥</span>
                      Seat Availability & Prices
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {Object.entries(train.seats).map(([coach, info]) => {
                        const seatStatus = getSeatStatus(info);
                        return (
                          <div key={coach} className="bg-white/10 rounded-lg p-3 border border-white/20">
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-semibold text-sm">{coach}</span>
                              <span className={`text-sm font-medium ${seatStatus.color}`}>
                                {seatStatus.text}
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="flex items-center text-sm text-blue-200">
                                <span className="mr-1">₹</span>
                                {info.price}
                              </span>
                              {info.available > 0 && (
                                <span className="text-xs text-green-400">
                                  {info.available} seats
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Book Button */}
                  <div className="mt-4 text-right">
                    <button 
  onClick={() => handleBookNow(train)}
  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
>
  Book Now
</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-blue-200">No trains found for this route.</p>
            <p className="text-blue-300 mt-2">Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}



export default App;