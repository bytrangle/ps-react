import React, {Component} from 'react'
import TextInput from 'ps-react/TextInput'

/** Optional Textbox */
export default class ExampleOptional extends Component {
  render() {
    return (
      <TextInput
        htmlId="example-optional"
        label="First Name"
        name="firstname"
        onChange={() => {}}
      />
    )
  }
}