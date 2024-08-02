import {StyleSheet, Text, View, Animated, Dimensions} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('screen');

const Pagination = ({data, scrollX, index, bottomHeight, dotSize}) => {
  return (
    <View style={[styles.container, {bottom: bottomHeight}]}>
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: 'clamp',
        });
        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['lightgray', 'orange', 'lightgray'],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={idx.toString()}
            style={[
              styles.dot,
              {width: dotWidth, backgroundColor, height: dotSize},
              //   idx === index && styles.dotActive,
            ]}
          />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
    backgroundColor: 'orange',
  },
  container: {
    position: 'absolute',
    bottom: 70,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotActive: {
    backgroundColor: 'lightgray',
  },
});
