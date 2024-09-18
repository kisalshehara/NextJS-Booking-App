"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For smooth animations

const DoctorProfile = () => {
  const [activeTab, setActiveTab] = useState('info');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  // Array to store dates and time slots
  const timeSlots = [
    {
      date: 'Mon Sep 11',
      slots: [
        { time: '8:00 AM', price: '$52' },
        { time: '8:15 AM', price: '$52' },
        { time: '8:30 AM', price: '$52' },
      ],
    },
    {
      date: 'Tue Sep 12',
      slots: [
        { time: '8:00 AM', price: '$52' },
        { time: '8:15 AM', price: '$52' },
        { time: '8:30 AM', price: '$52' },
        { time: '9:00 AM', price: '$52' },
      ],
    },
    {
      date: 'Wed Sep 13',
      slots: [
        { time: '12:00 AM', price: '$52' },
        { time: '12:15 AM', price: '$52' },
        { time: '12:30 AM', price: '$52' },
      ],
    },
  ];

  // Handle Time Slot Selection
  const handleTimeSlotClick = (date, slot) => {
    setSelectedDate(date);
    setSelectedTimeSlot(slot);
  };

  // Animation Variants
  const hoverVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: '#9AE79A',
      transition: {
        duration: 0.2,
      },
    },
    rest: {
      scale: 1,
      backgroundColor: '#DFF2D8',
    },
  };

  return (
    <div className="bg-gray-50 p-6 min-h-screen">
      <div className="bg-white max-w-4xl border border-gray-200 mx-auto shadow-2xl rounded-lg">
        <div className="py-6 flex flex-col items-center">

          {/* Doctor Info Section */}
          <img
            src="https://i.ibb.co/cFmtWvw/doctor-1.jpg"
            alt="Doctor Daya Madoluwa"
            className="rounded-full w-24 h-24 mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Dr. Daya Madoluwa</h2>
          <p className="text-gray-600">Orthopedic Specialist</p>
          <p className="text-gray-600">3250 Lincoln Highway, Kendall Park, NJ 08824</p>

          {/* Tab Navigation */}
          <div className="mt-4 w-full flex justify-center">
            <button
              onClick={() => setActiveTab('info')}
              className={`px-6 py-2 font-semibold ${activeTab === 'info' ? 'text-white bg-green-600' : 'text-gray-600'} rounded-l-full focus:outline-none transition-colors duration-200 ease-in-out`}
            >
              Doctor Info
            </button>
            <button
              onClick={() => setActiveTab('availability')}
              className={`px-6 py-2 font-semibold ${activeTab === 'availability' ? 'text-white bg-green-600' : 'text-gray-600'} rounded-r-full focus:outline-none transition-colors duration-200 ease-in-out`}
            >
              Availability
            </button>
          </div>

          {/* Content Switching */}
          <div className="mt-6 w-full px-8">
            {activeTab === 'info' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-50 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-lg font-bold text-green-700 border-b pb-2 border-green-300">In-person Doctor Visit</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  In-person visit with a doctor or nurse. Suitable for cold, flu, sore throat, UTI, or other immediate health concerns.
                </p>

                <div className="mt-6">
                  <h4 className="font-bold text-green-600 text-md">Included:</h4>
                  <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
                    <li>
                      <span className="font-semibold text-green-600">✔</span> Referral to specialist
                    </li>
                    <li>
                      <span className="font-semibold text-green-600">✔</span> Prescription, if recommended
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="font-bold text-red-600 text-md">Excluded:</h4>
                  <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
                    <li>
                      <span className="font-semibold text-red-600">✖</span> Worker’s comp paperwork
                    </li>
                    <li>
                      <span className="font-semibold text-red-600">✖</span> Controlled substance prescription
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}

            {/* Availability Tab */}
            {activeTab === 'availability' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Available Slots</h3>
                <div className="mt-4 flex justify-center">
                  {timeSlots.map((day, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedDate(day.date)}
                      className={`px-4 py-2 font-semibold ${selectedDate === day.date ? 'text-white bg-green-600' : 'text-gray-600'} rounded-full mx-2 focus:outline-none transition-colors duration-200 ease-in-out`}
                    >
                      {day.date}
                    </button>
                  ))}
                </div>
                {selectedDate && (
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {timeSlots
                      .find((day) => day.date === selectedDate)
                      ?.slots.map((slot, i) => (
                        <motion.button
                          key={i}
                          onClick={() => handleTimeSlotClick(selectedDate, slot)}
                          className={`py-2 px-4 border rounded-lg font-semibold ${selectedTimeSlot === slot ? 'bg-green-600 text-white' : 'bg-gray-100'}`}
                          variants={hoverVariants}
                          initial="rest"
                          whileHover="hover"
                          animate="rest"
                        >
                          {slot.time} - {slot.price}
                        </motion.button>
                      ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Booking Section */}
          {selectedTimeSlot && selectedDate && (
            <motion.div
              className="w-full mt-8 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-green-700">
                Selected: {selectedTimeSlot.time}, {selectedDate}
              </h3>
              <p className="text-gray-500">
                You are about to book an appointment with Dr. Daya Madoluwa for {selectedTimeSlot.time} on {selectedDate}.
              </p>
              <p className="text-gray-500">
                The total cost for this session will be {selectedTimeSlot.price}. Please confirm your booking.
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-green-600 text-white px-6 py-2 rounded-full text-lg font-bold mt-4"
              >
                Confirm & Book
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
