import {StyleSheet, View, Text, Pressable} from 'react-native';

function GoalItem(props) {
  return (
    <View style={GoalItemStyle.goalItem}>
      <Pressable
        android_ripple={{color: '#210644'}}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && GoalItemStyle.pressedItem}>
        <Text style={GoalItemStyle.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const GoalItemStyle = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: 'purple',
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
  },
});
