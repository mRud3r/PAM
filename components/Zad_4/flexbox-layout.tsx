import { View, StyleSheet } from 'react-native';

export default function FlexboxLayout() {
  return (
    <View style={styles.container}>
      <View style={styles.blueBox} />
      <View style={styles.redBox} />
      <View style={styles.bottomRow}>
        <View style={styles.yellowBox} />
        <View style={styles.yellowBox} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 240
  },
  blueBox: {
    flex: 1,
    backgroundColor: 'blue',
    marginBottom: 4,
  },
  redBox: {
    flex: 2,
    backgroundColor: 'red',
    marginBottom: 4,
  },
  bottomRow: {
    flex: 1,
    flexDirection: 'row',
    columnGap: 4,
  },
  yellowBox: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});