import React, { useState } from "react";
import SearchBar from "./SearchBar";
import TransitionalText from "./TransitionalText";

const Hero = () => {
    return (
        <>
            <div className="relative bg-gradient-to-r from-green-700 to-green-950 pb-[110px] pt-[50px] dark:bg-dark lg:pt-[70px]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center">
                        {/* Left Text Section */}
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="hero-content">
                                <h1 className="mb-5 text-4xl font-bold leading-tight text-white dark:text-gray-100 sm:text-[38px] lg:text-[42px] xl:text-[46px]">
                                    <span className="flex flex-wrap">
                                        Book your &nbsp;<TransitionalText />
                                    </span>
                                    <span className="mt-1">Session Now</span>
                                </h1>

                                <p className="mb-8 max-w-[500px] text-lg text-gray-100 dark:text-gray-300">
                                    Bringing the wisdom of Sri Lanka’s Indigenous medical systems into the 21st century, we offer holistic solutions tailored to your unique wellness needs.
                                </p>
                                {/* Search Bar Component */}
                                <SearchBar />

                                {/* CTA Buttons */}
                                <ul className="flex flex-wrap items-center mt-9 space-x-6">
                                    <li>
                                        <a
                                            href="/#"
                                            className="inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-3 text-center text-base font-medium text-white transition-all duration-300 hover:bg-green-700 lg:px-8"
                                        >
                                            Get Started
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/#"
                                            className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-gray-300 transition-all duration-300 hover:text-white dark:text-white"
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

                        {/* Right Image Section */}
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="relative z-10 flex justify-center lg:ml-auto lg:pt-0">
                                <img
                                    src="https://i.ibb.co/PcWY6dr/ayubowan.png"
                                    alt="hero"
                                    className="max-w-full h-auto lg:ml-auto transition-transform duration-300 hover:scale-105"
                                />
                                <span className="absolute -bottom-8 -left-8 z-[-1] w-[150px] h-[150px] bg-gradient-to-r from-green-500 to-green-900 rounded-full opacity-30 lg:opacity-50"></span>
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
