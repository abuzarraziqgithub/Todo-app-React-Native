// components/TodoItem.js
import React from "react";
import { View, Text, Button } from "react-native";

export default function TodoItem({ task, deleteTask, toggleCompleted }) {
  return (
    <View>
      <Text
        style={{ textDecorationLine: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </Text>
      <Button title="Delete" onPress={() => deleteTask(task.id)} />
      <Button
        title={task.completed ? "Mark Incomplete" : "Mark Complete"}
        onPress={() => toggleCompleted(task.id)}
      />
    </View>
  );
}
