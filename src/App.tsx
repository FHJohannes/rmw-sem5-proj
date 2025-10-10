import './App.css'
import { Navbar } from "./components/navbar/Navbar.tsx"
import { Outlet } from "react-router-dom";




export function App() {

  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

