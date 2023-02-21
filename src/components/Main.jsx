import {Filter} from "./Filter";
import {Trips} from "./Trips";

export const Main = () => {
	return (
		<main>
			<h1 className="visually-hidden">Travel App</h1>
			<Filter />
			<Trips />
		</main>
	)
}