import {View, Text, Image} from 'react-native';
import React from 'react';
import {PlaceImagePath} from '../common/mock/MockData';
import IconF from 'react-native-vector-icons/FontAwesome';
const MyPlace = ({placeData, width, height}) => {
  return (
    <View style={{elevation: 5}}>
      <View
        style={{
          marginTop: 10,
          elevation: 5,
          backgroundColor: '#FFFCF5',
          borderRadius: 10,
        }}>
        <Image
          style={{
            width: width,
            height: height,
            borderRadius: 10,
          }}
          source={PlaceImagePath[placeData.name]}
        />
      </View>

      <View
        style={{
          position: 'absolute',
          top: width * 0.08,
          right: height * 0.05,
          backgroundColor: '#7F7F7F',
          borderRadius: 10,
          padding: 5,
          paddingHorizontal: 7,
          opacity: 0.7,
        }}>
        <IconF name="bookmark-o" size={18} color="white" borderRadius={50} />
      </View>
    </View>
  );
};

export default MyPlace;
