//CLASS 70

import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity,TextInput } from "react-native";
import { CameraView, Camera } from "expo-camera/next";



export default class TransactionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domState: "normal",
      hasCameraPermissions: null,
      scanned: false,
      
    };
  }

  getCameraPermissions = async (domState) => {
    const { status } = await Camera.requestCameraPermissionsAsync();
  
    this.setState({
      //status === "granted" is true when user has granted permission
       //   status === "granted" is false when user has not granted the permission
        
      hasCameraPermissions: status === "granted",
      domState:domState,
      scanned: false
    });
  };


  handleBarCodeScanned = async ({ type, data }) => {
    const { domState } = this.state;
    
 
  };

  render() {
    const { domState, scanned } = this.state;
    if (domState !== "normal") {
      return (
        <CameraView
        onBarcodeScanned={scanned ? undefined : this.handleBarCodeScanned}
       
        style={StyleSheet.absoluteFillObject}
      />
      );
    }

    return (
      <View style={styles.container}>
        
          <View style={styles.upperContainer}>
          
          </View>
          <View style={styles.lowerContainer}>
            
            
          </View>
       
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  upperContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  appIcon: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginTop: 80
  },
  appName: {
    width: 80,
    height: 80,
    resizeMode: "contain"
  },
  lowerContainer: {
    flex: 0.5,
    alignItems: "center"
  },
  textinputContainer: {
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#9DFD24",
    borderColor: "#FFFFFF",
   marginTop:50
  },
  textinput: {
    width: "57%",
    height: 50,
    padding: 10,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: "#5653D4",
    fontFamily: "Rajdhani_600SemiBold",
    color: "#FFFFFF"
  },
  scanbutton: {
    width: 100,
    height: 50,
    backgroundColor: "#9DFD24",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  scanbuttonText: {
    fontSize: 24,
    color: "#0A0101",
    fontFamily: "Rajdhani_600SemiBold"
  }
});
