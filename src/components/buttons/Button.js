import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native'

const { width, height } = Dimensions.get("screen");

const Button = ({ width, btnText, onPress, borderRadius }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={{ ...styles.container, width: width, borderRadius: borderRadius }} onPress={onPress} >
            <Text style={styles.btnTextStyle}>{btnText}</Text>
        </TouchableOpacity>
    )
}

export default Button

Button.defaultProps = {
    width: width,
    btnText: "Write Button Text",
    onPress: () => { },
    borderRadius: 15
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FBD95C",
        paddingVertical: 10,
        paddingHorizontal: 5,
        elevation: 5
    },
    btnTextStyle: {
        textAlign: "center",
        fontSize: 18,
        color: "#000"
    }
})