import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../components/pages/Home/Home'
import CadastrarInformacoes from '../components/pages/Curriculo/CadastrarInformacoes';
import CadastrarExperiencia from '../components/pages/Curriculo/CadastrarExperiencia/CadastrarExperiencia';
import ListarExperiencia from '../components/pages/Curriculo/CadastrarExperienciaProfissional';
import ListaPortfolio from '../components/pages/Portfolio/ListaPortfolio/ListaPortfolio';
import CadastrarPortfolio from '../components/pages/Portfolio/CadastrarPortfolio';



const AppRoutes: React.FC = () => {
    return (
        <Layout>
          <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/curriculo/informacoes/cadastro' element={<CadastrarInformacoes />} />
        <Route path='/curriculo/experiencia/cadastro' element={<CadastrarExperiencia />} />
        <Route path='/curriculo/experiencia/listar' element={<ListarExperiencia />} />
        <Route path='/portfolio/cadastro' element={<CadastrarPortfolio />} />
        <Route path='/portfolio/listagem' element={<ListaPortfolio />} />
        </Routes>
      </Layout>
    )
};

export default AppRoutes;