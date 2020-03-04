import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Navbar />
    <h1>About Page</h1>
    <p>This is the about page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
