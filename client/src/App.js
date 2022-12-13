import "./App.css";
import { useState, useEffect } from "react";
import ShoppingList from "./components/ShoppingCarsList/ShoppingCarsList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  const [cars, setCars] = useState([]);
  const [cartCars, setCartCars] = useState([]);
  const [shppingCart, setShppingCart] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(
          'http://localhost:8080/car'
        );
        const cars = await response.json();
        cars.map((car) => (car.count = 1));
        setCars(cars);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchCars();
  }, []);

  function addToCart(car) {
    const carIndex = cartCars.findIndex(
      (cartItem) => cartItem._id == car._id
    );
    if (carIndex == -1) {
      setCartCars([...cartCars, car]);
    } else {
      cartCars[carIndex].count++;
      setCartCars([...cartCars]);
    }
  }

  function minusCar(car) {
    const carIndex = cartCars.findIndex(
      (cartItem) => cartItem._id == car._id
    );
    if (cartCars[carIndex].count > 1) {
      cartCars[carIndex].count = cartCars[carIndex].count - 1;
    } else {
      cartCars.splice(carIndex, 1);
    }
    setCartCars([...cartCars]);
  }

  function plusCar(car) {
    const carIndex = cartCars.findIndex(
      (cartItem) => cartItem._id == car._id
    );
    cartCars[carIndex].count = cartCars[carIndex].count + 1;
    setCartCars([...cartCars]);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">
            Cars Shopping
          </a>
        </div>
        <div>
          <button
            className="custom-btn"
            onClick={() => setShppingCart(!shppingCart)}
          >
            {shppingCart ? (
              <i class="fa-solid fa-house-user"></i>
            ) : (
              <i class="fas fa-shopping-cart"></i>
            )}
          </button>
        </div>
      </nav>

      <div className="App">
        {shppingCart ? (
          <ShoppingCart
            cars={cartCars}
            plusCar={plusCar}
            minusCar={minusCar}
          />
        ) : (
          <ShoppingList cars={cars} addToCart={addToCart} />
        )}
      </div>
    </div>
  );
}

export default App;
