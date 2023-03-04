import { ReactNode } from 'react';
import {Link} from 'react-scroll'
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


const Links = [ 'About', 'Skills','Projects','Contacts','Resume'];


export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
 const {colorMode}=useColorMode();
  return (
    <>
      <Box position={'fixed'} w={'100%'} bg={useColorModeValue('gray.100', 'gray.900')}px={4} mt={0} h="50px" backgroundColor="#0A2647">
        <Flex h="100%"alignItems={'center'}justifyContent={'space-between'} >
            <HStack>
              <Box>OP</Box>
              <Theme h={'100%'}/>
            </HStack>
            <Hide 
            breakpoint='(max-width: 810px)' 
            >
        
              <HStack as={'nav'} spacing={44} h="100%" display={{ base: 'none', md: 'flex' }} >
                    {Links.map((link) =>(
                      <Button key={link} h={"100%"}
                      fontWeight='500' 
                      fontSize={20}
                      backgroundColor="#0A2647" borderRadius={'5%'} border={'none'}  _hover={{bg:"#2C74B3"}}>
                         <Link 
                            to={link}
                            duration={200}
                            offset={-200}
                            smooth={true}
                            // style={{color:colorMode==="dark"?'white':'black'}} 
                           >{link}</Link>
                        </Button>
                    ))}
              </HStack>
            </Hide>
            <Show breakpoint='(max-width: 810px)'>
              <Menu w={"100%"}
              //  backgroundColor={'#0A2647'} 
               >
                <MenuButton as={IconButton} 
                // w={"100%"}
                // backgroundColor={'#0A2647'}
                 h="100%" aria-label='Options'icon={<HamburgerIcon  background={"none"} w={"30px"} zIndex='0' boxShadow='none' border={'none'} color={'white'} backgroundColor={'#0A2647'} />} /> 
                <MenuList w={"100vw"}>
                  <Stack w={'100%'} as={'nav'} spacing={4} 
                  float={'right'}alignItems='center'
                  backgroundColor='teal'
                  >
                      {Links.map((link) => (
                          <Button 
                          fontWeight='500' 
                          fontSize={20}
                          key={link} 
                          // backgroundColor={'#0A2647'} 
                          color={'white'} w={'100%'} h={"100%"} border={'none'}  _hover={{bg:"#2C74B3"}}>
                           <Link 
                            to={link}
                            duration={200}
                            offset={-200}
                            smooth={true} 
                            spacing={8}>{link}</Link>
                        </Button>
                      ))}
                  </Stack>
                      
                </MenuList>
              </Menu> 
            </Show>
        </Flex>

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
      </Box>

    </>
  );
}