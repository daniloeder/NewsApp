// HomeScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchNews } from '../services/news';
import Article from '../components/Article';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';

const HomeScreen = ({ navigation }) => {
    const [articles, setArticles] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        fetchNews(selectedCategory, searchText).then((data) => setArticles(data.articles));
    }, [selectedCategory, searchText]);

    const handleSearch = (text) => {
        setSearchText(text);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <View>
            <SearchBar onSearch={handleSearch} />
            <CategoryFilter
                categories={['business', 'entertainment', 'health', 'science', 'sports', 'technology']}
                selectedCategory={selectedCategory}
                onSelectCategory={handleCategorySelect}
            />
            <FlatList
                data={articles}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => <Article article={item} navigation={navigation} />}
            />
        </View>
    );
};

export default HomeScreen;
