'use client'
import {
  Avatar,
  Box,
  Flex,
  Icon,
  Text,
  Stack,
  Image,
  Button,
  Heading,
  BoxProps,
  Drawer,
  DrawerContent,
  IconButton,
  useDisclosure,
  DrawerOverlay,
  useColorModeValue,
  HStack,
  Menu,
  MenuButton,
  VStack,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react'
import { FaBell, FaTree } from 'react-icons/fa'
import { AiOutlineTeam, AiOutlineHome } from 'react-icons/ai'
import { BsFolder2, BsCalendarCheck, BsChevronBarRight } from 'react-icons/bs'
import { FiBell, FiChevronDown, FiMenu } from 'react-icons/fi'
import { RiFlashlightFill } from 'react-icons/ri'
import Landing from '../pages/Landing'
import { useEffect, useState } from 'react'
import ToggleRow from './ToggleRow'
import { Web3Auth } from '@web3auth/modal'
import { useRouter } from 'next/navigation'

export default function Index() {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false) // Add state for sidebar visibility
  const [user, setUser] = useState(null)
  const router = useRouter()
  console.log('aadas', router)

  const isDashboardPage = router.pathname === '/dashboard'
  const isVisionPage = router.pathname === '/vision'
  const isRewardsPage = router.pathname === '/rewards'

  console.log('aaaaaaaa', router.pathname)

  const web3auth = new Web3Auth({
    clientId:
      'BG2-INDoDAzL5NE8NkSOyN5AhA_jfwB8zsfJ7cnZ1VquM60jwc900JwjP2AN9wnW1NBdrbTeywF5sEJVM_F0dHU',
    web3AuthNetwork: 'sapphire_devnet',
    chainConfig: {
      chainId: '0x186aa',
      chainNamespace: 'other',
      rpcTarget: 'https://testnet.veblocks.net/',
    },
  })

  const initWeb3Auth = async () => {
    try {
      await web3auth.initModal()
    } catch (error) {
      console.error('Error initializing web3auth modal:', error)
    }
  }

  useEffect(() => {
    initWeb3Auth()

    // Check for user data in local storage
    const storedUserData = localStorage.getItem('userData')

    if (storedUserData) {
      // If user data exists, set the user state and mark as logged in
      const parsedUserData = JSON.parse(storedUserData)
      setUser(parsedUserData)
      setIsLoggedIn(true)
    } else {
      // If no user data, show the login button
      setIsLoggedIn(false)
    }
  }, [])

  //   await web3auth.initModal()

  const handleLogin = async () => {
    try {
      await web3auth.connect()
      setIsLoggedIn(true)
      await getUserInfo() // await for getUserInfo to complete
    } catch (error) {
      console.error('Error connecting to web3auth:', error)
    }
  }

  //   info

  const getUserInfo = async () => {
    if (!web3auth) {
      console.error('web3auth not initialized yet')
      return
    }

    try {
      const data = await web3auth.getUserInfo()
      setUser(data)
      console.log('user info:', data)

      // Save user data to local storage
      localStorage.setItem('userData', JSON.stringify(data))
    } catch (error) {
      console.error('Error fetching user info:', error)
    }
  }

  const logout = async () => {
    localStorage.removeItem('userData')
    localStorage.removeItem('Web3Auth-cachedAdapter')

    location.reload()
    if (!web3auth || !web3auth.provider) {
      console.log('Wallet is not connected')
      return
    }

    // Web3Auth-cachedAdapter
    // AWSALBCORS
    // AWSALB

    try {
      await web3auth.logout()
      setProvider(null)
    } catch (error) {
      console.error('Error during logout:', error)
    }
  }

  return (
    <Box as='section' bg='white' minH='100vh'>
      <SidebarContent
        display={{ base: 'none', md: 'unset' }}
        isOpen={isSidebarOpen} // Pass isOpen prop to SidebarContent
      />
      <Drawer isOpen={isOpen} onClose={onClose} placement='left'>
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w='full' borderRight='none' isOpen={true} />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: isSidebarOpen ? 60 : 0 }} transition='.3s ease'>
        <Flex
          as='header'
          align='center'
          justify={{ base: 'space-between', md: 'flex-end' }}
          w='full'
          px='4'
          borderBottomWidth='1px'
          borderColor={useColorModeValue('inherit', 'gray.700')}
          bg='white'
          boxShadow='sm'
          h='14'
        >
          <IconButton
            aria-label='Menu'
            display={{ base: 'inline-flex', md: 'none' }}
            onClick={() => {
              onOpen()
              setIsSidebarOpen(!isSidebarOpen) // Toggle sidebar visibility
            }}
            icon={<FiMenu />}
            size='md'
          />
          {isSidebarOpen ? (
            <Button
              mr={user?.name ? 950 : 1100}
              //   1100
              bg='white'
              color='black'
              border='1px solid gray'
              borderRadius='10px'
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              X
            </Button>
          ) : (
            <Button
              mr={user?.name ? 1150 : 1300}
              //   1300
              bg='white'
              color='black'
              border='1px solid gray'
              borderRadius='10px'
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <BsChevronBarRight />
            </Button>
          )}
          <Flex align='center'>
            {!isLoggedIn ? (
              <Flex
                h='100vh'
                justifyContent='center'
                alignItems='center'
                bgColor='white'
              >
                <Button
                  mt='50px'
                  px={8}
                  bg='gray.900'
                  color={'white'}
                  rounded='10px'
                  _hover={{
                    transform: 'translateY(-2px)',
                    // boxShadow: 'lg',
                  }}
                  onClick={() => handleLogin()}
                >
                  Login
                </Button>
              </Flex>
            ) : (
              <>
                <HStack spacing={{ base: '0', md: '6' }} width='250px'>
                  <Icon color='gray.500' as={FaBell} cursor='pointer' />
                  <Flex alignItems={'center'}>
                    <Menu>
                      <MenuButton
                        py={2}
                        transition='all 0.3s'
                        _focus={{ boxShadow: 'none' }}
                      >
                        <HStack>
                          <Avatar size={'sm'} src={user?.profileImage || ''} />
                          <VStack
                            display={{ base: 'none', md: 'flex' }}
                            alignItems='flex-start'
                            spacing='1px'
                            ml='2'
                          >
                            <Text fontSize='sm'>{user?.name || ''}</Text>
                            <Text fontSize='xs' color='gray.600'>
                              User
                            </Text>
                          </VStack>
                          <Box display={{ base: 'none', md: 'flex' }}>
                            <FiChevronDown />
                          </Box>
                        </HStack>
                      </MenuButton>
                      <MenuList bg='white' borderColor='gray'>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Settings</MenuItem>
                        <MenuItem>Billing</MenuItem>
                        <MenuDivider />
                        <MenuItem onClick={logout}>Sign out</MenuItem>
                      </MenuList>
                    </Menu>
                  </Flex>
                </HStack>
              </>
            )}
          </Flex>
        </Flex>

        {console.log('dashbbbb true?', isDashboardPage)}

        <Box as='main' p={14} minH='25rem' bg='white'>
          <Landing />
          <ToggleRow />
        </Box>
      </Box>
    </Box>
  )
}

