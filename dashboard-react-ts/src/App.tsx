import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home/Home'
import CadastrarInformacoes from './components/pages/Curriculo/CadastrarInformacoes';
import CadastrarExperiencia from './components/pages/Curriculo/CadastrarExperiencia/CadastrarExperiencia';
import CadastrarExperienciaProfissional from './components/pages/Curriculo/CadastrarExperienciaProfissional/CadastrarExperienciaProfissional';

const App: React.FC = () => {
   
  return (
   < BrowserRouter>
   <Layout>
   <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/curriculo/informacoes/cadastro' element={<CadastrarInformacoes/>}/> 
      <Route path='/curriculo/experiencia/cadastro' element={<CadastrarExperiencia/>}/> 
      <Route path='/curriculo/experiencia/listar' element={<CadastrarExperienciaProfissional/>}/> 
   </Routes>
   </Layout>
  
   </BrowserRouter>
   
  )
};

export default App;

/* npm uninstall react react-dom
npm uninstall @types/react @types/react-dom -D
npm install react@17 react-dom@17
npm install @types/react@17 @types/react-dom@17 -D */ 
