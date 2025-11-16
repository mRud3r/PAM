import DateDisplay from '@/components/Zad_1/date-display';
import MapImage from '@/components/Zad_2/map-image';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ padding: 24 }}>
      <Text>Zad. 1</Text>
      <DateDisplay />
      <Text>Zad. 2</Text>
      <MapImage />
    </View>
  );
}
