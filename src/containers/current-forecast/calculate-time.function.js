//this funcion is for converting the time provided by the API in the hour:minutes format

const calculateTime = (dt) => {
	const date = new Date(dt * 1000);
	let hour = date.getHours().toString();
	if (hour.length < 2) {
		hour = '0' + hour;
	}
	const minutes = '0' + date.getMinutes();
	const formattedTime = hour + ':' + minutes.substr(-2);
	return formattedTime;
}

export default calculateTime;