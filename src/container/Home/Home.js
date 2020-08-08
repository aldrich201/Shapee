import React, { Fragment } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import CarouselComponent from '../../components/Carousel/Carousel';
import Products from '../../components/Products/Products';
import LatestProducts from '../../components/LatestProducts/LatestProducts';
import Filter from '../../components/Filter/Filter';

import Footer from '../../components/Footer/Footer';

const Home = () => {
	return (
		<Fragment>
			<Navbar />
			<CarouselComponent />
			<LatestProducts />
			<Filter />
			<Products />

			<Footer />
		</Fragment>
	);
};

export default Home;
