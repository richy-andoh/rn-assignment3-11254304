import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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
