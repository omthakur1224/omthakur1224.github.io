import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div style={{
        display:"flex",
        justifyContent:"space-evenly",
        height:"50px",
        backgroundColor:"skyblue"
    }}>

        <div style={{display:"flex",justifyContent:"space-around"}}>

          <Link to={'/'}> <ul> Home</ul></Link>

          <Link to={'/about'}> <ul> About</ul></Link >

          <Link to={'/tech-stack'}> <ul> Tech Stack</ul></Link >

          <Link to={'/projects'}> <ul> Projects</ul></Link >

        </div>
      <div>
        <ul>logo</ul>
      </div>
    </div>
  )
}

export default Nav