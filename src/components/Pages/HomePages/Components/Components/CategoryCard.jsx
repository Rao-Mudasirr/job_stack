import React from 'react'

const CategoryCard = (props) => {
    const { id, title1, title2, job, icon } = props;
    return (
        <div key={id} className="px-3 py-10 rounded-md shadow dark:shadow-gray-700 group text-center bg-white dark:bg-slate-900 hover:bg-emerald-600/5 dark:hover:bg-emerald-600/5 transition duration-500">
            <div className="w-16 h-16 bg-emerald-600/5 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white rounded-md text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700 transition duration-500 mx-auto">
                <i className={`uil ${icon}`}></i>
            </div>

            <div className="content mt-6">
                <a href="category.html" className="title text-lg font-semibold hover:text-emerald-600">{title1} <br /> {title2}</a>
                <p className="text-slate-400 mt-3">{job} Jobs</p>
            </div>
        </div>
    )
}

export default CategoryCard