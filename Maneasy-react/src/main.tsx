import React from 'react'
import ReactDOM from 'react-dom/client'

//estilização
import './index.css'
//IMPORT PAGINAS
import Entrar from './pages/Entrar';
import Cadastro from './pages/Cadastro';
import EsqueceuASenha from './pages/EsqueceuASenha';
import Dashboard from './pages/Dashboard';
import ProfissionalCadastro from "./pages/ProfissionalCadastro"
import ProfissionalConsulta from './pages/ProfissionalConsulta';
import ProfissionalAtualizar from './pages/ProfissionalAtualizar';
import ServicoCadastro from './pages/ServicoCadastro';
import ServicoConsulta from './pages/ServicoConsulta';
import ServicoAtualizar from './pages/ServicoAtualizar';
import Consultas from './pages/Consultas';
import ChamadoCadastro from './pages/ChamadoCadastro';
import ChamadoConsulta from './pages/ChamadoConsulta';
import ChamadoAtualizar from './pages/ChamadoAtualizar';
import SquadCadastros from './pages/Squad_cadastros';
import Squadmontar from './pages/Squad_montar';



//rotas

import { BrowserRouter, Routes, Route } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>   {/*// INDICA QUE A APLICAÇÃO TERA ROTAS  */}
      <Routes>         {/*// INDICA QUE TEM UMA LISTA DE COMPONENTES, OU SEJA, UMA LISTA DE ROTAS  */}
        <Route path='/' element={<Entrar />} />  //   {/*INDICA O CAMINHO DO COMPONENTE E O NOME DA ROTA DELE */}
        <Route path='/pagina/cadastro' element={<Cadastro />} />
        <Route path='/pagina/esqueceu/senha' element={<EsqueceuASenha />} />
        <Route path='/pagina/dashboard' element={<Dashboard />} />
        <Route path='/pagina/profissional/cadastro' element={<ProfissionalCadastro/>} />
        <Route path='/pagina/profissional/consulta' element={<ProfissionalConsulta/>} />
        <Route path='/pagina/profissional/atualizar' element={<ProfissionalAtualizar/>} />
        <Route path='/pagina/servico/cadastro' element={<ServicoCadastro/>} />
        <Route path='/pagina/servico/consulta' element={<ServicoConsulta/>} />
        <Route path='/pagina/servico/atualizar' element={<ServicoAtualizar/>} />
        <Route path='/pagina/consultas' element={<Consultas/>} />
        <Route path='/pagina/chamado/cadastro' element={<ChamadoCadastro/>} />
        <Route path='/pagina/chamado/consulta' element={<ChamadoConsulta/>} />
        <Route path='/pagina/chamado/atualizar' element={<ChamadoAtualizar/>} />
        <Route path='/pagina/squad/consulta' element={<SquadCadastros/>}/>
        <Route path='/pagina/squad/cadastro/:idSquad' element={<Squadmontar/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,)
