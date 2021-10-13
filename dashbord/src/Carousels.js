import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Cards from './Cards';

export default function Carou() {
    return (
        <div>
          <Carousel>
  <Carousel.Item interval={1500} >
    <img
      className="d-block w-100"
      height="620"
      src="	https://realcoderz.com/images/slider/s-4.jpg"
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100"
      height="620"
      src="https://media-exp1.licdn.com/dms/image/C5622AQFfndUVsLVY9A/feedshare-shrink_2048_1536/0/1628068399340?e=1636588800&v=beta&t=CGDz_BHjgli76Qh-KayerS339jPOLqFLfy-zzLqRREc"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100"
      height="620"
      src="https://realcoderz.com/images/slider/s-1.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
<Cards/>

        </div>
    )
}
