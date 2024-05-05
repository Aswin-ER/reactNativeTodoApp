import React, { FC, useState } from "react";
import { DataTable } from "react-native-paper";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
  StatusBar,
} from "react-native";

const Home: FC = () => {
  const [todo, setTodo] = useState<string>("");

  const [addTodo, setAddTodo] = useState<string[]>([]);

  const onPress = (data: string) => {
    console.log(data, "typed data here");

    //making input field empty after adding
    setTodo("");

    if (data.length === 0) {
      return;
    }
    setAddTodo([...addTodo, data]);
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="black" barStyle="dark-content" />
      <ScrollView>
        <View style={styles.homePageHeading}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            ADD TODO LIST
          </Text>

          <View style={styles.inputArea}>
            <TextInput
              style={{
                borderColor: "black",
                width: "60%",
                borderLeftWidth: 2,
                borderRightWidth: 2,
                borderTopWidth: 2,
                borderBottomWidth: 2,
                height: "100%",
                paddingLeft: 10,
                fontSize: 18,
              }}
              placeholder="Enter Task Here"
              placeholderTextColor={"black"}
              onChangeText={setTodo}
              value={todo}
            ></TextInput>
            <View style={{ marginLeft: 20 }}>
              <Button
                onPress={() => onPress(todo.trim())}
                title="Add"
                color={"black"}
              ></Button>
            </View>
          </View>

          <View>
            {addTodo.map((item, key) => {
              return (
                <Text key={key} style={{ fontSize: 20, fontWeight: "bold" }}>{item}</Text>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homePageHeading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
  },

  inputArea: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  },
});

export default Home;
