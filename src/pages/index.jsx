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
      <main className="p-5 sm:mx-12 lg:mx-20 text-center">
        {/* * Initial Logo*/}
        <section className="">
          <Img className="max-w-sm mx-auto" fluid={text_logo_img.node.childImageSharp.fluid} alt="EC Synthetic Services Logo" />
        </section>
        {/* * Services */}
        <section className="py-5 lg:pb-10">
          <p className="text-2xl md:text-3xl lg:text-5xl font-medium">Services For You</p>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
            <div className="mt-5">
              <Img className="max-w-sm md:max-w-md lg:max-w-lg mx-auto" fluid={bathtub_img.node.childImageSharp.fluid} alt="bathtub" />
              <p className="font-medium md:text-lg">Bathtub & Tile Refinishing</p>
            </div>
            <div className="mt-5">
              <Img className="max-w-sm md:max-w-md lg:max-w-lg mx-auto" fluid={kitchen_img.node.childImageSharp.fluid} alt="kitchen" />
              <p className="font-medium md:text-lg">Kitchen Countertops</p>
            </div>
            <div className="mt-5">
              <Img className="max-w-sm md:max-w-md lg:max-w-lg mx-auto" fluid={sink_img.node.childImageSharp.fluid} alt="sink" />
              <p className="font-medium md:text-lg">Sink Refinishing</p>
            </div>
          </div>
        </section>
        {/* * About */}
        <section className="py-5 lg:py-10 text-center my-auto">
          <p className="text-2xl md:text-3xl lg:text-5xl font-medium">About Us</p>
          <p className="text-base font-normal leading-relaxed pt-3 max-w-prose mx-auto md:text-lg">EC Synthetic Services was founded by Edwin Vasquez, after working for many reputable companies for over 10 years as a sub-contractor. It was in 2018, when he decided to branch out on his own and create his own company. Here at EC Synthetic Services, we are committed to making sure that our clients are satisfied with every project. We take pride and ownership treating each job as if it was our very own home. Contact us today for more information!</p>
        </section>
        {/* * Contact */}
        <section className="py-5 lg:py-10 lg:grid lg:grid-cols-2 lg:divide-x-2 lg:divide-black">
          <p className="text-2xl md:text-3xl lg:text-5xl font-medium text-center lg:flex lg:flex-col">
            <span>Contact </span>
            <span> Information</span>
          </p>
          <div className=" lg:grid lg:grid-cols-1 gap-0">
            <p className="pt-4 lg:text-xl">
              <span className="lg:text-2xl font-medium">Phone Number: </span><br />
                (818) 264-8057
            </p>
            <p className="pt-4 lg:text-xl">
              <span className="lg:text-2xl font-medium">Email Address: </span><br />
              <a className="hover:underline" href="mailto:ecsyntheticsservices@gmail.com">
                ecsyntheticservices@gmail.com
              </a>
            </p>
          </div>
        </section>
        {/* * Contact Logo */}
        <section className="py-5 lg:py-10">
          <div><p className="text-2xl md:text-3xl font-medium pt-5">Call Us Today For Your Free Quote!</p></div>
          <div><Img className="max-w-sm md:max-w-md lg:max-w-lg mx-auto" fluid={bathtub_logo_img.node.childImageSharp.fluid} alt="EC Synthetic Services Bathtub Logo" /></div>
          <div><p className="text-2xl md:text-3xl font-medium pb-5">Serving All Over Southern California</p></div>
        </section>
      </main>
    </Layout >
  )
}

export default Home
