import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as MediaLibrary from 'expo-media-library';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [cameraRef, setCameraRef] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      savePhoto(photo.uri);
    }
  };

  const savePhoto = async (uri) => {
    try {
      await MediaLibrary.createAssetAsync(uri);
      console.log('Photo saved to media library');
      // Save the photo URI to AsyncStorage
      const storedPhotos = await AsyncStorage.getItem('storedPhotos');
      const updatedPhotos = storedPhotos ? JSON.parse(storedPhotos) : [];
      updatedPhotos.push(uri);
      await AsyncStorage.setItem('storedPhotos', JSON.stringify(updatedPhotos));
      console.log('Photo saved to AsyncStorage');
    } catch (error) {
      console.log('Error saving photo:', error);
    }
  };

  return (
    <View style={styles.container}>
      {hasPermission === null ? (
        <Text>Requesting camera permission...</Text>
      ) : hasPermission === false ? (
        <Text>No access to camera</Text>
      ) : (
        <React.Fragment>
          <Camera style={styles.camera} ref={(ref) => setCameraRef(ref)} />
          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <Text style={styles.captureButtonText}>Capture</Text>
          </TouchableOpacity>
        </React.Fragment>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  captureButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  captureButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default CameraScreen;