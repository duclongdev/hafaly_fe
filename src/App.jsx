



import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/index';
//Import Layout

import DefaultLayoutPublic from './components/layout/DefaultLayout/DefaultLayoutPublic';
import DefaultLayoutPrivate from './components/layout/DefaultLayout/DefaultLayoutPrivate';


import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login-SignUp/Login';
import CreateFamily from './pages/CreateFamily/CreateFamily';



function App() {
  
  return (
   
    <Router>
      <div className='App'>
        <Routes>
          
         <Route path='/' element={<DefaultLayoutPublic>{<Homepage/>}</DefaultLayoutPublic>}/>
         <Route path='/home' element={<DefaultLayoutPublic>{<Homepage/>}</DefaultLayoutPublic>}/>
         <Route path='/login' element={<DefaultLayoutPublic>{<Login/>}</DefaultLayoutPublic>}/>
         <Route path='/dashboard' element={<DefaultLayoutPrivate></DefaultLayoutPrivate>}/>
         <Route path='/createfamily' element={<DefaultLayoutPrivate>{<CreateFamily/>}</DefaultLayoutPrivate>}/>

         

        </Routes>
      </div>
    </Router>
    
    
  );
}

export default App;