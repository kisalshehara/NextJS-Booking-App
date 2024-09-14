import React from "react";

// Define or import the ServiceCard component here
const ServiceCard = ({ title, details, icon }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="relative mb-8 overflow-hidden rounded-2xl bg-white p-10 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:bg-dark/90">
        <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-green-600 text-white shadow-lg">
          {icon}
        </div>
        <h4 className="mb-3 text-xl font-semibold text-gray-800 transition-colors duration-300 dark:text-white">
          {title}
        </h4>
        <p className="text-body-color text-gray-600 dark:text-gray-300">
          {details}
        </p>

        {/* Background Gradient */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 to-green-600 opacity-10 pointer-events-none"></div>
      </div>
    </div>
  );
};


const TabbedSection = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px] -mt-[20px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Services
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <ServiceCard
            title="Online Consultation"
            details="Receive expert medical advice from qualified doctors through our secure online platform. Consult with specialists across various fields, discuss your symptoms, and receive prescriptions without leaving your home."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 3C10.268 3 4 9.268 4 17s6.268 14 14 14 14-6.268 14-14S25.732 3 18 3z"
                  fill="white"
                />
                <path
                  d="M22.5 12.75H20.25V12a1.5 1.5 0 00-3 0v.75H13.5a.75.75 0 00-.75.75v9a.75.75 0 00.75.75h9a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75zm-3.75 7.5H17.25v-1.5h1.5v1.5z"
                  fill="#1F2937"
                />
              </svg>
            }
          />

          <ServiceCard
            title="In-Person Consultation"
            details="For those who prefer face-to-face interaction, we offer in-hospital consultations with our team of experienced doctors. Book your appointments online and visit us for personalized and professional medical care."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 2.25a5.25 5.25 0 015.25 5.25A5.25 5.25 0 0118 12.75a5.25 5.25 0 01-5.25-5.25A5.25 5.25 0 0118 2.25zm10.125 17.625H7.875c-.621 0-1.125.504-1.125 1.125v5.25A5.625 5.625 0 0012.375 32.25h11.25a5.625 5.625 0 005.625-5.625v-5.25c0-.621-.504-1.125-1.125-1.125z"
                  fill="#1F2937"
                />
              </svg>
            }
          />

          <ServiceCard
            title="Medication & Aftercare"
            details="We ensure that our patients receive the right medication and post-treatment care. Whether online or in person, our team will guide you through your recovery process with regular follow-ups and aftercare services."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.75 6A6.75 6.75 0 000 12.75v10.5A6.75 6.75 0 0012.75 30h10.5A6.75 6.75 0 0030 23.25v-10.5A6.75 6.75 0 0023.25 6h-10.5z"
                  fill="white"
                />
                <path
                  d="M18 11.25h1.5v6H18v-6zm-1.5 6h-1.5v-1.5h1.5v1.5zm-3 0h-1.5v-1.5h1.5v1.5zm9 3h1.5v1.5H22.5v-1.5z"
                  fill="#1F2937"
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default TabbedSection;
