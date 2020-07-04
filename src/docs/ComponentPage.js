import React from 'react'
import PropTypes from 'prop-types'
import Example from './Example'
import Props from './Props'

const ComponentPage = ({ component }) => {
  const { name, description, props, examples } = component
  console.log('component is ', component)
  return (
    <div className="componentpage">
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>Example</h3>
      {examples.length > 0 ?
      examples.map(example =>
      <Example key={example.code}
        example={example}
        componentName={name} />
      )
      : "No examples exist."
      }
      <h3>Props</h3>
      {props
      ? <Props props={props} />
      : "This component accepts no props"
      }
    </div>
  )
}

ComponentPage.propTypes = {
  component: PropTypes.object.isRequired
}

export default ComponentPage