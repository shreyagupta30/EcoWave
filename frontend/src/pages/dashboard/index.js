import * as React from 'react'
import {
  Container,
  Box,
  Text,
  VStack,
  TableContainer,
  Table,
  Thead,
  TableCaption,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  HStack,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  StepTitle,
  StepDescription,
  StepSeparator,
  useSteps,
  Stack,
} from '@chakra-ui/react'
import Leaf from '../../../public/images/Leaf.svg'
import Image from 'next/image'
import RewardTier from '../../components/RewardTier'
import Uber from '../../../public/images/uber.svg'
import Lyft from '../../../public/images/lyft.svg'
import Grab from '../../../public/images/grab.svg'
import SidebarWithHeader from '../../components/SidebarWithHeader'

const Ledger = () => {
  const [isRewardTierModalOpen, setRewardTierModalOpen] = React.useState(false)
  const dummyData = [
    {
      id: 1,
      name: 'Uber Green',
      origin: 'Uber',
      dateTime: '2023-10-08 10:15 AM',
      points: 20,
    },
    {
      id: 2,
      name: 'Uber Green',
      origin: 'Uber',
      dateTime: '2023-10-07 01:00 PM',
      points: 20,
    },
    {
      id: 3,
      name: 'Cycling',
      origin: 'Apple Fitness',
      dateTime: '2023-10-09 09:30 AM',
      points: 30,
    },
    {
      id: 4,
      name: 'Climate Pledge Friendly order ',
      origin: 'Amazon',
      dateTime: '2023-10-07 03:00 PM',
      points: 20,
    },
  ]

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

  const openRewardTierModal = () => {
    setRewardTierModalOpen(true)
  }

  const closeRewardTierModal = () => {
    setRewardTierModalOpen(false)
  }

  const steps = [
    { title: 'Bronze', description: 'Tier 1' },
    { title: 'Silver', description: 'Tier 2' },
    { title: 'Gold', description: 'Tier 3' },
  ]

  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  })

  return (
    <>
      <SidebarWithHeader />
      <Container
        maxW='7xl'
        px={{ base: 6, md: 3 }}
        py={24}
        bg='white'
        height='800px'
        color='white'
        display='flex'
        justifyContent='center'
        alignItems='center'
        mt='350px'
      >
        <VStack>
          <Text color='black' fontSize={40} fontWeight={700} mb='30px'>
            Dashboard
          </Text>
          <HStack width='100%' display='flex' justifyContent='space-around'>
            <Box
              display='flex'
              w='250px'
              h='295px'
              position='relative'
              flexDirection='column'
              alignItems='center'
              borderRadius='20px'
              bg='#07503e'
              border='1px solid black'
              p={8}
            >
              <Image
                src={Leaf}
                alt='Leaf'
                style={{
                  position: 'absolute',
                  top: -25,
                  right: -25,
                  width: '70px',
                  height: '70px',
                }}
              />
              <Text fontSize={32} fontWeight={800} mb={5} textAlign='center'>
                Leading the Way
              </Text>
              <Text fontSize={14} textAlign='center'>
                At EcoWave, we practice what we preach. We monitor our
                environmental impact annually, ensuring a continuous commitment
                to a sustainable future.
              </Text>
            </Box>
            {/* second box */}
            <Box
              display='flex'
              w='500px'
              position='relative'
              flexDirection='column'
              alignItems='center'
              borderRadius='20px'
              bg='#07503e'
              border='1px solid black'
              p={8}
            >
              <Image
                src={Leaf}
                alt='Leaf'
                style={{
                  position: 'absolute',
                  top: -25,
                  right: -25,
                  width: '70px',
                  height: '70px',
                }}
              />
              <Text fontSize={32} fontWeight={800} mb={4}>
                Current Tier:
              </Text>
              <Text
                fontSize={28}
                mt='-15px'
                mb='25px'
                textAlign='center'
                color='orange.300'
                fontWeight={800}
              >
                Bronze
              </Text>
              <Text fontSize={14} mb='10px' fontWeight={700} textAlign='center'>
                Points needed to reach the next tier:
                <span
                  style={{
                    color: 'orange.300',
                    fontSize: '16px',
                    marginLeft: '10px',
                  }}
                >
                  35 XP
                </span>
              </Text>

              <Stepper size='lg' index={activeStep} colorScheme='green'>
                {steps.map((step, index) => (
                  <Step key={index}>
                    <StepIndicator>
                      <StepStatus
                        complete={<StepIcon />}
                        incomplete={<StepNumber />}
                        active={<StepNumber />}
                      />
                    </StepIndicator>

                    <Box flexShrink='0'>
                      <StepTitle color='white'>{step.title}</StepTitle>
                      <StepDescription color='white'>
                        {step.description}
                      </StepDescription>
                    </Box>

                    <StepSeparator />
                  </Step>
                ))}
              </Stepper>
              <Button
                height='25px'
                fontSize={12}
                mb='-25px'
                mt='30px'
                onClick={openRewardTierModal}
              >
                View All Tiers
              </Button>
            </Box>
          </HStack>
          <TableContainer mt='50px'>
            <Box borderRadius='5px' overflow='hidden'>
              <Table
                variant='striped'
                colorScheme='green'
                borderWidth='2px'
                borderColor='black'
              >
                <TableCaption mt='-1px'>
                  Environmental Activities Ledger
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th fontSize='18px'>s.no</Th>
                    <Th fontSize='18px'>name of activity</Th>
                    <Th fontSize='18px'>origin of activity</Th>
                    <Th fontSize='18px'>date/time</Th>
                    <Th isNumeric fontSize='18px'>
                      points
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {dummyData.map((item) => (
                    <Tr
                      key={item.id}
                      border='2px solid #009f65'
                      borderRadius='20px'
                    >
                      <Td color='black' fontSize='14px'>
                        {item.id}
                      </Td>
                      <Td color='black' fontSize='14px'>
                        {item.name}
                      </Td>
                      <Td color='black' fontSize='14px'>
                        {item.origin}
                      </Td>
                      <Td color='black' fontSize='14px'>
                        {item.dateTime}
                      </Td>
                      <Td isNumeric color='black' fontSize='14px'>
                        {item.points}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
                {/* <Tfoot>
                <Tr>
                  <Th>s.no</Th>
                  <Th>name of activity</Th>
                  <Th>origin of activity</Th>
                  <Th>date/time</Th>
                  <Th isNumeric>points</Th>
                </Tr>
              </Tfoot> */}
              </Table>
            </Box>
          </TableContainer>
          <Modal
            size='3xl'
            height='300px'
            isOpen={isRewardTierModalOpen}
            onClose={closeRewardTierModal}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>View All Tiers</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <RewardTier />
              </ModalBody>
            </ModalContent>
          </Modal>
          <Stack
            direction='column'
            spacing={4}
            justifyContent='center'
            mt='100px'
          >
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
              <Box
                display={'flex'}
                flexDirection='column'
                style={{ ...imageStyles }}
                _hover={increaseSizeOnHover}
              >
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
              mt='100px'
              color='black'
            >
              Services to be connected by you
            </Text>
            <HStack
              display={'flex'}
              justifyContent='space-between'
              alignItems={'center'}
              mb='100px'
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
        </VStack>
      </Container>
    </>
  )
}

export default Ledger
