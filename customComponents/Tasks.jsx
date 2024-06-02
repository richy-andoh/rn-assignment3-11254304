import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SectionList } from 'react-native';

const sections = [
  {
    title: "Ongoing Tasks",
    data: [
      "Morning Run",
      "Math Homework",
      "Dinner Preparation",
      "Clean Kitchen",
      "Read Novel",
      "Grocery Shopping",
      "Clean",
      "Yoga Session",
    ],
  },
];

const Tasks = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.taskList}>
            <View>
              <Text>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        // ListHeaderComponent={() => <Text style={styles.taskTitle}>Ongoing Tasks</Text>}
      />
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 20,
    marginTop: 40

  },
  taskTitle: {
    fontSize: 24,
    marginVertical: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  taskList: {
    paddingVertical: 50,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    marginVertical: 10,
    textAlign: 'center',
    borderRadius: 10,
  },
});



// import React from 'react';
// import { StyleSheet, Text, TouchableOpacity, View, SectionList } from 'react-native';

// const sections = [
//   {
//     title: "Ongoing Tasks",
//     data: [
//       "Morning Run",
//       "Math Homework",
//       "Dinner Preparation",
//       "Clean Kitchen",
//       "Read",
//       "Grocery Shopping",
//       "Clean",
//       "Yoga Session",
//     ],
//   },
// ];

// const Tasks = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.taskTitle}>Ongoing Tasks</Text>
//       <SectionList
//         sections={sections}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity style={styles.taskList}>
//             <View>
//               <Text>{item}</Text>
//             </View>
//           </TouchableOpacity>
//         )}
//         renderSectionHeader={({ section: { title } }) => (
//           <Text style={styles.sectionHeader}>{title}</Text>
//         )}
//       />
//     </View>
//   );
// };

// export default Tasks;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   taskTitle: {
//     fontSize: 24,
//     marginVertical: 20,
//   },
//   sectionHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     backgroundColor: '#f2f2f2',
//     padding: 8,
//   },
//   taskList: {
//     paddingVertical: 20,
//     paddingHorizontal: 15,
//     backgroundColor: 'white',
//     marginVertical: 10,
//     textAlign: 'center',
//     borderRadius: 10,
//   },
// });

