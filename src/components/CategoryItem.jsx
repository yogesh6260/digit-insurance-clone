import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CategoryItem = ({item}) => {
  return (
    <View style={styles.categoryItem}>
      <View style={styles.categoryProfile}>
        <Image source={item.img} style={styles.categoryImg} />
      </View>
      <Text style={styles.categoryTitle}>{item.title}</Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  categoryItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5,
  },
  categoryProfile: {
    width: 80,
    height: 80,
    padding: 2,
    borderRadius: 40,
    borderColor: 'orange',
    borderWidth: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryImg: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    borderRadius: 35,
  },
  categoryTitle: {
    fontSize: 10,
    color: 'gray',
    textAlign: 'justify',
  },
});
