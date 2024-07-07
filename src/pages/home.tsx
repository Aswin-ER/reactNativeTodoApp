import React, { FC, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";

const Home: FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [addTodo, setAddTodo] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState(null);

  const onPress = (data: string) => {

    if (todo.trim().length === 0) {
      return;
    }

    const newData:any = {
      id: addTodo.length ? addTodo.length : 0,
      data: todo.trim(),
    };
    setAddTodo([...addTodo, newData]);
    setTodo("");
  };

  const editTodo = (index:any) => {
    setEditIndex(index);
    setTodo(addTodo[index]?.data);
  };

  const saveTodo = () => {
    if (editIndex !== null) {
      const updatedTodos = addTodo.map((item:any, index) =>
        index === editIndex ? { ...item, data: todo } : item
      );
      setAddTodo(updatedTodos);
      setEditIndex(null);
      setTodo("");
    }
  };

  const deleteTodo = (index:any) => {
    const updatedTodos = addTodo.filter((_, i) => i !== index);
    setAddTodo(updatedTodos);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.homePageHeading}>
          <Text style={styles.headingText}>ADD TODO LIST</Text>

          <View style={styles.inputArea}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Task Here"
              placeholderTextColor={"black"}
              onChangeText={setTodo}
              value={todo}
            ></TextInput>
            <View style={styles.buttonContainer}>
              <Button
                onPress={editIndex !== null ? saveTodo : onPress}
                color="black"
                title={editIndex !== null ? "Save" : "Add"}
              ></Button>
            </View>
          </View>

          <View style={styles.dataTable}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderText}>TODO</Text>
              <Text style={styles.tableHeaderText}>Edit</Text>
              <Text style={styles.tableHeaderText}>Delete</Text>
            </View>

            {addTodo.map((value:any, index) => (
              <View key={value.id} style={styles.tableRow}>
                <Text style={styles.tableCell}>{value.data}</Text>
                <TouchableOpacity
                  style={[styles.button, styles.editButton]}
                  onPress={() => editTodo(index)}
                >
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.deleteButton]}
                  onPress={() => deleteTodo(index)}
                >
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollViewContent: {
    alignItems: "center",
  },

  homePageHeading: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },

  headingText: {
    fontSize: 25,
    fontWeight: "bold",
  },

  inputArea: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  textInput: {
    borderColor: "black",
    width: "60%",
    borderWidth: 2,
    height: 40,
    paddingLeft: 10,
    fontSize: 18,
  },
  buttonContainer: {
    marginLeft: 20,
  },
  dataTable: {
    backgroundColor: "white",
    width: "90%",
    marginTop: 30,
    borderWidth: 1,
    borderColor: "black",
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderColor: "black",
    paddingVertical: 10,
  },
  tableHeaderText: {
    paddingRight: 32,
    paddingLeft: 32,
    fontWeight: "bold",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "black",
  },
  tableCell: {
    width: "33%",
    textAlign: "center",
    color: "red",
  },
  button: {
    width: "25%",
    alignItems: "center",
    paddingVertical: 5,
    borderRadius: 5,
  },
  editButton: {
    backgroundColor: "yellow",
  },
  deleteButton: {
    backgroundColor: "red",
  },
  buttonText: {
    color: "black",
  },
});

export default Home;
