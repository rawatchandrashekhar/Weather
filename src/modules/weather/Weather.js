import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native'
import Input from '../../components/textInput/Input'
import LinearGradient from 'react-native-linear-gradient'
import Space from '../../components/space/Space'
import Button from '../../components/buttons/Button'
import WeatherCard from '../../components/cards/WeatherCard'
import WeatherDetailsCard from '../../components/cards/WeatherDetailsCard'
import useFetchCurrentCords from '../../helpers/customHooks/useFetchCurrentCords'
import fetchCurrentAddress from '../../APIs/currentAddress/fetchCurrentAddress'
import fetchWeatherDetails from '../../APIs/weather/weatherAPI'
import useHandleDeniedPermission from '../../helpers/customHooks/useHandleDeniedPermission'
import { useSelector } from 'react-redux'

const Weather = () => {

  const hasLocationPermission=useSelector(state=>state?.location?.hasLocationPermission);

  console.log({hasLocationPermission});

  const [getCurrentLatitude, getCurrentLongitude, getLoading, setLoading] = useFetchCurrentCords();
  const [handleDeniedPermission] = useHandleDeniedPermission();

  const [getLoadingWeatherScreen, setLoadingWeatherScreen] = useState(true);
  const [getErrorMessage, setErrorMessage] = useState('');
  const [getWeatherData, setWeatherData] = useState([]);
  const [getUserInput, setUserInput] = useState('');

  useEffect(() => {
    ; (async () => {
      if (getCurrentLatitude != "" && getCurrentLongitude != "") {
        await fetchCurrentAddress(getCurrentLatitude, getCurrentLongitude).then((res) => {
          return res;
        }).then(async (response) => {
          let cityName = response?.split(",")[0];
          const weatherRes = await fetchWeatherDetails(cityName);
          setWeatherData(weatherRes);
          setLoadingWeatherScreen(false);
        }).catch((err) => {
          console.log({ err });
          setErrorMessage(err.message);
          setLoadingWeatherScreen(false);
        })
      }
    })()
  }, [getLoading])

  const handleInputValue = (inputText) => {
    setUserInput(inputText);
  }

  const handleButtonPress = async () => {
    try {
      const weatherRes = await fetchWeatherDetails(getUserInput);
      if (weatherRes?.error?.message) {
        alert(weatherRes?.error?.message)
        setUserInput("");
      } else {
        setWeatherData(weatherRes);
        setUserInput("");
      }
    } catch (error) {
      console.error({ error });
    }
  }

  const handleRefreshLocation = () => {
    setLoading(true);
    handleDeniedPermission();
  }

  return (
    <LinearGradient colors={['#fff', '#1354EE']} style={styles.container}>
      <Space mV={40} />
      {true ?
        <View style={styles.subContainer}>
          <Text style={styles.errorTextStyle}>Location Permission Denied</Text>
          <Space mV={20} />
          <Button width={130} btnText={'Refresh'} onPress={() => handleRefreshLocation()} />
        </View> : getLoadingWeatherScreen ?
          <ActivityIndicator size="large" color="#1354EE" /> :
          getErrorMessage != "" ?
            <Text style={styles.errorTextStyle}>{getErrorMessage}</Text> :
            <View style={styles.subContainer}>
              <Input value={getUserInput} width={300} onChangeText={(text) => handleInputValue(text)} />
              <Space mV={15} />
              <Button width={130} btnText={'Find it'} borderRadius={25} onPress={() => handleButtonPress()} />
              <Space mV={30} />
              <WeatherCard width={300} getWeatherData={getWeatherData} />
              <Space mV={35} />
              <WeatherDetailsCard width={350} getWeatherData={getWeatherData} />
            </View>}
    </LinearGradient>
  )
}

export default Weather

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    alignItems: "center"
  },
  errorTextStyle: {
    textAlign: "center",
    fontSize: 18
  }
})