import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar"

const SessionsPage = () => (
  <Layout>
    <SEO title="Sessions" />
    <Navbar />
    <h1>Session Prices</h1>
    <p>This is the sessions prices page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SessionsPage
