import React from 'react';
import { Form } from './styles';

function FormInformations({ children, isBlur }) {
  return <Form isBlur={isBlur}>{children}</Form>;
}

export default FormInformations;
