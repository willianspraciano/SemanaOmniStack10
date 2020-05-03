import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import {requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

function Main({ navigation }){
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(()=>{
    async function loadInitialPosition(){ 
      const {granted} = await requestPermissionsAsync();

      if(granted){
        const {coords} = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const {latitude, longitude} = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        })
      }

    }

    loadInitialPosition();
  },[]);

  if(!currentRegion){
    return null;
  }

  return (
    <>
      <MapView initialRegion={currentRegion} style={styles.map}>
      <Marker coordinate={{latitude: -27.2111, longitude:-49.63744}}>
        <Image style={styles.avatar} source={{uri: 'https://avatars2.githubusercontent.com/u/28768280?s=460&u=034dd7f27928494aba7194d3c7a6a119813ca5fc&v=4'}}/>
        <Callout onPress={()=>{
          navigation.navigate('Profile', {github_username: 'willianpraciano'});
        }}>
          <View style={styles.callout}>
            <Text style={styles.devName}>Willian S. Praciano</Text>
            <Text style={styles.devBio}>Computer Engineering student who loves solving real problems with code.</Text>
            <Text style={styles.devTechs}>Node.js, React, React Native</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
      <View style={styles.searchForm}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar devs por tecnologias"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
        />

        <TouchableOpacity onPress={()=>{}} style={styles.loadButton}>
          <MaterialIcons name="my-location" size={20} color="#FFF"/>
        </TouchableOpacity>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  avatar:{
    width: 30,
    height: 30,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: '#FFF'
  },

  callout:{
    width: 260,
  },

  devName:{
    fontWeight: 'bold',
    fontSize: 16
  },

  devBio:{
    color: '#667',
    marginTop: 5,
  },

  devTechs:{
    marginTop: 5,
  },

  searchForm:{
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row',
  },

  searchInput:{
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    color: '#333',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2,
  },

  loadButton:{
    width: 50,
    height: 50,
    backgroundColor: '#8E4DFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },


})

export default Main;