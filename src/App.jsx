import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import ProductList from "./components/ProductList";
import ProductItemDetail from "./components/ProductItemDetail/ProductItemDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<ProductList />} />

          <Route
            path="/products/:productId/"
            element={<ProductItemDetail />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
