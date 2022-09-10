import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
// import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Booking from "./Pages/Booking";
// import Work from "./Components/Work";
import Protect from "./Protect";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { UserContext } from "./Utils/UserContext";

function App() {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser(true);
    }

    setLoading(false);
  }, []);

  if (loading) return <h1>Loading ....</h1>;

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking/:id" element={<Booking />} />

          <Route path="/admin" element={<Protect />}></Route>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </UserContext.Provider>
    </>
  );
}

export default App;
