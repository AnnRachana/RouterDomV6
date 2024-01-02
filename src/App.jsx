import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter , NavLink,Routes,Route,Navigate} from 'react-router-dom'
import './App.css'


// components

import Home from './components/Home'
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'


function App() {
  const [loggedIn, setLoggedIn] = useState(null)
  function handleLogin(){
    setLoggedIn(true)
  }
  function handleLogout() {
    setLoggedIn(false);
  }

  let activeClassName = "nav-active"

  return (
    <BrowserRouter>
      <header>
        <h1>Hello World</h1>
      </header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          {" "}
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Contact
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Dashboard
        </NavLink>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            loggedIn ? (
              <Navigate to="/dashboard" />
            ) : (
              <Home login={handleLogin} />
            )
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
        {/* <Route path="/dashboard" element={ loggedIn ? <Dashboard logout={handleLogout}/> : <Navigate to="/" state={"From Dashboard"}/>} /> */}
        <Route path="/dashboard"element={loggedIn ? (<Dashboard logout={handleLogout} />) : (<Navigate to="/" state={"From Dashboard"} />)}>
          <Route path='settings' element={ <p>This is the nest setting route</p>}/>
        </Route>
        {/* /dashboard/settings */}
        <Route path='/Profile'>
          <Route path=':userId' element={<Profile/>}/>
        </Route>
        {/* /Profile/1 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
