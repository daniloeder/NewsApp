// store.js

import React, { createContext, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        retrieveFavourites();
    }, []);

    useEffect(() => {
        storeFavourites();
    }, [favourites]);

    const storeFavourites = async () => {
        try {
            const jsonValue = JSON.stringify(favourites);
            await AsyncStorage.setItem('favourites', jsonValue);
        } catch (error) {
            console.error('Error storing favourites:', error);
        }
    };

    const retrieveFavourites = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('favourites');
            if (jsonValue !== null) {
                const storedFavourites = JSON.parse(jsonValue);
                setFavourites(storedFavourites);
            }
        } catch (error) {
            console.error('Error retrieving favourites:', error);
        }
    };

    const value = {
        favourites,
        setFavourites,
    };

    return (
        <FavouritesContext.Provider value={value}>
            {children}
        </FavouritesContext.Provider>
    );
};
