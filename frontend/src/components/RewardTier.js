'use client'
import { Box, Button, ChakraProvider, Checkbox, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const updatedDummyData = {
  regular: {
    silver: {
      title: 'Silver',
      price: 1.99,
      billingCode: 'silver-regular',
      priceOverview: 'Standard Version',
    },
    gold: {
      title: 'Gold',
      price: 2.99,
      billingCode: 'gold-regular',
      priceOverview: 'Standard Version',
    },
    bronze: {
      title: 'Bronze',
      price: 0.99,
      billingCode: 'bronze-regular',
      priceOverview: 'Standard Version',
    },
  },
  promo: {
    silver: {
      title: 'Silver with Extra',
      price: 2.45,
      billingCode: 'silver-extra',
      priceOverview: 'Includes all Extra features',
    },
    gold: {
      title: 'Gold with Extra',
      price: 3.45,
      billingCode: 'gold-extra',
      priceOverview: 'Includes all Extra features',
    },
    bronze: {
      title: 'Bronze with Extra',
      price: 1.45,
      billingCode: 'bronze-extra',
      priceOverview: 'Includes all Extra features',
    },
  },
}

const PricingCardContainer = () => {
  const [promo, setPromo] = useState(false)

  const togglePromo = () => {
    setPromo(!promo)
  }

  let pricingDataCurrent = promo
    ? updatedDummyData.promo
    : updatedDummyData.regular

  return (
    <Box color='black' display='flex' justifyContent='space-around'>
      {Object.values(pricingDataCurrent).map((pricingData) => (
        <PricingCard key={pricingData.billingCode} pricingData={pricingData} />
      ))}
    </Box>
  )
}

const PricingCard = ({ pricingData }) => {
  const price = pricingData.price.toString().split('.')
  const dollar = price[0]
  const cent = price[1] || '00'

  const tierStyles = {
    Silver: {
      bg: 'green.100', // Light shade of green
      text: 'black', // Black text
      boxShadow: '0 14px 16px rgba(0, 0, 0, 0.3)', // Gray box shadow
    },
    Gold: {
      bg: 'yellow.100', // Light shade of yellow
      text: 'black', // Black text
      boxShadow: '0 14px 16px rgba(0, 0, 0, 0.3)', // Gray box shadow
    },
    Bronze: {
      bg: 'orange.100', // Light shade of orange
      text: 'black', // Black text
      boxShadow: '0 14px 16px rgba(0, 0, 0, 0.3)', // Gray box shadow
    },
  }

  const { bg, text, boxShadow } = tierStyles[pricingData.title] || { bg: 'green.100', text: 'black', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' };

  return (
    <Box
      border='1px'
      borderRadius='lg'
      p='4'
      ml="20px"
      mr="20px"
      textAlign='center'
      color={"black"}
      bg={bg}
      boxShadow={boxShadow}
    >
      <Text fontSize='xl' fontWeight='bold' mb='2'>
        {pricingData.title}
      </Text>

      <Text fontSize='2xl'>
        <span>$</span>
        {dollar}.<span>{cent}</span>
      </Text>

      <Text fontSize='sm' mt='2'>
        {`This eco-friendly plan is great for sustainable use.`}
      </Text>

      <Text fontWeight='bold' mt='2'>
        {pricingData.priceOverview}
      </Text>

      <Text mt='2'>{`Choose ${pricingData.title} for a greener future.`}</Text>

      <Button
        colorScheme='white'
        variant='outline'
        mt='4'
        href={`http://www.example.com/${pricingData.billingCode}`}
      >
        {`Try ${pricingData.title} Now`}
      </Button>
    </Box>
  )
}


// App component
const App = () => {
  return (
    <ChakraProvider>
      <Box p='60' marginTop={-200} marginBottom={-190} zIndex={99999999}>
        <PricingCardContainer />
      </Box>
    </ChakraProvider>
  )
}

export default App