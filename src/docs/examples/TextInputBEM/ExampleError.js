import React, {Component} from 'react'
import TextInputBEM from 'ps-react/TextInputBEM'

/** Required text box with error */
export default class ExampleError extends Component {
  render() {
    return (
      <TextInputBEM
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