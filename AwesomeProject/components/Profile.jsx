import React from "react";
import { View, Text } from "react-native";
import TextAvatar from "react-native-text-avatar";
import { colorHash } from "../utils/colorHash";
import { styles } from "../styles/styles";

const Profile = ({ route }) => {
  const { user } = route.params;
  return (
    <View style={styles.mainView}>
      <TextAvatar
        backgroundColor={colorHash(user.email).rgb}
        textColor={"#fff"}
        size={80}
        type={"circle"}
      >
        {user.firstname + " " + user.lastname}
      </TextAvatar>

      <br />
      <View style={styles.columnView}>
        <View style={styles.rowView}>
          <Text style={styles.profileText}>{"Name:   "}</Text>
          <Text>{user.firstname}</Text>
        </View>

        <View style={styles.rowView}>
          <Text style={styles.profileText}>{"Last Name:   "}</Text>
          <Text>{user.lastname}</Text>
        </View>
        <View style={styles.rowView}>
          <Text style={styles.profileText}>{"Email:   "}</Text>
          <Text>{user.email}</Text>
        </View>

        <View style={styles.rowView}>
          <Text style={styles.profileText}>{"Age:   "}</Text>
          <Text>{user.age}</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;
