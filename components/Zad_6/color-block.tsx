import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ColorBlockProps {
  color: string;
  size: number;
}

export default function ColorBlock({ color, size }: ColorBlockProps) {
  return <View style={[styles.block, { backgroundColor: color, width: size, height: size }]} />;
}

const styles = StyleSheet.create({
  block: {
    margin: 10,
  },
});
