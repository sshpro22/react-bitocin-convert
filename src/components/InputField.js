import React from 'react'
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'

export const InputField = ({
  input,
  label,
  placeholder,
  options,
  type,
  componentClass,
  readOnly,
  required,
  meta: { touched, error, warning }
}) => (
  <FormGroup validationState={touched && error ? 'error' : null}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl readOnly={readOnly} {...input} placeholder={placeholder} type={type} componentClass={componentClass} required={required}>
      {componentClass === 'select' && options ? options.map((item, index) => (
        <option key={index} value={item.value}>{item.label}</option>
      )) : undefined}
    </FormControl>
    {touched && error && <HelpBlock>{error}</HelpBlock>}
  </FormGroup>
)