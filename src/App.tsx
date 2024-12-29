import { Outlet } from "react-router";
import Navbar from "./components/main/Navbar";
import Sidebar from "./components/main/sidebar/Sidebar";

export default function App() {
  return (
    <div className="flex">
      <div className="min-h-screen">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full h-screen">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="p-10 flex-1 border container mx-auto rounded-lg shadow-xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
