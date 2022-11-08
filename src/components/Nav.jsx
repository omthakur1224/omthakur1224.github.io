import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
function Nav() {
  return (
    <div className='nav-container' style={{}}>

        <div className='routes-div' style={{}}>

          <Link  to={'/'} className='anchor'> <ul> Home</ul></Link>

          <Link  to={'/about'} className='anchor'> <ul> About</ul></Link >

          <Link  to={'/tech-stack'} className='anchor'> <ul> Tech Stack</ul></Link >

          <Link  to={'/projects'} className='anchor'> <ul> Projects</ul></Link >

        </div>
      <div className='logo-div'>
        <Link to={'/'} className='anchor'><ul>Logo</ul></Link>
      </div>
    </div>
  )
}

export default Nav