import { useState, useEffect } from "react";
import ShoppingList from "../ShoppingCarsList/ShoppingCarsList";
import "./ShoppingCart.css";

function ShoppingCart(props) {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let prc = 0;
    props.cars.forEach((car) => {
      prc += car.price * car.count;
    });
    setPrice(prc);
  }, [props.cars]);

  function saveToDb() {
    let carstate = [];
    props.cars.forEach((car) =>
      carstate.push({ _id: car._id, count: car.count })
    );
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cars: carstate }),
    };
    fetch('http://localhost:8080/cart', requestOptions)
      .then((response) => response.json());
  }

  return (
    <div className="shopping-cart">
      <div className="title">Shopping Bag</div>
      <div className="shopping-cart-body">
        <ShoppingList
          cars={props.cars}
          minusCar={props.minusCar}
          plusCar={props.plusCar}
        />
      </div>
      <div className="total-price">$ {price}</div>
      <button
        className="btn btn-success"
        onClick={() => saveToDb()}
      >
        Save
      </button>
    </div>
  );
}

export default ShoppingCart;
