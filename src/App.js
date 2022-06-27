import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddContact from './pages/AddContact';
import EditContact from './pages/EditContact';

const App = () => {
  return (
    <div className='App'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route path='/add' element={<AddContact/>} />
        <Route path='/edit/:id' element={ <EditContact /> } />
      </Routes>
    </div>
  );
};
export default App;
