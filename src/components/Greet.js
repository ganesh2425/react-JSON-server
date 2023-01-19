import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
function Greet() {
    const [name, setName]  = useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res =>{
            console.log(res)
            setName(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[]);
  return (
    <>
    <h3>Hello welcome to Bangalore@!!!</h3>

<ul>
    {name.map(names =>(
        <li key={names.userId}>{names.title}</li>
        
    ))}
</ul>
    </>
  )
}

export default Greet