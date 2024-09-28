import React,{useState,useContext} from 'react'
import '../styles/login.css'
import {Container,Row,Col,Form,FormGroup,Button} from 'reactstrap'
import { Link , useNavigate} from 'react-router-dom'
 import userImg from '../assets/use.png'
 import {AuthContext} from '../context/AuthContext'
 import {BASE_URL} from '../util/config'
const Login = () => {
  const [credentials,setCredentials]=useState({
   email:undefined,
   password:undefined
})
const {dispatch}=useContext(AuthContext)
const navigate=useNavigate()
  const handleChange=e=>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
}
const handleClick =async e=>{
  e.preventDefault()

  dispatch({type:'LOGIN_START'})
  try{
    const res=await fetch(`${BASE_URL}/auth/login`,{
      method:'post',
      headers:{
        'content-type':'application/json'
      },
      credentials:'include',
      body:JSON.stringify(credentials)
    })
    const result=await res.json()
    if(!res.ok) alert(result.message)
  dispatch({type:'LOGIN_SUCCESS',payload:result.data})
navigate('/')
    
  }
  catch(err){
    dispatch({type:'LOGIN_FAILURE',payload:err.message})

  }
  
}
  return <section>
    <Container>
      <Row>
        <Col lg='8'className='m-auto'>
          <div className="login_container d-flex justify-content-between">
            <div className="login_img">
              <img src="https://app.dubbpie.com/assets/images/login-img.png" alt="" />
            </div>
            <div className="login_form">
              <div className="user">
                <img src={userImg} className='im' alt="" />
              </div>
              <h2>Login</h2>
              <Form onSubmit={handleClick}>
                <FormGroup>
                  <input type="email" placeholder='Email' required id='email'
                  onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder='password' required id='password'
                  onChange={handleChange} />
                </FormGroup>
                <Button className='btn secondary_btn auth_btn' type='submit' >Login</Button>
              </Form>
              <p>Don't have an account? <Link to='/register'>Create</Link> </p>
            </div>
          </div>

        
        </Col>
      </Row>
    </Container>
  </section>
}

export default Login