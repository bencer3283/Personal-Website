import * as React from 'react';
import Layout from './Layout';
import { Link } from 'gatsby';
import { SEO } from './seo';
import { useSiteMetadata } from '../hooks/site-meta';
import { Heading } from '@chakra-ui/react';

const PortfolioWorkPage = ({ pageContext }) => {
    const Content = require(`../portfolio/${pageContext.fileName}.js`).default
    return(
        <Layout>
            <Content />
        </Layout>
    )
}

export default PortfolioWorkPage

export const Head = ({ location, params, pageContext }) => (
    <SEO 
      title={pageContext.title + ' | ' + useSiteMetadata().title}
      description={pageContext.title}
      ></SEO>
  )