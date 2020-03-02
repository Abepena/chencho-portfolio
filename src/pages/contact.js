import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <React.Fragment>
    <SEO title="Contact" />
    <h1>Contact me</h1>
    <p>Feel free to reach out for custom photography session quotes</p>
    <Link to="/">Go back to the homepage</Link>
  </React.Fragment>
)

export default Contact
