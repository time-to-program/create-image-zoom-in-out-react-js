import React from 'react'
import ImageZoomInOut from './components/ImageZoomInOut'

const IMAGE_URL = 'IMAGE_LINK_HERE'

function App() {
  return (
    <div>
      <ImageZoomInOut imageUrl={IMAGE_URL} />
    </div>
  )
}

export default App