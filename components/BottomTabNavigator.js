//Class 68
/*
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TransactionScreen from '../screens/transaction';
import SearchScreen from '../screens/search';

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Transaction" component={TransactionScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
*/


//CLASS 70
import React, { Component } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import TransactionScreen from "../screens/transaction";
import SearchScreen from "../screens/search";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
       <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === "Transaction") {
        iconName = "home";
      } else if (route.name === "Search") {
        iconName = "search";
      }
      // You can return any component that you like here!
      return (
        <Ionicons
          name={iconName}
          size={size}
          color={color}
        />
      );
    },
    tabBarActiveTintColor: "#FFFFFF",
    tabBarInactiveTintColor: "black",
    tabBarStyle: {
      height: 130,
      borderTopWidth: 40,
      backgroundColor: "#5653d4"
    },
    tabBarLabelStyle: {
      fontSize: 20,
      fontFamily: "Rajdhani_600SemiBold"
    },
    tabBarLabelPosition: "beside-icon",
    tabBarItemStyle: {
      marginTop: 25,
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 30,
      borderWidth: 2,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#5653d4"
    }
  })}
>
  <Tab.Screen name="Transaction" component={TransactionScreen} />
  <Tab.Screen name="Search" component={SearchScreen} />
</Tab.Navigator>
      </NavigationContainer>
    );
  }
}


