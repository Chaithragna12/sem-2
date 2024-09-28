import React from 'react'
import galleryInages from './galleryInages'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry'
const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry>
        <Masonry gutter='1rem'>
            {
                galleryInages.map((item,index)=>(
                    <img className='masonry_img' src={item} key={index} alt="" style={{'width':'100%','display':'block','borderRadius':'10px'}}/>
                ))
            }
        </Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonryImagesGallery