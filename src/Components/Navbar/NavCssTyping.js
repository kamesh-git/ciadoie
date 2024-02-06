import React, { useEffect, useRef, useState } from 'react'
import './NavCssTyping.css'

const NavCssTyping = () => {

  const text = document.querySelector(".sec-text");
  const [changeText, setchangeText] = useState('Freelancer')
  const changeClass = useRef(null)

  useEffect(() => {
    const textLoad = () => {
      setTimeout(() => {
        setchangeText('Society of Industrial Engineers')
      }, 0);
      setTimeout(() => {
        setchangeText('Department of Industrial Engineering')
      }, 6000);
      setTimeout(() => {
        setchangeText('Anna University')
      }, 12000);
    }

    textLoad();
    const interval = setInterval(textLoad, 18000);
    return () => clearInterval(interval)
  }, [])
  return (
    <>
      <div className="containertype d-flex justify-content-center">
          <p className='h1' style={{fontSize:'4vw'}}>{changeText}</p>
      </div>
    </>
  )
}

export default NavCssTyping