// SearchScreen.js

import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchNews } from '../services/news';
import Article from '../components/Article';
import SearchBar from '../components/SearchBar';

const SearchScreen = ({ navigation }) => {
    const [articles, setArticles] = useState([]);
    const [searchText, setSearchText] = useState('');

    const handleSearch = async (text) => {
        setSearchText(text);
        const data = await fetchNews(text);
        setArticles(data.articles);
    };

    return (
        <View>
            <SearchBar onSearch={handleSearch} />
            {articles.length > 0 ? (
                <FlatList
                    data={articles}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item }) => <Article article={item} navigation={navigation} />}
                />
            ) : (
                <Text>No articles found.</Text>
            )}
        </View>
    );
};

export default SearchScreen;
