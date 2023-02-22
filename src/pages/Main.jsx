import {Filter} from "../components/Filter";
import {Trips} from "../components/Trips";
export const Main = ({trips}) => {
	return (
		<main>
			<h1 className="visually-hidden">Travel App</h1>
			<Filter />
			<Trips trips={trips}/>
		</main>
	)
}