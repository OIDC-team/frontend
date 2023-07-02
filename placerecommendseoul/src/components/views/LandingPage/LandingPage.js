import {View, Text, ScrollView, Dimensions} from 'react-native';
import {Avatar} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Map from '../../images/mapwithex.svg';
import Map from './Map';
import React from 'react';
import Carousel from './Carousel';
import {PlaceData} from '../common/mock/MockData';
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const LandingPage = () => {
  const PAGES = PlaceData;
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFFCF5',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: WINDOW_HEIGHT * 0.15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: WINDOW_WIDTH * 0.8,
          }}>
          <Icon name="user-circle" size={36} color="gray" />
          <Text
            style={{
              marginLeft: 15,
              fontFamily: 'SUITE-Regular',
            }}>
            로그인이 필요합니다.
          </Text>
        </View>

        <Map />
        <View style={{width: WINDOW_WIDTH * 0.75}}>
          <Text
            style={{
              marginTop: 15,
              fontFamily: 'SUITE-Bold',
              alignItems: 'flex-start',
              fontSize: 18,
              textShadowColor: 'rgba(0, 0, 0, 0.25)',
              textShadowOffset: {width: -1, height: 1},
              textShadowRadius: 5,
            }}>
            여기는 어떠세요?
          </Text>
        </View>
        <Carousel
          gap={16}
          offset={36}
          pages={PAGES}
          pageWidth={WINDOW_WIDTH - (16 + 36) * 2}
        />
        {/* <Button
          title="axios"
          onPress={() => {
            fetch('http://localhost:5000/api/missions/getMission')
              .then(response => response.json())
              .then(json => {
                return json;
              })
              .catch(error => {
                console.error(error);
              });
          }}></Button> */}
      </View>
    </ScrollView>
  );
};

export default LandingPage;
