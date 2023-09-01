import React from 'react';
import { Box, Center, HStack, Heading, Text } from '@chakra-ui/react';
import './About.css'; // Import custom CSS file
import { Flex, Link, Stack } from 'chakra-ui-core';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';

const About = () => {
  return (
    <div style={{ backgroundColor: "#4c7184" }}>
      <p style={{
        fontSize: "20px",
        fontWeight: "600",
        textAlign: "center"
      }}>About me</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingLeft: "50px",
          paddingRight: "50px",

        }}
      >
        <div>

          Hi there! I'm Om Prakash, a passionate web developer with a love for creating
          beautiful and functional websites. My journey in the world of programming started
          with HTML, CSS and JS. I specialize in MERN Stack measurly in React Js.
          When I'm not coding, you can find me in cricket ground. I believe in
          continuous learning and always strive to expand my skill set. If you're looking
          for a dedicated developer who's excited about turning ideas into reality, feel
          free to contact

        </div>
        <div >
          <img src="profile.png" alt="om" />
        </div>
      </div>
    </div>
  );
};

export default About;
