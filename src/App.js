import React from 'react'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AddTask from './pages/AddTask';
import Toaster from 'react-hot-toast'
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <BrowserRouter> 
    
    <Navbar/>
    <div className='d-flex justify-content-center align-items-center ' style={{minHeight:"82vh"}}>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/add' element={<AddTask/>}/>
  <Route path='*' element={<h1>Not found</h1>}/>

 
</Routes>
    </div>

    
    
     </BrowserRouter>
      
     
    
  )
}

export default App