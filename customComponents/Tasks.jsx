import {
    SectionList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList
  } from "react-native";
import Task from "./Categories";
  
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
              <FlatList style={styles.taskContainer}
              horizontal={false}
                  data={tasks}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                      <TouchableOpacity style={styles.taskList}>
                          <View>
                              <Text>{item}</Text>
                          </View>
                      </TouchableOpacity>
                  )}
              />
    );
  };
  
  export default Tasks;
  
  const styles = StyleSheet.create({
      taskContainer: {
  
      },
  
      taskList: {
          paddingVertical: 60,
          paddingHorizontal: 15,
          backgroundColor: "white",
          marginVertical: 10,
          textAlign: "center",
          borderRadius: 20
      }
  });