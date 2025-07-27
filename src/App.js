import products from "./products.json";    // Product data from JSON file
import "./App.css";                         // Styling
import Product from "./Components/Product"; // Single product component
import Cart from "./Components/Cart";        // Cart summary component
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/cart">Go to Cart</Link>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      
      <div className="products">
        {/* Loop over products and render Product component for each */}
        {products.map((product) => (
          <Product {...product} />  // Spread all product props (name, price, image, etc)
        ))}
      </div>
    </div>
  );
}

export default App;
