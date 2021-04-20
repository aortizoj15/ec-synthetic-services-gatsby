import React from "react"
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
  }
`

const Services = ({ data }) => {
  const files = data.allFile.edges
  const servicesImages = files.filter(file => file.node.name.includes('services'))
  const bathroom_sink_img = servicesImages.find(img => img.node.name === 'bathroom_sink_services')
  const bathtub_img = servicesImages.find(img => img.node.name === 'bathtub_services')
  const bathtub_zoom_img = servicesImages.find(img => img.node.name === 'bathtub_zoom_services')
  const kitchen_img = servicesImages.find(img => img.node.name === 'kitchen_services')
  const kitchen_sink_img = servicesImages.find(img => img.node.name === 'kitchen_sink_services')
  const stove_img = servicesImages.find(img => img.node.name === 'stove_services')

  return (
    <Layout>
      <main className="p-5 sm:mx-12 lg:mx-20 text-center">
        <Img className="max-w-sm mx-auto" fluid={bathroom_sink_img.node.childImageSharp.fluid} alt="" />
        <Img className="max-w-sm mx-auto" fluid={bathtub_img.node.childImageSharp.fluid} alt="" />
        <Img className="max-w-sm mx-auto" fluid={bathtub_zoom_img.node.childImageSharp.fluid} alt="" />
        <Img className="max-w-sm mx-auto" fluid={kitchen_img.node.childImageSharp.fluid} alt="" />
        <Img className="max-w-sm mx-auto" fluid={kitchen_sink_img.node.childImageSharp.fluid} alt="" />
        <Img className="max-w-sm mx-auto" fluid={stove_img.node.childImageSharp.fluid} alt="" />
      </main>
    </Layout >
  )
}

export default Services
