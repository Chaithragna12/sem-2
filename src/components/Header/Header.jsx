import React from 'react';
// import React, { useRef, useEffect, useContext } from 'react';

import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Header.css';
// import { AuthContext } from '../../context/AuthContext';

const nav_links = [
  { path: '/home', display: 'Home' },
  { path: '/about', display: 'About' },
  { path: '/tours', display: 'Tour' },
];

const Header = () => {
  // const headerRef = useRef(null);
  // const navigate = useNavigate();
  // const { user, dispatch } = useContext(AuthContext);

  // const logout = () => {
  //   dispatch({ type: 'LOGOUT' });
  //   navigate('/');
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (headerRef.current) {
  //       if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
  //         headerRef.current.classList.add('sticky_header');
  //       } else {
  //         headerRef.current.classList.remove('sticky_header');
  //       }
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // console.log('Rendering Header', user); // Debug log

  return (
    // <header className='header' ref={headerRef}>
    <header className='header'>

      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} alt="Logo" className='logoimg' />
            </div>
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <li className='nav_item' key={index}>
                    <NavLink to={item.path}>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className='nav_right d-flex align-items-center gap-4'>
              <div className='nav_btns d-flex align-items-center gap-4'>
                {/* {user ? (
                  <>
                    <h5 className='mb-0'>{user.username}</h5>
                    <Button className='btn btn-dark' onClick={logout}>Logout</Button>
                    <Button className='btn btn-dark' >Logout</Button>

                  </>
                ) : (
                  <> */}
                    <Button style={{ background: '#fff', border: 'none' }}>
                      <Link to='/login'>Login</Link>
                    </Button>
                    <Button style={{ background: 'orange', border: 'none' }}>
                      <Link to='/register'>Register</Link>
                    </Button>
                  {/* </> */}
                {/* )} */}
              </div>
              <div className="mobile_menu">
                <i className="ri-menu-fill"></i>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
