import React from 'react';
import SectionHeading from './SectionHeading';
import ToggleButton from './ToggleButton';
import Link from 'next/link';
import DoctorCard from './DoctorCard';

function DoctorsList({
  title = 'CH Connect Online',
  isInPerson,
  className = 'bg-gradient-to-b from-green-100 to-green-250 py-8 lg:py-24',
}: {
  title?: string;
  isInPerson?: boolean;
  className?: string;
}) {
  // Example array of doctors (this would normally come from props or API)
  const doctors = [
    { name: 'Jhon1' },
    { name: 'Jhon2' },
    { name: 'Jhon3' },
    { name: 'Jhon4' },
    { name: 'Jhon5' },
    { name: 'Jhon6' },
  ];

  return (
    <div className={className}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Flex container for heading and toggle */}
        <div className="flex items-center justify-between mb-8">
          {/* Left side: Title and Toggle (stacked vertically) */}
          <div className="flex flex-col space-y-2">
            <SectionHeading title={title} />
            <div className="flex items-center">
              <ToggleButton />
              <span className="ml-2">Within Today</span>
            </div>
          </div>

          {/* Right side: See All Button */}
          <div>
            <Link
              className="py-2 px-6 border border-gray-400 rounded bg-white hover:bg-gray-100"
              href="#"
            >
              See All
            </Link>
          </div>
        </div>

        {/* Doctor cards - map through doctors */}
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor, i) => (
            <DoctorCard key={i} isInPerson={isInPerson} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DoctorsList; 