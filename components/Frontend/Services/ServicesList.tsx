import React from 'react'
import ServicesCard from './ServicesCard'

function ServicesList() {
  return (
    <div>
      <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
      <span className="mb-2 block text-lg font-semibold text-primary">
                Our Consultants
              </span>
      </div>
      <ServicesCard/>
    </div>
  )
}

export default ServicesList
