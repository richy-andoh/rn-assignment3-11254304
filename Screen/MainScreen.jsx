import { StyleSheet, View } from "react-native";
import Header from "../customComponents/Header";
import Task from "../customComponents/Tasks";
import Categories from "../customComponents/Categories";
const MainScreen = () => {
  return (
    <View style={styles.mainScreen}>
        <Header />
        <Categories />
        <Task />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
    mainScreen: {
      margin: 20,
    }
});
