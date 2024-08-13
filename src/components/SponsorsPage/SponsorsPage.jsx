import React from 'react';
import { Helmet } from 'react-helmet-async';


const SponsorsPage = () => {
    return (
        <div className="pt-24 bg-[rgba(224,252,255)] flex flex-col items-start p-4 pl-12">
            <Helmet>
        <title>Sponsors</title>
    </Helmet>
            <h1 className="text-2xl mb-4 font-bold">Our Sponsors</h1>
            <p className="mb-4">
                The Society of Quantitative Analysis and Data (SQUAD) owes its success to the invaluable partnerships forged 
                with industry pioneers. In an era driven by data-centric decisions and predictive models, our esteemed
                collaborators fuel SQUAD's mission to cultivate the next generation of quantitative experts and data
                scientists, empowering individuals to thrive in a data-driven world.
            </p>
            <p className="mb-4">Fostering excellence in quantitative analysis and data science is the unwavering objective of our club. 
                This pursuit of empowering our members to reach their full potential would be an arduous task without the 
                steadfast backing from our esteemed industry partners.
            </p>
            <p className='font-bold'>
                Interested in sponsoring? Reach out to someemail@gmail.com.
            </p>
        </div>
    );
};

export default SponsorsPage;