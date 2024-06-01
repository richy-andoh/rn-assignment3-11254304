import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../customComponents/Header";
import Task from "../customComponents/Task";
import Categories from "../customComponents/Categories";
const MainScreen = () => {
  return (
    <View style={styles.mainScreen}>
        <Header />
        <Task />
        <Categories />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
    mainScreen: {
        margin: 20,
    }
});
