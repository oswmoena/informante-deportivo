import React, { useState } from 'react'
import { AddTeam } from './components/AddTeam'
import { Body } from './components/Body'
import { Fixure } from './components/Fixure'

const App = () => {

  const INITIAL_STATE = {
    table: true,
    addTeam: false,
    fixure: false,
  }

  const [navBar, setNavBar] = useState(INITIAL_STATE)

  return (
    <>
      <nav className="navbar-expand-md navbar navbar-dark bg-dark">
        <div className='container'>
          <a className="navbar-brand mb-0 h1" href="#" onClick={() => setNavBar(INITIAL_STATE)}>El Informante Deportivo</a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setNavBar({ addTeam: true })}>Agregar un Club</a>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Fixure</a> */}
              <a className="nav-link" href="#" onClick={() => setNavBar({ fixure: true })}>Fixure</a>
            </li>
          </ul>
        </div>
      </nav>
      {navBar.table &&
        <div className='container'>
          <Body />
        </div>}
      {navBar.addTeam &&
        <div className='container'>
          <AddTeam />
        </div>}
        {navBar.fixure &&
        <div className='container'>
          <Fixure />
        </div>}
    </>
  )
}

export default App
