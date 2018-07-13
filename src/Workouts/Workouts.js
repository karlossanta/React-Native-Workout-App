import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native'

import { colors } from '../theme'

export default class Workouts extends React.Component {
    static navigationOptions = {
        title: 'Workouts',
        headerTitleStyle: {
            colors: 'white',
            fontSize: 20,
            fontWidth: '400'
        }
    }
    render() {
        console.log('props:', this.props)
        return (
            <View>
                <Text>Hello from Workouts</Text>
            </View>
        )
    }
}