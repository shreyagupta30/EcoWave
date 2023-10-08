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
} from '@chakra-ui/react'
import Leaf from '../../public/images/Leaf.svg'
import Image from 'next/image'
import RewardTier from './RewardTier'

const Ledger = () => {
  const [isRewardTierModalOpen, setRewardTierModalOpen] = React.useState(false)
  const dummyData = [
    {
      id: 1,
      name: 'Planting Trees',
      origin: 'Local Community',
      dateTime: '2023-10-08 10:00 AM',
      points: 20,
    },
    {
      id: 2,
      name: 'Recycling Drive',
      origin: 'City Council',
      dateTime: '2023-10-08 01:00 PM',
      points: 15,
    },
    {
      id: 3,
      name: 'Energy Conservation Workshop',
      origin: 'Green Energy Organization',
      dateTime: '2023-10-09 09:30 AM',
      points: 30,
    },
    {
      id: 4,
      name: 'Community Cleanup',
      origin: 'Local Environmental Group',
      dateTime: '2023-10-10 03:00 PM',
      points: 25,
    },
    {
      id: 5,
      name: 'Sustainable Transportation Day',
      origin: 'Transportation Authority',
      dateTime: '2023-10-11 11:30 AM',
      points: 15,
    },
    {
      id: 6,
      name: 'Eco-Friendly Product Expo',
      origin: 'Environmental Innovation Hub',
      dateTime: '2023-10-12 02:00 PM',
      points: 35,
    },
    // Add more rows as needed
  ]

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

  const ABI_URL =
    'https://raw.githubusercontent.com/shubhank-saxena/ecowave/master/ABIs/contract.json'
  const CONTRACT_ADDRESS = '0x0000000000000000000000000123456E65726779'

  async function getTotalSupply() {
    const driver = await Driver.connect(
      new SimpleNet('https://devnet.veblocks.net%22/')
    )
    const connex = new Framework(driver)

    const abi = await getJSON(ABI_URL)
    const getUserXP = abi.find(({ name }) => name === 'getUserXP')

    const {
      decoded: { 0: decodedUserXP },
    } = await connex.thor.account(CONTRACT_ADDRESS).method(getUserXP).call()

    return ethers.utils.formatEther(getUserXP)
  }
  getTotalSupply()

  return (
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
      mt='100px'
    >
      <VStack>
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
              environmental impact annually, ensuring a continuous commitment to
              a sustainable future.
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
        </Modal>{' '}
      </VStack>
    </Container>
  )
}

export default Ledger
