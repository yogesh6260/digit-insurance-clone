import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('screen');

const SlideItem = ({item, itemHeight}) => {
  return (
    <View style={[styles.container, {height: itemHeight}]}>
      <Image source={item.img} resizeMode="contain" style={styles.image} />
      {item.title ? (
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 'auto',
    alignItems: 'center',
  },
  image: {
    flex: 0.6,
    width: '100%',
  },
  content: {
    flex: 0.4,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
