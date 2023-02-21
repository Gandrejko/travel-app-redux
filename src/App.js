
import {Routes, Route, Link} from "react-router-dom";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Main} from "./components/Main";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
