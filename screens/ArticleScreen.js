// ArticleScreen.js

import React from 'react';
import { View, Text, Button, Linking } from 'react-native';

const ArticleScreen = ({ route }) => {
    const { article } = route.params;

    const handleReadMore = () => {
        Linking.openURL(article.url);
    };

    return (
        <View>
            <Text>{article.title}</Text>
            <Text>{article.description}</Text>
            <Text>{article.content}</Text>
            <Button title="Read More" onPress={handleReadMore} />
        </View>
    );
};

export default ArticleScreen;
