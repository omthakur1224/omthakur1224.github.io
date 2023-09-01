import { ReactNode, useState } from 'react';
import { Link } from 'react-scroll'
// import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  // Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Show,
  Hide,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, EditIcon, RepeatIcon, ExternalLinkIcon, AddIcon } from '@chakra-ui/icons';
import { maxWidth } from '@mui/system';
import Toggle from './Toggle';
import Theme from './Theme';
import { useColorMode } from '@chakra-ui/react';


const Links = ['About', 'Skills', 'Projects', 'Contacts', 'Resume'];


export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Hide the menu when a link is clicked
  };
  return (
    <>
      <Box position={'fixed'} w={'100%'} bg={useColorModeValue('gray.100', 'gray.900')} h="60px" p="10px 50px 10px 50px" color={'black'} px={4} backgroundColor="#ffff">
        <Flex h="100%" alignItems={'center'} justifyContent={'space-between'} >
          <HStack>
            <Link to={'Home'}>
              <Box>
                <img src="profile.ico" alt="om"
                  style={{ height: "50px", width: "45px", backgroundColor: "black", borderRadius: "50%" }}
                />
              </Box>
            </Link>
            <Theme h={'100%'} />
          </HStack>
          <Hide
            breakpoint='(max-width: 810px)'
          >
            <HStack as={'nav'} spacing={44} h="100%" display={{ base: 'none', md: 'flex' }} mr={2} justifyContent={'space-around'} >
              {Links.map((link) => (
                <Button key={link} h={"100%"}
                  fontWeight='500'
                  fontSize={20}
                  // backgroundColor="#051b35" 
                  borderRadius={'5%'}
                  border={'none'}
                  _hover={{ color: "#006bed" }}
                >
                  <Link
                    to={link}
                    duration={200}
                    offset={-48}
                    smooth={true}
                  // style={{ color: colorMode === "dark" ? 'white' : 'black' }}
                  >{link}</Link>
                </Button>
              ))}
            </HStack>
          </Hide>
          <Show breakpoint='(max-width: 810px)'>

            {/* <Menu
              w={"100%"}>
              <MenuButton
                as={IconButton}
                h="100%"
                aria-label='Options'
                icon={
                  <HamburgerIcon
                    background={"none"}
                    h={"50px"}
                    w={"50px"}
                    zIndex='0'
                    boxShadow='none'
                    border={'none'}
                    color={'black'}
                    backgroundColor={'white'}
                  />
                }
              />
              <MenuList w={"100vw"}>
                <Stack
                  w={'100%'}
                  as={'nav'}
                  spacing={4}
                  float={'right'}
                  alignItems='center'
                  backgroundColor='teal'
                >
                  {Links.map((link) => (
                    <Button
                      fontWeight='500'
                      fontSize={20}
                      key={link}

                      color={'white'} w={'100%'} h={"100%"} border={'none'} _hover={{ bg: "#2C74B3" }}>
                      <Link
                        to={link}
                        duration={200}
                        offset={-48}
                        smooth={true}
                        spacing={8}
                      >{link}</Link>
                    </Button>
                  ))}
                </Stack>

              </MenuList>
            </Menu> */}

            <Menu w={'100%'} >
              <MenuButton
                as={IconButton}
                h="100%"
                aria-label='Options'
                icon={
                  <HamburgerIcon
                    background={"none"}
                    h={"50px"}
                    w={"50px"}
                    zIndex='0'
                    boxShadow='none'
                    border={'none'}
                    color={'black'}
                    backgroundColor={'white'}
                  />
                }
                onClick={() => setIsMenuOpen(true)}
              />
              {isMenuOpen ?
                <MenuList w={"100vw"}>
                  <Stack
                    w={'100%'}
                    as={'nav'}
                    spacing={4}
                    float={'right'}
                    alignItems='center'
                    backgroundColor='teal'
                  >
                    {Links.map((link) => (
                      <Button
                        key={link}
                        fontWeight='500'
                        fontSize={20}
                        color={'white'}
                        w={'100%'}
                        h={"100%"}
                        border={'none'}
                        _hover={{ bg: "#2C74B3" }}
                      >
                        <Link
                          to={link}
                          duration={200}
                          offset={-48}
                          smooth={true}
                          spacing={8}
                          onClick={handleLinkClick} // Hide the menu when link is clicked
                        >
                          {link}
                        </Link>
                      </Button>
                    ))}
                  </Stack>
                </MenuList> : ""
              }
            </Menu>
          </Show>
        </Flex>
        {/* {isOpen ? (
                <Box pb={4} width='100%'>
                  <Stack as={'nav'} float={'right'} alignItems='center' w={"100%"} backgroundColor='#0A2647'>
                    {Links.map((link) => (
                      <Button key={link}
                        backgroundColor={'#0A2647'}
                        color={'white'}
                        onClick={isOpen ? onClose : onOpen}
                        w={'100%'} h={"100%"} border={'none'} _hover={{ bg: "#2C74B3" }}>
                        <Link
                          to={link}
                          duration={200}
                          offset={-200}
                          smooth={true}
                          spacing={8}>{link}</Link>
                      </Button>
                    ))}
                  </Stack>
                </Box>
              ) : null
              } */}

        {/* {isOpen ? (
          <Box pb={4} width='100%'>
            <Stack as={'nav'} float={'right'} alignItems='center'w={"100%"} backgroundColor='#0A2647'>
            {Links.map((link) => (
                          <Button key={link} backgroundColor={'#0A2647'} color={'white'} w={'100%'} h={"100%"} border={'none'}  _hover={{bg:"#2C74B3"}}>
                            <Link 
                            to={link}
                            duration={200}
                            offset={-200}
                            smooth={true} 
                            spacing={8}>{link}</Link>
                        </Button>
                      ))}
            </Stack>
          </Box>
          ): null
        } */}
      </Box >

    </>
  );
}