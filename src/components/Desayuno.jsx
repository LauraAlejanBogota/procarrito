import React from "react";
import '../styles/styles.css';

//importar imagenes
import SignoPesos from '../img/signo-pesos.png';
import SignoMas from '../img/mas.png';
import SignoMenos from '../img/menos.png';


const Desayuno = ({ desayuno, cart, setCart, desayunos }) => {
  //Constante que guarda las propiedades del estado de los desayunos
  const { nombre, logoproducto, descripcion, precio, id } = desayuno;
  //Funcion para agregar los desayunos al carro
  const addDesayuno = (id) => {
    const desayuno = desayunos.filter((desayuno) => desayuno.id === id);
    //para modificar el arreglo se utiliza un restoperator ...cart
    setCart([...cart, ...desayuno]);
  };
  //Funcion para eliminar los desayunos
  const delDesayuno = (id) => {
    const eliminardesacarrito = cart.filter(//(desayuno) => this.desayuno.removeItem(desayuno.id)
    (desayuno) => desayuno.id !== id);
    setCart(eliminardesacarrito);
  };

  return (
    <div className='cardroduct'>
      <div className='carddescription'>
        <img className='imgproducto' src={logoproducto} alt='logoproducto'></img>
        <ul className='listdescription'>
          <li>{nombre}</li>
          <li>{descripcion}</li>
        </ul>
      </div>
      <div className='cardfunctionality'>
        <img className='imgsigno' src={SignoPesos} alt='SignoPesos'></img>
        <p>- {precio} -</p>
        {desayunos ? (
          <div className='buttonfunctionality'>
            <button type="button" onClick={() => delDesayuno(id)}>
              <img className='imgsignomenos' src={SignoMenos} alt='SignoMenos'></img>
            </button>
            <button type="button" onClick={() => addDesayuno(id)}>
              <img className='imgsignomas' src={SignoMas} alt='SignoMas'></img>
            </button>
          </div>
        ) : (
          <div>
            <button type="button" onClick={() => delDesayuno(id)}>
              <img className='imgsignomenos' src={SignoMenos} alt='SignoMenos'></img>
            </button>
            <button type="button" onClick={() => delDesayuno(id)}>
              <img className='imgsignomas' src={SignoMas} alt='SignoMas'></img>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Desayuno;
