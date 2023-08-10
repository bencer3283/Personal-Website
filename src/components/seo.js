import React from "react"
import { useSiteMetadata } from "../hooks/site-meta"

export const SEO = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:description" content={seo.description} />
      <meta property="twitter:image" content={seo.image}></meta>
      <meta property="twitter:description" content={seo.description}></meta>
      <meta property="twitter:title" content={seo.title}></meta>
      <meta property="twitter:card" content={'summary'}></meta>
      <link id='icon' rel="icon" href={seo.image} />
      {children}
    </>
  )
}