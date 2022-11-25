import {useState} from 'react';
import {TextInput, View, StyleSheet, Alert} from 'react-native';

import PrimaryButton from '../../src/components/ui/PrimaryButton';
import Title from '../../src/components/ui/Title';
import Colors from '../constants/colors';
import Card from '../../src/components/ui/Card';
import InstructionText from '../../src/components/ui/InstructionText';

const StartGameScreen = ({onPickNumber}) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = enteredText => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}],
      );
      return;
    }

    onPickNumber(chosenNumber);
  };

  return (
    <View style={startGameStyles.cont}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={startGameStyles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={startGameStyles.btnsCont}>
          <View style={startGameStyles.btnCont}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={startGameStyles.btnCont}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const startGameStyles = StyleSheet.create({
  cont: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnsCont: {
    flexDirection: 'row',
  },
  btnCont: {
    flex: 1,
  },
});
