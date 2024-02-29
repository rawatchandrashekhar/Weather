import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('screen');

const WeatherCard = ({ width, getWeatherData }) => {

    return (
        <View style={{ ...styles.container, width: width }}>
            {/* <Image source={require('../../assets/images/weatherLogo.png')} style={styles.imgStyle} /> */}
            <Image source={{ uri: `https:${getWeatherData?.current?.condition?.icon}` }} style={styles.imgStyle} />
            <Text style={styles.tempTextStyle}>{`${(getWeatherData?.current?.temp_c)}`}<Text style={{ fontSize: 35 }}>%</Text></Text>
            <View style={styles.tempTextConatiner}>
                <Text style={styles.tempStatusStyle}>{getWeatherData?.current?.condition?.text}</Text>
            </View>
        </View>
    )
}

export default WeatherCard

WeatherCard.defaultProps = {
    width: width
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0,0,0,0.06)",
        height: 250,
        borderRadius: 20,
        paddingHorizontal: 15,
        position: "relative"
    },
    imgStyle: {
        width: 200,
        height: 200,
        position: "absolute",
        bottom: -70,
        left: -40
    },
    tempTextStyle: {
        fontSize: 120,
        color: "#fff",
        fontWeight: "600",
        textAlign: "right"
    },
    tempTextConatiner: {
        width: 150,
        alignSelf: "flex-end"
    },
    tempStatusStyle: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: "400",
        color: "#000"
    }
})