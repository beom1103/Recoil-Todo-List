import React from "react";
import TodoListStats from "./TodoListStats";
import TodoListFilters from "./TodoListFilters";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../recoil/todo";

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  );
};

export default TodoList;
