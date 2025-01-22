import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import "./App.css";
import MainPage from "./pages/MainPage"; 
import DetailPage from "./pages/DetailPage"; 

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/restaurant/:id" element={<DetailPage />} />
			</Routes>
		</Router>
	);
}

export default App;
