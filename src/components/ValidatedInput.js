import React from 'react'
import {
  Field,
} from 'formik'
import {
  Input,
} from 'candour'

export default (props) => (
  <Field {...props}>
    {({
      field,
      form: {
        touched,
        errors,
      },
      ...rest,
    }) => (
      <Input
        borderColorRed={!!(touched[field.name] && errors[field.name])}
        {...props}
        {...field}
        {...rest}
      />
    )}
  </Field>
)
