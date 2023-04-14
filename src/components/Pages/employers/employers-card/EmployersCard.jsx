import React from 'react'
import { Link } from 'react-router-dom'
import { employersCardData } from '../mockdata'
export const EmployersCard = () => {
    return (
        <>
            {
                employersCardData.map(item => <div className="group relative p-6 rounded-md shadow dark:shadow-gray-700 mt-6">
                    <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md relative -mt-12">
                        <img src={item.logo} className="h-8 w-8" alt="" />
                    </div>

                    <div className="mt-4">
                        <Link href="#" className="text-lg hover:text-emerald-600 font-semibold">{item.name}</Link>
                        <p className="text-slate-400 mt-2">{item.description}</p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between">
                        <span className="text-slate-400"><i className="uil uil-map-marker"></i>{item.location} </span>
                        <span className="block font-semibold text-emerald-600">{item.jobs} Jobs</span>
                    </div>
                </div>)
            }

        </>
    )
}
