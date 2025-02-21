import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import TransactionPage from "./pages/TransactionPage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/ui/Header";

function App() {
	const authUser = true;
	const location = useLocation();

	// Hide Header on Login and Signup pages
	const hideHeader = location.pathname === "/login" || location.pathname === "/signup";

	return (
		<>
			{authUser && !hideHeader && <Header />}
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/signup' element={<SignUpPage />} />
				<Route path='/transaction/:id' element={<TransactionPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</>
	);
}

export default App;
