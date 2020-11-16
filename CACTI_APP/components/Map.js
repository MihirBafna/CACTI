import React from 'react';
import MapView, { Marker, Heatmap } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native';

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


class Map extends React.Component {
    render() {
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
}
export default Map;