import React from 'react'
import { StyleSheet, Dimensions, View, Image, Text } from 'react-native'
import Space from '../space/Space';

const { width, height } = Dimensions.get('screen');

const WeatherDetailsCard = ({ width, getWeatherData }) => {

    return (
        <View style={{ ...styles.container, width: width }}>
            <View style={styles.subContainer}>
                <Image source={require("../../assets/images/precipitation.png")} style={styles.imgStyle} />
                <Space mV={8} />
                <Text style={styles.txtStyleOne}>{`${getWeatherData?.current?.precip_mm}`}{" "}mm</Text>
                <Text style={styles.txtStyleTwo}>Precipitation</Text>
            </View>
            <View style={styles.subContainer}>
                <Image source={require("../../assets/images/humidity.png")} style={styles.imgStyle} />
                <Space mV={8} />
                <Text style={styles.txtStyleOne}>{`${getWeatherData?.current?.humidity}`}%</Text>
                <Text style={styles.txtStyleTwo}>Humidity</Text>
            </View>
            <View style={styles.subContainer}>
                <Image source={require("../../assets/images/wind.png")} style={styles.imgStyle} />
                <Space mV={8} />
                <Text style={styles.txtStyleOne}>{`${getWeatherData?.current?.wind_kph}`}{" "}km/h</Text>
                <Text style={styles.txtStyleTwo}>Wind</Text>
            </View>
        </View>
    )
}

export default WeatherDetailsCard

WeatherDetailsCard.defaultProps = {
    width: width
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 25,
        paddingVertical: 15,
        elevation: 10
    },
    subContainer: {
        alignItems: "center"
    },
    imgStyle: {
        width: 40,
        height: 40
    },
    txtStyleOne: {
        fontWeight: "500",
        fontSize: 18,
        color: "#000"
    },
    txtStyleTwo: {
        color: "#000",
        fontSize: 14
    }
})