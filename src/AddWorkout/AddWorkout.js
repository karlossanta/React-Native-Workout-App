import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'

import uuidV4 from 'uuid/v4'
import { colors } from '../theme'

export default class Workout extends React.Component {
    state = {
        workout: '',
        sets: '',
        reps: ''        //change to number?
    }
    onChangeText = (key, value) => {  //change maybe cuz 3 members in state?
        this.setState({
            [key]: value
        })<TextInput
    }

    submit = () => {
        if (this.state.workout === '' ||
            this.state.sets === '' ||
            this.state.reps === '')
            return
        const workout = {
            workout: this.state.workout,
            sets: this.state.country,
            reps: this.state.reps,
            id: uuidV4()
        }
        this.props.screenProps.addWorkout(workout)
        this.setState({
            workout: '',
            sets: '',
            reps: ''   
            //do i need someting like locations here? []
        }, () => {
            this.props.navgation.navigate('Workouts')
        })
    }

    render() {
        console.log('props:', this.props)
        return (
            <View style={StyleSheet.container}>
                <Text style={styles.heading}>GainzGainz</Text>
                <TextInput
                    placeholder='Workout name'
                    value={this.state.workout}
                    onChangeText={val => this.onChangeText('workout', val)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Number of Sets'
                    value={this.state.sets}
                    onChangeText={val => this.onChangeText('sets', val)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Number of Reps'
                    value={this.state.reps}
                    onChangeText={val => this.onChangeText('reps', val)}
                    style={styles.input}
                />
                <TouchableOpacity onPress={this.submit}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Add Workout</Text>
                    </View>                        
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        margin: 10,
        paddingHorizontal: 8,
        height: 10
    },
    button: {
        height: 50,
        backgroundColor: '#666',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    buttonText: {
        color: 'white'
    },
    container: {
        backgroundColor: colors.primary,
        flex: 1,
        justifyContent: 'center'
    },
    heading: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
        color: 'white'
    }
})


//CURRENTLY AT VIDEO TIME: 23
//BUIDLING A REAL WORLD REACT NATIVE APP IN 60 MINUTES