import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = () => { 

	return <div className="ltn__coming-soon-area text-dark bg-light bg-image vh-75">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="coming-soon-inner pt-0">
						<div className="section-title-area ltn__section-title-2">
							<h6 className="section-subtitle ltn__secondary-color">Welcome to you</h6>
							<h1 className="section-title text-dark">Coming Soon</h1>
						</div>
						<div className="btn-wrapper mt-50">
							<Link to="/" className="btn btn-danger theme-btn-2 text-uppercase">Back to Home</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
}

export default ComingSoon