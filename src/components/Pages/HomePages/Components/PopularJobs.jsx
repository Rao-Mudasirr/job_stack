import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobCard from './Components/JobCard'

const PopularJobs = () => {
    const PopularJobData = [
        // { id: 1, companyIcon: 'assets/images/company/facebook-logo.png', company: 'Facebook', type: 'Full Time', title: 'Web Designer / Developer', location: 'Australia' },
        // { id: 2, companyIcon: 'assets/images/company/google-logo.png', company: 'Google', type: 'Part Time', title: 'Marketing Director', location: 'USA' },
        // { id: 3, companyIcon: 'assets/images/company/android.png', company: 'Android', type: 'Remote', title: 'Application Developer', location: 'China' },
        // { id: 4, companyIcon: 'assets/images/company/lenovo-logo.png', company: 'Lenovo', type: 'WFH', title: 'Senior Product Designer', location: 'Dubai' },
        // { id: 5, companyIcon: 'assets/images/company/spotify.png', company: 'Spotify', type: 'Full Time', title: 'C++ Developer', location: 'India' },
        // { id: 6, companyIcon: 'assets/images/company/linkedin.png', company: 'Linkedin', type: 'Remote', title: 'Php Developer', location: 'Pakistan' },
        {
            id: "5EQ28KLlDr1mMbknWvXzaZMdeV",
            slug: "dolorem-voluptatibus",
            created_at: "2023-04-05T05:50:19.000000Z",
            title: "Dolorem voluptatibus",
            is_remote: 1,
            deadline: "2023-04-21",
            location: "Ducimus quam in ali",
            salary: "https://www.rusimisyda.co",
            type: "Intern",
            role: {
                id: 4,
                name: "Executive"
            },
            category: {
                id: 11,
                name: "Melissa Herring"
            },
            company: {
                id: "Wer4p96MvKDAb0k3nqbYaEZ1lQ",
                name: "Keith Kramer Inc",
                logo: "https://jobs.orcaloholding.co.uk/admin_assets/images/no_image.png"
            }
        },
        {
            id: "Nd6OgKVR5MQkOeAw4jPz0LWDXG",
            slug: "sit-ipsum-magnam-ess-1",
            created_at: "2023-04-05T05:28:33.000000Z",
            title: "Sit ipsum magnam ess",
            is_remote: 0,
            deadline: "2023-04-29",
            location: "Distinctio Consequu",
            salary: "https://www.dyrizujalycyb.org.au",
            type: "Full Time",
            role: {
                id: 6,
                name: "Administrator"
            },
            category: {
                id: 11,
                name: "Melissa Herring"
            },
            company: {
                id: "Nd6OgKVR5MQkOeAw4jPz0LWDXG",
                name: "Randolph Cote Inc",
                logo: "https://jobs.orcaloholding.co.uk/admin_assets/images/no_image.png"
            }
        }
    ]
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jobs.orcaloholding.co.uk/api/jobs');
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>Error: {error}</div>;
    // }
    console.log(data, 'data')
    return (
        <section className="relative bg-slate-50 dark:bg-slate-800 md:py-24 py-16">
            <div className="container">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Popular Jobs</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
                    {data ?? PopularJobData.map((item) => {
                        return (
                            <div key={item.id}>
                                <JobCard id={item.id} slug={item.slug} companyIcon={item.company?.logo} companyName={item.company?.name} type={item.type} title={item.title} location={item.location} isRemote={item?.is_remote} />
                            </div>
                        )
                    })}
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                    <div className="md:col-span-12 text-center">
                        <a href="job-grid-two.html" className="btn btn-link text-slate-400 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out">See More Jobs <i className="uil uil-arrow-right align-middle"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopularJobs