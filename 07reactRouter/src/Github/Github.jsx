import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
const data = useLoaderData()
// useEffect(() =>{
//   fetch('https://api.github.com/users/hiteshchoudhary')
//   .then(response => response.json())
//   .then(data => setData(data))
// })
  return (
    <>
    <div className='text-center p-4 m-4 bg-gray-600 text-white text-3xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="profile_pic" width={200} />
    </div>
    </>
  )
}

export default Github;

export const getGithubInfo = async () =>{
 const response = await fetch('https://api.github.com/users/hiteshchoudhary');
  return response.json();
}