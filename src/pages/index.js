import React from "react"
import { Link } from "gatsby"
import {} from "@fortawesome/fontawesome-svg-core"

import Image from "../components/image"
import SEO from "../components/seo"
import "../styles/global.css"
import SocialButtons from "../components/SocialButtons"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <section className="page-header header-filter">
      <div className="container">
        <h2 className="title">Felipe V Pena</h2>
        <p className="lead">Orange County Based Photographer</p>
        <div className="hero-buttons">
          <Link to="/portfolio/" className="btn hero-btn">
            Portfolio
          </Link>
          <Link to="/contact/" className="btn hero-btn">
            Contact
          </Link>
        </div>
        <SocialButtons />
      </div>
    </section>
    <Link to="/portfolio/">Go to page 2</Link>
  </>
)

export default IndexPage
