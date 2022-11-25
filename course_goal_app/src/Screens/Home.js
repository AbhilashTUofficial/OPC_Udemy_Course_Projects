import {Fragment, useState} from 'react';
import {StatusBar, StyleSheet, View, FlatList, Button} from 'react-native';

import GoalItem from '../Components/GoalItem';
import GoalInput from '../Components/GoalInput';

const Home = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = enteredGoalText => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
  };
  const startAddGoalHandler = () => {
    setModalVisibility(true);
  };

  const deleteGoalHandler = id => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id);
    });
  };

  const endAddGoalHandler = () => {
    setModalVisibility(false);
  };

  return (
    <Fragment>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add Your Goal"
          color="purple"
          onPress={startAddGoalHandler}
        />

        <GoalInput
          visible={modalVisibility}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={itemData => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, i) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </Fragment>
  );
};

export default Home;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 6,
  },
});
