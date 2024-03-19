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
				<Route path="/:officetelId/" element={<LandingPage />}></Route>
				<Route path="/:officetelId/floor" element={<FloorPage />}></Route>
				<Route path="/:officetelId/calendar" element={<CalendarPage />}></Route>
				<Route path="/:officetelId/time" element={<TimePage />}></Route>
				<Route path="/:officetelId/check" element={<CheckPage />}></Route>
				<Route path="/:officetelId/complete" element={<CompletePage />}></Route>
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
