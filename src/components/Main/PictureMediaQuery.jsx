import React from 'react'

export default function PictureMediaQuery({ ImgDefault, Img1x, Img075x, Img05x, className, width05, width075, width1 }) {
  return (
    <picture className={className}>
      <source srcSet={Img05x} type="image/webp" media={width05} />
      <source srcSet={Img075x} type="image/webp" media={width075} />
      <source srcSet={Img1x} type="image/webp" media={width1} />
      <img src={ImgDefault} alt="dashboard" />
    </picture>
  )
}