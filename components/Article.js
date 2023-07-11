// Article.js

import React, { useContext } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { FavouritesContext } from '../utils/store';

const Article = ({ article, navigation }) => {
    const { title, urlToImage, description, content } = article;
    const { favourites, setFavourites } = useContext(FavouritesContext);

    const handleFavourite = () => {
        setFavourites(prev => [...prev, article]);
    };

    const handleUnfavourite = () => {
        setFavourites(prev => prev.filter(a => a.title !== article.title));
    };

    const isFavourite = favourites.some(a => a.title === article.title);

    return (
        <View>
            <Image source={{ uri: urlToImage }} style={{ width: '100%', height: 200 }} />
            <Text>{title}</Text>
            <Text>{description}</Text>
            <Text>{content}</Text>
            <Button title="Read More" onPress={() => navigation.navigate('ArticleDetail', { article })} />
            {isFavourite 
                ? <Button title="Remove from Favourites" onPress={handleUnfavourite} /> 
                : <Button title="Add to Favourites" onPress={handleFavourite} />
            }
        </View>
    );
};

export default Article;
