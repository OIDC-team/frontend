import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import IconF from 'react-native-vector-icons/FontAwesome';
import {PlaceImagePath} from '../common/mock/MockData';
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const PlaceCard = ({placeData}) => {
  let realTimePopulationColor = '';
  if (placeData.realTimePopulation === '붐빔')
    realTimePopulationColor = '#EF404A';
  else if (placeData.realTimePopulation === '약간 붐빔')
    realTimePopulationColor = '#F79552';
  else if (placeData.realTimePopulation === '보통')
    realTimePopulationColor = '#FFD400';
  else if (placeData.realTimePopulation === '여유')
    realTimePopulationColor = '#D5E05B';
  return (
    <TouchableOpacity onPress={() => console.log('sd')}>
      <View style={{alignItems: 'center'}}>
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
                width: WINDOW_WIDTH * 0.9,
                height: WINDOW_HEIGHT * 0.3,
                borderRadius: 10,
              }}
              source={PlaceImagePath[placeData.name]}
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
            <IconF
              name="bookmark-o"
              size={24}
              color="white"
              borderRadius={50}
            />
          </View>
        </View>

        <View>
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
            }}>
            <Icon
              style={{
                textShadowColor: 'rgba(0, 0, 0, 0.25)',
                textShadowOffset: {width: 1, height: 1},
                textShadowRadius: 5,
              }}
              name="map-pin"
              size={16}
              color="gray"
            />
            <Text
              style={{
                marginLeft: 3,
                fontFamily: 'SUITE-Regular',
                textShadowColor: 'rgba(0, 0, 0, 0.25)',
                textShadowOffset: {width: 1, height: 1},
                textShadowRadius: 5,
              }}>
              종로구
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: WINDOW_WIDTH * 0.85,
            }}>
            <View style={{marginTop: 5}}>
              <Text
                style={{
                  fontFamily: 'SUITE-Regular',
                }}>
                문화유산
              </Text>
              <Text
                style={{
                  fontFamily: 'SUITE-Bold',
                  textShadowColor: 'rgba(0, 0, 0, 0.25)',
                  textShadowOffset: {width: -1, height: 1},
                  textShadowRadius: 5,
                }}>
                {placeData.name}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  marginTop: 5,
                  padding: 5,
                  paddingHorizontal: 8,
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
                {placeData.realTimePopulation}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceCard;
