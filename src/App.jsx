import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/navbar/Navbar' 
import './App.css'
import Homepage from './pages/homepage/Homepage'
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
