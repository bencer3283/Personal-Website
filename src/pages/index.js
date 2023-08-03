import * as React from "react"
import Layout from "../components/Layout"
import { Box, Heading, Text } from "@chakra-ui/react"

const IndexPage = () => {
  return (
    <Layout>
      <Box pl={{base: '3', md: '10'}}>
      <Text pt='10' fontSize={{base: '32pt', md: '72pt'}}>
          At the intersection of</Text>
          <Text fontSize={{base: '32pt', md: '72pt'}}>Technology and</Text>
          <Text pb='10' fontSize={{base: '32pt', md: '72pt'}}>Humanity.
        </Text>
        <Text pt='10' fontSize={{base: '16pt', md: '24pt'}}>
          This is Po Sheng Cheng's personal website, where you can find all the works this interdisciplinary student have ever done.
          Proudly made in Taiwan.
        </Text>
        <Text pt='10' fontSize='2xl'>
          Implement breadcrumbs, seo keywords, sub-title, automatic navigation generation.
          Fix allFile query filter: extension .md or .mdx
        </Text>
        <Heading p='10' size='2xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </Heading>
        <Heading p='10' size='2xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </Heading>
        <Heading p='10' size='2xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </Heading>
      </Box>
    </Layout>
  )
}

export default IndexPage;