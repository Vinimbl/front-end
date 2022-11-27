
import React, { Component } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


import Main from './pages/Main/index'
import Rodape from './pages/Main/Rodape'
import Cabecalho from "./pages/Main/Cabecalho"
import Contato from './pages/Contato/index'
import Produto from "./pages/SobreEmpresa/Produto";
import Diferenciais from "./pages/Diferenciais/Diferenciais"
import Usuario from "./pages/Usuario/Usuario";
import Editar from "./pages/Editar/Editar";


class App extends Component {
  render() {
    return(
      <Router>
      <div class="App">
         <Cabecalho />

         <li> <Link to='/'>Home</Link></li>
         <li> <Link to='/contato'>Contato</Link></li>
         <li> <Link to='/produto'>Produto</Link></li>
         <li> <Link to='/diferenciais'>Diferenciais</Link></li>
         <li> <Link to='/usuario'>Usuario</Link></li>
         <li> <Link to= '/editar'>Editar</Link></li>
          <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route path='/contato' element={<Contato/>}/>
        <Route path='/produto' element={<Produto/>}/>
        <Route path='/diferenciais' element={<Diferenciais/>}/>
        <Route path='/usuario' element={<Usuario/>}/>
        <Route path='/editar' element={<Editar/>}/>
      </Routes>
          <Rodape />         
      </div>
     
      </Router>
    );
  }
}

export default App;
