import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Social from './social'

import './index.css'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          alaq.io
        </Link>
      </h1>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Adrien Lacquemant - Software Engineer"
      meta={[
        {
          name: 'description',
          content: 'Adrien Lacquemant - Software Engineer - New York'
        },
        {
          name: 'keywords',
          content: 'engineer, developer, adrien, lacquemant, adrien lacquemant'
        }
      ]}
    />
    {/* <Header /> */}
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}
    >
      {children()}
      <Social />
      <div id="background" />
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
