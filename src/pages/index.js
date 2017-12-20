import React from 'react'
import Link from 'gatsby-link'

import Social from '../layouts/social'

const IndexPage = () => (
  <div className="front-page">
    <div className="card-wrap">
      <div className="image-wrap">
        <div className="mask">
          {/* Here we have the profile picture */}
          <div
            className="profile-image"
            style={{
              backgroundImage: `url(http://via.placeholder.com/200x200)`,
              height: '200px',
              width: '200px',
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
        {/* <div
          className="inner"
          dangerouslySetInnerHTML={{ __html: 'alaq.io' }}
        /> */}
        <h2>Adrien Lacquemant</h2>
        <h3>Software Engineer</h3>
        <p>
          I am a 🇫🇷 software engineer based in New York. I like stuff. And some
          other stuff.
        </p>
        <Social />
      </div>
    </div>
    {/* <a className="button blue-button">Hello</a>
    <a className="button white-button">world</a> */}
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
