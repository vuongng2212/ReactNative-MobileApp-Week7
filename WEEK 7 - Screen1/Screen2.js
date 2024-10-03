import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import backIcon from "./assets/backIcon.png"
import searchIcon from "./assets/searchIcon.png";


const Screen2 = ({ navigation, route }) => {
  const { userName } = route.params; 

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backIcon} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.textHeaderView}>
          <Text style={styles.text}>Hi, {userName}!</Text>
          <Text style={styles.text}>Have agrate day a head</Text>
        </View>
      </View>


      <View style={styles.inputContainer}>
        <Image source={searchIcon} style={{ width: 10, height: 10, margin: 5 }} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#A4A4A4"
        />
      </View>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  header:{
    flexDirection:'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 13,
    margin: 5,
  },
  textHeaderView:{
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#A4A4A4',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '100%',
  },

});

export default Screen2;