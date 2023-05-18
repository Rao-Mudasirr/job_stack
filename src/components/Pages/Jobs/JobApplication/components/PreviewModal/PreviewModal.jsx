import React, { useCallback, useEffect, useRef, useState } from 'react'
import { AppModal } from '../../../../UI/AppModal/AppModal';
import { iFrameDocs } from '../../constants/constants';
import { AppLoader } from '../../../../UI/AppLoader/AppLoader';

const getExtension = (filename) => {
    return filename?.split('.').pop()
}

export const PreviewModal = ({ imgUrl,className }) => {
    const [openPreview, setOpenPreview] = useState(false);
    const [iframeTimeoutId, setIframeTimeoutId] = useState();
    const [loaded, setLoaded] = useState(false);
    const iframeRef = useRef(null);

    const getIframeLink = useCallback(() => {
        return `https://docs.google.com/gview?url=${imgUrl}&embedded=true`;
    }, [imgUrl])

    const updateIframeSrc = useCallback(() => {
        if (iframeRef?.current?.contentWindow?.document?.body?.innerHTML === "") {
            iframeRef.current.src = getIframeLink();
        }
    }, [getIframeLink])
    const intervalId = setInterval(updateIframeSrc, 1000 * 3);

    useEffect(() => {
        setIframeTimeoutId(intervalId)
    }, [updateIframeSrc,openPreview])
    const iframeLoaded = () => {
        clearInterval(iframeTimeoutId);
        setLoaded(true)
    }
    return (
        <>
            <div className={`flex justify-center ${className}`}><i className="uil uil-eye cursor-pointer hover:text-emerald-600" onClick={() => setOpenPreview(true)}></i></div>
            <AppModal open={openPreview} setLoaded={setLoaded} setOpen={setOpenPreview} >
                {iFrameDocs.includes(getExtension(imgUrl)?.toLowerCase()) ?
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={imgUrl} alt="iknow" />
                    </div>
                    :
                    <div className="iframe-loading">
                        {
                            !loaded &&
                            <div className="flex justify-center items-center fixed top-[48%] left-[49%]">
                                <AppLoader color='rgb(6 78 59 / 0.9)' />
                            </div>
                        }
                        <iframe onLoad={iframeLoaded}
                            onError={updateIframeSrc} className={getExtension(imgUrl)?.toLowerCase()} width="100%" height="500" title={getExtension(imgUrl)?.toLowerCase()} ref={iframeRef}
                            src={getIframeLink()}>There can be some Exception Please Try Again</iframe>
                    </div>
                }
            </AppModal>
        </>
    )
}
