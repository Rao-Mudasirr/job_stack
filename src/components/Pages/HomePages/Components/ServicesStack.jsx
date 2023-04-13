import React from 'react'
import ServiceStackCard from './Components/ServiceStackCard'

const ServicesStack = () => {
    const ServicesStackData = [
        { id: 1, serviceName: '24/7 Support', serviceIcon: 'uil-phone' },
        { id: 2, serviceName: 'Tech & Startup Jobs', serviceIcon: 'uil-atom' },
        { id: 3, serviceName: 'Quick & Easy', serviceIcon: 'uil-user-arrows' },
        { id: 4, serviceName: 'Save Time', serviceIcon: 'uil-hourglass' },
    ]
    return (
        <div className="container md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Here's why you'll love it Jobstack</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                {ServicesStackData.map((item) => {
                    return (
                        <div key={item.id}>
                            <ServiceStackCard id={item.id} serviceName={item.serviceName} serviceIcon={item.serviceIcon} />
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default ServicesStack