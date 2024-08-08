import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Login from './components/pages/Login'
import AppRoutes from './routes/AppRoutes';



const App: React.FC = () => {

  //Sistema de Rota
  return (
    < BrowserRouter>

      <Routes>
        <Route path='/login' element={<Login />} />
       <Route path='/*' element={<AppRoutes></AppRoutes>}/>
      </Routes>
    </BrowserRouter>

  )
};

export default App;

/* npm uninstall react react-dom
npm uninstall @types/react @types/react-dom -D
npm install react@17 react-dom@17
npm install @types/react@17 @types/react-dom@17 -D */
