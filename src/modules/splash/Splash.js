import React, { useEffect } from 'react'
import { StyleSheet, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Splash = (props) => {

    useEffect(() => {
        let timeout = setTimeout(() => {
            props.navigation.reset({
                index: '0',
                routes: [{ name: 'Dashboard' }],
            });
        }, 2000);
        return () => {
            clearTimeout(timeout);
        }
    }, [])

    return (
        <LinearGradient colors={['#fff', '#1354EE']} style={styles.container}>
            <Image source={require("../../assets/images/weatherLogo.png")} style={styles.imgStyle} />
        </LinearGradient>
    )
}

export default Splash

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
})