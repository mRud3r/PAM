import React from 'react';
import { Text } from 'react-native';

export interface UserNameProps {
  name: string;
}

export default function UserName({ name }: UserNameProps) {
  return <Text style={{ fontSize: 18 }}>{name}</Text>;
}
