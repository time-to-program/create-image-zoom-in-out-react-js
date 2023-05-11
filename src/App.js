import React from 'react'
import ImageZoomInOut from './ImageZoomInOut'

const IMAGE_URL = 'YOUR_IMAGE_PATH_HERE'

function App() {
  return (
    <div>
      <ImageZoomInOut imageUrl={IMAGE_URL} />
    </div>
  )
}

export default App