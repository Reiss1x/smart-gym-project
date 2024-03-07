import React, { useState } from 'react'

export default function Slider({slides, idx}) {

  const slideStyle = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides.imgs[idx].src})`,
  }

  return (
    <>
      <div style={slideStyle}></div>

    </>
    
    
    
  )
}
