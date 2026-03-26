import { Routes, Route, NavLink} from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import CountryDetail from './pages/CountryDetail.jsx'
import Build from './pages/Build.jsx'
import Web from './pages/Web.jsx'
import Mobile from './pages/Mobile.jsx'
import About from './pages/About.jsx'

function App() {

  return (
    <div className="app">
      <nav className="navigation nav-links" style={{justifyContent: 'center'}}>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/build" className="nav-link">Build</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<CountryDetail />} />
        <Route path="/build" element={<Build />}>
          <Route path="web" element={<Web />} />
          <Route path="mobile" element={<Mobile />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
