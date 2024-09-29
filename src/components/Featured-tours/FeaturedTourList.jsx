import React from 'react';
import TourCard from '../../shared/TourCard';
import { Col } from 'reactstrap';
 import tourData from '../../assets/data/tour'
import useFetch from '../../hooks/useFetch';
 import { BASE_URL } from '../../util/config';

const FeaturedTourList = () => {
  // const { data: featuredTours } = useFetch(`${BASE_URL}/tours/search/getFeaturedTour`);
  const { data: featuredTours, loading, error } = useFetch(`${BASE_URL}/tours/search/getFeaturedTour`);

  console.log(featuredTours);

  return (
    <>
       {loading && <h4>Loading.....</h4>}
       {error && <h4>{error}</h4>}
       {!loading && !error && featuredTours &&tourData?.map(tour => (
         <Col lg='3' className='mb-4' key={tour._id}>
           <TourCard tour={tour} />
         </Col>
          ))}

 {/* {featuredTours?.map(tour => (
        <Col lg='3' className='mb-4' key={tour._id}>
          <TourCard tour={tour} />
         </Col>
       ))} */}
    </>
  );
};

 export default FeaturedTourList;


{/* 
const FeaturedTourList = () => {
  // Check if the data is imported correctly
  console.log(tourData);

  return (
    <>
      {tourData && tourData.length > 0 ? (
        tourData.map((tour) => (
          <Col lg="3" className="mb-4" key={tour.id}>
            <TourCard tour={tour} />
          </Col>
        ))
      ) : (
        <h4>No featured tours available</h4>
      )}
    </>
  );
};

export default FeaturedTourList; */}

