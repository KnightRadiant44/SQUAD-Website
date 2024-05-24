import React from 'react';

const ContactUs = () => {
    return (
        <div className="pt-24 bg-[rgba(224,252,255)] flex flex-col items-start p-4 pl-12">
            <h1 className="text-2xl mb-4 font-bold">Contact Us!</h1>
            <p className="mb-4">
                Hi! If you have any inquiries regarding SQUAD or simply wish to learn more about us, don't hesitate to contact
                us through the email address provided below. We're always ready to assist you.
            </p>
            <p className="mb-4">Don't forget to explore our online presence by visiting the social media links we've provided!
            </p>
            <p className='font-bold'>
            If you're eager to formalize your involvement, join us below to officially join SQUAD and become a member!
            </p>
            <div className="flex justify-center w-full">
                <a href="https://clubs.getqpay.com/?tab=memberships&s=8346" target="_blank" rel="noopener noreferrer">
                    <button className="bg-[#47B6FE] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full mt-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                        Join Us!
                    </button>
                </a>
            </div>
        </div>
    );
};

export default ContactUs;