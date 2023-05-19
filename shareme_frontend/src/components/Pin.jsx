import React from 'react'

const Pin = ({ pin }) => {
  return (
    <div>
      <img src={pin.image.asset.url} alt='image'/>
    </div>
  )
}

export default Pin