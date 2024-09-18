import React from 'react'
import SectionHeading from './SectionHeading'
import ToggleButton from './ToggleButton'
import Link from 'next/link'
import DoctorCard from './DoctorCard'

function DoctorsList() {
    return (
        <div>
            <div>
                <div className="bg-gradient-to-b from-green-100 to-green-250 py-8 lg:py-24">
                    <div className="max-w-6xl mx-auto px-4">
                        {/* Flex container for heading and toggle */}
                        <div className="flex items-center justify-between mb-8">
                            {/* Left side: Title and Toggle (stacked vertically) */}
                            <div className="flex flex-col space-y-2">
                                <SectionHeading title="CH Connect Online Consultation" />
                                <div className="flex items-center">
                                    <ToggleButton />
                                    <span className="ml-2">Within Today</span>
                                </div>
                            </div>

                            {/* Right side: See All Button */}
                            <div>
                                <Link className="py-2 px-6 border border-gray-400 rounded bg-white hover:bg-gray-100" href="#">
                                    See All
                                </Link>
                            </div>
                        </div>
                        <div className='py-6'>
                            <DoctorCard />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorsList
