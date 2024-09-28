import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from 'reactstrap'
import weatherImg from '../assets/weather.png'
import guideImg from '../assets/guide.png'
import customizeImg from '../assets/custom.png'
const servicesData =[
  {
    imgUrl:weatherImg,
    title:"Calculate Weather",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, libero.",
  },
  {
    imgUrl:guideImg,
    title:"Best Tour Guide",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, libero.",
  },
  {
    imgUrl:customizeImg,
    title:"Customization",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, libero.",
  },
]

const ServiceList = () => {
  return <>
  {
    servicesData.map((item,index)=> <Col lg='3' key={index}>
      <ServiceCard item={item}/>
    </Col>)
  }
  </>
}

export default ServiceList