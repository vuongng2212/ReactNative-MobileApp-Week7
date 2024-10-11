import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Button,
  SafeAreaView,
} from "react-native";
import backIcon from "../assets/backIcon.png";
import searchIcon from "../assets/searchIcon.png";
import check from "../assets/Check.png";
import edit from "../assets/Edit.png";

const Screen2 = ({ navigation, route }) => {
  const { userName } = route.params;
  const [dt, setDT] = useState([]);

  const fetchData = () => {
    fetch("https://6707423da0e04071d22993f5.mockapi.io/todos")
      .then((res) => res.json())
      .then((data) => setDT(data));
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchData();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backIcon} />
        </TouchableOpacity>
        <View style={styles.textHeaderView}>
          <Text style={styles.text}>Hi, {userName}!</Text>
          <Text style={styles.text}>Have a great day ahead</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={searchIcon}
          style={{ width: 10, height: 10, margin: 15 }}
        />
        <TextInput placeholder="Search" placeholderTextColor="#A4A4A4" />
      </View>

      <FlatList
        data={dt}
        renderItem={({ item }) => (
          <View style={styles.itemBox}>
            <Image source={check} style={{ marginTop: 5 }} />
            <Text style={{ marginTop: 10, fontSize: 15 }}>{item.title}</Text>
            <TouchableOpacity>
              <Image source={edit} style={{ marginTop: 5 }} />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 100 }} // Để tạo khoảng trống ở cuối danh sách
      />

      <View style={styles.addBtn}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Screen3", { userName: userName });
          }}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  text: {
    fontSize: 15,
    margin: 5,
  },
  textHeaderView: {
    flexDirection: "column",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#A4A4A4",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "100%",
    marginTop: 50,
  },
  button: {
    backgroundColor: "#00D1D1",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  addBtn: {
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 20,
  },
  itemBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "#A4A4A4",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Screen2;
