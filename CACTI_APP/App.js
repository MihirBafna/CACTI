import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import Map from './components/Map'
import MapView, {Marker, Heatmap} from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} initialRegion={{
        latitude: 33.776846542110924,
        longitude: -84.3978524208068,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
        <Marker coordinate={{ latitude: 33.776846542110924, longitude: -84.3978524208068 }} />
        <Heatmap opacity={0.5} radius={30} points={WeightedLatLng}>

        </Heatmap>
      </MapView>      
      <StatusBar style="auto" />
    </View>
  );
}

var WeightedLatLng = [{
  latitude: 33.7768,
  longitude: -84.3978,
  weight: 30,
}, {
    latitude: 33.7768,
    longitude: -84.3978,
    weight: 30,
  }, {
    latitude: 33.568,
    longitude: -84.3978,
    weight: 30,
  }]
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
