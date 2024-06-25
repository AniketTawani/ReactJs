import React,{useState, useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const[data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res)=>res.json())
    //     .then((res)=>setData(res))
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white '>Github Followers : {data.followers}
    <img src={data.avatar_url} width='250px' alt='Github Profile'></img>
    </div>
  )
}

export default Github

export const githubInfoLoader = async() =>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    return response.json()
}