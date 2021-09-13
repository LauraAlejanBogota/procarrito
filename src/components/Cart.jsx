import React, {Fragment} from "react";
import '../styles/styles.css';

//importar componente Desayuno
import Producto from "./Producto";

import Cesta from '../img/cesta-compra.svg';

const Cart = ({ cart, setCart }) => {
    

  const closeDiv = () => {
    document.querySelector(
      "div.cartlist"
    ).style.display = "none";
  };

  return (
    <Fragment>
      <div className="cartDiv">
        <img src={Cesta} alt='Cesta'/>
      <div className='cartlist'>
        {cart.lenght === 0 ? (
          <p>Comprar</p>
        ) : (
          cart.map((producto) => (
            <Producto
              key={producto.id}
              producto={producto}
              cart={cart}
              setCart={setCart}
            />
          ))
        )}
      </div>

      </div>
      
    </Fragment>
  );
};

export default Cart;
