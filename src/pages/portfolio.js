import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <React.Fragment>
    <SEO title="Page two" />
    <h1>Portfolio Page</h1>
    <p>
      This is where the gallery on images will be put, in terms of categories
    </p>
    <Link to="/">Go back to the homepage</Link>
  </React.Fragment>
)

export default SecondPage
