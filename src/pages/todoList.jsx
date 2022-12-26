import React from "react";
import TodoList from "../components/todoList/TodoList";
import styles from "../components/todoList/todoList.module.css";

const TodoListPage = () => {
  return (
    <section>
      <h1 className={styles["todo_text"]}>Todo List</h1>
      <TodoList />
    </section>
  );
};

export default TodoListPage;