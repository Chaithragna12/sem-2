import React, { useState } from 'react';
// import React, { useState, useContext } from 'react';

import '../styles/login.css';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
// import { Link, useNavigate } from 'react-router-dom';

import userImg from '../assets/use.png';
// import { AuthContext } from '../context/AuthContext';
// import { BASE_URL } from '../util/config';

const Register = () => {
  const [credentials, setCredentials] = useState({
    userName: '',
    email: '',
    password: ''
  });
  
  // const { dispatch } = useContext(AuthContext);
  // const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    // try {
    //   const res = await fetch(`${BASE_URL}/auth/register`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(credentials)
    //   });

    //   const result = await res.json();

    //   if (!res.ok) {
    //     alert(result.message);
    //     return; // Stop execution if the response is not ok
    //   }

    //   dispatch({ type: 'REGISTER_SUCCESS' });
    //   navigate('/login');
    // } catch (err) {
    //   alert(err.message);
    // }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login_container d-flex justify-content-between">
              <div className="login_img">
                <img src="https://prudigital.in//assets/front/images/login-img.png" alt="" />
              </div>
              <div className="login_form">
                <div className="user" style={{ marginTop: '8px' }}>
                  <img src={userImg} className='im' alt="" />
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder='Username'
                      required
                      id='userName' // Change to lowercase 'u'
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder='Email'
                      required
                      id='email'
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder='Password'
                      required
                      id='password'
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button className='btn secondary_btn auth_btn' type='submit'>Create Account</Button>
                </Form>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register; // Ensure it’s capitalized
