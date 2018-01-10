import React from 'react'

import FaGithub from 'react-icons/lib/fa/github'
import FaCodepen from 'react-icons/lib/fa/codepen'
import FaTwiiter from 'react-icons/lib/fa/twitter'
import FaLinkedIn from 'react-icons/lib/fa/linkedin'
import FaEnvelope from 'react-icons/lib/fa/envelope'
import keybaseLogo from '../../keybase.svg'

const Social = props => {
  const github = 'https://github.com/alaq'
  const linkedin = 'https://www.linkedin.com/in/adrien-lacquemant/'
  const twitter = 'https://twitter.com/adrien'
  const mailto = 'mailto:web@alaq.io'
  const keybase = 'https://keybase.io/alaq'

  return (
    <div className="social">
      <ul className="social-icons">
        <li>
          <a href={github} target="_blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href={twitter} target="_blank">
            <FaTwiiter />
          </a>
        </li>
        <li>
          <a href={linkedin} target="_blank">
            <FaLinkedIn />
          </a>
        </li>
        <li>
          <a href={mailto}>
            <FaEnvelope />
          </a>
        </li>
        <li>
          <a href={keybase}>
            <img className="svg-logo" src={keybaseLogo} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Social
