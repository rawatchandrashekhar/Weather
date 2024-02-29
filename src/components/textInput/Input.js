import React from 'react'
import { StyleSheet, TextInput, View, Dimensions } from 'react-native'
import EI from "react-native-vector-icons/EvilIcons"

const { width, height } = Dimensions.get("screen");

const Input = (props) => {
    return (
        <View style={{ ...styles.container, width: props.width }}>
            <View style={{ paddingLeft: 5 }}>
                <EI name="location" size={35} style={{ color: "#1354EE" }} />
            </View>
            <TextInput
                {...props}
                style={styles.textInputStyle}
                placeholder="Enter city"
                onChangeText={props.onChangeText}
            />
        </View>
    )
}

export default Input

Input.defaultProps = {
    width: width,
    onChangeText: () => { }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        borderWidth: 1,
        borderColor: "#1354EE",
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    textInputStyle: {
        height: 50,
        fontSize: 18,
        fontWeight: "500",
        paddingRight: 60
    }
})