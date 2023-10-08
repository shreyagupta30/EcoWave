"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { Text, Th, extendTheme } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import Landing from '../pages/Landing'
import SidebarWithHeader from '@/components/SidebarWithHeader'
import Ledger from '../components/Ledger'
import Services from '../components/Services'
import Discount from '../components/Discount'
import EmissionOffset from '../components/EmissionOffset'
import { useRouter } from 'next/navigation'

const theme = extendTheme({
  colors: {
    brand: {
      500: '#0ea5e9',
      700: '#2563eb',
    },
  },
})

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <SidebarWithHeader />
      {/* <Landing /> */}
      {/* <Ledger /> */}
      {/* <Services /> */}
      {/* <Discount />
      <EmissionOffset /> */}
    </ChakraProvider>
  )
}
