import React from 'react'
import { Link } from 'react-router-dom';

const LockScreen = () => {
  return (
    <div>
        <section className="h-screen flex items-center justify-center relative overflow-hidden ">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className="container">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    <div className="p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
                        <div className="text-center">
                            <img src="assets/images/team/05.jpg" className="mx-auto h-20 w-20 rounded-full shadow dark:shadow-gray-800" alt="" />
                            <h5 className="mb-6 mt-4 text-xl font-semibold">Jenny Jimenez</h5>
                        </div>
                        <form action="https://shreethemes.in/jobstack/layouts/creator-profile.html">
                            <div className="grid grid-cols-1">
                                <div className="mb-4 ltr:text-left rtl:text-right">
                                        <label className="font-semibold" for="LoginPassword">Password:</label>
                                    <input id="LoginPassword" type="password" className="form-input mt-3 rounded-md" required="" placeholder="Password:" />
                                </div>

                                <div className="flex justify-between mb-4">
                                    <div className="inline-flex items-center">
                                        <input className="form-checkbox text-emerald-600 rounded w-4 h-4 ltr:mr-2 rtl:ml-2 border border-inherit" type="checkbox" value="" id="Rememberme" />
                                        <label className="form-check-label text-slate-400" for="Rememberme">Remember me</label>
                                    </div>
                                    <p className="text-slate-400 mb-0"> <Link
                    to="/reset-password" className="text-slate-400">Forgot password ?</Link></p>
                                </div>

                                <div className="mb-4">
                                    <input type="submit" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md w-full" value="Login / Sign in" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default LockScreen;