import './App.css';
import React, { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

function App() {
  const [dishes] = useState(DISHES);

  return (
    <div>
      <Navbar dark color="primary" expand="md">
        <div className="container">
          <NavbarBrand href="/">Sabores de Pedro e Lucas</NavbarBrand>  {/* Nome atualizado */}
          <div>Aluno: Pedro Lucas e Lucas André</div>
        </div>
      </Navbar>
      <Menu dishes={dishes} />
    </div>
  );
}

export default App;
