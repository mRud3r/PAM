import { Text } from 'react-native';

export default function StyledText() {
  return (
    <Text style={{ fontSize: 16 }}>
      <Text style={{ fontStyle: 'italic' }}>Pizza</Text> to bardzo smaczne włoskie danie. Wykonuje się ją z ciasta drożdżowego.
      Na ciasto wylewa się sos pomidorowy. Na wierzch kładzie się składniki:{" "}
      <Text style={{ fontWeight: 'bold' }}>
        kiełbasa, ser żółty, oliwki, papryka
      </Text>
      . Istnieje wiele rodzajów{" "}
      <Text style={{ fontStyle: 'italic' }}>pizzy</Text>, może być mięsna, bezmięsna,
      rybna lub słodka z{" "}
      <Text style={{ color: 'yellow' }}>ananasem</Text>.
    </Text>
  );
}