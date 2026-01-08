import { useRouter } from 'expo-router'
import { FlatList, StyleSheet, View } from 'react-native'
import players from '@/data/3_Zad_1/players'
import PlayerCard from '../3_Zad_2/PlayerCard'

export default function PlayerList() {
	const router = useRouter()

	const handlePlayerPress = (index: number) => {
		router.push(`/player/${index}` as any)
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={players}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item, index }) => <PlayerCard name={item.name} onPress={() => handlePlayerPress(index)} />}
				contentContainerStyle={styles.listContent}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
	listContent: {
		paddingVertical: 8,
	},
})
