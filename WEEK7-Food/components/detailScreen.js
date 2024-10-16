import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import vector from '../assets/Vector.png'
export default function deltaiScreen({route, navigation}) {
  const {title, detail, price, img} =  route.params;
  const [quantity, setQuantity] = useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image 
        source={{uri:img}} 
        style={{
          width: 250,
          height: 250,
          marginTop: 10,
        }}/>  
      </View>
      <Text style={{fontSize: 20, fontWeight: 'Bold' ,margin: 5}}>{title}</Text>
      
      <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
        <Text style={{color: '#0000008A'}}>{detail}</Text>
        <Text style={{marginRight: 30, fontSize: 20, fontWeight: 'Bold'}}>${price}</Text>
      </View>
        <View style={{flexDirection: 'row'}}>
          <Image source={vector}/>
          <Text style={{color:'#0000008A', marginLeft: 10, fontSize: 15}}>Delivery in </Text>
        </View>
        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
          <Text>30 min</Text>
          <View style={{flexDirection:'row', marginRight: 30}}>
            <TouchableOpacity style={styles.plusMinusBtn} onPress={()=>{
              setQuantity((quantity)=>quantity-=1)
            }}>-</TouchableOpacity>
            <Text style={{fontSize: 20, fontWeight: 'Bold'}}>{quantity}</Text>
            <TouchableOpacity style={styles.plusMinusBtn} onPress={()=>{
              setQuantity((quantity)=>quantity+=1)
            }}>+</TouchableOpacity>
          </View>
        </View>
      <View>
      
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  plusMinusBtn:{
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: '#F1B000',
    width: 20,
    height: 20,
    marginRight: 10,
    marginLeft: 10
  },
});
