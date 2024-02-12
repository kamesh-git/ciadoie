import React from 'react'

const TitleHeadComp = ({col,head}) => {
    return (
        <div className={`col-12`} >
            <h5 style={{ color: col }} className="display-5 text-center p-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="500" data-aos-duration="500" >
                {head}
            </h5>
        </div>
    )
}

export default TitleHeadComp