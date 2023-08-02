import * as React from "react"
import Layout from "../components/Layout"
import { Box, Heading, Text } from "@chakra-ui/react"

const IndexPage = () => {
  return (
    <Layout>
      <Box>
        <Text p='10' fontSize='60pt'>
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