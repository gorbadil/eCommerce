import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "./Pages/Auth/SignIn";
import SignOut from "./Pages/Auth/SignOut";
import Products from "./Pages/Products";
import Landing from "./Pages/Landing";
import "./App.css";
import Footer from "./components/Footer";
import ProductDetails from "./Pages/ProductDetails";
import ProductCategory from "./Pages/ProductCategory";
import Basket from "./Pages/Basket"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/products" exact component={Products} />
          <Route
            path="/products/:product_id"
            exact
            component={ProductDetails}
          />
          <Route
            path="/product/category/:product_cat"
            component={ProductCategory}
            replace
          />
          <Route
            path="/basket"
            component={Basket}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
