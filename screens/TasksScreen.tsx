import * as React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { useQuery } from "@apollo/client";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { Text, View } from '../components/Themed';

import { ALL_TASKS } from '../queries';
import { Task } from '../types';

const TasksScreen = (): JSX.Element => {
  const { loading, error, data } = useQuery(ALL_TASKS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList<Task>
        data={data.tasks}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <Text style={styles.title}>{item.taskname}</Text>
          </View>
        )}
        keyExtractor={(item) => item._id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fafafa'
  },
  task: {
    backgroundColor: '#EC982F',
    borderRadius: 50,
    padding: 20,
    marginVertical: 8,
    width: wp('90%'),
  }
});

export default TasksScreen;
