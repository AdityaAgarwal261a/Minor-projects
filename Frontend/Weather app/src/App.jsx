import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Forcast from './pages/Forcast'
import Result from './pages/Result'
import { PredictionContext } from './context/context'

function App() {
  const [count, setCount] = useState(0)
  const [prediction1,setPrediction]=useState();

  return (

    <>

    <PredictionContext.Provider value={{prediction1,setPrediction}}>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/forcast' element={<Forcast/>} />
        <Route path='/result' element={<Result/>} />
      </Routes>
      </BrowserRouter>
    </PredictionContext.Provider>

    </>
      )
}

export default App
