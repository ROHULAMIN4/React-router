import React, { useEffect, useState } from 'react';
import Use from '../Use/Use';
import './USer.css'

const USer = () => {
    const [user,setUser]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
    return (
        <div className='style'>
            
    
            {
                user.map(use=><Use key={use.id} user={use}></Use>)
            }
        </div>
    );
};

export default USer;