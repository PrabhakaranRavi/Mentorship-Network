import Navbar from "./Navbar"
import Register from "./pages/Register"
import Login from "./pages/Login"
import About from "./pages/About"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
        </Routes>
      </div>
    </>
  )
}

export default App