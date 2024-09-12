import React, { useState } from "react";
import SearchBar from "./SearchBar";

const Hero = () => {
    return (
        <>
            <div className="relative bg-white pb-[110px] pt-[50px] dark:bg-dark lg:pt-[50px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 lg:w-5/12">
                            <div className="hero-content">
                                <h1 className="mb-5 text-2xl font-bold !leading-[1.25] text-dark dark:text-white sm:text-[34px] lg:text-[32px] xl:text-[36px]">
                                    Discover the healing power of Indigenous Medicine.
                                </h1>


                                <p className="mb-8 max-w-[480px] text-base text-gray-500 dark:text-gray-50-6">
                                    Bringing the wisdom of Sri Lanka’s Indigenous medical systems into the 21st century, we offer holistic solutions tailored to your unique wellness needs.
                                </p>
                                <SearchBar />
                                {/* CTA BUTTONS */}
                                <ul className="flex flex-wrap items-center mt-6">
                                    <li>
                                        <a
                                            href="/#"
                                            className="inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7"
                                        >
                                            Get Started
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/#"
                                            className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-[#464646] hover:text-primary dark:text-white"
                                        >
                                            <span className="mr-2">
                                                <svg
                                                    width="24"
                                                    height="25"
                                                    viewBox="0 0 24 25"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <circle cx="12" cy="12.6152" r="12" fill="#73a404" />
                                                    <rect
                                                        x="7.99893"
                                                        y="14.979"
                                                        width="8.18182"
                                                        height="1.63636"
                                                        fill="white"
                                                    />
                                                    <rect
                                                        x="11.2717"
                                                        y="7.61523"
                                                        width="1.63636"
                                                        height="4.09091"
                                                        fill="white"
                                                    />
                                                    <path
                                                        d="M12.0898 14.1606L14.9241 11.0925H9.25557L12.0898 14.1606Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                            </span>
                                            Download App
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className="hidden px-4 lg:block lg:w-1/12"></div>
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="lg:ml-auto lg:text-right">
                                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                    <img
                                        src="http://www.ceylonhospital.com/assets/images/after%20(2).png"
                                        alt="hero"
                                        className="max-w-full lg:ml-auto"
                                    />
                                    <span className="absolute -bottom-8 -left-8 z-[-1]">
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;

const SingleImage = ({ href, imgSrc }: { href: string, imgSrc: string }) => {
    return (
        <>
            <a href={href} className="flex w-full items-center justify-center">
                <img src={imgSrc} alt="brand image" className="h-10 w-full" />
            </a>
        </>
    );
};
