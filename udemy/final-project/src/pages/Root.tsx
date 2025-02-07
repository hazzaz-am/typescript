import { Outlet } from "react-router-dom";
import MainHeader from "../component/navigation/MainHeader";

export default function Root() {
	return (
		<>
			{/* Todo: Add Header */}
			<MainHeader />
			<Outlet />
		</>
	);
}
