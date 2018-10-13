import React from 'react'
import './header.css'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    className="navbar"
    style={{
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h3 style={{ margin: 0 }}>
        {/* <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
            marginRight: '20px'
          }}
        >
          Projects 
        </Link>
        
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
            marginRight: '20px'
          }}
        >
          About
        </Link> */}

        <Link
          to="/resume.pdf"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          Resume 
        </Link>

      </h3>
    </div>
  </div>
)

export default Header
