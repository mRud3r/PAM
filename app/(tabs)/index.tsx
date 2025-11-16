import DateDisplay from '@/components/Zad_1/date-display';
import MapImage from '@/components/Zad_2/map-image';
import StyledText from '@/components/Zad_3/styled-text';
import FlexboxLayout from '@/components/Zad_4/flexbox-layout';
import UserName from '@/components/Zad_5/user-name';
import UserSurname from '@/components/Zad_5/user-surname';
import LayoutWithBlocks from '@/components/Zad_6/layout-with-blocks';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text>Zad. 1</Text>
      <DateDisplay />
      <Text>Zad. 2</Text>
      <MapImage />
      <Text>Zad. 3</Text>
      <StyledText />
      <Text>Zad. 4</Text>
      <FlexboxLayout />
      <Text>Zad. 5</Text>
      <Text>
        <UserName name='Mikołaj' /> <UserSurname surname='Rudkowski' />
      </Text>
      <Text>Zad. 6</Text>
      <LayoutWithBlocks />
    </View>
  );
}
