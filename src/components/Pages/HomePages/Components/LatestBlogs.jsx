import React from 'react'
import BlogCard from './Components/BlogCard'

const LatestBlogs = () => {
    const LatestBlogData = [
        { id: 1, category: 'Arts', description: '11 Tips to Help You Get New Clients Through Cold Calling', company: 'Google' },
        { id: 2, category: 'Illustration', description: 'DigitalOcean launches first Canadian data centre in Toronto', company: 'Facebook' },
        { id: 3, category: 'Music', description: 'Using Banner Stands To Increase Trade Show Traffic', company: 'Linkedin' },
    ]
    return (
        <div className="container md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Latest Blog or News</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                {LatestBlogData.map((item) => {
                    return (
                        <div key={item.id}>
                            <BlogCard id={item.id} category={item.category} description={item.description} company={item.company} />
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default LatestBlogs