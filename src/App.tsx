import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home/Home";
import Admin from "./containers/Admin/Admin";
import NewDish from "./containers/NewDish/NewDish";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-dish" element={<NewDish />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<h1>Not Found!</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
