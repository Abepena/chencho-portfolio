import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import Header from "../components/header"
import headerStyles from "../styles/header.module.scss"

const PortfolioPage = () => {
  return (
    <div>
      <Navbar />
      <Header imgURL="../../images/feature-photo.png">
        <div className={headerStyles.container}>
          <h2 className={headerStyles.title}>Portfolio</h2>
        </div>
      </Header>
      <Layout>
        <SEO title="Portfolio" />
        <h1>Portfolio Page</h1>
        <p>
          This is where the gallery on images will be put, in terms of
          categories
        </p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    </div>
  )
}
export default PortfolioPage
