import React, { useState } from 'react'
import { AppModal } from '../../../../UI/AppModal/AppModal'
import axios from 'axios';
import { AppLoader } from '../../../../UI/AppLoader/AppLoader';

export const DelConfirmationModal = ({ deletionId, apiRoute, setFieldValue, deletionArray, showSnackbar }) => {
    const [openDel, setOpenDel] = useState(false);
    const [loading, setLoading] = useState(false);
    const { REACT_APP_SITE_URL } = process.env;
    const tokenCheck = localStorage.getItem("token");

    const deleteDetails = () => {
        setLoading(true)
        axios.delete(`${REACT_APP_SITE_URL}/api/${apiRoute}`, {
            headers: {
                "Authorization": `Bearer ${tokenCheck}`,
            },
            data: { id: deletionId }
        },).then(res => {
            setFieldValue(apiRoute === "experience-details" ? "experience_details" : "education_details", deletionArray.filter((item) => item?.id !== deletionId));
            setLoading(false);
            setOpenDel(false);
            showSnackbar({
                title: res?.data?.msg,
                isToggle: true,
                type: res?.data?.status ? "success" : "error",
            })
        }).catch(error => {
            console.log({ error });
        })
    }
    return (
        <>
            <div className="flex justify-center"><i className="uil uil-trash-alt cursor-pointer hover:text-red-600" onClick={() => setOpenDel(true)}></i></div>
            <AppModal open={openDel} setOpen={setOpenDel} >
                <div className="p-6 text-center">
                    <svg aria-hidden="true" className="mx-auto mb-4  w-14 h-14 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <h3 className="mb-5 text-lg font-normal text-gray-500 ">Are you sure you want to delete?</h3>
                    <button onClick={() => deleteDetails()} type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-transparent font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                        Yes, I'm sure {loading && <AppLoader />}
                    </button>
                    <button onClick={() => setOpenDel(false)} type="button" className=" hover:bg-gray-500 focus:ring-4 focus:outline-none rounded-lg border text-sm focus:ring-transparent font-medium px-5 py-2.5  focus:z-10 bg-gray-700 text-gray-300 border-gray-500">No, cancel</button>
                </div>
            </AppModal>
        </>
    )
}
