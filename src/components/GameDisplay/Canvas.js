import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
  const { draw, ...rest } = props

  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    draw(context)
  }, [draw])

  return <canvas ref={canvasRef} {...rest} style={{border: "solid 3px #DCD7C9", backgroundColor:"#3F4E4F", borderRadius:"1rem", zIndex:'2'}} height="400px" width="500px" />
}

export default Canvas