import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#c2c2c2" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "#ededed",
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    color: "#1a1a1a",
    padding: 14,
  },
});
