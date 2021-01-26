import React from "react"
import Layout from "../components/Layout"

const Home = () => {
  return (
    <Layout>
      <main className="">
        <section className="bg-gray-300 p-5 text-center">
          <p className="font-medium">EC Synthetic Services specializes in the repairing and refinishing of bathtubs, bathroom & kitchen sinks, and much more within Southern California.
          </p>
          <p className="pt-2">
            Contact us for more information.</p>
          <p className="pt-4">
            Phone number: (818) 264-8057
          </p>
          <p className="pt-4">
            Email: <a className="font-medium" href="mailto:ecsyntheticsservices@gmail.com">
              ecsyntheticservices@gmail.com
              </a>
          </p>
          <p className="pt-4">License No. 1069990</p>
        </section>
      </main>
    </Layout>
  )
}

export default Home
