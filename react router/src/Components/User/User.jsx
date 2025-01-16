import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {id} = useParams()
  return (
    <>
       <h1 className='bg-gray-700 text-3xl text-center text-white font-semibold p-4 font-thin-'>Hello User: {id} </h1>
    </> 
  )
}

export default User
