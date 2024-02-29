import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../components/buttons/Button';
import Space from '../../components/space/Space';

const Dashboard = (props) => {

    const handleBtnPress = () => {
        props.navigation.navigate("Weather");
    }

    return (
        <LinearGradient colors={['#fff', '#1354EE']} style={styles.container}>
            <Image source={require("../../assets/images/weatherLogo.png")} style={styles.imgStyle} />
            <Space mV={10} />
            <View>
                <Text style={styles.weatherText}>Weather</Text>
                <Space mV={-10} />
                <Text style={styles.forecastText}>Forecasts</Text>
            </View>
            <Space mV={20} />
            <Button width={250} btnText={'Get Start'} onPress={() => handleBtnPress()} />
        </LinearGradient>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    imgStyle: {
        width: 300,
        height: 300
    },
    weatherText: {
        fontSize: 35,
        color: "#fff",
        fontWeight: "bold"
    },
    forecastText: {
        fontSize: 50,
        color: "#FBD95C",
        fontWeight: "400"
    }
})