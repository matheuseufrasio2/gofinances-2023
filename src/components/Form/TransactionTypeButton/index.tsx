import React from 'react';

import {
  TransactionTypeButtonContainer,
  Title,
  Icon,
} from './styles';
import { TouchableOpacityProps } from 'react-native';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
}

interface Props extends TouchableOpacityProps {
  title: string;
  type: 'up' | 'down'
  isActive: boolean;
}


export function TransactionTypeButton({
  title,
  type,
  isActive,
  ...rest
}: Props) {
  return (
    <TransactionTypeButtonContainer
      isActive={isActive}
      type={type}
      {...rest}
    >
      <Icon type={type} name={icons[type]} />
      <Title>
        {title}
      </Title>
    </TransactionTypeButtonContainer>
  );
}