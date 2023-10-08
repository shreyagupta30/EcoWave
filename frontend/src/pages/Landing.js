'use client'

import * as React from 'react'
import {
  chakra,
  Container,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Button,
  Image,
  Skeleton,
  Box,
  Link,
  Icon,
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { GoChevronRight } from 'react-icons/go'
import { MdBolt } from 'react-icons/md'

const HeroSection = () => {
  return (
    <Container maxW='7xl' px={{ base: 6, md: 3 }} py={24} bg='white'>
      <Stack direction={{ base: 'column', md: 'row' }} justifyContent='center'>
        <Stack
          direction='column'
          spacing={6}
          justifyContent='center'
          maxW='480px'
        >
          <chakra.h1
            fontSize='40px'
            lineHeight={1}
            fontWeight='bold'
            textAlign='center'
          >
            Drive Green, <br />
            Earn Rewards. <br />
            <br />
            {/* <chakra.span
              color='teal'
              style={{ fontSize: '24px', textAlign: 'left' }}
            >
              Measure, manage, reduce: Join the sustainable movement!
            </chakra.span> */}
          </chakra.h1>
          <chakra.h1
            fontSize='26px'
            color='teal'
            lineHeight={1}
            fontWeight='bold'
            textAlign='left'
          >
            Track your carbon footprint, make eco-friendly choices, and reap
            rewards for a sustainable future world!
          </chakra.h1>
          <Text
            fontSize='1rem'
            textAlign='center'
            lineHeight='1.375'
            fontWeight='400'
            color='gray.500'
          >
            Join us on the path to a greener!
          </Text>
          <HStack
            spacing={{ base: 0, sm: 2 }}
            mb={{ base: '3rem !important', sm: 0 }}
            flexWrap='wrap'
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <chakra.button
              w={{ base: '100%', sm: 'auto' }}
              h={12}
              mt='50px'
              px={6}
              color='white'
              size='lg'
              rounded='md'
              mb={{ base: 2, sm: 0 }}
              zIndex={5}
              lineHeight={1}
              bgGradient='linear(to-l, #00d062, #009f65)'
              _hover={{
                bgGradient: 'linear(to-l, #008040, #006533)',
                opacity: 0.9,
              }}
            >
              <chakra.span> Explore EcoWave </chakra.span>
              <Icon as={MdBolt} h={4} w={4} ml={1} />
            </chakra.button>
            <Box
              d='flex'
              justifyContent='center'
              bgGradient='linear(to-l, orange.300, orange.500)'
              // bg={useColorModeValue('orange.300', 'gray.800')}
              h='50px'
              w={{ base: '100%', sm: 'auto' }}
              mt='50px'
              border='1px solid'
              borderColor='gray.300'
              p={3}
              lineHeight={1.18}
              rounded='md'
              boxShadow='md'
              as={Link}
              zIndex={1}
              color='white'
            >
              Discover More Stuffs
            </Box>
          </HStack>
        </Stack>
        <Box ml={{ base: 0, md: 5 }} pos='relative'>
          <Image
            w='100%'
            h='100%'
            minW={{ base: 'auto', md: '30rem' }}
            objectFit='cover'
            src={
              'https://media.istockphoto.com/id/1344923073/photo/a-lake-in-the-shape-of-human-footprints-in-the-middle-of-a-lush-forest-as-a-metaphor-for-the.jpg?s=612x612&w=0&k=20&c=59g2smz0LLQ2cbW9eR4NZ3PaIpXavYk5g46Vb2vAEQU='
            }
            alt='hero'
            borderRadius='20px'
            fallback={<Skeleton />}
          />
        </Box>
      </Stack>
    </Container>
  )
}

export default HeroSection
