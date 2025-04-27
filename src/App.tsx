import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#fff8f0]">
        <ToastContainer />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
