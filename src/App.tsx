import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useStateStore } from "./store/useStateStore";

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
        <div className="p-2 h-full bg-red-400 flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
