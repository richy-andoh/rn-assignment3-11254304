import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../customComponents/Header";
const MainScreen = () => {
  return (
    <View style={styles.mainScreen}>
        <Header />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
    mainScreen: {
        margin: 20,
    }
});
