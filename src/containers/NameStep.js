import React from "react"
import { Field, reduxForm } from "redux-form"
import { Form, Button } from "react-bootstrap"
import { InputField } from "../components/InputField"
import { isRequired } from "../helpers"

// This is the step 1(name step) in the wizard form
// Input the user name and access to the currency step with that name.

const NameStep = ({ handleSubmit }) => {

  return (
    <div>
      <h3>
        What's your name?
      </h3>
      <Form onSubmit={handleSubmit}>
        <Field
          name="name"
          type="text"
          placeholder="name"
          component={InputField}
          validate={isRequired}
        />
        <Button type="submit">Set Name</Button>
      </Form>
    </div>
  )
}

export default reduxForm({
  form: "wizard",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(NameStep)
