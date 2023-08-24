import React from 'react'
import { NavLink } from 'react-bootstrap'
import './Footer.css'
const Footer = () => {
  return (
    <>
    <footer>
        <div className="footer-title">
            The Generics
        </div>
        <div className="footer-icons">
            <ul>
                <li><NavLink href="https://www.youtube.com">
                <i className="fa-brands fa-youtube fa-3x"></i>
                </NavLink></li>
                <li><NavLink href="https://spotify.com">
                <i className="fa-brands fa-spotify fa-3x"></i>
                </NavLink></li>
                <li><NavLink href="https://facebook.com">
                <i className="fa-brands fa-facebook fa-3x"></i>
                </NavLink></li>
            </ul>
        </div>
    </footer>
    </>
  )
}

export default Footer