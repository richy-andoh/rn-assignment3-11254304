import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const data = [
  {
    id: "1",
    number: 1,
    title: "Morning Run",
    imageUrl: "https://example.com/morning-run.jpg",
  },
  {
    id: "2",
    number: 2,
    title: "Math Homework",
    imageUrl: "https://example.com/math-homework.jpg",
  },
  {
    id: "3",
    number: 3,
    title: "Build React App",
    imageUrl: "https://example.com/react-app.jpg",
  },
  {
    id: "4",
    number: 4,
    title: "Dinner Preparation",
    imageUrl: "https://example.com/dinner-preparation.jpg",
  },
  {
    id: "5",
    number: 5,
    title: "Read Novel",
    imageUrl: "https://example.com/read-novel.jpg",
  },
  {
    id: "6",
    number: 6,
    title: "Grocery Shopping",
    imageUrl: "https://example.com/grocery-shopping.jpg",
  },
  {
    id: "7",
    number: 7,
    title: "Clean Kitchen",
    imageUrl: "https://example.com/clean-kitchen.jpg",
  },
  {
    id: "8",
    number: 8,
    title: "Meditation",
    imageUrl: "https://example.com/meditation.jpg",
  },
  {
    id: "9",
    number: 9,
    title: "Yoga Session",
    imageUrl: "https://example.com/yoga-session.jpg",
  },
  {
    id: "10",
    number: 10,
    title: "Physics Assignment",
    imageUrl: "https://example.com/physics-assignment.jpg",
  },
  {
    id: "11",
    number: 11,
    title: "Debug App",
    imageUrl: "https://example.com/debug-app.jpg",
  },
  {
    id: "12",
    number: 12,
    title: "Bake Cake",
    imageUrl: "https://example.com/bake-cake.jpg",
  },
  {
    id: "13",
    number: 13,
    title: "Finish Book",
    imageUrl: "https://example.com/finish-book.jpg",
  },
  {
    id: "14",
    number: 14,
    title: "Buy Fruits",
    imageUrl: "https://example.com/buy-fruits.jpg",
  },
  {
    id: "15",
    number: 15,
    title: "Vacuum Living Room",
    imageUrl: "https://example.com/vacuum-living-room.jpg",
  },
];

const Task = () => {
  return (
      <FlatList
        horizontal={true}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.task}
           onPress={() => alert("Hello")}
          >
            <View>
              <Text>{item.title}</Text>
              <Text>{item.number}</Text>
              {/* <Image
                     source={{
                        uri: item.imageUrl
                     }}
                     /> */}
            </View>
          </TouchableOpacity>
        )}
      />
  );
};

export default Task;

const styles = StyleSheet.create({
    task: {
        padding: 10,
        margin: 4,
        backgroundColor: "red",
        borderRadius: 10
    }
});
