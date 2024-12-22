import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="flex">
      <div className="min-w-[214px] min-h-screen">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full">
        <div className=" w-full">
          <Navbar />
        </div>
        <div className="p-2 h-full bg-red-400">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
