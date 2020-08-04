import React, { Component, Fragment } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Img1 from '../../carousel-photos/carousel-1.jpeg'
import Img2 from '../../carousel-photos/carousel-2.jpeg'
import Img3 from '../../carousel-photos/carousel-3.jpeg'
import Img4 from '../../carousel-photos/carousel-4.jpeg'

class CarouselComponent extends Component {
	render() {
		return (
      <Fragment>
        <p className="front-text">Latest Clothing Styles</p>
        <p className="sub-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do</p>
      <Carousel 
        infiniteLoop 
        autoPlay 
        interval="3000"
        showStatus={false}
        showThumbs={false}
        stopOnHover={false}
        >
        <div>
            <img src={Img1} alt="img1" className="carousel-img"/>
        </div>
        <div>
            <img src={Img2} alt="img2" className="carousel-img"/>
        </div>
        <div>
            <img src={Img3} alt="img3" className="carousel-img"/>
        </div>
        <div>
            <img src={Img4} alt="img4" className="carousel-img"/>
        </div>
      </Carousel>
      </Fragment>
		);
	  }
};

export default CarouselComponent;
