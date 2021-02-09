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

const Home = ({ data }) => {
  const files = data.allFile.edges
  const homeImages = files.filter(file => file.node.name.includes('home'))
  const bathtub_img = homeImages.find(img => img.node.name === 'bathtub_home')
  const bathtub_logo_img = homeImages.find(img => img.node.name === 'bathtub_logo_home')
  const kitchen_img = homeImages.find(img => img.node.name === 'kitchen_home')
  const sink_img = homeImages.find(img => img.node.name === 'sink_home')
  const text_logo_img = homeImages.find(img => img.node.name === 'text_logo_home')
  return (
    <Layout>
      <main className="text-center">
        {/* <main className="bg-gradient-to-b from-gray-400 via-gray-300 to-gray-100 p-5 text-center"> */}
        {/* <section className="bg-gray-300 p-5 text-center">
          <p className="font-medium">EC Synthetic Services specializes in the repairing and refinishing of bathtubs, bathroom & kitchen sinks, and much more within Southern California.
          </p>
          <p className="pt-2 font-medium">
            Contact us for more information.</p>
          <p className="pt-4">
            <span className="font-medium">Phone Number: </span>
            (818) 264-8057
          </p>
          <p className="pt-4">
            <span className="font-medium">Email: </span>
            <a className="hover:underline" href="mailto:ecsyntheticsservices@gmail.com">
              ecsyntheticservices@gmail.com
              </a>
          </p>
          <p className="pt-4"><span className="font-medium">License No. </span>1069990</p>
        </section> */}
        <section className="">
          {/* <section className="bg-gradient-to-b from-gray-400 to-white p-5"> */}
          <Img className="max-w-sm md:max-w-lg mx-auto" fluid={text_logo_img.node.childImageSharp.fluid} alt="EC Synthetic Services Logo" />
        </section>
        {/* <hr className="border-2 border-blue-900 max-w-sm mx-auto my-5" /> */}
        <section className="bg-gray-400 py-5">
          <p className="text-3xl font-medium">Services For You</p>
          <div className="">
            <div className="mt-5">
              <Img className="max-w-sm md:max-w-lg mx-auto" fluid={bathtub_img.node.childImageSharp.fluid} alt="bathtub" />
              <p className="font-medium">Bathtub & Tile Refinishing</p>
            </div>
            <div className="mt-5">
              <Img className="max-w-sm md:max-w-lg mx-auto" fluid={kitchen_img.node.childImageSharp.fluid} alt="kitchen" />
              <p className="font-medium">Kitchen Countertops</p>
            </div>
            <div className="mt-5">
              <Img className="max-w-sm md:max-w-lg mx-auto" fluid={sink_img.node.childImageSharp.fluid} alt="sink" />
              <p className="font-medium">Sink Refinishing</p>
            </div>
          </div>
        </section>
        {/* <hr className="border-2 border-blue-900 max-w-sm mx-auto my-5" /> */}
        <section className="pb-5">
          <div className="">
            <Img className="max-w-sm md:max-w-lg mx-auto" fluid={text_logo_img.node.childImageSharp.fluid} alt="EC Synthetic Services Logo" />
          </div>
          <div className="text-center">
            <p className="text-3xl font-medium">About Us</p>
            <p className="text-base font-normal leading-relaxed pt-3 max-w-prose mx-auto">EC Synthetic Services was founded by Edwin Vasquez, after working for many reputable companies for over 10 years as a sub-contractor. It was in 2018, when he decided to branch out on his own and create his own company. Here at EC Synthetic Services, we are committed to making sure that our clients are satisfied with every project. We take pride and ownership treating each job as if it was our very own home. Contact us today for more information!</p>
          </div>
        </section>
        {/* <hr className="border-2 border-blue-900 max-w-sm mx-auto my-5" /> */}
        <section className="bg-gray-400 py-5">
          <div>
            <p className="text-3xl font-medium">Contact Information</p>
            <Img className="max-w-sm md:max-w-lg mx-auto" fluid={text_logo_img.node.childImageSharp.fluid} alt="EC Synthetic Services Logo" />
          </div>
          <div>
            <p className="pt-4">
              <span className="font-medium">Phone Number: </span>
            (818) 264-8057
          </p>
            <p className="pt-4">
              <span className="font-medium">Email: </span>
              <a className="hover:underline" href="mailto:ecsyntheticsservices@gmail.com">
                ecsyntheticservices@gmail.com
              </a>
            </p>
          </div>
        </section>
        {/* <hr className="border-2 border-blue-900 max-w-sm mx-auto my-5" /> */}
        <section className="py-5">
          <div><p className="text-3xl font-medium">Serving All Over California</p></div>
          <div><Img className="max-w-sm md:max-w-lg mx-auto" fluid={bathtub_logo_img.node.childImageSharp.fluid} alt="EC Synthetic Services Bathtub Logo" /></div>
          <div><p className="text-3xl font-medium">Call Us Today For Your Free Quote!</p></div>
        </section>
      </main>
    </Layout >
  )
}

export default Home
