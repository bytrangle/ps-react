import React, {Component} from 'react'
import TextInputStyledComponent from 'ps-react/TextInputStyledComponents'

/** Required text box with error */
export default class ExampleError extends Component {
  render() {
    return (
      <TextInputStyledComponent
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