import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import {
  ButtonContainer,
  Title,
} from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonContainer {...rest}>
      <Title>
        {title}
      </Title>
    </ButtonContainer>
  );
}