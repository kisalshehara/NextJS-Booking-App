import React from 'react';
import Link from 'next/link';

function DoctorCard() {
  const doctors = [
    {
      name: "Dr. Daya Madoluwa",
      specialty: "Orthopedic",
      price: "$127",
      discountedPrice: "$127",
      available: "AVAILABLE TODAY",
      times: ["8:30 am", "9:00 am", "9:30 am", "10:00 am"],
      image: "https://i.ibb.co/cFmtWvw/doctor-1.jpg",
      url: "/doctor/dr-daya-madoluwa" // URL to redirect
    },
    {
      name: "Dr. Devinda Hettiarachchi",
      specialty: "Neurology",
      price: "$172",
      discountedPrice: "$162",
      available: "AVAILABLE TODAY",
      times: ["8:30 am", "9:00 am", "9:30 am", "10:00 am", "10:30 am"],
      image: "https://i.ibb.co/800ZTWg/Dr-devinda.jpg",
      url: "/doctor/dr-devinda-hettiarachchi" // URL to redirect
    },
    {
      name: "Dr. Prasanga Karunarathna",
      specialty: "Orthopedic",
      price: "$126",
      discountedPrice: "$116",
      available: "AVAILABLE TOMORROW",
      times: ["8:30 am", "9:00 am", "9:30 am", "10:00 am", "10:30 am"],
      image: "https://i.ibb.co/HN51Y8F/Dr-Prasanga-Karunarathna.jpg",
      url: "/doctor/dr-prasanga-karunarathna" // URL to redirect
    }
  ];

  return (
    <div className="bg-transparent py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doctor, index) => (
          <Link key={index} href={doctor.url} passHref>
            <div
              className="relative p-6 bg-white bg-opacity-60 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer"
            >
              <div className="flex items-center mb-4">
                {/* Display Doctor Image */}
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-green-800">{doctor.name}</h3>
                  <p className="text-gray-600">{doctor.specialty}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-green-700 font-semibold text-lg">
                  {doctor.available}
                </p>
                <span className="block bg-green-100 text-green-600 px-4 py-2 mt-2 rounded-full text-sm">
                  {doctor.discountedPrice} with CH Care Plus
                </span>
              </div>

              <div className="mb-4">
                <p className="line-through text-gray-500">{doctor.price}</p>
                <p className="text-xl font-semibold text-green-600">{doctor.discountedPrice}</p>
              </div>

              {/* Time Slots */}
              <div className="grid grid-cols-3 gap-3">
                {doctor.times.map((time, i) => (
                  <button
                    key={i}
                    className="py-2 px-4 bg-green-500 text-white rounded-full text-sm font-medium hover:bg-green-600 transition"
                  >
                    {time}
                  </button>
                ))}
              </div>

              <div className="mt-4 text-right">
                <span className="text-green-500 hover:text-green-700 transition">
                  More times
                </span>
              </div>

              {/* Decorative Blur in Background */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-white opacity-10 blur-xl"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DoctorCard;
