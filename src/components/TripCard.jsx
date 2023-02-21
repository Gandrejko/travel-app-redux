import tripImage from '../assets/images/iceland.jpg';
import {Link} from "react-router-dom";
export const TripCard = () => {
	return (
		<li data-test-id="trip-card" className="trip-card">
			<img
				data-test-id="trip-card-image"
				src={tripImage}
				alt="trip image"
			/>
			<div className="trip-card__content">
				<div className="trip-info">
					<h3 data-test-id="trip-card-title" className="trip-info__title">
						Iceland
					</h3>
					<div className="trip-info__content">
                  <span
					  data-test-id="trip-card-duration"
					  className="trip-info__duration"
				  >
                    <strong>15</strong> days
                  </span>
						<span data-test-id="trip-card-level" className="trip-info__level">
                    easy
                  </span>
					</div>
				</div>
				<div className="trip-price">
					<span>Price</span>
					<strong
						data-test-id="trip-card-price-value"
						className="trip-price__value"
					>
						7000 $
					</strong>
				</div>
			</div>
			<Link data-test-id="trip-card-link" to="trip/:tripId" className="button">
				Discover a trip
			</Link>
		</li>
	)
}