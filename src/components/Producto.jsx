import React, { Fragment } from "react";
import '../styles/styles.css';

//importar imagenes
import SignoPesos from '../img/signo-pesos.png';
import SignoMas from '../img/mas.png';
import SignoMenos from '../img/menos.png';


const Producto = ({ producto, cart, setCart, productos }) => {
  //Constante que guarda las propiedades del estado de los desayunos
  const { nombre, logoproducto, descripcion, precio, id } = producto;
  //Funcion para agregar los desayunos al carro
  const addProducto = (id) => {
    const producto = productos.filter((producto) => producto.id === id);
    //para modificar el arreglo se utiliza un restoperator ...cart
    setCart([...cart, ...producto]);
  };
  //Funcion para eliminar los desayunos
  const delProducto = (id) => {
    const eliminarprodcarrito = cart.filter(//(desayuno) => this.desayuno.removeItem(desayuno.id)
    (producto) => producto.id !== id);
    setCart(eliminarprodcarrito);
  };

  return (
    <Fragment>
      {productos ? (
        <div className='cardroduct'>
          <div className='carddescription'>
            <img className='imgproducto' src={logoproducto} alt='logoproducto'></img>
            <ul className='listdescription'>
              <li className='listname'>{nombre}</li>
              <li className='listdescrip'>{descripcion}</li>
            </ul>
          </div>
          <div className='cardfunctionality'>
            <img className='imgsigno' src={SignoPesos} alt='SignoPesos'></img>
            <p>- {precio} -</p>
              <div className='buttonfunctionality'>
                <button type="button" onClick={() => delProducto(id)}>
                  <img className='imgsignomenos' src={SignoMenos} alt='SignoMenos'></img>
                </button>
                <button type="button" onClick={() => addProducto(id)}>
                  <img className='imgsignomas' src={SignoMas} alt='SignoMas'></img>
                </button>
              </div>
          </div>
        </div>
          ) : (
            <div className='cardroduct'>
          <div className='carddescription'>
            <img className='imgproducto' src={logoproducto} alt='logoproducto'></img>
            <ul className='listdescription'>
              <li className='listname'>{nombre}</li>
              <li className='listdescrip'>{descripcion}</li>
            </ul>
          </div>
          <div className='cardfunctionality'>
            <img className='imgsigno' src={SignoPesos} alt='SignoPesos'></img>
            <p>- {precio} -</p>
              <div className='buttonfunctionality'>
                <button type="button" onClick={() => delProducto(id)}>
                  <img className='imgsignomenos' src={SignoMenos} alt='SignoMenos'></img>
                </button>
                <button type="button" onClick={() => delProducto(id)}>
                  <img className='imgsignomas' src={SignoMas} alt='SignoMas'></img>
                </button>
              </div>
          </div>
        </div>
      )}

    </Fragment>
  );
};

export default Producto;
