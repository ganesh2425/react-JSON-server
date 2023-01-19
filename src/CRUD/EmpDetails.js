import { __esModule } from '@testing-library/jest-dom/dist/matchers';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function EmpDetails() {
  const {empid} = useParams(); 
  const [emp, setEmp] = useState({})

  useEffect(()=>{
    fetch("http://localhost:8000/employee/"+ empid)
        .then((res)=>{
            return res.json();
        }).then((res)=>{
            setEmp(res);
            console.log(res);
        }).catch((err)=>{
            console.log(err.message);
        })

  },[]);

  return (
    <>
    <div className='container col-md-6'>
    <div className='card'>
      <div className='card-title'>
        <h2>Employee Details</h2>
      </div>
      <div className='card-body'>
          { emp &&
          <div>
             <h3>Employee name is : <b>{emp.name}</b></h3>
             <h4>{emp.name}  id is :  <b>{emp.id}</b></h4>
             <h4>Contact details</h4>
             <h5>Email is : {emp.email}</h5>
             <h5>Phone is : {emp.phone}</h5>
             <Link to="/" className='btn btn-danger'>Back to Listing</Link>
          </div>
          } 
      </div>
    </div>
    </div>
    
    </>
  )
}

export default EmpDetails