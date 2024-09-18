import { Video } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

function DoctorCard() {
    const TimeStamps = [
        { time: "8:30", period: "am" },
        { time: "9:00", period: "am" },
        { time: "9:30", period: "am" },
        { time: "10:00", period: "am" },
        { time: "10:30", period: "am" }
    ];

    return (
        <div className='border border-gray-200 bg-white inline-flex flex-col py-6 px-4 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105'>
            {/* Header section with hover effect */}
            <Link href=''>
                <div className='flex flex-col'>
                    <h2 className='text-xl font-semibold text-gray-800 hover:text-green-700 transition-colors duration-200 ease-in-out'>
                        Dr. Daya Madoluwa
                    </h2>
                </div>
            </Link>


            {/* Doctor info */}
            <div className='flex items-center mt-6 gap-6'>
                <div className="relative">
                    <Image
                        src='https://i.ibb.co/cFmtWvw/doctor-1.jpg'
                        width={243}
                        height={247}
                        alt='Doctor Image'
                        className='w-24 h-24 rounded-full object-cover'
                    />
                    <div className='absolute -bottom-2 -right-2 bg-green-200 text-green-700 w-10 h-10 flex items-center justify-center rounded-full shadow-md'>
                        <Video className='w-6 h-6' />
                    </div>
                </div>

                {/* Details */}
                <div className="flex flex-col gap-2">
                    {/* Dark green highlighted "Orthopedic" */}
                    <span className='bg-green-700 text-white px-3 py-1 rounded-lg'>
                        Orthopedic
                    </span>

                    {/* Smaller "Available Today" with hover effect */}
                    <p className="bg-green-300 text-white py-1 px-3 text-sm uppercase rounded-md transition-all duration-200 ease-in-out hover:bg-green-400">
                        Available Today
                    </p>
                    <span className='text-lg font-semibold text-gray-800'>📅 Tue 22 Mar</span>
                </div>
            </div>

            {/* Consultation Fee */}
            <div className="pt-6 mt-4 border-t border-gray-300">
                <h3 className='flex flex-col gap-2'>
                    <span className='text-lg text-gray-400'>
                        Consultation Fee <span className='line-through'>$28</span>
                    </span>
                    <span className='text-lg text-green-700 font-bold'>
                        $20 <span className='text-green-500'>with CH Care Plus</span>
                    </span>
                </h3>

                {/* Time buttons */}
                <div className="py-3 grid grid-cols-3 gap-3">
                    {TimeStamps.map((item, i) => (
                        <Link key={i} href='#'>
                            <div className='bg-green-300 hover:bg-green-400 text-white py-2 px-4 text-center rounded-lg transition-all duration-200 ease-in-out'>
                                {item.time} {item.period}
                            </div>
                        </Link>
                    ))}
                    <Link href='#'>
                        <div className='bg-gray-200 hover:bg-gray-300 text-center py-2 px-4 rounded-lg transition-all duration-200 ease-in-out'>
                            More times
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DoctorCard;
