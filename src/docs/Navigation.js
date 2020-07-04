import React from 'react'
import PropTypes from 'prop-types'

const Navigation = ({components}) => {
  return (
    <ul className="navigation">
      {
        components.map(name => {
          return (
            <li key={name}>
              {/* By convention, the name of the component will be what's used in the URL */}
              <a href={`#${name}`}>{name}</a>
            </li>
          )
        })
      }
    </ul>
  )
}

Navigation.propTypes = {
  components: PropTypes.array.isRequired
}

export default Navigation