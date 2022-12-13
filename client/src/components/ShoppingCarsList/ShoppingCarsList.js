import "./ShoppingCarsList.css";

function ShoppingCarsList(props) {

  return (
    <div className="shoppingListBody row">
      {props.cars.map((car) => (
        <div className="card shoppingListCar">
          <img className="card-img-top" src={car.image} />
          <div className="card-body">
            <span className="card-title title">{car.name}</span>
            <p className="card-text">{car.desc}</p>
            { props.addToCart ? <a href="#" class="btn btn-primary" onClick={() => props.addToCart(car)}>$ {car.price}</a> : 
            <div>
              <button onClick={() => props.plusCar(car)}>+</button>
              {car.count} 
              <button onClick={() => props.minusCar(car)}>-</button>
              </div>
            }
            
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCarsList;
