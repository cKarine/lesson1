import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreateUser from "../components/CreateUser";
import MyStack from "../navigation/StackNav";

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Create User" component={CreateUser} />
      <Tab.Screen name="Users" component={MyStack} />
    </Tab.Navigator>
  );
};

export default TabNav;
