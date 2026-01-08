import PlayerList from '@/components/3_Zad_3/PlayersList'
import { Stack } from 'expo-router'

export default function HomeScreen() {
	return (
		<>
			<Stack.Screen
				options={{
					title: 'Indian Cricket Team',
				}}
			/>
			<PlayerList />
		</>
	)
}
