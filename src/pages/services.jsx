import React from "react"
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import '../scss/services.scss'

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
      <main className="p-5 sm:mx-12 lg:mx-20 text-center h-screen">
        <section className="py-5 lg:py-10 bg-blue-900 mb-4">
          <div className="w-11/12 h-3/4 m-auto bg-white p-4">
            <p className="text-2xl md:text-3xl lg:text-5xl font-medium">Kitchen Refinishing</p>
            <div className="md:grid md:grid-cols-3">
              <div>
                <Img className="max-w-sm mx-auto" fluid={kitchen_sink_img.node.childImageSharp.fluid} alt="" />
                <hr className="w-1/2 m-auto mb-2 border-t-2 border-blue-900" />
                <ul className="md:font-medium">
                  <li>Kitchen Porcelain Sink</li>
                  <li>Laundry Room Porcelain Sink</li>
                </ul>
              </div>
              <div>
                <Img className="max-w-sm mx-auto" fluid={stove_img.node.childImageSharp.fluid} alt="" />
                <hr className="w-1/2 m-auto mb-2 border-t-2 border-blue-900" />
                <ul className="md:font-medium">
                  <li>Tile Kitchen Countertop</li>
                </ul>
              </div>
              <div>
                <Img className="max-w-sm mx-auto" fluid={kitchen_img.node.childImageSharp.fluid} alt="" />
                <hr className="w-1/2 m-auto mb-2 border-t-2 border-blue-900" />
                <ul className="md:font-medium">
                  <li>Formica Kitchen Countertop</li>
                  <li>Kitchen Countertop w/ Island</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 lg:py-10 bg-blue-900">
          <div className="w-11/12 h-3/4 m-auto bg-white p-4">
            <p className="text-2xl md:text-3xl lg:text-5xl font-medium">Bathroom Refinishing</p>
            <div className="md:grid md:grid-cols-3">
              <div>
                <Img className="max-w-sm mx-auto" fluid={bathtub_img.node.childImageSharp.fluid} alt="" />
                <hr className="w-1/2 m-auto mb-2 border-t-2 border-blue-900" />
                <ul className="md:font-medium">
                  <li>Porcelain Tub</li>
                  <li>Porcelain Tub with Tile Walls</li>
                  <li>Fiberglass Tub</li>
                  <li>Fiberglass Roman Tub</li>
                </ul>
              </div>
              <div>
                <Img className="max-w-sm mx-auto" fluid={bathroom_sink_img.node.childImageSharp.fluid} alt="" />
                <hr className="w-1/2 m-auto mb-2 border-t-2 border-blue-900" />
                <ul className="md:font-medium">
                  <li>Porcelain Sink</li>
                  <li>Bathroom Vanity</li>
                  <li>Tile Vanity</li>
                </ul>
              </div>
              <div>
                <Img className="max-w-sm mx-auto" fluid={bathtub_zoom_img.node.childImageSharp.fluid} alt="" />
                <hr className="w-1/2 m-auto mb-2 border-t-2 border-blue-900" />
                <ul className="md:font-medium">
                  <li>Tile Shower Stall</li>
                  <li>Tile Shower Pan</li>
                  <li>Fiberglass Shower Pan</li>
                  <li>Fiberglass Shower Stall</li>
                  <li>Culture Marble Wall Enclosure</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout >
  )
}

export default Services
