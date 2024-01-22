import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<ProductList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
