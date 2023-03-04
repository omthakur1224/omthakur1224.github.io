import React from 'react'
import { motion } from 'framer-motion';
import { Typewriter } from 'typewriter-effect';
import './typewriter.css'
export const TypeWriter = () => {
    return (
        <div className="App">
        <motion.div animate={{ x: 100 }} defaultValue={"hi"}/>
        <Typewriter
         onInit={(typewriter)=> {
         typewriter  
         .typeString("Hi Coders")
         .pauseFor(1000)
         .deleteAll()
         .typeString("I am Om Prakash")
         .pauseFor(1000)
         .deleteAll()
         .typeString("Aspiring Full Stack Web Developer")
         .start();
         }}
         />     
      </div>
    );
}
