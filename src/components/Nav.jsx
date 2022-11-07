import React from 'react'

function Nav() {
  return (
    <div style={{display:"flex",justifyContent:"space-evenly",
    height:"50px",
    backgroundColor:"skyblue"
    }}>
      <div style={{display:"flex",justifyContent:"space-around"}}>
        <ul>Home</ul>
        <ul>About</ul>
        <ul>Tech Stack</ul>
        <ul>Projects</ul>
      </div>
      <div>
        <ul>logo</ul>
      </div>
    </div>
  )
}

export default Nav