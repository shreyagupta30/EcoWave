import * as React from 'react'
import { Container, Stack, Box, Text, Flex, VStack } from '@chakra-ui/react'
import Bus from '../../../public/images/bus.png'
import Plant from '../../../public/images/plant.png'
import Tree from '../../../public/images/tree.png'
import Image from 'next/image'

const ToggleRow = () => {
  return (
    <VStack mt='30px' mb='100px'>
      <Text
        textAlign='center'
        color='black'
        fontSize={40}
        fontWeight={800}
        mb='20px'
      >
        Our Emission Offset Program
      </Text>
      <Text textAlign='center' color='black' mb='25px' fontSize={20}>
        By contributing to carbon neutrality projects, you can make an impact
        well beyond the scope of your company.
      </Text>
      <Stack direction='row' spacing={10} justifyContent='center'>
        <Image src={Bus} alt='bus' height={550} />
        <Image
          src={Plant}
          alt='plant'
          height={550}
          style={{ marginTop: '50px', marginBottom: '-50px' }}
        />
        <Image src={Tree} alt='tree' height={550} />
      </Stack>
    </VStack>
  )
}

export default ToggleRow
