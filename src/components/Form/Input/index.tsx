import React from 'react';

import { TextInputProps } from 'react-native';

import {
  InputContainer,
} from './styles';

type Props = TextInputProps;

export function Input({...rest}: Props) {
  return (
    <InputContainer placeholderTextColor={'#969CB2'} {...rest} />
  );
}