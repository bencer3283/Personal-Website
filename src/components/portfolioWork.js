import * as React from 'react';
import Layout from './Layout';
import { Link } from 'gatsby';
import { SEO } from './seo';
import { useSiteMetadata } from '../hooks/site-meta';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Text } from '@chakra-ui/react';
import { IoMdArrowRoundBack } from "@react-icons/all-files/io/IoMdArrowRoundBack";
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
            <Button variant={'solid'} as={Link} to='/art' mt={'10vh'}>
                <IoMdArrowRoundBack /> Back to Portfolio
            </Button>
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