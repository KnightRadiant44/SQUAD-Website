import React from 'react';
import { Helmet } from 'react-helmet-async';

const ContactUs = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <div className="bg-[rgba(224,252,255)] w-full">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-24 pb-12">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Contact Us!</h1>
                    <div className="lg:pr-12 xl:pr-24">
                        <p className="text-lg lg:text-xl mb-4 text-gray-700">
                            Hi! If you have any inquiries regarding SQUAD or simply wish to learn more about us, don't hesitate to contact
                            us through the email address provided below. We're always ready to assist you.
                        </p>
                        <p className="text-lg lg:text-xl mb-4 text-gray-700">
                            Don't forget to explore our online presence by visiting the social media links we've provided!
                        </p>
                        <p className="text-lg lg:text-xl font-semibold text-gray-800 mb-6">
                            If you're eager to formalize your involvement, join us below to officially join SQUAD and become a member!
                        </p>
                        <div className="mt-8 flex justify-center">
                            <a href="https://clubs.getqpay.com/?tab=memberships&s=8346" target="_blank" rel="noopener noreferrer">
                                <button className="bg-[#47B6FE] hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
                                    Join Us!
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;