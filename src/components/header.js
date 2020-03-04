import PropTypes from "prop-types"
import React from "react"
import style from "../styles/header.module.scss"

const Header = ({ children, imgURL }) => {
  const {pageHeader, headerFilter} = {...style}
  return (
  <header className={`${pageHeader} ${headerFilter}`} 
  style={{backgroundImage: `url(${imgURL})`}}>
    {children}
  </header>
  )}

Header.propTypes = {
  imgURL: PropTypes.string,
}

Header.defaultProps = {
  imgURL: ``,
}

export default Header
