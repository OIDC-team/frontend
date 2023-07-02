import React, {useState} from 'react';
import {FlatList, StyleSheet, View, Dimensions, Text} from 'react-native';
import CarouselPage from './CarouselPage';
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const Carousel = ({pages, pageWidth, gap, offset}) => {
  const [page, setPage] = useState(0);
  function renderItem({item}) {
    return (
      <CarouselPage
        onPress={() => alert('ss')}
        item={item}
        style={{
          height: WINDOW_HEIGHT * 0.35,
          width: pageWidth,
          marginHorizontal: gap / 2,
        }}
      />
    );
  }
  const onScroll = e => {
    const newPage = Math.round(
      e.nativeEvent.contentOffset.x / (pageWidth + gap),
    );
    setPage(newPage);
  };
  return (
    <View style={styles.container}>
      <FlatList
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          paddingHorizontal: offset + gap / 2,
        }}
        data={pages}
        decelerationRate="fast"
        horizontal
        keyExtractor={item => `page__${item.name}`}
        onScroll={onScroll}
        pagingEnabled
        renderItem={renderItem}
        snapToInterval={pageWidth + gap}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      />
      {/* <View style={styles.indicatorWrapper}>
        {Array.from({length: pages.length}, (_, i) => i).map(i => (
          <Indicator key={`indicator_${i}`} focused={i === page} />
        ))}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: WINDOW_HEIGHT * 0.35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //   indicatorWrapper: {
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     marginTop: '16px',
  //   },
});

export default Carousel;
