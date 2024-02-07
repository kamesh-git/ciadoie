import React from 'react'
import './HeadingComp.css'

const HeadingComp = ({head,pt,icon,img}) => {
    return (
        <div className={`col-12 pt-${pt || "5"}`}>
            <h5 style={{color:'var(--brand-dark-col)'}} className="display-5 text-center p-2">
                {img && <img width={100} src={img} />} {head}
            <hr></hr>
            </h5>
        </div>
    )
}

export default HeadingComp