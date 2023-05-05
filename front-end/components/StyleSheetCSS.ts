import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F4F4F4',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 16,
	},
	slider: {
		flexDirection: 'row',
		width: '40%',
		marginBottom: 16,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 32,
	},
	inputContainer: {
		width: '100%',
		marginBottom: 16,
	},
	input: {
		backgroundColor: '#FFFFFF',
		borderRadius: 8,
		padding: 16,
		marginBottom: 16,
		fontSize: 16,
	},
	button: {
		backgroundColor: '#FFA500',
		borderRadius: 8,
		padding: 16,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		marginLeft: 5,
		marginRight: 5,
	},
	buttonText: {
		color: '#FFFFFF',
		fontSize: 16,
		fontWeight: 'bold',
	},
	invertedButton: {
		backgroundColor: '#F4F4F4',
		borderRadius: 8,
		padding: 16,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		marginLeft: 5,
		marginRight: 5,
	},
	invertedButtonText: {
		color: '#FFA500',
		fontSize: 16,
		fontWeight: 'bold',
	},
	canvasBorder: {
		borderColor: 'red',
		borderWidth: 1,
		width: '90%',
		height: '90%',
	},
	islandNavigation: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderColor: 'red',
		borderWidth: 1,
		width: '90%',
		height: '5%',
	},
	shopItem: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: 'blue',
		borderWidth: 1,
		width: '90%',
		height: 400,
	},
	shopItemImage: {
		height: '50%',
		width: '50%',
		margin: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	shopItemDescription: {
		height: '10%',
		margin: 5,
		fontSize: 15,
		width: '90%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	shopItemBuy: {
		borderColor: 'blue',
		borderWidth: 1,
		height: '10%',
		width: '90%',
		marginTop: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	spaceDown: {
		marginBottom: 4300,
	},
	cardContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'center',
		flexWrap: 'wrap',
	},
	card: {
		width: 100,
		height: 100,
		alignItems: 'center',
		justifyContent: 'center',
		backfaceVisibility: 'hidden',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	back: {
		backgroundColor: 'darkgrey',
		position: 'absolute',
		top: 0,
		borderRadius: 10,
	},
	front: {
		backgroundColor: 'lightgrey',
		position: 'absolute',
		top: 0,
		borderRadius: 10,
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#FFFFFF',
	},
});