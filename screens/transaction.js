//CLASS 69
/*
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button,TouchableOpacity } from "react-native";
import { CameraView, Camera } from "expo-camera/next";

export default class TransactionScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          domState: "normal",
          hasCameraPermissions: null,
          scanned: false,
          scannedData: ""
        };
      }

     
    
      getCameraPermissions = async (domState) => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        // const { status } = await BarCodeScanner.requestPermissionsAsync();
        this.setState({
          //status === "granted" is true when user has granted permission
           //   status === "granted" is false when user has not granted the permission
            
          hasCameraPermissions: status === "granted",
          domState:domState,
          scanned: false
        });
      };
 
  

 handleBarCodeScanned = ({ type, data }) => {
    this.setState({
        scannedData: data,
        domState: "normal",
        scanned: true
      });
   
  };

  render(){
   if(this.state.domState=="scanner"){
    return(
        <CameraView
        onBarcodeScanned={this.state.scanned ? undefined : this.handleBarCodeScanned}
        barcodeScannerSettings={{
          barCodeTypes: ["qr", "pdf417"],
        }}
        style={StyleSheet.absoluteFillObject}
      />
    )
   }
  

  return (
    <View style={styles.container}>
       <Text style={styles.text}>
          {this.state.hasCameraPermissions ? this.state.scannedData : "Request for Camera Permission"}
        </Text>
  
    <TouchableOpacity
       style={[styles.button, { marginTop: 25 }]}
      onPress={() => this.getCameraPermissions("scanner")}
       >
      <Text style={styles.buttonText}>Scan QR Code</Text>
      </TouchableOpacity>
     
    </View>
  );
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#5653D4"
    },
    text: {
      color: "#ffff",
      fontSize: 15
    },
    button: {
      width: "43%",
      height: 55,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F48D20",
      borderRadius: 15
    },
    buttonText: {
      fontSize: 24,
      color: "#FFFFFF"
    }
  });

  */

//CLASS 70

import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity,TextInput,ImageBackground,Image } from "react-native";
import { CameraView, Camera } from "expo-camera/next";

const bgImage = require("../assets/background2.png");
const appIcon = require("../assets/appIcon.png");
const appName = require("../assets/appName.png");

export default class TransactionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domState: "normal",
      hasCameraPermissions: null,
      scanned: false,
      bookId:"",
      studentId:""
    };
  }

  getCameraPermissions = async (domState) => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    // const { status } = await BarCodeScanner.requestPermissionsAsync();
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

    if (domState === "bookId") {
      this.setState({
        bookId: data,
        domState: "normal",
        scanned: true
      });
    } else if (domState === "studentId") {
      this.setState({
        studentId: data,
        domState: "normal",
        scanned: true
      });
    }
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
        <ImageBackground source={bgImage} style={styles.bgImage}>
          <View style={styles.upperContainer}>
            <Image source={appIcon} style={styles.appIcon} />
            <Image source={appName} style={styles.appName} />
          </View>
          <View style={styles.lowerContainer}>
            <View style={styles.textinputContainer}>
              <TextInput
                style={styles.textinput}
                placeholder={"Book Id"}
                placeholderTextColor={"#FFFFFF"}
                value={this.state.bookId}
              />
              <TouchableOpacity
                style={styles.scanbutton}
                onPress={() => this.getCameraPermissions("bookId")}
              >
                <Text style={styles.scanbuttonText}>Scan</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.textinputContainer, { marginTop: 25 }]}>
              <TextInput
                style={styles.textinput}
                placeholder={"Student Id"}
                placeholderTextColor={"#FFFFFF"}
                value={this.state.studentId}
              />
              <TouchableOpacity
                style={styles.scanbutton}
                onPress={() => this.getCameraPermissions("studentId")}
              >
                <Text style={styles.scanbuttonText}>Scan</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
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
