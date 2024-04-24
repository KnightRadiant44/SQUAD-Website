import React, { useState } from 'react';

const ContactUsBoomBoomPow = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSent, setIsSent] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
        if (name !== '' && email !== '' && message !== '') {
            setIsSent(true);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen px-4 sm:px-0">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3 max-w-full m-4">
                <h2 className="text-2xl mb-4 font-bold text-center">Contact Us!</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
                        {isSubmitted && name === '' && <div className="text-red-500 text-xs mt-1">Name is required.</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {isSubmitted && email === '' && <div className="text-red-500 text-xs mt-1">Email is required.</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea className="shadow appearance-none border rounded w-full h-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)} />
                        {isSubmitted && message === '' && <div className="text-red-500 text-xs mt-1">Message is required.</div>}
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Send
                        </button>
                        {isSent && <div className="text-white bg-green-500 px-3 py-2 rounded mt-2">Sent!</div>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUsBoomBoomPow;