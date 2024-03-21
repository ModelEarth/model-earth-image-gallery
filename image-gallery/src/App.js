import React, {useState, useEffect} from 'react'
import useGithubImages from '../hooks/useGithubImages';
import ImageViewer from './components/ImagePageContainer';

/* 
author: Anthony D'Alesandro 
 App() which is an image gallery viewer.
*/
function App() {
  const [selectedImage, setSelectedImage] = useState(-1);
  const githubImages = useGithubImages();

  const handleImageClick = (e,v) => {
    setSelectedImage(e.target.id)
  }

  // ImageViewer conditionally shows the children element if the element passed is null
  return (
    <ImageViewer 
      element={selectedImage == -1 ? null : githubImages[selectedImage]} 
      onUpdate={(change) => setSelectedImage(prev => prev + change)}
      onExit={() => setSelectedImage(-1)}
    >
      <Gallery elements={githubImages} onImageSelect={handleImageClick} />
    </ImageViewer>
  )
}

/*
author: Anthony D'Alesandro

Gallery displays images in a flex format on a page. 250px wide each. Allows an onclick functionality for an image.
*/
function Gallery(props) {
  const {elements, onImageSelect} = props;
  return (<>
    <h1>Image Gallery</h1>
    <div className='image-container'>
      {elements.map((item, index) => {return (
        <img key={index} id={index} src={item.download_url} alt={item} onClick={onImageSelect}/>
        )})}
    </div>
  </>)
}

export default App