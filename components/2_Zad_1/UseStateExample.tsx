import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const UseStateExample: React.FC = () => {
	const [color, setColor] = useState('#FF69B4')

	const handleChangeColor = () => {
		setColor(prev => (prev === '#FF69B4' ? '#4169E1' : '#FF69B4'))
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={handleChangeColor}>
				<Text style={styles.buttonText}>Change color</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	button: {
		padding: 30,
		borderRadius: 10,
		minWidth: 200,
		alignItems: 'center',
	},
	buttonText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
	},
})

export default UseStateExample
