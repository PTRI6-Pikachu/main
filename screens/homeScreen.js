import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackActions } from 'react-navigation';

function HomeScreen({navigation}) {
  return (
    <View> 
      <Text>Home Screen</Text>
      <Button title="Go To Album" onPress={() => navigation.navigate('AlbumScreen')}
      />
    </View>
  );
}


export default HomeScreen;