// import React from 'react';

import PricingFeatures from "./PricingFeatures";

const PricingCard = ({ pricing }) => {
    console.log(pricing);
    const { name, price, description, features } = pricing;
    return (
        <div className="border bg-cyan-300 px-4 pt-5 mt-5 mx-4 shadow-xl rounded-2xl">

            {/* {Card Header} */}

            <div>
                <h1 className="text-5xl font-semibold pb-2">{name}</h1>
                <h3 className="text-3xl font-semibold">${price}</h3>
            </div>

            {/* Card Body */}

            <div className="bg-amber-200 px-4 py-4 rounded-2xl my-3">
                <p className="text-lg font-semibold text-gray-600">{description}</p>

                {
                    features.map((feature, index) => <PricingFeatures
                        key={index}
                        feature={feature}></PricingFeatures>)
                }

            </div>

        </div>
    );
};

export default PricingCard;