import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { VegRecipes } from "./components/Pages/Vegrecipes";
import { ChickenRecipes } from "./components/Pages/Chickenrecipes";
import { SeaFood } from "./components/Pages/Seafood";
import Layout from "./components/Pages/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      {/* <Outlet /> */}

      <Router>
        {/* <div className="pages"> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="vegrecipes" element={<VegRecipes />} />
            <Route path="chickenrecipes" element={<ChickenRecipes />} />
            <Route path="seafood" element={<SeaFood />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
        {/* </div> */}
      </Router>
    </>
  );
}

export default App;
