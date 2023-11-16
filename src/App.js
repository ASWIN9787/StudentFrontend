import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/Singup";
import Home from "./pages/Home";
import ViewTable from "./pages/ViewTable";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/view" element={<ViewTable />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;