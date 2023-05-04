import React from 'react';

import {
  View,
  Text
} from 'react-native';
import { Title } from './styles';

interface Props {
  title: string;
}

export function Dashboard({ title }: Props) {
  return (
    <View>
      <Title>{title}</Title>
    </View>
  );
}