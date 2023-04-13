import React from 'react'
import CategoryCard from './Components/CategoryCard'

const PopularCategories = () => {
  const PopularCategoryData = [
    {
      id: 1,
      title1: 'Business',
      title2: 'Development',
      job: '74',
      icon: 'uil-gitlab'
    },
    {
      id: 2,
      title1: 'Marketing &',
      title2: 'Communication',
      job: '20',
      icon: 'uil-book-open'
    },
    {
      id: 3,
      title1: 'Project',
      title2: 'Management',
      job: '35',
      icon: 'uil-chart-pie-alt'
    },
    {
      id: 4,
      title1: 'Customer',
      title2: 'Service',
      job: '46',
      icon: 'uil-feedback'
    },
    {
      id: 5,
      title1: 'Software',
      title2: 'Engineering',
      job: '60',
      icon: 'uil-presentation-line'
    },
  ]
  return (
    <section className="relative md:py-24 py-16">
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Popular Categories</h3>

          <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
        </div>

        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          {PopularCategoryData.map((item) => {
            return (
              <CategoryCard key={item.id} title1={item.title1} title2={item.title2} icon={item.icon} job={item.job} />
            )
          })}
        </div>
      </div>

      <div className="container md:mt-24 md:pb-16 mt-16">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="lg:col-span-5 md:col-span-6">
            <div className="relative">
              <div className="relative">
                <img src="assets/images/about/ab01.jpg" className="lg:w-[400px] w-[280px] rounded-md shadow dark:shadow-gray-700" alt="" />
                <div className="absolute top-0 translate-y-2/4 right-0 text-center">
                  <a href="#!" data-type="youtube" data-id="yba7hPeTSjk" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white">
                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                  </a>
                </div>
              </div>
              <div className="absolute ltr:md:-right-5 right-0 rtl:md:-left-5 -bottom-16">
                <img src="assets/images/about/ab02.jpg" className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-md shadow dark:shadow-gray-700" alt="" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0">
            <div className="ltr:lg:ml-5 rtl:lg:mr-5">
              <h3 className="mb-6 md:text-[26px] text-2xl md:leading-normal leading-normal font-semibold">Millions of jobs. <br /> Find the one that's right for you.</h3>

              <p className="text-slate-400 max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>

              <ul className="list-none text-slate-400 mt-4">
                <li className="mb-1 flex"><i className="uil uil-check-circle text-emerald-600 text-xl ltr:mr-2 rtl:ml-2"></i> Digital Marketing Solutions for Tomorrow</li>
                <li className="mb-1 flex"><i className="uil uil-check-circle text-emerald-600 text-xl ltr:mr-2 rtl:ml-2"></i> Our Talented & Experienced Marketing Agency</li>
                <li className="mb-1 flex"><i className="uil uil-check-circle text-emerald-600 text-xl ltr:mr-2 rtl:ml-2"></i> Create your own skin to match your brand</li>
              </ul>

              <div className="mt-6">
                <a href="contact.html" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white mt-2 rounded-md"><i className="uil uil-envelope"></i> Contact us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularCategories