//this function is to get the date of the days of the next week, 
//if the given parameter 'i' is equal to 0, the function will return the date of tomorrow, and as 'i' increases, the days also increase

const getDate = (i) => {

	const nextDay = new Date();
	nextDay.setDate(nextDay.getDate() + i);

	const year = nextDay.getFullYear();
	const month = ("0" + (nextDay.getMonth() + 1)).slice(-2);
	const day = ("0" + (nextDay.getDate() + 1)).slice(-2);

	return `${day}-${month}-${year}`;
}

export default getDate;