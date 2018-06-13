import React from "react";
import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import DoctrineScreen from "../screens/DoctrineScreen";
import { Button } from "react-native";
import HeaderIconButton from "../components/HeaderIconButton";
import Colors from "../constants/Colors";
import WhatWeTeachScreen from "../screens/WhatWeTeachScreen";
import ScripturesScreen from "../screens/ScripturesScreen";
import VideosScreen from "../screens/VideosScreen";
import StudyPromptsScreen from "../screens/StudyPromptsScreen";

const PrincipleDrawerNavigator = createDrawerNavigator(
  {
    Doctrine: DoctrineScreen,
    ["What We Teach"]: WhatWeTeachScreen,
    Scriptures: ScripturesScreen,
    Videos: VideosScreen,
    ["Study Prompts"]: StudyPromptsScreen
  },
  {
    drawerPosition: "right",
    backBehavior: "none",
    order: [
      "Doctrine",
      "What We Teach",
      "Scriptures",
      "Videos",
      "Study Prompts"
    ],
    contentOptions: {
      activeTintColor: Colors.tintColor
    }
  }
);

PrincipleDrawerNavigator.navigationOptions = ({ navigation }) => {
  const { index, routes } = navigation.state;
  const title = routes[index].routeName;

  return {
    title,
    headerRight: (
      <HeaderIconButton
        iconName="toc"
        onPress={() => navigation.toggleDrawer()}
      />
    ),
    headerStyle: {
      backgroundColor: Colors.tintColor
    },
    headerTintColor: "#fff"
  };
};

export default PrincipleDrawerNavigator;