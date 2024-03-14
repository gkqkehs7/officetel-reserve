import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import InputPage from './pages/InputPage/InputPage';
import CalendarPage from './pages/CalendarPage/CalendarPage';
import LastPage from './pages/LastPage/LastPage';
import TimePage from './pages/TimePage/TimePage';

import 'react-calendar/dist/Calendar.css';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route>
				<Route path="/" element={<LandingPage />}></Route>
				<Route path="/floor" element={<InputPage />}></Route>
				<Route path="/calendar" element={<CalendarPage />}></Route>
				<Route path="/time" element={<TimePage />}></Route>
				<Route path="/complete" element={<LastPage />}></Route>
			</Route>
		)
	);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
