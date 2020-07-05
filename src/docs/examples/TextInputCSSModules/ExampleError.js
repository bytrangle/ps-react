import React, {Component} from 'react'
import TextInputCSSModules from 'ps-react/TextInputCSSModules'

/** Required text box with error */
export default class ExampleError extends Component {
  render() {
    return (
      <TextInputCSSModules
        htmlId="example-optional"
        label="First Name"
        name="firstname"
        onChange={() => {}}
        required
        error="First name is required"
      />
    )
  }
}