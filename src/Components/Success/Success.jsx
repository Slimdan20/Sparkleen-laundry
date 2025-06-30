import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pickupDate } = location.state || {};

  // Calculate delivery date = pickup + 7 days
  const getDeliveryDate = (pickup) => {
    if (!pickup) return null;
    const date = new Date(pickup + 'T00:00:00');
    date.setDate(date.getDate() + 7);
    return date.toDateString(); // e.g., "Mon Jul 08 2025"
  };

  const formattedPickup = pickupDate ? new Date(pickupDate + 'T00:00:00').toDateString() : null;
  const formattedDelivery = getDeliveryDate(pickupDate);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-deepPurple to-white text-center p-6">
      <img src={Logo} alt="Sparkleen Logo" className="w-28 h-28 mb-6" />

      <h1 className="text-4xl font-bold text-white mb-4">Order Received!</h1>

      <p className="text-lg text-white max-w-xl mb-4">
        Thanks for trusting <span className="font-semibold">Sparkleen</span> with your laundry.
        We’ve received your order and one of our agents will call shortly to confirm your pickup details.
      </p>

      {pickupDate && (
        <div className="bg-white text-deepPurple p-4 rounded shadow-md mb-6 max-w-md w-full">
          <p className="mb-2">📦 <strong>Estimated Pickup:</strong> {formattedPickup}</p>
          <p>🚚 <strong>Estimated Delivery:</strong> {formattedDelivery}</p>
        </div>
      )}

      <button
        onClick={() => navigate('/')}
        className="bg-purple-800 text-white px-6 py-3 rounded shadow"
      >
        Back to Homepage
      </button>
    </div>
  );
};

export default Success;
