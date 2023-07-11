// CategoryFilter.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
    const [selected, setSelected] = useState(selectedCategory);

    const handleCategorySelect = (category) => {
        setSelected(category);
        onSelectCategory(category);
    };

    return (
        <View style={styles.container}>
            {categories.map((category, index) => (
                <TouchableOpacity
                    key={index}
                    style={[styles.category, category === selected && styles.selectedCategory]}
                    onPress={() => handleCategorySelect(category)}
                >
                    <Text style={styles.categoryText}>{category}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    category: {
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    selectedCategory: {
        backgroundColor: 'blue',
    },
    categoryText: {
        color: 'white',
    },
});

export default CategoryFilter;
