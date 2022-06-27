import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='App'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        {/*<Route exact path='/add' component={() => <AddPost />} />
        <Route exact path='/edit/:id' component={() => <EditContact />} />*/}
      </Routes>
    </div>
  );
};
export default App;
