import {Animated, Dimensions, FlatList, View, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import SlideItem from './SlideItem';
import Pagination from './Pagination';
const {width, height} = Dimensions.get('screen');

// Props Carousel -> data, height of item, pagination from bottom, dots size
const Carousel = ({data, itemHeight, bottomHeight, dotSize}) => {
  const [index, setIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;

  // Auto Scroll
  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === data.length - 1) {
        flatListRef.current.scrollToIndex({
          index: 0,
          animation: true,
        });
      } else {
        flatListRef.current.scrollToIndex({
          index: activeIndex + 1,
          animation: true,
        });
      }
    }, 2000);
    return () => clearInterval(interval);
  });

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = scrollPosition / width;
    setActiveIndex(index);
  };

  const getItemLayout = (data, index) => ({
    length: width,
    offset: width * index,
    index: index,
  });

  const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
    setIndex(viewableItems[0].current);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={item => item.id}
        getItemLayout={getItemLayout}
        renderItem={({item}) => (
          <SlideItem key={index} item={item} itemHeight={itemHeight} />
        )}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination
        data={data}
        scrollX={scrollX}
        index={index}
        bottomHeight={bottomHeight}
        dotSize={dotSize}
      />
      {/* Pagination -> bottom, size of dots need to customize  */}
    </View>
  );
};

export default Carousel;
