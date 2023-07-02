import {View, StyleSheet, Text, ScrollView} from 'react-native';
import React from 'react';
import {Avatar, Chip} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
const UserPage = () => {
  const navigation = useNavigation();
  const logoutHandler = () => {
    // axios.get('http://15.165.182.251:5000/api/users/logout').then(response => {
    //   if (response.data.success) {
    //     navigation.reset({
    //       index: 0,
    //       routes: [{name: 'Home'}],
    //     });
    //   } else {
    //     alert('Logout Failed.');
    //   }
    // });
    console.log('logout');
  };
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFFCF5',
          marginHorizontal: 10,
        }}>
        <View style={{height: 150, flexDirection: 'row', alignItems: 'center'}}>
          <Avatar
            size={70}
            rounded
            icon={{name: 'user', type: 'font-awesome'}}
            containerStyle={styles.subViewStyle}
          />
          <Text style={{marginTop: 25}}>user</Text>
        </View>
        <View
          style={{
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            marginHorizontal: 10,
            marginBottom: 50,
          }}
        />
        <Chip
          title="로그아웃"
          color="#B2D691"
          titleStyle={{fontSize: 20}}
          onPress={logoutHandler}
        />
      </View>
    </ScrollView>
  );
};
var styles = StyleSheet.create({
  mainviewStyle: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
  },
  subViewStyle: {
    backgroundColor: 'gray',
    marginLeft: '9%',
    marginRight: '6%',
    marginTop: '9%',
  },
  subTextStyle: {
    flex: 1,
    flexDirection: 'column',
    marginTop: '11%',
  },
});
export default UserPage;
