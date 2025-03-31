import Img from 'Components/Img/Img';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from 'Utils/Image';

class Error extends Component {

	render() {

		return <div className="ltn__404-area ltn__404-area-1 mb-120">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="error-404-inner text-center">
							<div className="error-img mb-30">
								<Img
									src={Image.PageNotFound}
									alt="#"
								/>
							</div>
							<h1 className="error-404-title d-none">404</h1>
							<h2>Page Not Found!</h2>
							<p>Oops! The page you are looking for does not exist</p>
							<div className="btn-wrapper go-top">
								<Link to="/dashboard/home" className="btn btn-transparent">
									<i className="fas fa-long-arrow-alt-left" />
									BACK TO HOME
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}

export default Error