import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

const App: React.FC = () => {
   
  return (
   < BrowserRouter>
   <Layout>
    <h1>Importação Layout</h1>
   </Layout>
   <Routes>
     <Route path='/' element={<Home/>}/>
   </Routes>
   </BrowserRouter>
   
  )
};

export default App;

/* npm uninstall react react-dom
npm uninstall @types/react @types/react-dom -D
npm install react@17 react-dom@17
npm install @types/react@17 @types/react-dom@17 -D */ 
