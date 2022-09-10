import "./App.css";
import "./styles/app.scss";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Tutors from "./pages/Tutors";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Signin />} />
            <Route path="/tutors" element={<Tutors />} />
            <Route path="/students" element={<Signin />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
