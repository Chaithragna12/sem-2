import React from 'react'
import Slider from 'react-slick'
const Testimonials = () => {
    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,
        respnsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,

                },
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                }
            }
        ]
    }
  return <Slider {...settings}>
    <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, fugiat! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, adipisci? </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src="https://photoswalay.com/wp-content/uploads/2024/05/girls-dp-74.jpg" className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Janu</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, fugiat! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, adipisci? </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src="https://dp-pic.com/wp-content/uploads/2024/07/a-boy-standing-infront-of-his-house-in-sadness-boys-dp-new-sad-dp-by-dp-pic-1-300x300.jpg" className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Nani</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, fugiat! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, adipisci? </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src="https://photosbull.com/wp-content/uploads/2024/04/real-girl-pic-photo-images54.webp" className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Maya</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>

  </Slider>
}

export default Testimonials