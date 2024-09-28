import React, { useState, useEffect } from 'react';
import CommonSection from '../shared/CommonSection';
import '../styles/tour.css';
import TourCard from '../shared/TourCard';
import SearchBar from '../shared/Searchbar';
import Newsletter from '../shared/Newsletter';
import { Col, Container, Row } from 'reactstrap';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../util/config';
// import tourData from '../assets/data/tour'; // Importing local tour data

const Tour = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  // Use local tour data if there's an error or if tours are not fetched
  const displayedTours = tours || tourData;

  useEffect(() => {
    if (tourCount) {
      const pages = Math.ceil(tourCount / 8);
      window.scrollTo(0,0)

      setPageCount(pages);
    }
  }, [page,tourCount,tours]);

  return (
    <>
      <CommonSection title={'All Tours'} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          {loading && <h4 className='text-center pt-5'>Loading..</h4>}
          {error && <h4 className='text-center pt-5'>{error}.</h4>}
          {!loading && !error && (
            <Row>
              {displayedTours?.map(tour => (
                <Col lg='3' className='mb-4' key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))}
              <Col lg='12'>
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map(number => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? 'active_page' : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Tour;
