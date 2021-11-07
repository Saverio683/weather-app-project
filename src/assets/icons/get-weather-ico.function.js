//I use this function because the icons provided by the api are of a low resolution, so I replace them with others in svg format

import clearSkyNight from './weather/6.svg'
import clearSkyDay from './weather/4.svg';
import fewCloudsDay from './weather/0.svg';
import fewCloudsNight from './weather/7.svg';
import rainDay from './weather/3.svg';
import rainNight from './weather/8.svg';
import mistDay from './weather/11.svg';
import mistNight from './weather/12.svg';
import scatteredClouds from './weather/1.svg';
import brokenClouds from './weather/2.svg';
import showerRain from './weather/5.svg';
import thunderstorm from './weather/9.svg';
import snow from './weather/10.svg';

const getWeatherIcon = iconID => {
	switch (iconID) {
		case '01d':
			return clearSkyDay;	
		case '01n':
			return clearSkyNight;
		case '02d':
			return fewCloudsDay;
		case '02n':
			return fewCloudsNight;
		case '03d':
		case '03n':
			return scatteredClouds;
		case '04d':
		case '04n':
			return brokenClouds;	
		case '09d':
		case '09n':
			return showerRain;
		case '10d':
			return rainDay;
		case '10n':
			return rainNight;
		case '11d':
		case '11n':
			return thunderstorm;
		case '13d':
		case '13n':
			return snow;	
		case '50d':
			return mistDay;
		case '50n':
			return mistNight;
		default:
			console.error('something was wrong');																				
	}
}



export default getWeatherIcon;