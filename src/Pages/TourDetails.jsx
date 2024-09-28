import React, { useRef, useState, useEffect, useContext } from 'react';
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import tourData from '../assets/data/tour'; // Import static tour data
import calculateAvgRating from '../util/avgRating';
import Booking from '../components/Booking/Booking';
import Newsletter from '../shared/Newsletter';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../util/config';
import { AuthContext } from '../context/AuthContext';

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef();
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);

  // Fetch tour details from the API
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  // Fallback to static tourData if no tour data is found from API
  const tourDetails = tour || tourData.find(tour => tour.id === id);

  // If tour is fetched, calculate the average rating
  const { totalRating, avgRating } = tourDetails ? calculateAvgRating(tourDetails.reviews) : { totalRating: 0, avgRating: 0 };

  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

   

    try {
      if (!user || user===undefined || user===null) {
        alert("Please sign in");
        return;
      }
  
      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };
      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();

      if (!res.ok) alert(result.message);
      alert(" Success message"); // Success message
    } catch (err) {
      alert(err.message);
    }

    // Clear input after submission
  
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <div className="tour_content">
                {loading && <h4 className='text-center'>Loading...</h4>}
                {error && <h4 className='text-center'>{error}</h4>}
                
                {tourDetails ? (
                  <>
                    <img src={tourDetails.photo} alt={tourDetails.title} />
                    <div className="tour_info">
                      <h2>{tourDetails.title}</h2>
                      <div className='d-flex align-items-center gap-5'>
                        <span className='tour_rating d-flex align-items-center gap-1'>
                          <i className="ri-star-fill" style={{ color: 'var(--secondary-color)' }}></i>
                          {avgRating ? avgRating : 'Not rated'}
                          {totalRating > 0 && <span>({tourDetails.reviews?.length})</span>}
                        </span>
                        <span>
                          <i className="ri-map-pin-user-fill"></i>{tourDetails.address}
                        </span>
                      </div>
                      <div className="tour_extra-details">
                        <span><i className="ri-map-pin-2-line"></i>{tourDetails.city}</span>
                        <span><i className="ri-money-dollar-circle-line"></i>${tourDetails.price} / per person</span>
                        <span><i className="ri-map-pin-time-line"></i>{tourDetails.distance} km</span>
                        <span><i className="ri-group-line"></i>{tourDetails.maxGroupSize} people</span>
                      </div>
                      <h5>Description</h5>
                      <p>{tourDetails.desc}</p>
                    </div>
                    <div className="tour_reviews">
                      <h4>Reviews ({tourDetails.reviews?.length} reviews)</h4>
                      <Form onSubmit={submitHandler}>
                        <div className='d-flex align-items-center gap-3 mb-4 rating_group'>
                          {[1, 2, 3, 4, 5].map(rating => (
                            <span key={rating} onClick={() => setTourRating(rating)}>
                              {rating}<i className="ri-star-s-fill"></i>
                            </span>
                          ))}
                        </div>
                        <div className="review_input">
                          <input type="text" placeholder='Share your thoughts' ref={reviewMsgRef} required />
                          <button className='b' type='submit'>Submit</button>
                        </div>
                      </Form>
                      <ListGroup className='user_reviews'>
                        {tourDetails.reviews?.map((review, index) => (
                          <div className="review_item" key={index}>
                            <img src="https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg" alt="User" />
                            <div className="w-100">
                              <div className='d-flex align-items-center justify-content-between'>
                                <div>
                                  <h5>{review.username}</h5>
                                  <p>{new Date(review.date).toLocaleDateString('en-US', options)}</p>
                                </div>
                                <span className='d-flex align-items-center'>
                                  {review.rating}<i className="ri-star-s-fill"></i>
                                </span>
                              </div>
                              <h6>{review.reviewText}</h6>
                            </div>
                          </div>
                        ))}
                      </ListGroup>
                    </div>
                  </>
                ) : (
                  <h4 className='text-center'>No Tour Found</h4>
                )}
              </div>
            </Col>
            <Col lg='4'>
              {tourDetails && <Booking tour={tourDetails} avgRating={avgRating} />}
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default TourDetails;
