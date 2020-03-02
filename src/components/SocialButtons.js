import React from "react"
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa"

export default function SocialButtons() {
  return (
    <nav className="social-media-buttons my-2">
      <a className="social-button" href="mailto: felipepena23@gmail.com">
        <FaEnvelope />
      </a>
      <a
        className="social-button mx-1"
        href="https://www.facebook.com/FelipexPena/"
        target="_blank"
      >
        <FaFacebookF />
      </a>
      <a
        className="social-button"
        href="https://www.instagram.com/felipevpena/"
        target="_blank"
      >
        <FaInstagram />
      </a>
    </nav>
  )
}
