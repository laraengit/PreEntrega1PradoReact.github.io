import React from 'react'
import CardWidget from './CardWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Flex,
    Box,
    Heading,
    ButtonGroup,
    Button,
    Spacer,
  } from '@chakra-ui/react'
  import { ChevronDownIcon } from '@chakra-ui/icons'
const NavBar = () => {
  return (
    /* <div>Navbar
        <h3>Brand</h3>
        <CardWidget/>
    </div> */

    <div>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
                <Heading size='md'>Dra. Marian Strika</Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
                <Menu>
                    <MenuButton
                        px={4}
                        py={2}
                        transition='all 0.2s'
                        borderRadius='md'
                        borderWidth='1px'
                        _hover={{ bg: 'gray.400' }}
                        _expanded={{ bg: 'blue.400' }}
                        _focus={{ boxShadow: 'outline' }}
                    >Servicios <ChevronDownIcon/>
                        
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Consulta</MenuItem>
                        <MenuItem>Revisión de Estudios</MenuItem>
                        <MenuItem>Chip</MenuItem>
                        <MenuItem>Plasma</MenuItem>
                    </MenuList>
                </Menu>
                <Button colorScheme='teal'>
                    <CardWidget/>
                </Button>
            </ButtonGroup>
        </Flex>

    </div>

    
    
  )
}

export default NavBar