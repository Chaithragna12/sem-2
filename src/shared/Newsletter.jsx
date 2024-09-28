import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import './newsletter.css'
const Newsletter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div  className="newsletter_content">
                    <h2>Subscribe now to get useful traveling information.</h2>
                    <div className="newsletter_input">
                        <input type="email" placeholder='Enter Your Email' />
                        <button className='btn newsletter_btn'>Subscribe</button>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi voluptates cumque atque vitae minima corporis assumenda fugiat numquam ab maiores!</p>
                </div>
            </Col>
            <Col lg='6'>
            <div className="newsletter_img">
                <img  src="https://img.freepik.com/free-psd/travel-agency-flyer-template-psd-with-vacation-photo-modern-style_53876-140108.jpg" alt="" />
            </div>

            </Col>
        </Row>
    </Container>
  </section>
}

export default Newsletter