import React from 'react'

const BlogCard = (props) => {
    const{ id, category, description, company } = props;
    return (
        <div key={id} className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700">
            <div className="relative overflow-hidden">
                <img src="assets/images/blog/01.jpg" className="scale-110 group-hover:scale-100 transition-all duration-500" alt="" />
            </div>

            <div className="relative p-6">
                <div className="absolute left-6 -top-4">
                    <span className="bg-emerald-600 text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">{category}</span>
                </div>

                <div className="">
                    <div className="flex mb-4">
                        <span className="text-slate-400 text-sm"><i className="uil uil-calendar-alt text-slate-900 dark:text-white mr-2"></i>20th February, 2023</span>
                        <span className="text-slate-400 text-sm ml-3"><i className="uil uil-clock text-slate-900 dark:text-white mr-2"></i>5 min read</span>
                    </div>

                    <a href="blog-detail.html" className="title text-lg font-semibold hover:text-emerald-600 duration-500 ease-in-out">{description}</a>

                    <div className="flex justify-between items-center mt-3">
                        <a href="blog-detail.html" className="btn btn-link hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></a>
                        <span className="text-slate-400 text-sm">by <a href="blog.html" className="text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-600 font-medium">{company}</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard