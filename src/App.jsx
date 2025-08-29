import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/navbar/Navbar' 
import Homepage from './pages/homepage/Homepage'
import './App.css'
function App() {

  return (
    <>
       <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Homepage/>} />
          </Routes>
       </Router>
    </>
  )
}

export default App
