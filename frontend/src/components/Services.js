import * as React from 'react'
import { Container, Stack, Box, Text, HStack, Tooltip, Button } from '@chakra-ui/react'
import Uber from '../../public/images/uber.svg'
import Lyft from '../../public/images/lyft.svg'
import Grab from '../../public/images/grab.svg'
import Image from 'next/image'

const ToggleRow = () => {
  const imageStyles = {
    height: '70px',
    width: '70px',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out',
    opacity: 1,
  }

  const increaseSizeOnHover = {
    transform: 'scale(1.25)',
  }

  return (
    <Container
      maxW='6xl'
      px={{ base: 6, md: 3 }}
      py={24}
      bg='white'
      height='500px'
      color='white'
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      mt='100px'
    >
      <Stack direction='column' spacing={4} justifyContent='center'>
        <Text
          textAlign='center'
          fontSize={36}
          fontWeight={700}
          mb='30px'
          color='black'
        >
          Services Connected
        </Text>
        <HStack
          display={'flex'}
          justifyContent='space-between'
          alignItems={'center'}
        >
          <Box display={'flex'} flexDirection='column' style={{ ...imageStyles }} _hover={increaseSizeOnHover}>
            <Image src={Uber} alt='uber' height={68} width={68} />
            {/* <Tooltip label='Connect Uber' fontSize='md'>
              <Button backgroundColor='green.500' variant='solid' mt="20px">
                Connect
              </Button>
            </Tooltip> */}
          </Box>
          <Box
            style={{
              ...imageStyles,
              border: '1px solid purple',
              padding: '5px',
            }}
            _hover={increaseSizeOnHover}
          >
            <Image src={Lyft} alt='lyft' height={70} width={70} />
          </Box>
          <Box
            style={{
              ...imageStyles,
              border: '1px solid green',
              padding: '5px',
            }}
            _hover={increaseSizeOnHover}
          >
            <Image src={Grab} alt='grab' height={70} width={70} />
          </Box>
        </HStack>
        {/* second stack */}
        <Text
          fontSize={36}
          textAlign='center'
          fontWeight={700}
          mb='30px'
          mt='200px'
          color='black'
        >
          Services to be connected by you
        </Text>
        <HStack
          display={'flex'}
          justifyContent='space-between'
          alignItems={'center'}
        >
          <Box
            style={{
              ...imageStyles,
              opacity: 0.75,
            }}
            _hover={increaseSizeOnHover}
          >
            <Image src={Uber} alt='uber' height={68} width={68} />
          </Box>
          <Box
            style={{
              ...imageStyles,
              border: '1px solid purple',
              padding: '5px',
              opacity: 0.75,
            }}
            _hover={increaseSizeOnHover}
          >
            <Image src={Lyft} alt='lyft' height={70} width={70} />
          </Box>
          <Box
            style={{
              ...imageStyles,
              border: '1px solid green',
              padding: '5px',
              opacity: 0.75,
            }}
            _hover={increaseSizeOnHover}
          >
            <Image src={Grab} alt='grab' height={70} width={70} />
          </Box>
        </HStack>
      </Stack>
    </Container>
  )
}

export default ToggleRow
