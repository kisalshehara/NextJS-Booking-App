import React from "react";

// Define or import the ServiceCard component here
const ServiceCard = ({ title, details, icon }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-8 rounded-lg bg-white p-10 shadow-lg dark:bg-dark">
        <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary text-white">
          {icon}
        </div>
        <h4 className="mb-3 text-xl font-semibold text-dark dark:text-white">
          {title}
        </h4>
        <p className="text-body-color">{details}</p>
      </div>
    </div>
  );
};

const TabbedSection = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px] -mt-[120px]">
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
            title="Refreshing Design"
            details="We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics matter."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.0375 1.2374C11.8125 -0.393851 2.92503 5.7374 1.29378 14.9624C0.450029 19.4061 1.46253 23.9624 4.05003 27.6749C6.63753 31.4436 10.5188 33.9186 14.9625 34.7624C15.975 34.9311 16.9875 35.0436 18 35.0436C26.0438 35.0436 33.2438 29.2499 34.7625 21.0374C36.3938 11.8124 30.2625 2.9249 21.0375 1.2374ZM32.2313 20.5874C32.175 21.0374 32.0625 21.4874 31.95 21.8811L19.2375 17.0999V3.5999C19.6875 3.65615 20.1375 3.7124 20.5313 3.76865C28.4063 5.1749 33.6375 12.7124 32.2313 20.5874ZM16.7063 3.5999V16.7624H3.60003C3.65628 16.3124 3.71253 15.8624 3.76878 15.4124C4.95003 8.83115 10.4063 4.10615 16.7063 3.5999ZM15.4125 32.2311C11.5875 31.5561 8.32503 29.4186 6.13128 26.2124C4.66878 24.1311 3.82503 21.7124 3.60003 19.2374H17.775L31.05 24.2436C28.2938 29.9811 21.9375 33.4686 15.4125 32.2311Z"
                  fill="white"
                />
              </svg>
            }
          />

          <ServiceCard
            title="Based on Tailwind CSS"
            details="We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics matter."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.89195 14.625C10.9995 10.1252 13.769 7.875 18.1996 7.875C24.8458 7.875 25.6765 12.9375 28.9996 13.7812C31.2151 14.3439 33.1535 13.5002 34.815 11.25C33.7075 15.7498 30.9379 18 26.5073 18C19.8611 18 19.0304 12.9375 15.7073 12.0938C13.4918 11.5311 11.5535 12.3748 9.89195 14.625ZM1.58423 24.75C2.69174 20.2502 5.46132 18 9.89195 18C16.5381 18 17.3689 23.0625 20.692 23.9062C22.9075 24.4689 24.8458 23.6252 26.5073 21.375C25.3998 25.8748 22.6302 28.125 18.1996 28.125C11.5535 28.125 10.7227 23.0625 7.39963 22.2188C5.18405 21.6561 3.24576 22.4998 1.58423 24.75Z"
                  fill="white"
                />
              </svg>
            }
          />

          <ServiceCard
            title="100+ Components"
            details="We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics matter."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.2063 1.9126H5.0625C3.15 1.9126 1.575 3.4876 1.575 5.4001V12.5438C1.575 14.4563 3.15 16.0313 5.0625 16.0313H12.2063C14.1188 16.0313 15.6938 14.4563 15.6938 12.5438V5.45635C15.75 3.4876 14.175 1.9126 12.2063 1.9126ZM13.2188 12.6001C13.2188 13.1626 12.7688 13.6126 12.2063 13.6126H5.0625C4.5 13.6126 4.05 13.1626 4.05 12.6001V5.45635C4.05 4.89385 4.5 4.44385 5.0625 4.44385H12.2063C12.7688 4.44385 13.2188 4.89385 13.2188 5.45635V12.6001Z"
                  fill="white"
                />
                <path
                  d="M12.2063 19.9688H5.0625C3.15 19.9688 1.575 21.5438 1.575 23.4563V30.6C1.575 32.5125 3.15 34.0875 5.0625 34.0875H12.2063C14.1188 34.0875 15.6938 32.5125 15.6938 30.6V23.4563C15.75 21.5438 14.175 19.9688 12.2063 19.9688ZM13.2188 30.6C13.2188 31.1625 12.7688 31.6125 12.2063 31.6125H5.0625C4.5 31.6125 4.05 31.1625 4.05 30.6V23.4563C4.05 22.8938 4.5 22.4438 5.0625 22.4438H12.2063C12.7688 22.4438 13.2188 22.8938 13.2188 23.4563V30.6Z"
                  fill="white"
                />
                <path
                  d="M30.9375 1.9126H23.7938C21.8813 1.9126 20.3063 3.4876 20.3063 5.4001V12.5438C20.3063 14.4563 21.8813 16.0313 23.7938 16.0313H30.9375C32.85 16.0313 34.425 14.4563 34.425 12.5438V5.4001C34.425 3.4876 32.85 1.9126 30.9375 1.9126ZM31.95 12.6001C31.95 13.1626 31.5 13.6126 30.9375 13.6126H23.7938C23.2313 13.6126 22.7813 13.1626 22.7813 12.6001V5.45635C22.7813 4.89385 23.2313 4.44385 23.7938 4.44385H30.9375C31.5 4.44385 31.95 4.89385 31.95 5.45635V12.6001Z"
                  fill="white"
                />
                <path
                  d="M30.9375 19.9688H23.7938C21.8813 19.9688 20.3063 21.5438 20.3063 23.4563V30.6C20.3063 32.5125 21.8813 34.0875 23.7938 34.0875H30.9375C32.85 34.0875 34.425 32.5125 34.425 30.6V23.4563C34.425 21.5438 32.85 19.9688 30.9375 19.9688ZM31.95 30.6C31.95 31.1625 31.5 31.6125 30.9375 31.6125H23.7938C23.2313 31.6125 22.7813 31.1625 22.7813 30.6V23.4563C22.7813 22.8938 23.2313 22.4438 23.7938 22.4438H30.9375C31.5 22.4438 31.95 22.8938 31.95 23.4563V30.6Z"
                  fill="white"
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
