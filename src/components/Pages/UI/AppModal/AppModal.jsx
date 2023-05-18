import React, { useEffect } from 'react'

export const AppModal = ({ children, open, setOpen, setLoaded }) => {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        }
        return () => (document.body.style.overflow = null);
    }, [open]);
    return (
        <>
            {open && <div onClick={() => { setOpen(false); setLoaded && setLoaded(false) }} modal-backdrop="" className="bg-gray-900 z-[1000] bg-opacity-50 dark:bg-opacity-80 fixed inset-0"></div>}
            {open && <div onClick={() => { setOpen(false); setLoaded && setLoaded(false) }} id="hwy0doin-modal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-[1000] p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex" aria-modal="true" role='dialog'>
                <div className="relative w-full max-w-md max-h-full" onClick={e => e.stopPropagation()}>
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 px-6 py-6 lg:px-8">
                        <button onClick={() => { setOpen(false); setLoaded && setLoaded(false) }} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="hwy0doin-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        {open && children}
                    </div>
                </div>
            </div>}
        </>
    )
}
