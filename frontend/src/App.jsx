import { Routes, Route } from 'react-router-dom'
import NavBar from '/components/navbar.jsx'
import NavBarLarge from '/components/navbarlarge.jsx'
import Home from '/pages/home.jsx'

const App = () => {
  return (
    <div>
      <div className='block md:hidden'>
        <NavBar />
      </div>

      <div className='hidden md:block'>
        <NavBarLarge />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here */}
      </Routes>
    </div>
  )
}

export default App