import "./App.css";
import "./styles/app.scss";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Students from "./pages/Students";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tutors from "./pages/Tutors";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function App() {
  const { userName } = useSelector(({ user }) => user);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Signin />} />
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
