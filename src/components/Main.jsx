import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function Main() {
  const [value,setValue]=useState('');
  const [data,setData]=useState([])

  function getData(){
    axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=4f03870c&s=${value}`)
    .then(res=>setData(res.data.Search))
    .catch(err=>console.log(err))
  }


  return (
    <>
    <div className="inputArea d-flex mt-2">
        <input onChange={(e)=>setValue(e.target.value)} value={value} type="text"  className='form form-control w-25' placeholder='Search movie ...'/>
        <button className='btn btn-outline-primary' onClick={()=>getData()}>Search</button>
    </div>
    <div className="cardArea mt-1 d-flex justify-content-center flex-wrap">
       
        {data.map(item=>
           <div className="movieCard" key={item.imdbID}>
           <img src={item.Poster} alt="img"/>
           <h5 className='ms-1'>{item.Title}</h5>
           <h6 className='ms-1'>{item.Year}</h6>

       </div>
          )}
    </div>
    </>
  )
}
