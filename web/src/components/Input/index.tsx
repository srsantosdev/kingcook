import React, { InputHTMLAttributes, useRef, useEffect } from 'react';

import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const InputForm: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container isErrored={!!error}>
      <label>{label}</label>
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />
    </Container>
  );
};

export const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <Container>
      <label>{label}</label>
      <input {...rest} />
    </Container>
  );
};

export default InputForm;
