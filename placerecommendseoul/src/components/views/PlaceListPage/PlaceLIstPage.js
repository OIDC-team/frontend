import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import PlaceCard from './PlaceCard';
import {PlaceData, cityData} from '../common/mock/MockData';
import Icon from 'react-native-vector-icons/Entypo';
import IconF from 'react-native-vector-icons/Feather';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const PlaceLIstPage = ({route}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFFCF5',
        }}>
        <TouchableOpacity onPress={() => setIsModalVisible(!isModalVisible)}>
          <View
            style={{
              marginTop: WINDOW_HEIGHT * 0.0375,
              marginLeft: WINDOW_WIDTH * 0.05,
              marginBottom: WINDOW_HEIGHT * 0.0125,
              backgroundColor: '#FFFCF5',
              borderRadius: 10,
              borderColor: 'gray',
              width: WINDOW_WIDTH * 0.5,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginHorizontal: 15,
                  fontSize: 18,
                  fontFamily: 'SUITE-SemiBold',
                }}>
                {route.params ? route.params.location : '서울'}
              </Text>
              <Icon name="chevron-thin-down" size={24} />
            </View>
          </View>
        </TouchableOpacity>
        {/* 모달 */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: 'transparent',
            }}
            onPress={() => setIsModalVisible(false)}
          />
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            style={{
              position: 'absolute',
              width: WINDOW_WIDTH,
              height: WINDOW_HEIGHT * 0.25,
              marginTop: WINDOW_HEIGHT * 0.075,
              backgroundColor: '#FFFCF5',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              elevation: 5,
            }}>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    marginHorizontal: 15,
                    fontSize: 18,
                    fontFamily: 'SUITE-SemiBold',
                    marginTop: 10,
                    marginBottom: 20,
                  }}>
                  서울 전체
                </Text>
                <IconF style={{marginTop: 7}} name="chevron-right" size={25} />
              </View>
              {/* <View
                style={{
                  borderBottomColor: 'gray',
                  borderBottomWidth: 0.5,
                  marginHorizontal: 10,
                  marginBottom: 10,
                }}
              /> */}
            </View>
            {cityData.map((city, index) => (
              <View key={index}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      marginHorizontal: 15,
                      fontSize: 18,
                      fontFamily: 'SUITE-SemiBold',
                      marginTop: 5,
                      marginBottom: 20,
                    }}>
                    {city}
                  </Text>
                  <IconF
                    style={{marginTop: 2.5}}
                    name="chevron-right"
                    size={25}
                  />
                </View>
                {/* <View
                  style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: 0.5,
                    marginHorizontal: 10,
                    marginBottom: 10,
                  }}
                /> */}
              </View>
            ))}
          </ScrollView>
        </Modal>
        <View style={{alignItems: 'center'}}>
          {PlaceData.map((data, index) => (
            <PlaceCard key={index} placeData={data} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default PlaceLIstPage;
