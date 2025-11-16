import { Image } from 'react-native';

export default function MapImage() {
  return (
    <Image
      source={{
        uri: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Poland_CIA_map_PL.png',
      }}
      style={
        {width : 300, height: 300}
      }
    />
  );
}