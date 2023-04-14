/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import { Link } from 'react-router-dom'

export const EmployerDetails = () => {
  return (
    <div dir='ltr'>
      <section className="relative table w-full py-36 ">
        <div className="absolute inset-0 bg-emerald-900/90"></div>
      </section>
      <div className="relative">
        <div className="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-white dark:text-slate-900">
          <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
      <section className="relative mb:pb-24 pb-16 z-1 -top-14">
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="md:flex justify-between items-center shadow dark:shadow-gray-700 rounded-md p-6 bg-white dark:bg-slate-900">
              <div className="flex items-center">
                <img src="assets/images/company/skype.png" className="h-20 w-20 p-3 shadow dark:shadow-gray-700 rounded-md bg-slate-50 dark:bg-slate-800" alt="" />

                <div className="ltr:ml-4 ml-4">
                  <h5 className="text-xl font-bold">Skype</h5>
                  <h6 className="text-base text-slate-400"><i className="uil uil-map-marker"></i> Canberra, Australia</h6>
                </div>
              </div>

              <div className="md:mt-0 mt-4">
                <Link href="#" className="btn btn-sm bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md">Follow</Link>
                <Link href="#" className="btn btn-sm bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md ltr:ml-1 ml-1">See Jobs</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-12">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-8 md:col-span-7">
              <h5 className="text-xl font-semibold">Company Story</h5>
              <p className="text-slate-400 mt-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.</p>
              <p className="text-slate-400 mt-2">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.</p>

              <div className="grid grid-cols-12 gap-6 mt-6">
                <div className="col-span-12">
                  <img src="assets/images/company/1.jpg" className="rounded-md shadow dark:shadow-gray-700" alt="" />
                </div>
                <div className="col-span-6">
                  <img src="assets/images/company/2.jpg" className="rounded-md shadow dark:shadow-gray-700" alt="" />
                </div>
                <div className="col-span-6">
                  <img src="assets/images/company/3.jpg" className="rounded-md shadow dark:shadow-gray-700" alt="" />
                </div>
              </div>

              <h5 className="text-xl font-semibold mt-6">Vacancies:</h5>

              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6">
                <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                  <div className="p-6">
                    <Link href="#" className="title h5 text-lg font-semibold hover:text-emerald-600">Software Engineering</Link>
                    <p className="text-slate-400 mt-2"><i className="uil uil-clock text-emerald-600"></i> Posted 3 Days ago</p>

                    <div className="flex justify-between items-center mt-4">
                      <span className="bg-emerald-600/5 text-emerald-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">Full Time</span>

                      <p className="text-slate-400"><i className="uil uil-usd-circle text-emerald-600"></i> $950 - $1100/mo</p>
                    </div>
                  </div>

                  <div className="flex items-center p-6 border-t border-gray-100 dark:border-gray-700">
                    <img src="assets/images/company/skype.png" className="h-12 w-12 shadow-md dark:shadow-gray-800 rounded-md p-2 bg-white dark:bg-slate-900" alt="" />

                    <div className="ltr:ml-3 ml-3">
                      <h6 className="mb-0 font-semibold text-base">Skype</h6>
                      <span className="text-slate-400 text-sm">Australia</span>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                  <div className="p-6">
                    <Link href="#" className="title h5 text-lg font-semibold hover:text-emerald-600">Web Developer</Link>
                    <p className="text-slate-400 mt-2"><i className="uil uil-clock text-emerald-600"></i> Posted 3 Days ago</p>

                    <div className="flex justify-between items-center mt-4">
                      <span className="bg-emerald-600/5 text-emerald-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">Remote</span>

                      <p className="text-slate-400"><i className="uil uil-usd-circle text-emerald-600"></i> $2500 - $2600/mo</p>
                    </div>
                  </div>

                  <div className="flex items-center p-6 border-t border-gray-100 dark:border-gray-700">
                    <img src="assets/images/company/skype.png" className="h-12 w-12 shadow-md dark:shadow-gray-800 rounded-md p-2 bg-white dark:bg-slate-900" alt="" />

                    <div className="ltr:ml-3 ml-3">
                      <h6 className="mb-0 font-semibold text-base">Skype</h6>
                      <span className="text-slate-400 text-sm">America</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-md shadow dark:shadow-gray-800 mt-8">
                <h5 className="text-xl font-semibold">Leave A Comment:</h5>

                <form className="mt-8">
                  <div className="grid lg:grid-cols-12 lg:gap-6">
                    <div className="lg:col-span-6 mb-5">
                      <div className="text-left">
                        <label htmlFor="name" className="font-semibold">Your Name:</label>
                        <div className="form-icon relative mt-2">
                          <i data-feather="user" className="w-4 h-4 absolute top-3 left-4"></i>
                          <input name="name" id="name" type="text" className="form-input pl-11" placeholder="Name :" />
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-6 mb-5">
                      <div className="text-left">
                        <label htmlFor="email" className="font-semibold">Your Email:</label>
                        <div className="form-icon relative mt-2">
                          <i data-feather="mail" className="w-4 h-4 absolute top-3 left-4"></i>
                          <input name="email" id="email" type="email" className="form-input pl-11" placeholder="Email :" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1">
                    <div className="mb-5">
                      <div className="text-left">
                        <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                        <div className="form-icon relative mt-2">
                          <i data-feather="message-circle" className="w-4 h-4 absolute top-3 left-4"></i>
                          <textarea name="comments" id="comments" className="form-input pl-11 h-28" placeholder="Message :"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit" id="submit" name="send" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md w-full">Send Message</button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-4 md:col-span-5">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-700 p-6 sticky top-20">
                <div className="w-full leading-[0] border-0">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{ border: 0 }} className="w-full h-[350px] rounded-md shadow dark:shadow-gray-700" allowFullScreen></iframe>
                </div>

                <ul className="list-none mt-4">
                  <li className="flex justify-between mt-2">
                    <span className="text-slate-400 font-medium">Founded:</span>
                    <span className="font-medium">2003</span>
                  </li>

                  <li className="flex justify-between mt-2">
                    <span className="text-slate-400 font-medium">Founder:</span>
                    <span className="font-medium">Niklas Zennström</span>
                  </li>

                  <li className="flex justify-between mt-2">
                    <span className="text-slate-400 font-medium">Headquarters:</span>
                    <span className="font-medium">Luxembourg</span>
                  </li>

                  <li className="flex justify-between mt-2">
                    <span className="text-slate-400 font-medium">Number of employees:</span>
                    <span className="font-medium">788</span>
                  </li>

                  <li className="flex justify-between mt-2">
                    <span className="text-slate-400 font-medium">Website:</span>
                    <span className="font-medium">https://skype.com</span>
                  </li>

                  <li className="flex justify-between mt-2">
                    <span className="text-slate-400 font-medium">Social:</span>

                    <ul className="list-none ltr:text-right rtl:text-left">
                      <li className="inline"><Link href="https://dribbble.com/shreethemes" target="_blank" className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"><i className="uil uil-dribbble align-middle" title="dribbble"></i></Link></li>
                      <li className="inline mx-[0.15rem]"><Link href="https://www.behance.net/shreethemes" target="_blank" className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"><i className="uil uil-behance" title="Behance"></i></Link></li>
                      <li className="inline"><Link href="http://linkedin.com/company/shreethemes" target="_blank" className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"><i className="uil uil-linkedin" title="Linkedin"></i></Link></li>
                      <li className="inline mx-[0.15rem]"><Link href="https://www.facebook.com/shreethemes" target="_blank" className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"><i className="uil uil-facebook-f align-middle" title="facebook"></i></Link></li>
                      <li className="inline"><Link href="https://www.instagram.com/shreethemes/" target="_blank" className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"><i className="uil uil-instagram align-middle" title="instagram"></i></Link></li>
                      <li className="inline mx-[0.15rem]"><Link href="https://twitter.com/shreethemes" target="_blank" className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"><i className="uil uil-twitter align-middle" title="twitter"></i></Link></li>
                      <li className="inline"><Link href="mailto:support@shreethemes.in" className="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400"><i className="uil uil-envelope align-middle" title="email"></i></Link></li>
                    </ul>
                  </li>
                </ul>

                <div className="mt-4 pt-2 border-t dark:border-t-gray-700">
                  <h5 className="text-lg font-semibold">Contact us</h5>

                  <form method="post" name="myForm" id="myForm" className="mt-4" onSubmit={() => true}>
                    <p className="mb-0" id="error-msg"></p>
                    <div id="simple-msg"></div>
                    <div className="grid grid-cols-1 gap-2">
                      <div>
                        <label htmlFor="name2" className="font-semibold">Your Name:</label>
                        <input name="name" id="name2" type="text" className="form-input mt-2" placeholder="Name :" />
                      </div>

                      <div>
                        <label htmlFor="email2" className="font-semibold">Your Email:</label>
                        <input name="email" id="email2" type="email" className="form-input mt-2" placeholder="Email :" />
                      </div>

                      <div>
                        <label htmlFor="subject" className="font-semibold">Your Question:</label>
                        <input name="subject" id="subject" className="form-input mt-2" placeholder="Subject :" />
                      </div>

                      <div>
                        <label htmlFor="comments2" className="font-semibold">Your Comment:</label>
                        <textarea name="comments" id="comments2" className="form-input mt-2 textarea" placeholder="Message :"></textarea>
                      </div>
                    </div>
                    <button type="submit" id="submit2" name="send" className="btn bg-emerald-600 hover:bg-emerald-700 text-white rounded-md">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container lg:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Related Companies</h3>

            <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px] mt-8">
            <div className="group relative p-6 rounded-md shadow dark:shadow-gray-700 mt-6">
              <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md relative -mt-12">
                <img src="assets/images/company/circle-logo.png" className="h-8 w-8" alt="" />
              </div>

              <div className="mt-4">
                <Link href="#" className="text-lg hover:text-emerald-600 font-semibold">Circle CI</Link>
                <p className="text-slate-400 mt-2">Digital Marketing Solutions for Tomorrow</p>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between">
                <span className="text-slate-400"><i className="uil uil-map-marker"></i> Pakistan</span>
                <span className="block font-semibold text-emerald-600">6 Jobs</span>
              </div>
            </div>

            <div className="group relative p-6 rounded-md shadow dark:shadow-gray-700 mt-6">
              <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md relative -mt-12">
                <img src="assets/images/company/telegram.png" className="h-8 w-8" alt="" />
              </div>

              <div className="mt-4">
                <Link href="#" className="text-lg hover:text-emerald-600 font-semibold">Telegram</Link>
                <p className="text-slate-400 mt-2">Digital Marketing Solutions for Tomorrow</p>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between">
                <span className="text-slate-400"><i className="uil uil-map-marker"></i> India</span>
                <span className="block font-semibold text-emerald-600">6 Jobs</span>
              </div>
            </div>

            <div className="group relative p-6 rounded-md shadow dark:shadow-gray-700 mt-6">
              <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md relative -mt-12">
                <img src="assets/images/company/whatsapp.png" className="h-8 w-8" alt="" />
              </div>
              <div className="mt-4">
                <Link href="#" className="text-lg hover:text-emerald-600 font-semibold">Whatsapp</Link>
                <p className="text-slate-400 mt-2">Digital Marketing Solutions for Tomorrow</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between">
                <span className="text-slate-400"><i className="uil uil-map-marker"></i> Rush</span>
                <span className="block font-semibold text-emerald-600">6 Jobs</span>
              </div>
            </div>
            <div className="group relative p-6 rounded-md shadow dark:shadow-gray-700 mt-6">
              <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md relative -mt-12">
                <img src="assets/images/company/spotify.png" className="h-8 w-8" alt="" />
              </div>
              <div className="mt-4">
                <Link href="#" className="text-lg hover:text-emerald-600 font-semibold">Spotify</Link>
                <p className="text-slate-400 mt-2">Digital Marketing Solutions for Tomorrow</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between">
                <span className="text-slate-400"><i className="uil uil-map-marker"></i> Turkey</span>
                <span className="block font-semibold text-emerald-600">6 Jobs</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid md:mt-24 mt-16">
          <div className="container">
            <div className="grid grid-cols-1">
              <div className="relative overflow-hidden lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                  <div className="lg:col-span-8 md:col-span-7">
                    <div className="ltr:md:text-left rtl:md:text-right relative z-1">
                      <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">Explore a job now!</h3>
                      <p className="text-slate-400 max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                    </div>
                  </div>
                  <div className="lg:col-span-4 md:col-span-5">
                    <div className="ltr:text-right rtl:text-left relative z-1">
                      <Link href="employer-detail.html" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md">Apply Now</Link>
                      <Link href="aboutus.html" className="btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md ltr:ml-2 ml-2">Learn More</Link>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-5 ltr:-left-5 rtl:-right-5">
                  <div className="uil uil-envelope lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45"></div>
                </div>
                <div className="absolute -bottom-5 ltr:-right-5 rtl:-left-5">
                  <div className="uil uil-pen lg:text-[150px] text-7xl text-black/5 dark:text-white/5 rtl:-rotate-90"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
