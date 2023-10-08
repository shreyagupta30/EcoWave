import * as React from 'react'
import { Container, Stack, Box, Text, VStack } from '@chakra-ui/react'
import With from "../../public/images/graph1.jpeg"
import Without from "../../public/images/graph2.jpeg"
import Image from 'next/image'

const ToggleRow = () => {
  const [activeText, setActiveText] = React.useState('With EcoWave')
  const texts = ['With EcoWave', 'Without EcoWave']

  const handleToggle = (text) => {
    setActiveText(text)
  }

  return (
    <VStack
      maxW='6xl'
      px={{ base: 6, md: 3 }}
      py={24}
      ml='10vw'
      mb="150px"
      bg='white'
      height='625px'
      color='white'
    >
      <Text fontSize={36} fontWeight={700} color="black" textAlign="center" mb="100px">
        We take everything into account to give you precise outcomes. And we do
        it fast
      </Text>
      <Stack direction='row' spacing={4} justifyContent='center'>
        <Box
          display='flex'
          flexDirection='row'
          borderRadius='20px'
          border='1px solid black'
          overflow='hidden'
          mt='-35px'
        >
          {texts.map((text, index) => (
            <Box
              key={index}
              width='200px'
              height='50px'
              display='flex'
              justifyContent='center'
              alignItems='center'
              cursor='pointer'
              borderRadius='12px'
              margin='10px'
              onClick={() => handleToggle(text)}
              backgroundColor={activeText === text ? '#00d062' : 'transparent'}
              color={activeText === text ? 'black' : 'black'}
              fontWeight={700}
            >
              <Text>{text}</Text>
            </Box>
          ))}
        </Box>
      </Stack>
      {activeText === 'With EcoWave' ? (
        <Image
          src={With}
          alt='with-us'
          height={350}
          style={{ marginTop: '50px', borderRadius: '15px' }}
        />
      ) : (
        <Image
          src={Without}
          alt='without-us'
          height={350}
          style={{ marginTop: '50px', borderRadius: '15px' }}
        />
      )}
    </VStack>
  )
}

export default ToggleRow
