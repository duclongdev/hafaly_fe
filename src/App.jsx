import { useState } from 'react'
//DarkMode
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
//

import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import LoginPage from './pages/Login-SignUp/Login';



function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">


        <Sidebar />
        <LoginPage />

      </div>
    </ThemeProvider>
  );



}

export default App
