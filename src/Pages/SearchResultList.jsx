// import React, { useState } from 'react';
import React from 'react';

import CommonSection from '../shared/CommonSection';
import { Container, Row, Col } from 'reactstrap'; // Corrected 'COl' to 'Col'
// import { useLocation } from 'react-router-dom';
import TourCard from '../shared/TourCard';
import Newsletter from '../shared/Newsletter'
const SearchResultList = () => {
  // const location = useLocation();
  // const [data] = useState(location.state || []);
  
  // console.log('Tours data:', data); // Add this line to check the data structure

  return (
    <>
      <CommonSection title={'Tour Search Result'} />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4>No tour found</h4>
            ) : (
              data.map((tour) => (
                <Col lg="3" className="mb-4" key={tour.id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>
  );
};

export default SearchResultList;
