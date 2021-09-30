import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const {userid}=useParams()
    const [user,setUser]=useState({})
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${userid}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
    
    return (
        <div>
            <h1>Friend detils comming soon:{userid}</h1>
            <h1>{user.name}</h1>
            <h1>{user.website}</h1>
            <h1>{user.company?.name}</h1>
           
        </div>
    );
};

export default FriendDetails;