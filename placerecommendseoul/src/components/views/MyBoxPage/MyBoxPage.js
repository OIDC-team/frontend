import {View, Text, ScrollView, Dimensions, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyPlace from './MyPlace';
import {PlaceData} from '../common/mock/MockData';
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const MyBoxPage = () => {
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
          <Text style={{marginLeft: 15, fontFamily: 'SUITE-Regular'}}>
            로그인이 필요합니다.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            width: WINDOW_WIDTH,
          }}>
          {PlaceData.map((data, index) => (
            <View key={index} style={{marginLeft: WINDOW_WIDTH * 0.05}}>
              <MyPlace
                width={WINDOW_WIDTH * 0.425}
                height={WINDOW_HEIGHT * 0.2}
                placeData={data}
              />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MyBoxPage;
