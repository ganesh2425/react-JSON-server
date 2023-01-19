import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dash from './components/Dash';
import Greet from './components/Greet';
import EmpListing from './CRUD/EmpListing';
import EmpCreate from './CRUD/EmpCreate';
import EmpDetails from './CRUD/EmpDetails';
import EmpEdit from './CRUD/EmpEdit';


function App() {
  return (
    <>
    {/* <h2>API calling using ReactJs</h2>\ */}
    {/* <Greet/> */}
    {/* <Dash/> */}
    {/* <Navbar/> */}
    <h2 className='text-center'>CRUD operations using ReactJs</h2>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<EmpListing/>}/>
      <Route path='/employee/create' element={<EmpCreate/>}/>
      <Route path='/employee/details/:empid' element={<EmpDetails/>}/>
      <Route path='/employee/edit/:empid' element={<EmpEdit/>}/>
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App