import React, { useState } from "react";
import "./styles/styles.css";
import {  BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

//Componentes
//importar componente Desayuno
import Producto from "./components/Producto";
//importar componente Arepa
import Arepa from "./components/Arepa";
//importar componente mucho mas
import Mucho from "./components/Mucho";
//importar componente bebidas
import Bebida from "./components/Bebida";
//importar componente Carrito
import Cart from "./components/Cart";

//importar imagenes
//Header
import Logo from '../src/img/logo-temporal.png';
import Buscar from '../src/img/buscar.png';

//Productos
//Categoria Desayunos
import CaldoCostilla from '../src/img/caldo-costilla.svg';
import CaldoPajarilla from "../src/img/caldo-pajarilla.svg";
import CaldoPescado from "../src/img/caldo-pescado.svg";
import HuevosPericos from "../src/img/huevos-pericos.png";
import HuevosRancheros from "../src/img/huevo-rancheros.svg";
import PorcionArroz from "../src/img/porcion-arroz.svg";
//Categoria Arepas
import ArepaPro from '../src/img/arepa.svg';
//Categoria Mucho mas
import Empanada from '../src/img/empanada.png';
import PapaRellena from '../src/img/papa-rellena.png';
//Categoria Bebidas
import JugoNatural from '../src/img/jugo-agua.svg';
import JugoLeche from '../src/img/jugos-leche.svg';
import CocaCola from '../src/img/producto-cocacola.png';

function App() {

  //Productos de los desayunos con listado
  const [productos, setProducto] = useState ([
    {
      id: 1, logoproducto: CaldoCostilla, nombre: "Caldo de Costilla", descripcion: "Acompañado de Arepa", precio: 5000,
    },
    {
      id: 2, logoproducto: CaldoPajarilla, nombre: "Caldo de Pajarilla", descripcion: "Acompañado de Arepa", precio: 6000,
    },
    {
      id: 3, logoproducto: CaldoPescado, nombre: "Caldo de Pescado", descripcion: "Acompañado de Arepa", precio: 8000,
    },
    {
      id: 4, logoproducto: HuevosPericos, nombre: "Huevos Pericos", descripcion: "Acompañado de Arepa", precio: 5000,
    },
    {
      id: 5, logoproducto: HuevosRancheros, nombre: "Huevos Rancheros", descripcion: "Acompañado de Arepa", precio: 5000,
    },
    {
      id: 6, logoproducto: PorcionArroz, nombre: "Porcion de Arroz", descripcion: "Acompañamiento", precio: 1000,
    },
  ]);
  //Productos de las arepas con listado
  const [arepas, setArepas] = useState ([
    {
      id: 1, logoproducto: ArepaPro, nombre: "Arepa Pequeña", descripcion: "Deliciosa arepa pequeña", precio: 200,
    },
    {
      id: 2, logoproducto: ArepaPro, nombre: "Arepa Mediana", descripcion: "Con Jamon y Queso", precio: 2000,
    },
    {
      id: 3, logoproducto: ArepaPro, nombre: "Arepa Grande", descripcion: "Con Queso", precio: 2000,
    },
    {
      id: 4, logoproducto: ArepaPro, nombre: "Arepa Grande Rellena", descripcion: "Con Jamon, queso, pollo, carne, huevo codorniz", precio: 5000,
    },
    {
      id: 5, logoproducto: ArepaPro, nombre: "Arepa Grande", descripcion: "3 arepas grandes", precio: 2000,
    },
    {
      id: 6, logoproducto: ArepaPro, nombre: "Arepa Pequeña", descripcion: "3 arepas pequeñas", precio: 2000,
    },
    {
      id: 7, logoproducto: ArepaPro, nombre: "Arepa Pequeña", descripcion: "Con Chorizo", precio: 2500,
    },
    {
      id: 8, logoproducto: ArepaPro, nombre: "Arepa Mediana", descripcion: "Con Queso", precio: 1300,
    },
    {
      id: 9, logoproducto: ArepaPro, nombre: "Arepa Grande", descripcion: "Deliciosa arepa grande", precio: 1000,
    },
    {
      id: 10, logoproducto: ArepaPro, nombre: "Arepa Grande", descripcion: "Con Jamon y Queso", precio: 2500,
    },
    {
      id: 11, logoproducto: ArepaPro, nombre: "Jugos Naturales", descripcion: (["Mora", "Mango"]), precio: 2500,
    },
  ])
  //Productos de mucho mas con listado
  const [muchos, setMucho] = useState ([
    {
      id: 1, logoproducto: Empanada, nombre: "Empanada", descripcion: "Papa con Carne", precio: 1000,
    },
    {
      id: 2, logoproducto: PapaRellena, nombre: "Papa Rellena", descripcion: "Papa, Carne, Huevo", precio: 1500,
    },
  ])
  //Productos de las arepas con listado
  const [bebidas, setBebidas] = useState ([
    {
      id: 1, logoproducto: JugoNatural, nombre: "Jugos Naturales", descripcion: "En Agua", precio: 2500,
    },
    {
      id: 2, logoproducto: JugoLeche, nombre: "Jugos Naturales ", descripcion: "En Leche", precio: 3000,
    },
    {
      id: 3, logoproducto: CocaCola, nombre: "Producto Coca-Cola", descripcion: "Con Queso", precio: 1000,
    },
  ])
  //Estado de los desayunos con listado
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="container">
      {/* Header con el logo,buscador, y carrito */}
      <div className="header">
        <img className='logo' src={Logo} alt='logo'/>
          <div className='buscador'>
            <img src={Buscar} alt='buscar'/>
          </div>
        <Cart cart={cart} setCart={setCart}/>
      </div>
      {/* Filtros */}
      <div className="filter">
          <Link to="/producto"><img src={HuevosRancheros} alt="Desayuno" />DESAYUNO</Link>
          <Link to="/arepa"><img src={ArepaPro} alt="Desayuno" />AREPAS</Link>
          <Link to="/mucho"><img src={Empanada} alt="Desayuno" />MUCHO MAS</Link>
          <Link to="/bebidas"><img src={CocaCola} alt="Desayuno" />BEBIDAS</Link>
      </div>

      <Switch>
      {/* productos de la pagina */}
        <Route path="/producto">
          <div className="products">
            {productos.map((producto) => (
              <Producto
                key={producto.id}
                producto={producto}
                cart={cart}
                setCart={setCart}
                productos={productos}
              />
            ))}
          </div>
        </Route>
        <Route path="/arepa">
          <div className="products">
            {arepas.map((arepa) => (
              <Arepa
                key={arepa.id}
                producto={arepa}
                cart={cart}
                setCart={setCart}
                productos={arepas}
              />
            ))} 
          </div>
        </Route>
        <Route path="/mucho">
          <div className="products">
            {muchos.map((mucho) => (
              <Mucho
                key={mucho.id}
                producto={mucho}
                cart={cart}
                setCart={setCart}
                productos={muchos}
              />
            ))} 
          </div>
        </Route>
        <Route path="/bebidas">
          <div className="products">
            {bebidas.map((bebida) => (
              <Bebida
                key={bebida.id}
                producto={bebida}
                cart={cart}
                setCart={setCart}
                productos={bebidas}
              />
            ))} 
          </div>
        </Route>
      </Switch>
      {/* footer */}
      <div className="footer">
              <p>@Laura Bogota</p>
      </div>
    </div> 
    </Router>
  );
}

export default App;
