import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useUserContext } from "../context/user-context";
import { styles } from "../styles/styles";
import User from "./User";

function Users({ navigation }) {
  const users = useUserContext();

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <User user={item} navigation={navigation} />}
        keyExtractor={(item, index) => item.id || index.toString()}
      />
    </View>
  );
}

export default Users;
