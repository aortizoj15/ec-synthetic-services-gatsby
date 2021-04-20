import React, { useEffect } from "react"
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Glide from '@glidejs/glide'
import '../scss/index.scss'

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


const Gallery = ({ data }) => {
  const files = data.allFile.edges
  const galleryImages = files.filter(file => file.node.name.includes('gallery'))
  const bathtub_compare_1_img = galleryImages.find(img => img.node.name === 'bathtub_compare_1_gallery')
  const bathtub_compare_2_img = galleryImages.find(img => img.node.name === 'bathtub_compare_2_gallery')
  const bathtub_compare_3_img = galleryImages.find(img => img.node.name === 'bathtub_compare_3_gallery')
  const bathtub_compare_4_img = galleryImages.find(img => img.node.name === 'bathtub_compare_4_gallery')
  const bathtub_compare_5_img = galleryImages.find(img => img.node.name === 'bathtub_compare_5_gallery')
  const bathtub_img = galleryImages.find(img => img.node.name === 'bathtub_gallery')
  const shower_compare_img = galleryImages.find(img => img.node.name === 'shower_compare_gallery')
  const sink_compare_img = galleryImages.find(img => img.node.name === 'sink_compare_gallery')
  const slider = new Glide('.glide')

  useEffect(() => {
    return () => slider.mount()
  }, [slider])

  return (
    <Layout>
      <main className="p-5 sm:mx-12 lg:mx-20 text-center">
        <div className="glide">
          {/* <div className="glide__arrows" data-glide-el="controls">
            <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
          </div> */}
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <li className="glide__slide">
                <Img className="max-w-sm mx-auto" fluid={bathtub_compare_1_img.node.childImageSharp.fluid} alt="" />
              </li>
              <li className="glide__slide">
                <Img className="max-w-sm mx-auto" fluid={bathtub_compare_2_img.node.childImageSharp.fluid} alt="" />
              </li>
              <li className="glide__slide">
                <Img className="max-w-sm mx-auto" fluid={bathtub_compare_3_img.node.childImageSharp.fluid} alt="" />
              </li>
              <li className="glide__slide">
                <Img className="max-w-sm mx-auto" fluid={bathtub_compare_4_img.node.childImageSharp.fluid} alt="" />
              </li>
              <li className="glide__slide">
                <Img className="max-w-sm mx-auto" fluid={bathtub_compare_5_img.node.childImageSharp.fluid} alt="" />
              </li>
              <li className="glide__slide">
                <Img className="max-w-sm mx-auto" fluid={bathtub_img.node.childImageSharp.fluid} alt="" />
              </li>
              <li className="glide__slide">
                <Img className="max-w-sm mx-auto" fluid={shower_compare_img.node.childImageSharp.fluid} alt="" />
              </li>
              <li className="glide__slide">
                <Img className="max-w-sm mx-auto" fluid={sink_compare_img.node.childImageSharp.fluid} alt="" />
              </li>
            </ul>
          </div>
          <div className="glide__arrows" data-glide-el="controls">
            <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
            <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
          </div>
        </div>
      </main>
    </Layout >
  )
}

export default Gallery
