import "./App.css";
import "./styles/app.scss";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Students from "./pages/Students";

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
            <Route path="/students" element={<Students />} />
            {/* <Route path="/find-tutors" element={< />} /> */}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
