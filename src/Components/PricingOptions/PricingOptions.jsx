// import React from 'react';

import { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingOptions = ({ pricingPromise }) => {

    const pricingData = use(pricingPromise)
    console.log(pricingData);

    return (
        <div>
            <h2 className="text-5xl font-semibold text-center pt-4 pb-2">Get Our Membership</h2>

            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
                {
                    pricingData.map(pricing => <PricingCard
                        key={pricing.id}
                        pricing={pricing}>
                    </PricingCard>)

                }
            </div>

        </div>
    );
};

export default PricingOptions;