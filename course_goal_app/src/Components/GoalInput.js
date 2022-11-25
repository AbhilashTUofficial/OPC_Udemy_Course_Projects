import {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={GoalInpuStyle.inputContainer}>
        <Image
          style={GoalInpuStyle.image}
          source={require('../../assets/images/img.png')}
        />
        <TextInput
          style={GoalInpuStyle.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={GoalInpuStyle.buttonContainer}>
          <View style={GoalInpuStyle.button}>
            <Button title="Cancel" onPress={props.onCancel} color="red" />
          </View>
          <View style={GoalInpuStyle.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="purple" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const GoalInpuStyle = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
  textInput: {
    borderColor: 'grey',
    backgroundColor: 'pink',
    borderRadius: 6,
    width: '100%',
    padding: 16,
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
