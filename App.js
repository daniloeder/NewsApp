// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavouritesProvider } from './utils/store';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import CategoryScreen from './screens/CategoryScreen';
import FavouritesScreen from './screens/FavouritesScreen';

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <FavouritesProvider>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Search" component={SearchScreen} />
                    <Tab.Screen name="Categories" component={CategoryScreen} />
                    <Tab.Screen name="Favourites" component={FavouritesScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </FavouritesProvider>
    );
};

export default App;
