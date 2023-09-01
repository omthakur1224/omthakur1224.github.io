import { Image } from '@chakra-ui/react';
import React from 'react'
import Typewriter from 'typewriter-effect';
import './home.css'
const Home = () => {
  return (
    <div style={{ height: '100vh', backgroundColor: '#eeb5b5', paddingTop: '50px', color: "black" }}>

      <div style={{ display: "flex", justifyContent: "space-around", flexDirection: "row" }}>

        <div style={{ "height": "300px", "width": "200px", justifyItems: "center", }}>
          <img src="profile.png" alt="om" style={{ "height": "250px", "width": "100%", marginTop: "60%", marginLeft: "50px", borderRadius: "40%", }} />
        </div>
        <div style={{
          width: "80%",
          fontWeight: 500,
          fontSize: "80px",
          textAlign: "center",
          display: "flex",
          justifyContent: 'center',
          alignItems: "center",
          minHeight: "100vh",
        }}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hi, I am Om Prakash")
                .pauseFor(1000)
                .deleteAll()
                .typeString("A Passionate Full Stack Web Developer")
                .start()
              // .loop()
            }}
            options={{
              loop: true,
              cursor: "_"
            }}

          />
        </div>
      </div>
      {/* <div className="homepage" style={{
        fontWeight: 500,
        fontSize: "80px",
        textAlign: "center",
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        minHeight: "100vh",
        color: "##fd4c4c",
      }}>
        <div className="intro">
          <h1 className="animate">Welcome to My Portfolio</h1>
          <h2 className="animate">I am a Web Developer</h2>
        </div> */}
      {/* </div> */}
    </div>
  )
}

export default Home
