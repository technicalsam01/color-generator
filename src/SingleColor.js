import React, { useState, useEffect } from 'react'
//mport rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  //const hex = rgbToHex(...rgb);
  const haxVlaue = `#${hexColor}`
  useEffect(()=>{
 const timeOut = setTimeout(()=>{
     setAlert(false)
    },3000)
    
    return ()=>{
      clearTimeout(timeOut)
    }
  },[alert])
  return <article
    className={`color ${index < 10 && 'color-light'}`}
    style={{ backgroundColor: `rgb(${bcg})` }}
    onClick={() =>
     { setAlert(true)
      navigator.clipboard.writeText(haxVlaue)}
     }
      >
    <p className='precent-value'>{weight}%</p>
    <p className='color-value'>{haxVlaue}</p>
    {alert && <p className='alert'>copy to clipboard</p>}
  </article>
}

export default SingleColor
