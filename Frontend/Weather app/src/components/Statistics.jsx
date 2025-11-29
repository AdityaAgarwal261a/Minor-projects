import React from 'react'

const Statistics = () => {
  return (
    <div className='text-2xl'>
      <div className='pl-25'>

    <h6 className='py-5 text-center font-bold'>Statistics of the parameters used for the prediction (According to data)</h6>
  <table className='w-full '>
    <thead>
      <tr className='text-left'>
        <th className='px-3 w-1/5'>Row Label</th>
        <th className='px-3 w-1/5'>Precipitation</th>
        <th className='px-3 w-1/5'>Temperature Min</th>
        <th className='px-3 w-1/5'>Temperature Max</th>
        <th className='px-3 w-1/5'>Wind Speed</th>
      </tr>
    </thead>
    <tbody>
      <tr >
        <th className='px-3 text-left font-semibold'>Min</th> 
        <td className='px-3'>0</td>
        <td className='px-3'>-7.1</td>
        <td className='px-3'>-1.6</td>
        <td className='px-3'>0.4</td>
      </tr>
      <tr>
        <th className='px-3 text-left font-semibold'>Max</th>
        <td className='px-3'>55.9</td>
        <td className='px-3'>18.3</td>
        <td className='px-3'>35.6</td>
        <td className='px-3'>9.5</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  )
}

export default Statistics
