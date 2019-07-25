import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"
import { reduxForm, Field, formValueSelector } from "redux-form"
import { Form, Button } from "react-bootstrap"

import styled from 'styled-components'
import { InputField } from "../components/InputField";

const ErrorText = styled.div`
  color: red;
`;

// This is step 2(currency step) in the wizard form.
// List all of the rate and select one of them.
// And then go to the result step which shows the conversion result.

const CurrencyStep = ({ user, handleSubmit, rates, selectedCurrency }) => {

  let loadFlag = rates.loading;
  let error = rates.error;
  
  // Get the list of rates from the state ( received from the server )
  const rateList = Object.entries(rates.data).map(([key, rate]) => ({
    value: key,
    label: `${key} (${rate.name})`
  }));
  // For the first(default) item
  const selectOptions = [{
    value: '',
    label: 'Please select...'
  }].concat(rateList);

  return (
    <div>
      <h3>
        Hello, <b>{user}</b>!
      </h3>
      {loadFlag && <div>loading...</div>}
      {error && <ErrorText>{error}</ErrorText>}
      <Form onSubmit={handleSubmit}>
        <Field
        component={InputField}
        options={selectOptions}
        componentClass="select"
        name="currency"
        type="text"
        />
        <Button type='submit' disabled={!selectedCurrency}>Set Currency</Button>
      </Form>
    </div>
  )
}

// Get the selected currency for the conversion to BTC
const getSelectedCurrency = state => {
  const selectedCurrency = formValueSelector('wizard')(state, 'currency');
  return { selectedCurrency }
}

export default compose(
  connect(getSelectedCurrency, {}),
  reduxForm({
    form: 'wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    enableReinitialize: true,
  }),
)(CurrencyStep)
