import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className="card">test</div>
    <Link to="/page-2/">Go to page 2</Link>
    |
    <Link to="/typography/">Go to page Typography</Link>
  </div>
)

export default IndexPage
