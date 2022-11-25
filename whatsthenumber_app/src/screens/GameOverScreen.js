import {View, Image, Text, StyleSheet} from 'react-native';

import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
  return (
    <View style={gameOverStyles.cont}>
      <Title>GAME OVER!</Title>
      <View style={gameOverStyles.imgCont}>
        <Image
          style={gameOverStyles.img}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={gameOverStyles.summaryText}>
        Your phone needed{' '}
        <Text style={gameOverStyles.highlight}>{roundsNumber}</Text> rounds to
        guess the number{' '}
        <Text style={gameOverStyles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const gameOverStyles = StyleSheet.create({
  cont: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgCont: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});
