import React from 'react'

const ServiceStackCard = (props) => {
    const{ id, serviceName, serviceIcon } = props;
    return (
        <div key={id} className="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
            <div className="w-16 h-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-700 rounded-lg transition-all duration-500">
                <i className={`uil ${serviceIcon} text-[30px] text-emerald-600 group-hover:text-white`}></i>
            </div>

            <div className="mt-4">
                <a href="Service.html" className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500">{serviceName}</a>

                <p className="text-slate-400 mt-3 mb-2">Many desktop publishing now use and a search for job.</p>

                <a href="Service.html" className="hover:text-emerald-600 font-medium transition-all duration-500">Read More <i className="uil uil-arrow-right"></i></a>
            </div>
        </div>
    )
}

export default ServiceStackCard