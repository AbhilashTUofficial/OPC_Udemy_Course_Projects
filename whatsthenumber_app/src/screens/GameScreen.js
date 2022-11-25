import {useState, useEffect} from 'react';
import {View, StyleSheet, Alert, Text, FlatList} from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import GuessLogItem from '../components/game/GuessLogItem';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({userNumber, onGameOver}) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = direction => {
    // direction => 'lower', 'greater'
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
  };

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={gameScreenStyles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={gameScreenStyles.prompt}>
          Higher or lower?
        </InstructionText>
        <View style={gameScreenStyles.btnsCont}>
          <View style={gameScreenStyles.btnCont}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Text>higher</Text>
            </PrimaryButton>
          </View>
          <View style={gameScreenStyles.btnCont}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Text>lower</Text>
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={gameScreenStyles.listCont}>
        <FlatList
          data={guessRounds}
          renderItem={itemData => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={item => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const gameScreenStyles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  prompt: {
    marginBottom: 12,
  },
  btnsCont: {
    flexDirection: 'row',
  },
  btnCont: {
    flex: 1,
  },
  listCont: {
    flex: 1,
    padding: 16,
  },
});
