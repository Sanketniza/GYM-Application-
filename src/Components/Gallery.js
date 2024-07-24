import React from 'react';
import '../App.css';

function Gallery() {
  
  const gallery = [
     "../asetes/img1.webp",
     "../asetes/img2.jpg",
     "../asetes/img3.jpg",
     "../asetes/img4.jpg",
     "../asetes/img5.jpg",
     "../asetes/img6.jpg",
     "../asetes/img7.jpg",
     "../asetes/img8.jpg",
  ];

  return (
    
    <>
        <Gallery>
           <div className="gallery-section">

            <h1>Gallery photo's are on the way</h1>

              <div className="gallery-img">

                <div>
                  {gallery.slice(0, 3).map((img, index) => (
                    <img key = {index} src={img} alt="img" />
                  ))}
                </div>

                <div>
                  {gallery.slice(0, 3).map((img, index) => (
                    <img key = {index} src={img} alt="img" />
                  ))}
                </div>
                
                <div>
                  {gallery.slice(0, 3).map((img, index) => (
                    <img key = {index} src={img} alt="img" />
                  ))}
                </div>

              </div>

           </div>
        </Gallery>
    </>
  )
}

export default Gallery;