import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LandingPage from './pages/LandingPage/LandingPage';
import FloorPage from './pages/FloorPage/FloorPage';
import CalendarPage from './pages/CalendarPage/CalendarPage';
import CompletePage from './pages/CompletePage/CompletePage';
import TimePage from './pages/TimePage/TimePage';
import CheckPage from './pages/CheckPage/CheckPage';

import 'react-calendar/dist/Calendar.css';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route>
				<Route path="/:encryptedOfficetelId/" element={<LandingPage />}></Route>
				<Route
					path="/:encryptedOfficetelId/floor"
					element={<FloorPage />}
				></Route>
				<Route
					path="/:encryptedOfficetelId/calendar"
					element={<CalendarPage />}
				></Route>
				<Route
					path="/:encryptedOfficetelId/time"
					element={<TimePage />}
				></Route>
				<Route
					path="/:encryptedOfficetelId/check"
					element={<CheckPage />}
				></Route>
				<Route
					path="/:encryptedOfficetelId/complete"
					element={<CompletePage />}
				></Route>
			</Route>
		)
	);

	return (
		<RecoilRoot>
			<RouterProvider router={router} />
		</RecoilRoot>
	);
}

export default App;
