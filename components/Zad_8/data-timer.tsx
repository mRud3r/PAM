import { View, Text } from 'react-native'

interface DataTimerProps {
  currentTime: string
}

export default function DataTimer({ currentTime }: DataTimerProps) {
  return (
    <View style={{ marginTop: 8 }}>
      <Text>Data i godzina:</Text>
      <Text style={{ fontWeight: 'bold' }}>{currentTime}</Text>
    </View>
  )
}
