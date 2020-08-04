import React from 'react';
import {Link} from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
	return (
		<div className="footer">
			<div className="social-media">
				<a href="https://www.facebook.com/" className="social-media-1" >
					<FacebookIcon style={{ fontSize: 40, color:"#3b5998"}} />
				</a>
				<a href="https://www.twitter.com/" className="social-media-2" >
					<TwitterIcon style={{ fontSize: 40, color:"#1DA1F2"}} />
				</a>
				<a href="https://www.instagram.com/" className="social-media-3">
					<InstagramIcon style={{ fontSize: 40, color:"#bc1888"}} />
				</a>
			</div>

			<div className="terms">
				<Link style={{ textDecoration: 'none' }}>
					<p className="terms-component">Search Our Store</p>
				</Link>

				<Link  style={{ textDecoration: 'none' }}>
					<p className="terms-component">Privacy Policy</p>
				</Link>
				<Link  style={{ textDecoration: 'none' }}>
					<p className="terms-component">Refund Policy</p>
				</Link>
				<Link style={{ textDecoration: 'none' }}>
					<p className="terms-component">Terms of Service</p>
				</Link>
				
				<p>Copyright &copy; 2020 All rights reserved. Shapee. Made by Aldrich Ang with HTML, CSS, and Javascript.  </p>
			</div>
			
		</div>
	);
};

export default Footer;
