export function randomOrder(array) {
	const shuffle = array.sort(() => {
		const randomTrueOrFalse = Math.random() > 0.5;
		return randomTrueOrFalse ? 1 : -1;
	});

	return shuffle;
}
