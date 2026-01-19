import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './protectedRoutes/Home'
import AboutUs from './protectedRoutes/AboutUs'
import Services from './protectedRoutes/Services'
import Contact from './protectedRoutes/Contact'
import Navbar from './protectedRoutes/menubar/Navbar'
import Login from './protectedRoutes/Login'
import Protected from './protectedRoutes/Protected'
// import About from './components/About'
// import Services from './components/Services'
// import Navbar from './components/Navbar/Navbar'
// import Page404 from './components/Page404'
// import Users from './components/Users'
// import Contact from './components/Contact'
// import Info from './components/about/Info'
// import Career from './components/about/Career'
// import Locations from './components/about/Locations'
// import Home from './components/Home'

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar />
    <section className='container'>
      <Routes>
        <Route path='/' element={<Protected Component = {Home} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<Protected Component = {AboutUs} />} />
        <Route path='/services' element={<Protected Component = {Services} />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </section>
    </BrowserRouter>
















      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element ={<Home />} />
          {/* <Route path='/about' element ={<About />} /> 
          <Route path='/about/' element ={<About />} >
              <Route path='info' element={<Info  />} />
              <Route path='career' element={<Career />} />
              <Route path='locations' element={<Locations  />} />
          </Route>
          <Route path='/services' element ={<Services />} />
          <Route path='/users/:person' element ={<Users  />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/*" element={<Page404 />} />
          {/* <Route path="/*" element={<Navigate to="/" />} /> 
        </Routes>
      </BrowserRouter> */}
      
    </>
  )
}

export default App
