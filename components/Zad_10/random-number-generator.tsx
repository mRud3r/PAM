import { View, Button } from 'react-native'

interface RandomNumberGeneratorProps {
  onGenerate: (value: number) => void
}

export default function RandomNumberGenerator({
  onGenerate,
}: RandomNumberGeneratorProps) {
  const generateRandomNumber = () => {
    const random = Math.floor(Math.random() * (10 - 1 + 1) + 1)
    onGenerate(random)
  }

  return (
    <View style={{ marginTop: 8 }}>
      <Button title="Wylosuj liczbę (1–10)" onPress={generateRandomNumber} />
    </View>
  )
}
