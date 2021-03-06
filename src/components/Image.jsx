import React, { useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import "../styles/fonts.css"

export default function Image({
  src,
  backgroundColor,
  className,
  width,
  height,
  ...rest
}) {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { internal: { mediaType: { regex: "/image/" } } }
      ) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  `)

  const match = useMemo(
    () => data.images.edges.find(({ node }) => src === node.relativePath),
    [data, src]
  )

  if (!match) return null

  const { node: { childImageSharp, publicURL, extension } = {} } = match

  if (extension === "svg" || !childImageSharp) {
    return <img src={publicURL} {...rest} alt={"asset for meet-abhi"} />
  }

  return (
    <Img
      width={width && width}
      height={height && height}
      backgroundColor={backgroundColor}
      className={className ? className : ""}
      fluid={childImageSharp.fluid}
      {...rest}
    />
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
}
