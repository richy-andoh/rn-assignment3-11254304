import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

//import task1 from "../assets/task1.png"
const items = [
  {
    id: "1",
    number: 1,
    title: "Morning Run",
    imageUrl:
      "https://app.gemoo.com/share/image-annotation/655641717780127744?codeId=PaZVRk3Ka9RgQ",
  },
  {
    id: "2",
    number: 2,
    title: "Math Homework",
    imageUrl:
      "https://app.gemoo.com/share/image-annotation/655641715032829952?codeId=PaZVRk3Ka9RgQ",
  },
  {
    id: "3",
    number: 3,
    title: "Build React App",
    imageUrl:
      "https://app.gemoo.com/share/image-annotation/655641712214286336?codeId=PaZVRk3Ka9RgQ",
  },
  {
    id: "4",
    number: 4,
    title: "Dinner Preparation",
    imageUrl:
      "https://app.gemoo.com/share/image-annotation/655640240885948416?codeId=PaZVRk3Ka9RgQ",
  },
  {
    id: "5",
    number: 5,
    title: "Read Novel",
    imageUrl:
      "https://app.gemoo.com/share/image-annotation/655640066851745792?codeId=PaZVRk3Ka9RgQ",
  },
  {
    id: "6",
    number: 6,
    title: "Grocery Shopping",
    imageUrl:
      "https://app.gemoo.com/share/image-annotation/655639949813886976?codeId=PaZVRk3Ka9RgQ",
  },
  {
    id: "7",
    number: 7,
    title: "Clean Kitchen",
    imageUrl:
      "https://app.gemoo.com/share/image-annotation/655639807438184448?codeId=PaZVRk3Ka9RgQ",
  },
  {
    id: "8",
    number: 8,
    title: "Meditation",
    imageUrl:
      "https://app.gemoo.com/share/image-annotation/655638782442622976?codeId=PaZVRk3Ka9RgQ",
  },
  {
    id: "9",
    number: 9,
    title: "Yoga Session",
    imageUrl:
      "https://app.gemoo.com/share/image-annotation/655641709274050560?codeId=PaZVRk3Ka9RgQ",
  },
  {
    id: "10",
    number: 10,
    title: "Physics Assignment",
    imageUrl:
      "https://app.gemoo.com/share/image-annotation/655636282381574144?codeId=DGYQXB6LRr9g6&origin=imageurlgenerator",
  },
];

const Categories = () => {
  return (
    <View>
      <Text style={styles.catText}>Categories</Text>

      <ScrollView horizontal>
        {/* <SectionList
        sections={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.category}
            onPress={() => alert("Hello")}
          >
            <View>
              <Text>{item.title}</Text>
              <Text>{item.number}</Text>
              <Image
                style={styles.catImg}
                source={{
                  uri: item.imageUrl,
                }}
              />
            </View>
          </TouchableOpacity>
        )}
      /> */}

        {items.map((item) => (
          <TouchableOpacity key={item.id} style={styles.category}>
            <View>
              <Text>{item.title}</Text>
              <Text>{item.number}</Text>
              <Image
                style={styles.catImg}
                source={{
                  uri: item.imageUrl,
                }}
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  catText: {
    paddingVertical: 5,
    paddingLeft: 2,
    //fontWeight: "bold",
    fontSize: 24,
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
    resizeMode: "contain",
  },
});
