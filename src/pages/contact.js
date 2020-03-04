import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Navbar />
    <h1>Contact me</h1>
    <p>Feel free to reach out for custom photography session quotes</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage
