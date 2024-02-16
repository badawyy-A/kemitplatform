import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/HomePage"
import MovieRealsePage from './Pages/MovieRealsePage';
function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
            <Route index path='/' element={<HomePage/>}/>
            <Route  path='/Home' element={<HomePage/>}/>
            <Route path='/MovieRealse' element={<MovieRealsePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App

