import React from 'react'
import { SliderData } from './SliderData'

export default function ImageSlider() {
  return(
    <>
    {SliderData.map((slide, index) => {
        return <img src={slide.image} alt="career images"/>
    })}
    </>
  )
}

