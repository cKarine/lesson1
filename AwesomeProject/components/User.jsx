import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TextAvatar from "react-native-text-avatar";
import { colorHash } from "../utils/colorHash";
import { styles } from "../styles/styles";

const User = ({ user, navigation }) => {
  return (
    <View style={styles.userContainer}>
      <View style={styles.rowView}>
        <TextAvatar
          backgroundColor={colorHash(user.email).rgb}
          textColor={"#fff"}
          size={80}
          type={"circle"}
        >
          {user.firstname + " " + user.lastname}
        </TextAvatar>

        <View style={styles.columnView}>
          <Text>{user.firstname + " " + user.lastname}</Text>
          <Text>{user.email}</Text>
        </View>

        <TouchableOpacity
          style={[styles.button, styles.randomButton]}
          onPress={() => navigation.navigate("Profile", { user })}
          title="More"
        >
          <Text style={styles.buttonText}>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default User;
