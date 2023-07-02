import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import {PlaceImagePath} from '../common/mock/MockData';
import IconF from 'react-native-vector-icons/FontAwesome';
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const CarouselPage = ({item, style, onPress}) => {
  let realTimePopulationColor = '';
  if (item.realTimePopulation === '붐빔') realTimePopulationColor = '#EF404A';
  else if (item.realTimePopulation === '약간 붐빔')
    realTimePopulationColor = '#F79552';
  else if (item.realTimePopulation === '보통')
    realTimePopulationColor = '#FFD400';
  else if (item.realTimePopulation === '여유')
    realTimePopulationColor = '#D5E05B';

  return (
    <View
      style={{
        backgroundColor: '#FFFCF5',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: style.width,
        marginHorizontal: style.marginHorizontal,
      }}>
      <View>
        <View
          style={{
            marginTop: 10,
            elevation: 5,
            backgroundColor: '#FFFCF5',
            borderRadius: 10,
          }}>
          <Image
            style={{
              width: style.width * 0.95,
              height: style.height * 0.75,
              borderRadius: 10,
            }}
            source={PlaceImagePath[item.name]}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: WINDOW_WIDTH * 0.9 * 0.05,
            right: WINDOW_HEIGHT * 0.3 * 0.05,
            backgroundColor: '#7F7F7F',
            borderRadius: 10,
            padding: 5,
            paddingHorizontal: 7,
            opacity: 0.7,
          }}>
          <IconF name="bookmark-o" size={24} color="white" borderRadius={50} />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: WINDOW_WIDTH * 0.675,
        }}>
        <View style={{marginTop: 5}}>
          <Text
            style={{
              fontFamily: 'SUITE-Regular',
            }}
            onPress={onPress}>
            문화유산
          </Text>
          <Text
            style={{
              fontFamily: 'SUITE-Bold',
              textShadowColor: 'rgba(0, 0, 0, 0.25)',
              textShadowOffset: {width: -1, height: 1},
              textShadowRadius: 5,
            }}>
            {item.name}
          </Text>
        </View>
        <View>
          <Text
            style={{
              marginTop: 5,
              padding: 5,
              paddingTop: 7,
              borderRadius: 10,
              fontFamily: 'SUITE-Bold',
              backgroundColor: realTimePopulationColor,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            {item.realTimePopulation}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CarouselPage;
