import React from 'react'
import Header from '../components/Header'
import SeattleMap from '../components/SeattleMap'
import Statistics from '../components/Statistics'
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { PredictionContext } from '../context/context';

const Forcast = () => {

  const {setPrediction}=useContext(PredictionContext);
  const navigate=useNavigate()

  const [prec,setPrec]=useState("");
  const [Min_Temp,setMin_Temp]=useState("");
  const [Max_Temp,setMax_Temp]=useState("");
  const [wind,setWind]=useState("");
  const handelSubmit= async (e)=>{
    e.preventDefault();
      const response=await fetch("http://localhost:3000/api/form",{
      method :"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({prec,Min_Temp,Max_Temp,wind})
    });
    const data=await response.json();
    const prediction=data.prediction;
    setPrediction(prediction);
    navigate("/result")
    
  }
   

  return (
    <div>
      <Header/>
      <Statistics/>
      <div className='flex justify-between  '>
        <div className='pl-22 pt-8 w-[70%]'>
          <h2 className='font-black text-center'>Input data to Predict</h2>
          <div className='pt-8 text-2xl'>

      <form onSubmit={handelSubmit}>
        <div className='flex'>
          <div className='w-1/2'>
            <label className='pr-7' htmlFor="" >Precipitation</label> <br /><br />
            <label className='pr-7' htmlFor="" >Temperature Min</label> <br /><br />
            <label className='pr-7' htmlFor="" >Temperature min</label> <br /><br />
            <label className='pr-7' htmlFor="" >Wind Speed</label> <br /><br />
          
          </div>
          <div className='w-1/2'>
            <input type="text" name="" placeholder='value>=0' id=""  className='border-2 rounded w-75' onChange={(e)=>setPrec(e.target.value)} /> <br /><br />
            <input type="text" name="" placeholder='value >-20' id="" className='border-2 rounded w-75' onChange={(e)=>setMin_Temp(e.target.value)} /> <br /><br />
            <input type="text" name="" placeholder='value <50 ' id="" className='border-2 rounded w-75' onChange={(e)=>setMax_Temp(e.target.value)} /> <br /><br />
            <input type="text" name="" placeholder='value>0' id="" className='border-2 rounded w-75' onChange={(e)=>setWind(e.target.value)} /> <br /><br />
          </div>
        </div>
        
        <input type="submit" value="Submit" 
        
        className='border-2 rounded px-4 py-2 bg-blue-500 text-white ml-96 mt-5'
        />
      </form>
          </div>


        </div>
        
        
          
        <SeattleMap />
        
      </div>
    </div>
  )
}

export default Forcast
