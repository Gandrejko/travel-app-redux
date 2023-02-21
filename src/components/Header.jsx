import user from '../assets/images/user.svg';
import briefcase from '../assets/images/briefcase.svg';
export const Header = () => {
	return (
		<header className="header">
			<div className="header__inner">
				<a data-test-id="header-logo" href="#" className="header__logo">
					Travel App
				</a>
				<nav data-test-id="header-nav" className="header__nav">
					<ul className="nav-header__list">
						<li className="nav-header__item" title="Bookings">
							<a
								data-test-id="header-bookings-link"
								href="#"
								className="nav-header__inner"
							>
								<span className="visually-hidden">Bookings</span>
								<img src={briefcase} alt=" icon"/>
							</a>
						</li>
						<li className="nav-header__item" title="Profile">
							<div
								data-test-id="header-profile-nav"
								className="nav-header__inner profile-nav"
								tabIndex="0"
							>
								<span className="visually-hidden">Profile</span>
								<img src={user} alt="profile icon"/>
								<ul
									data-test-id="header-profile-nav-list"
									className="profile-nav__list"
								>
									<li
										data-test-id="header-profile-nav-username"
										className="profile-nav__item profile-nav__username"
									>
										John Doe
									</li>
									<li className="profile-nav__item">
										<a
											data-test-id="header-profile-nav-sign-out"
											href="#"
											className="profile-nav__sign-out button"
										>
											Sign Out
										</a>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}