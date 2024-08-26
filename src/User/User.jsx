import React from 'react'
import { useParams } from 'react-router-dom';

function User({}) {
    const {userId} = useParams();
    return (
    <div className='text-white text-2xl bg-gray-400 py-11 text-center'>User : {userId}</div>
    )
}


export default User