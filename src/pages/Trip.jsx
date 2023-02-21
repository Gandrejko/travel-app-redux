import tripImage from '../assets/images/iceland.jpg';

export const Trip = () => {
	return (
		<main class="trip-page">
			<h1 class="visually-hidden">Travel App</h1>
		<div class="trip">
			<img
				data-test-id="trip-details-image"
				src={tripImage}
				class="trip__img"
				alt="trip image"
			/>
			<div class="trip__content">
				<div class="trip-info">
					<h3 data-test-id="trip-details-title" class="trip-info__title">
						Iceland
					</h3>
					<div class="trip-info__content">
				  <span
					  data-test-id="trip-details-duration"
					  class="trip-info__duration"
				  >
					<strong>15</strong> days
				  </span>
						<span data-test-id="trip-details-level" class="trip-info__level">
					easy
				  </span>
					</div>
				</div>
				<div
					data-test-id="trip-details-description"
					class="trip__description"
				>
					An island is a body of land surrounded by water. Continents are also
					surrounded by water, but because they are so big, they are not
					considered islands. Australia, the smallest continent, is more than
					three times the size of Greenland, the largest island. There are
					countless islands in the ocean, lakes, and rivers around the world.
					They vary greatly in size, climate, and the kinds of organisms that
					inhabit them.
				</div>
				<div class="trip-price">
					<span>Price</span>
					<strong
						data-test-id="trip-details-price-value"
						class="trip-price__value"
					>
						7000 $
					</strong>
				</div>
				<button
					data-test-id="trip-details-button"
					class="trip__button button"
				>
					Book a trip
				</button>
			</div>
		</div>
	</main>
	)
}