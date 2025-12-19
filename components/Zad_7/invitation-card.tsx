import { View, Text } from 'react-native'

interface InvitationCardProps {
  date: string
  time: string
  location: string
  dressCode: string
}

export default function InvitationCard({
  date,
  time,
  location,
  dressCode,
}: InvitationCardProps) {
  return (
    <View style={{ padding: 16, borderWidth: 1, borderRadius: 8, marginTop: 8 }}>
      <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>
        Zaproszenie na urodziny
      </Text>
      <Text>Data: {date}</Text>
      <Text>Godzina: {time}</Text>
      <Text>Miejsce: {location}</Text>
      <Text>Dress code: {dressCode}</Text>
    </View>
  )
}
