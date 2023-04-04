import React from 'react';

const Signup = () => {
    let date = new Date().getFullYear()
    return(
        <div class="dark:bg-slate-900">
        {/* <!-- Loader Start --> */}
        {/* <!-- <div id="preloader">
            <div id="status">
                <div class="spinner">
                    <div class="double-bounce1"></div>
                    <div class="double-bounce2"></div>
                </div>
            </div>
        </div> --> */}
        {/* <!-- Loader End --> */}
        <section class="h-screen flex items-center justify-center relative overflow-hidden bg-no-repeat bg-center bg-cover">
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <div class="container">
                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    <div class="relative overflow-hidden bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
                        <div class="p-6">
                            <a href="#">
                                <img src="assets/images/logo-dark.png" class="mx-auto h-[24px] block dark:hidden" alt="" />
                                <img src="assets/images/logo-light.png" class="mx-auto h-[24px] dark:block hidden" alt="" />
                            </a>
                            <h5 class="my-6 text-xl font-semibold">Signup</h5>
                            <form action="https://shreethemes.in/jobstack/layouts/signup-success.html" class="text-left">
                                <div class="grid grid-cols-1">
                                    <div class="mb-4 ltr:text-left rtl:text-right">
                                        <label class="font-semibold" for="RegisterName">Your Name:</label>
                                        <input id="RegisterName" type="text" class="form-input mt-3 rounded-md" placeholder="Harry" />
                                    </div>
    
                                    <div class="mb-4 ltr:text-left rtl:text-right">
                                        <label class="font-semibold" for="LoginEmail">Email Address:</label>
                                        <input id="LoginEmail" type="email" class="form-input mt-3 rounded-md" placeholder="name@example.com" />
                                    </div>
    
                                    <div class="mb-4 ltr:text-left rtl:text-right">
                                        <label class="font-semibold" for="LoginPassword">Password:</label>
                                        <input id="LoginPassword" type="password" class="form-input mt-3 rounded-md" placeholder="Password:" />
                                    </div>
    
                                    <div class="mb-4">
                                        <div class="flex items-center w-full mb-0">
                                            <input class="form-checkbox text-emerald-600 rounded w-4 h-4 ltr:mr-2 rtl:ml-2 border border-inherit" type="checkbox" value="" id="AcceptT&C" />
                                            <label class="form-check-label text-slate-400" for="AcceptT&C">I Accept <a href="#" class="text-emerald-600">Terms And Condition</a></label>
                                        </div>
                                    </div>
    
                                    <div class="mb-4">
                                        <input type="submit" class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md w-full" value="Register" />
                                    </div>
    
                                    <div class="text-center">
                                        <span class="text-slate-400 me-2">Already have an account ? </span> <a href="login.html" class="text-black dark:text-white font-bold">Sign in</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                        <div class="px-6 py-2 bg-slate-50 dark:bg-slate-800 text-center">
                            <p class="mb-0 text-gray-400 font-medium">© {date} Jobstack. Designed by <a href="https://shreethemes.in/" target="_blank" class="text-reset">Shreethemes</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--end section --> */}

        <div class="fixed bottom-3 right-3">
            <a href="#" class="back-button btn btn-icon bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md"><i data-feather="arrow-left" class="h-4 w-4"></i></a>
        </div>

        {/* <!-- Switcher --> */}
        <div class="fixed top-1/4 -left-2 z-50 hidden sm:block">
            <span class="relative inline-block rotate-90">
                <input type="checkbox" class="checkbox opacity-0 absolute" id="chk" />
                <label class="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" for="chk">
                    <i class="uil uil-moon text-[20px] text-yellow-500"></i>
                    <i class="uil uil-sun text-[20px] text-yellow-500"></i>
                    <span class="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7"></span>
                </label>
            </span>
        </div>

        <div class="fixed top-1/2 -right-11 z-50 hidden sm:block">
            <a href="https://1.envato.market/jobstack" target="_blank" class="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-700 font-semibold"><i class="mdi mdi-cart-outline mr-1"></i> Download</a>
        </div>
        {/* <!-- Switcher --> */}

        {/* <!-- LTR & RTL Mode Code --> */}
        <div class="fixed top-[40%] -left-3 z-50">
            <a href="#" id="switchRtl">
                <span class="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold rtl:block ltr:hidden" >LTR</span>
                <span class="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold ltr:block rtl:hidden">RTL</span>
            </a>
        </div>
        {/* <!-- LTR & RTL Mode Code --> */}

        {/* <!-- JAVASCRIPTS --> */}
        {/* <script src="assets/libs/feather-icons/feather.min.js"></script>
        <script src="assets/js/plugins.init.js"></script>
        <script src="assets/js/app.js"></script> */}
        {/* <!-- JAVASCRIPTS --> */}
    </div>
    )
}
export default Signup