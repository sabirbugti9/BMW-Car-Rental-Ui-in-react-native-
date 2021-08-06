import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import StoryScreen from '../../screens/StoryScreen/index';
// import BottomHomeNavigation from './bottomHomeNavigation';
import HomeScreen from '../../free/screens/HomeScreen';
import DetailsScreen from '../../free/screens/DetailsScreen';

const Routes = () => {
    const RootStack = createStackNavigator();

    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <RootStack.Screen
                name="Details"
                component={DetailsScreen}
                options={{ headerShown: false }}
            />
        </RootStack.Navigator>
    );
}
export default Routes;