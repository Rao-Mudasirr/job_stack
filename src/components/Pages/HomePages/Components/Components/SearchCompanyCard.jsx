import React from 'react'

const SearchCompanyCard = (props) => {
    const { id, companyIcon, companyName } = props;
    return (
        <div key={id} className="p-3 rounded shadow dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800">
            <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                    <img src={companyIcon} className="h-8 w-8" alt="" />
                </div>

                <div className="ml-3 rtl:mr-3">
                    <a href="employer-detail.html" className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">{companyName}</a>
                    <span className="block text-sm text-emerald-600">5 Vacancy</span>
                </div>
            </div>
        </div>

    )
}

export default SearchCompanyCard