const SidebarContent = ({ isOpen }) => (
  <Box
    as='nav'
    pos='fixed'
    top='0'
    left='0'
    zIndex='sticky'
    h='full'
    pb='10'
    overflowX='hidden'
    overflowY='auto'
    bg={useColorModeValue('white', 'gray.800')}
    borderColor={useColorModeValue('inherit', 'gray.700')}
    borderRightWidth='1px'
    w={isOpen ? '60' : '0'} // Set width to 0 when closed
  >
    <Flex px='4' py='5' align='center'>
      <Icon as={FaTree} h={8} w={8} color='green' />
      <Text
        fontSize='2xl'
        ml='2'
        color={useColorModeValue('green.600', 'white')}
        fontWeight='semibold'
      >
        EcoWave
      </Text>
    </Flex>
    <Flex
      direction='column'
      as='nav'
      fontSize='md'
      color='gray.600'
      aria-label='Main Navigation'
    >
      <NavItem name='Home' icon={AiOutlineHome}>
        Home
      </NavItem>
      <NavItem name='Dashboard' icon={AiOutlineTeam}>
        Dashboard
      </NavItem>
      <NavItem name='Rewards' icon={BsFolder2}>
        Rewards
      </NavItem>
      <NavItem name='Vision' icon={BsCalendarCheck}>
        Vision
      </NavItem>
    </Flex>
  </Box>
)

const NavItem = ({ name }) => {
  const color = useColorModeValue('gray.600', 'gray.300')
  const router = useRouter()

  const handleClick = () => {
    const route = name === 'Home' ? '/' : `/${name.toLowerCase()}`
    router.push(route)
  }

  return (
    <Flex
      align='center'
      px='4'
      py='3'
      cursor='pointer'
      role='group'
      fontWeight='semibold'
      transition='.15s ease'
      color={useColorModeValue('inherit', 'gray.400')}
      _hover={{
        bg: 'gray.200',
        color: useColorModeValue('gray.900', 'gray.200'),
      }}
      onClick={handleClick}
    >
      {name}
    </Flex>
  )
}
