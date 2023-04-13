import React from 'react'

const HeroStyleCard = (props) => {
    const{ id, mainDiv, subDiv, icon } = props;
    return (
        <div key={id} className={`absolute ${mainDiv}`}>
            <div className={`w-10 h-10 ${subDiv} bg-white dark:bg-slate-900 flex items-center justify-center shadow dark:shadow-gray-700 rounded-md`}>
                <img src={icon} className="h-6 w-6" alt="" />
            </div>
        </div>
    )
}

export default HeroStyleCard