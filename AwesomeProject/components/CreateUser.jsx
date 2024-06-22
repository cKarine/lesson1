import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { faker } from "@faker-js/faker";
import TextAvatar from "react-native-text-avatar";
import { useUserContext, useSetUsersContext } from "../context/user-context";
import { colorHash } from "../utils/colorHash";
import { styles } from "../styles/styles";

const CreateUser = () => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    email: "",
    gender: "",
  });

  const setUsers = useSetUsersContext();
  const users = useUserContext();

  const handleCreateUser = () => {
    setUsers([...users, userData]);
    setUserData({
      firstname: "",
      lastname: "",
      age: "",
      email: "",
      gender: "",
    });
  };

  const handleSetRandomUser = () => {
    setUserData({
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      age: faker.number.int({ min: 10, max: 100 }),
      email: faker.internet.email(),
      gender: faker.person.sex(),
    });
  };

  return (
    <View style={styles.mainView}>
      <TextAvatar
        backgroundColor={colorHash(userData.email)}
        textColor={"#55088D"}
        size={70}
        type={"circle"}
      >
        {userData.firstname + userData.lastname}
      </TextAvatar>

      <TextInput
        value={userData.firstname}
        style={styles.input}
        placeholder="First Name"
        onChangeText={(firstname) => setUserData({ ...userData, firstname })}
      />
      <TextInput
        value={userData.lastname}
        style={styles.input}
        placeholder="Last Name"
        onChangeText={(lastname) => setUserData({ ...userData, lastname })}
      />
      <TextInput
        value={userData.email}
        style={styles.input}
        placeholder="Email"
        onChangeText={(email) => setUserData({ ...userData, email })}
      />
      <TextInput
        value={userData.age}
        style={styles.input}
        placeholder="Age"
        onChangeText={(age) => setUserData({ ...userData, age })}
      />
      <TextInput
        value={userData.gender}
        style={styles.input}
        placeholder="Gender"
        onChangeText={(gender) => setUserData({ ...userData, gender })}
      />

      <TouchableOpacity
        style={[styles.button, styles.createButton]}
        onPress={handleCreateUser}
      >
        <Text style={styles.buttonText}>Create User</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.randomButton]}
        onPress={handleSetRandomUser}
      >
        <Text style={styles.buttonText}>Random User</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateUser;
