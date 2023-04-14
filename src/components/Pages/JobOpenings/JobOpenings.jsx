import React from 'react'
import { AppBreadcrumb } from '../app-breadcrumb/AppBreadcrumb';

export const JobOpenings = () => {
  return (
    <>
      <div dir='ltr'>
        <AppBreadcrumb />
        <h1 className='text-4xl font-bold text-center mt-16' >Job Openings</h1>
        <div className="container md:mt-24 md:pb-16 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="col-span-12 mt-14 md:mt-0">
              <div className="text-3xl font-bold">Job Stack</div>
              <div className="text-1xl font-normal">Lorem ipsum dolor si perspiciatis est aut natus minus!</div>
              <div className="text-2xl font-bold">Current Job Openings</div>
              <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px] mt-10">
                <div className="md:col-span-6 mt-14 md:mt-0">
                  <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
                  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:rgb(5 150 105 / var(--tw-text-opacity))!important focus:rgb(5 150 105 / var(--tw-text-opacity))!important block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:rgb(5 150 105 / var(--tw-text-opacity))!important dark:focus:rgb(5 150 105 / var(--tw-text-opacity))!important">
                    <option selected>All Departments</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>                   
                <div className="md:col-span-6 mt-14 md:mt-0">
                  <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Office</label>
                  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:rgb(5 150 105 / var(--tw-text-opacity))!important focus:rgb(5 150 105 / var(--tw-text-opacity))!important block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:rgb(5 150 105 / var(--tw-text-opacity))!important dark:focus:rgb(5 150 105 / var(--tw-text-opacity))!important">
                    <option selected>All Offices</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
