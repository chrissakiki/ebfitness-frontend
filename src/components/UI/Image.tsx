import React from 'react'

const Image = ({src, alt, ...rest} : React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img
    src={`${src ? `${import.meta.env.VITE_API_IMAGE_URL + src}` : '/assets/images/functional-training.webp'}`}
    alt={alt ?? 'EB Fitness Team'}
    {...rest}
  />
  )
}

export default Image