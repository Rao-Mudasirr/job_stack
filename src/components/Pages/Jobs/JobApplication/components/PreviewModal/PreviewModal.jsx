import React, { useState } from 'react'
import { AppModal } from '../../../../UI/AppModal/AppModal';

const getExtension = (filename) => {
    return filename.split('.').pop()
}
const iFrameDocs = ['png', 'jpg', 'jpeg', 'bmp', 'webp', 'psd'];

export const PreviewModal = ({ imgUrl }) => {
    const [openPreview, setOpenPreview] = useState(false);
    return (
        <>
            <div className="flex ml-6"><i className="uil uil-eye cursor-pointer" onClick={() => setOpenPreview(true)}></i></div>
            <AppModal open={openPreview} setOpen={setOpenPreview} >
                {iFrameDocs.includes(getExtension(imgUrl).toLowerCase()) ?
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={imgUrl} alt="iknow" />
                    </div>
                    : <iframe className={getExtension(imgUrl).toLowerCase()} width="100%" height="500" title={getExtension(imgUrl).toLowerCase()} frameBorder="0" src={`https://docs.google.com/gview?url=${imgUrl}&embedded=true`}></iframe>
                }
            </AppModal>
        </>
    )
}
