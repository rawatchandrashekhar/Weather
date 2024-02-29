import { View, Text } from 'react-native'
import React from 'react'

const Space = ({ mH, mV }) => {
    return (
        <View style={{ marginHorizontal: mH, marginVertical: mV }} />
    )
}

Space.defaultProps = {
    mH: 0,
    mV: 0
}

export default Space