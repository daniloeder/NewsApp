// Favourites.js

import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { FavouritesContext } from '../utils/store';
import Article from './Article';

const Favourites = ({ navigation }) => {
    const { favourites } = useContext(FavouritesContext);

    return (
        <View>
            {favourites.length > 0 ? (
                <FlatList
                    data={favourites}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item }) => <Article article={item} navigation={navigation} />}
                />
            ) : (
                <Text>No favourites yet.</Text>
            )}
        </View>
    );
};

export default Favourites;
