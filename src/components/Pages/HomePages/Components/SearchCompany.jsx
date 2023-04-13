import React from 'react'
import SearchCompanyCard from './Components/SearchCompanyCard'

const SearchCompany = () => {
    const SearchCompanyData = [
        { id: 1, companyIcon: 'assets/images/company/spotify.png', companyName: 'Spotify' },
        { id: 2, companyIcon: 'assets/images/company/facebook-logo.png', companyName: 'Facebook' },
        { id: 3, companyIcon: 'assets/images/company/google-logo.png', companyName: 'Google' },
        { id: 4, companyIcon: 'assets/images/company/android.png', companyName: 'Android' },
        { id: 5, companyIcon: 'assets/images/company/lenovo-logo.png', companyName: 'Lenovo' },
        { id: 6, companyIcon: 'assets/images/company/linkedin.png', companyName: 'Linkedin' },
    ]
    return (
        <div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0 md:order-1 order-2">
            <div className="ltr:lg:mr-5 rtl:lg:ml-5">
                <h3 className="mb-6 md:text-[26px] text-2xl md:leading-normal leading-normal font-semibold">Find Best Companies.</h3>

                <p className="text-slate-400 max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-8">
                    {SearchCompanyData.map((item) => {
                        return (
                            <div key={item.id}>
                                <SearchCompanyCard id={item.id} companyIcon={item.companyIcon} companyName={item.companyName} />
                            </div>
                        )
                    })}
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                    <div className="md:col-span-12">
                        <a href="company.html" className="btn btn-link text-slate-400 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out">See More Companies <i className="uil uil-arrow-right align-middle"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchCompany