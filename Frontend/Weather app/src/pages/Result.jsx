import React, { useContext } from 'react'
import Header from '../components/Header'
import Statistics from '../components/Statistics'
import SeattleMap from '../components/SeattleMap'
import { PredictionContext } from '../context/context'

const Result = () => {
  const {prediction1}=useContext(PredictionContext);
 

  
  return (
    <div>
      <Header/>
      <Statistics/>
      <div className='flex justify-between'>
        <div className='w-[75%]'>

        <p className='pt-45 text-center text-7xl'>{prediction1}</p>
          

        </div>
        <SeattleMap/>
      </div>
    </div>
  )
}

export default Result
