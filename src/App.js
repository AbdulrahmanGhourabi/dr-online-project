
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Discussion from "./pages/Discussion";
import MedicalStudies from "./pages/MedicalStudies";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/dashboard/:userType/:userID" element = {<Dashboard />} />
        <Route path="/discussion" element = {<Discussion />} />
        <Route path="/medical-studies/:userType" element = {<MedicalStudies />} />

      </Routes>
     </Router>
  )

}
export default App;