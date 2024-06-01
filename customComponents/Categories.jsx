import {
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";

const categories = [
  "Exercise",
  "Study",
  "Code",
  "Cook",
  "Read",
  "Shop",
  "Clean",
  "Relax",
];


const Categories = () => {
  return (
            <FlatList style={styles.catContainer}
            horizontal={false}
                data={categories}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.list}>
                        <View>
                            <Text>{item}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
  );
};

export default Categories;

const styles = StyleSheet.create({
    catContainer: {

    },

    list: {
        paddingVertical: 60,
        paddingHorizontal: 15,
        backgroundColor: "white",
        marginVertical: 10,
        textAlign: "center",
        borderRadius: 20
    }
});
