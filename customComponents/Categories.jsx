
import {
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image
  } from "react-native";
  
  
  //import task1 from "../assets/task1.png"
  const data = [
    {
      id: "1",
      number: 1,
      title: "Morning Run",
      imageUrl: "../assets/task1.png",
    },
    {
      id: "2",
      number: 2,
      title: "Math Homework",
      imageUrl: "../assets/task2.png",
    },
    {
      id: "3",
      number: 3,
      title: "Build React App",
      imageUrl: "../assets/task4.png",
    },
    {
      id: "4",
      number: 4,
      title: "Dinner Preparation",
      imageUrl: "../assets/task4.png",
    },
    {
      id: "5",
      number: 5,
      title: "Read Novel",
      imageUrl: "../assets/task5.png",
    },
    {
      id: "6",
      number: 6,
      title: "Grocery Shopping",
      imageUrl: "../assets/task6.png",
    },
    {
      id: "7",
      number: 7,
      title: "Clean Kitchen",
      imageUrl: "../assets/task7.png",
    },
    {
      id: "8",
      number: 8,
      title: "Meditation",
      imageUrl: "../assets/task8.png",
    },
    {
      id: "9",
      number: 9,
      title: "Yoga Session",
      imageUrl: "../assets/task9.png",
    },
    {
      id: "10",
      number: 10,
      title: "Physics Assignment",
      imageUrl: "../assets/task10.png",
    },
  ];
  
  const Task = () => {
    return (
      <>
          <Text style={styles.catText}>Categories</Text>
        <FlatList
                horizontal={true}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.category} onPress={() => alert("Hello")}>
                        <View>
                            <Text>{item.title}</Text>
                            <Text>{item.number}</Text>
                            <Image
                                style={styles.catImg}
                                source={{
                                    uri: item.imageUrl,
                                }} />
                        </View>
                    </TouchableOpacity>
                )} /></>
    );
  };
  
  export default Task;
  
  const styles = StyleSheet.create({
      catText: {
         paddingVertical: 5,
         fontWeight: "bold",
         fontSize: 24
      },
    category: {
      padding: 20,
      margin: 4,
      backgroundColor: "white",
      borderRadius: 10,
    },
  
    catImg: {
      width: 120,
      height: 120,
      resizeMode: "contain"
    }
  });
  