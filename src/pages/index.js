import * as React from "react"
import Layout from "../components/Layout"
import { Box, Heading, Text } from "@chakra-ui/react"
import { SEO } from "../components/seo"

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
          To-Do: Implement breadcrumbs, seo keywords, sub-title, automatic navigation generation.
          Fix allFile query filter: extension .md or .mdx
        </Text>
      </Box>
    </Layout>
  )
}

export default IndexPage;

export const Head = () => (
  <SEO />
)