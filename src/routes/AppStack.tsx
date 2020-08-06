import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../screens/Landing';
import GiveLessons from '../screens/GiveLessons';
import StudyTabs from './StudyTab';

const { Navigator, Screen } = createStackNavigator();

function AppStackNavigation() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, }}>
                <Screen name='Landing' component={Landing} />
                <Screen name='GiveLessons' component={GiveLessons} />
                <Screen name='Study' component={StudyTabs} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStackNavigation;