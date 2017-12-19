import React from 'react'
import Link from 'gatsby-link'

import Social from '../layouts/social'

const IndexPage = () => (
  <div className="front-page">
    <div className="card-wrap">
      <div className="image-wrap">
        <div className="mask">
          <div
            className="profile-image"
            style={{
              backgroundImage: `url(http://via.placeholder.com/250x250)`,
              height: '250px',
              width: '250px',
              borderTopLeftRadius: '50%',
              borderTopRightRadius: '50%',
              borderBottomLeftRadius: '50%',
              borderBottomRightRadius: '50%'
            }}
          >
            {' '}
          </div>
        </div>
      </div>
      <div className="content">
        <div
          className="inner"
          dangerouslySetInnerHTML={{ __html: 'alaq.io' }}
        />
        <Social />
        <a className="button blue-button">Hello</a>
      </div>
    </div>
  </div>
  // <div>
  //   <h1>Hi people</h1>
  //   <div className="card">test</div>
  //   <Link to="/page-2/">Go to page 2</Link>
  //   |
  //   <Link to="/typography/">Go to page Typography</Link>
  //   <button>Send me an email</button>
  // </div>
)

export default IndexPage
