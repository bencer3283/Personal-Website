import * as React from 'react';
import Layout from './Layout';
import { Link } from 'gatsby';
import { SEO } from './seo';
import { useSiteMetadata } from '../hooks/site-meta';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, Spacer, Text } from '@chakra-ui/react';
import { IoMdArrowRoundBack } from "@react-icons/all-files/io/IoMdArrowRoundBack";
import { IoMdArrowRoundForward } from "@react-icons/all-files/io/IoMdArrowRoundForward";
import { MdChevronRight } from "@react-icons/all-files/md/MdChevronRight";

const PortfolioWorkPage = ({ pageContext }) => {
    const Content = require(`../portfolio/${pageContext.fileName}.js`).default
    return(
        <Layout>
            <Breadcrumb separator={<MdChevronRight color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to='/art'>Portfolio</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink isCurrentPage as={Link} to={`/portfolio/${pageContext.fileName}`}>
                        <Text textTransform='capitalize'> {pageContext.title} </Text>
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Content />
            <Flex direction={{base:'column', md:'row'}}>
                <Button variant={'solid'} as={Link} to='/art' mt={'10vh'}>
                    <IoMdArrowRoundBack /> Back to Portfolio Overview
                </Button>
                <Spacer></Spacer>
                <Button variant={'solid'} as={Link} to={`/portfolio/${pageContext.nextFile}`} mt={{base:'5vh', md: '10vh'}}>
                    Next: {`${pageContext.nextTitle}`}<IoMdArrowRoundForward></IoMdArrowRoundForward>
                </Button>
            </Flex>
        </Layout>
    )
}

export default PortfolioWorkPage

export const Head = ({ location, params, pageContext }) => (
    <SEO 
      title={pageContext.title + ' | ' + 'Portfolio' + ' | ' + useSiteMetadata().title}
      description={pageContext.description}
      ></SEO>
  )