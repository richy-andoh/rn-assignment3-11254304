import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import userPrifle from "../assets/user-profile.png";
import search from "../assets/search.png";

const Header = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <View>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Hello , Devs</Text>
          <Text style={{ paddingTop: 2 }}>14 tasks today</Text>
        </View>
        <View style={styles.profileContainer}>
          <Image style={styles.profile} source={userPrifle} />
        </View>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <TextInput style={styles.input} placeholder="Search" />
          <Image style={styles.searchIcon} source={search} />
        </View>

        <View style={styles.toggleBox}></View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  profileContainer: {
    width: 50,
    height: 51,
    borderRadius: 100,
    backgroundColor: "white",
  },

  profile: {
    height: 45,
    width: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  searchContainer: {
    marginTop: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  input: {
    borderColor: "black",
    height: 60,
    margin: 12,
    borderWidth: 0.5,
    paddingVertical: 10,
    paddingLeft: 55,
  },

  searchBox: {
    position: "relative",
  },

  searchIcon: {
    width: 30,
    height: 30,
    postion: "absolute",
    top: -55,
    left: 20,
  },

  toggleBox: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    borderRadius: 90,
  },
});
