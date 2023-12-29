import { Route, Routes } from "react-router-dom";
import Toolbar from "./components/Toolbar/Toolbar";
import Home from "./containers/Home/Home";
import Admin from "./containers/Admin/Admin";

function App() {
  return (
    <>
      
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<h1>Not Found!</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
