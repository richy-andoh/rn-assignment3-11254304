import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";

const tasks = [
  "Exercise",
  "Study",
  "Code",
  "Cook",
  "Read",
  "Shop",
  "Clean",
  "Relax",
];

const Tasks = () => {
  return (
    <ScrollView style={styles.taskContainer}>
      <Text style={styles.taskTitle}>Ongoing Task</Text>
      {/* <SectionList
        style={styles.taskContainer}
        sections={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.taskList}>
            <View>
              <Text>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
      /> */}
      {tasks.map((task, index) => (
        <TouchableOpacity key={index} style={styles.taskList}>
          <View>
            <Text>{task}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  taskTitle: {
    paddingVertical: 5,
    paddingLeft: 1,
    //fontWeight: "bold",
    fontSize: 24,
    marginTop: 20,
  },

  taskContainer: {},

  taskList: {
    paddingVertical: 60,
    paddingHorizontal: 15,
    backgroundColor: "white",
    marginVertical: 10,
    textAlign: "center",
    borderRadius: 20,
  },
});
