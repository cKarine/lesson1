import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Users from "../components/Users";
import Profile from "../components/Profile";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UsersList" component={Users} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default MyStack;
