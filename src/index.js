import React from 'react'

import AddWorkout from './AddWorkout/AddWorkout'
import Workouts from './Workouts/Workouts'
import Workout from './Workouts/Workout'

import { colors } from './theme'

//stack navigator for workouts, bottom tab to organize, stack navigator
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

const WorkoutsNav = createStackNavigator({
    Workouts: { screen: Workouts },
    Workout: { screen: Workout }
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: colors.primary
        },
        headerTintColor: '#fff'
    }
})

const Tabs = createBottomTabNavigator({
    Workouts: { screen: WorkoutsNav },
    AddWorkout: { screen: AddWorkout }
})

export default Tabs