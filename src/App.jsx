import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Services from './components/Services'
import Navbar from './components/Navbar/Navbar'
import Page404 from './components/Page404'
import Users from './components/Users'
import Contact from './components/Contact'
import Info from './components/about/Info'
import Career from './components/about/Career'
import Locations from './components/about/Locations'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element ={<h1>Home Page</h1>} />
          {/* <Route path='/about' element ={<About />} /> */}
          <Route path='/about/' element ={<About />} >
              <Route path='info' element={<Info />} />
              <Route path='career' element={<Career />} />
              <Route path='locations' element={<Locations />} />
          </Route>
          <Route path='/services' element ={<Services />} />
          <Route path='/users/:person' element ={<Users />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/*" element={<Page404 />} />
          {/* <Route path="/*" element={<Navigate to="/" />} /> */}
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
