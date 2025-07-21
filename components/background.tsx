/*
 * Legacy (Unused)
 * Decided against this blue blur background idea.
 */


import React from 'react'

const Background = () => {
  return (
    <div className="absolute w-full h-screen overflow-hidden z-[-1]">
      <div className="absolute top-0 left-0 w-full">
        <img
          src="/blue_blur.png"
          alt="Blue blur background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Background