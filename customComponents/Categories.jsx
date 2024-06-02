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
    number: "12 Tasks",
    title: "Exercise",
    imageUrl:
      "https://i.im.ge/2024/06/02/K0iAqK.task1.png",
  },
  {
    id: "2",
    number: "12 Tasks",
    title: "Study",
    imageUrl:
      "https://i.im.ge/2024/06/02/K0it4F.task2.png",
  },
  {
    id: "3",
    number: "12 Tasks",
    title: "Code",
    imageUrl:
      "https://i.im.ge/2024/06/02/K0iP36.task3.jpeg",
  },
  {
    id: "4",
    number: "12 Tasks",
    title: "Cook",
    imageUrl:
      "https://i.im.ge/2024/06/02/K0imRy.task4.jpeg",
  },
  {
    id: "5",
    number: "12 Tasks",
    title: "Read",
    imageUrl:
      "https://i.im.ge/2024/06/02/K0ij9J.task5.jpeg",
  },
  {
    id: "6",
    number: "12 Tasks",
    title: "Shopping",
    imageUrl:
      "https://i.im.ge/2024/06/02/K0i9Fa.task6.jpeg",
  },
  {
    id: "7",
    number: "12 Tasks",
    title: "Clean",
    imageUrl:
      "https://i.im.ge/2024/06/02/K0ihqL.task7.jpeg",
  },
  // {
  //   id: "8",
  //   number: 8,
  //   title: "Meditation",
  //   imageUrl:
  //     "https://i.im.ge/2024/06/02/K0i0kx.task8.jpeg",
  // },
  // {
  //   id: "9",
  //   number: "12 Tasks",
  //   title: "Exercise",
  //   imageUrl:
  //     "https://i.im.ge/2024/06/02/K0iLnc.task9.jpeg",
  // },
  {
    id: "10",
    number: 10,
    title: "Home Work",
    imageUrl:
      "https://i.im.ge/2024/06/02/K0iI3T.task10.jpeg",
  },
];

const Categories = () => {
  return (
    <View style={styles.catContainer}>
      <Text style={styles.catText}>Categories</Text>

      <ScrollView horizontal>
      

        {items.map((item) => (
          <TouchableOpacity key={item.id} style={styles.category}>
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.num}>{item.number}</Text>
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
  catContainer: {
    marginTop: 20
  }, 

  catText: {
    paddingVertical: 5,
    paddingLeft: 2,
    fontWeight: "bold",
    fontSize: 20,
  },
  category: {
    padding: 23,
    margin: 4,
    backgroundColor: "white",
    borderRadius: 15,
  },

  title: {
    fontWeight: "bold",
    fontSize: 18
  },

  num: {
     paddingVertical: 6
  },
  catImg: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
});


