// CategoryScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchNews } from '../services/news';
import Article from '../components/Article';
import CategoryFilter from '../components/CategoryFilter';

const CategoryScreen = ({ route, navigation }) => {
    const { category } = route.params;
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchNews(category).then((data) => setArticles(data.articles));
    }, [category]);

    const handleCategorySelect = (selectedCategory) => {
        navigation.replace('Category', { category: selectedCategory });
    };

    return (
        <View>
            <CategoryFilter
                categories={['business', 'entertainment', 'health', 'science', 'sports', 'technology']}
                selectedCategory={category}
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

export default CategoryScreen;
