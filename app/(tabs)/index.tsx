import DateDisplay from '@/components/Zad_1/date-display'
import MapImage from '@/components/Zad_2/map-image'
import StyledText from '@/components/Zad_3/styled-text'
import FlexboxLayout from '@/components/Zad_4/flexbox-layout'
import UserName from '@/components/Zad_5/user-name'
import UserSurname from '@/components/Zad_5/user-surname'
import LayoutWithBlocks from '@/components/Zad_6/layout-with-blocks'
import InvitationCard from '@/components/Zad_7/invitation-card'
import DataTimer from '@/components/Zad_8/data-timer'
import { Text, ScrollView } from 'react-native'
import useTime from '@/components/Zad_9/use-time'
import { useState } from 'react'
import RandomNumberGenerator from '@/components/Zad_10/random-number-generator'

interface InviteData {
  date: string
  time: string
  location: string
  dressCode: string
}

const inviteData: InviteData = {
  date: '17 Września 2025',
  time: '21:00',
  location: 'Warszawa, ul. Krucza 15',
  dressCode: 'Casual'
}

export default function HomeScreen() {
  const currentTime = useTime()
  const [randomNumber, setRandomNumber] = useState<number>(0)

	return (
		<ScrollView
			contentContainerStyle={{ padding: 24 }}
			showsVerticalScrollIndicator={true}
		>
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

			<Text>Zad. 7</Text>
			<InvitationCard
        date={inviteData.date}
        time={inviteData.time}
        location={inviteData.location}
        dressCode={inviteData.dressCode}
      />
			<Text>Zad. 8 i 9</Text>
      <DataTimer currentTime={currentTime} />
			<Text>Zad. 10</Text>
      <Text>Aktualna losowa liczba: {randomNumber}</Text>
      <RandomNumberGenerator onGenerate={setRandomNumber} />
		</ScrollView>
	)
}
