import React from 'react';
import { Link } from 'react-router-dom';
import './use.css'

const Use = (props) => {
    const {name,usename,email,id}=(props.user)
    return (
        <div className='style2'>
            {
                <div>

               
                <h1>Name is : {name}</h1>
                <h4>User name is : {usename}</h4>
                <p>Email: {email}</p>
                <Link to={`friend/${id}`}>Visit me</Link>
                </div>
                
            }
        </div>
    );
};

export default Use;