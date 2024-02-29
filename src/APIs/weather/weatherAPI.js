const fetchWeatherDetails = async (userInput) => {
    try {
        let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=c7eef0852629404791265435233007&q=${userInput}&aqi=no`)
        let data = await response.json();
        return data;
    } catch (error) {
        alert(error?.message)
        return error?.message;
    }
}

export default fetchWeatherDetails;