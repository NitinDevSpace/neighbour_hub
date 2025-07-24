import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import ItemDetails from "./Pages/ItemDetails";
import AddItem from "./Pages/AddItem";
import MyRequests from "./Pages/MyRequests";
import UserProfile from "./Pages/UserProfile";
import NotFound from "./Pages/404NotFound";
import NavBar from "./Components/NavBar";

function App() {
	return (
    <>
      <NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/items/:id" element={<ItemDetails />} />
				<Route path="/add-item" element={<AddItem />} />
				<Route path="/my-requests" element={<MyRequests />} />
				<Route path="/profile" element={<UserProfile />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
