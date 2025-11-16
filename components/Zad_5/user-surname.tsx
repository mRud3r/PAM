import React, { Component } from 'react';
import { Text } from 'react-native';

interface UserSurnameProps {
  surname: string;
}

export default class UserSurname extends Component<UserSurnameProps> {
  render() {
    return <Text style={{ fontSize: 18 }}>{this.props.surname}</Text>;
  }
}
