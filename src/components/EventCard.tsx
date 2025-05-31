import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Ticket } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleGetTickets = (e: React.FormEvent) => {
    e.preventDefault();
    // Save the email subscription
    console.log('Email subscription:', email);
    // Close the modal
    setShowModal(false);
    // Reset the form
    setEmail('');
    // Redirect to home
    window.location.href = 'https://www.sydney.com/events';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={event.image} 
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {event.category}
          </span>
        </div>
        <p className="mt-2 text-gray-600">{event.description}</p>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-700">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Clock className="w-4 h-4 mr-2" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{event.venue}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Ticket className="w-4 h-4 mr-2" />
            <span>{event.price}</span>
          </div>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          GET TICKETS
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Get Tickets</h3>
            <form onSubmit={handleGetTickets}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-2 border rounded mb-4"
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Continue to Tickets
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}