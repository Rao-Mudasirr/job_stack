import React from "react";
import { Link } from "react-router-dom";

function JobTest() {
  return (
    <div dir="ltr">
    <section className="relative h-screen flex items-center justify-center  bg-gray-50 dark:bg-slate-800">
      <div className="container relative">
        <div className="grid grid-cols-1">
          <div className="title-heading  my-auto">
            <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-emerald-600/5 border-emerald-600/10">
              <div>
                <div>
                  <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-emerald-600"></span>
  
                  <div className="flex justify-center
                  "></div>
  
                  <div className="flex justify-center mt-4">
                    <p className="max-w-[40ch] text-lg font-bold">
                      Quiz Test
                    </p>
                  </div>
  
                  <div className="grid grid-cols-1 gap-4 mt-6 m-8">
                    <div>
                      <dt className="text-lg font-medium text-gray-600">
                        Name
                      </dt>
                      <dd className="text-sm text-gray-500">
                        Tamara Davenport
                      </dd>
                    </div>
  
                    <div>
                      <dt className="text-lg font-medium text-gray-600">
                        Quiz created Time
                      </dt>
                      <dd className="text-sm text-gray-500">5/3/2023</dd>
                    </div>
  
                    <div>
                      <dt className="text-lg font-medium text-gray-600">
                        Description
                      </dt>
                      <dd className="text-sm text-emerald-600">sdasda</dd>
                    </div>
  
                    <div>
                      <dt className="text-lg font-medium text-gray-600">
                        Total Duration
                      </dt>
                      <dd className="text-sm text-gray-500">60 min</dd>
                    </div>
  
                    <div>
                      <dt className="text-lg font-medium text-gray-600">
                        Total score
                      </dt>
                      <dd className="text-sm text-gray-500">100</dd>
                    </div>
                  </div>
  
                 
                </div>
              </div>
            </div>
  
            <div className="mt-6">
              <Link
                to="/"
                className="btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-full"
                replace={true}
              >
                Start Test
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  

    
  
  );
}

export default JobTest;
