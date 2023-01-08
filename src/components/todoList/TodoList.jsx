import React, { useState } from "react";
import styles from "./todoList.module.css";
import Checkbox from "../checkbox";
import broom from "../Assets/broomsweep.jpg";

const TodoList = () => {
  // set initial state
  const [task, setTask] = useState({
    id: 0,
    taskDescription: "",
    isCompleted: false
  });

  const [todos, setTodos] = useState([]);

  function addTodos(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        taskDescription: task.taskDescription,
        isCompleted: false
      }
    ]);

    // reset the task
    setTask({
      id: 0,
      taskDescription: "",
      isCompleted: false
    });
  }

  const handleToggle = (id) => {
    console.log({ id });
    // sieving through the todos and returning the ones that are completed
    let mapped = todos.map((task) => {
      return task.id === Number(id)
        ? { ...task, isCompleted: true }
        : { ...task };
    });
    // setting our new todo list with updated variables
    setTodos(mapped);
  };

  return (
    <div className="App">
     <div className={styles.broom_container}>
     <img className={styles.broomIcon}src={broom} alt="broomsweep"/>
     </div>
      <form className={styles.todo_form} onSubmit={addTodos}>
        <div className={styles.todo_label}>
          <label>
          <div className={styles.todo_task}>
            Task
            </div>
            <input className={styles.todo_input}
              type="text"
              value={task.taskDescription}
              name="taskDescription"
              onChange={(event) =>
                setTask({
                  taskDescription: event.target.value,
                  isCompleted: false
                })
              }
            />
          </label>
          <button className={styles.todo_button}>Add Todo</button>
        </div>
      </form>
      <>
        {todos.length > 0 ? (
          <>
            {todos.map((t, index) => {
              return (
                <div id={t.id} key={index + t.id} value={t.id}>
                  {t.isCompleted ? (
                    <strike>
                      <p>{t.taskDescription}</p>
                    </strike>
                  ) : (
                    <Checkbox className={styles.checkbox}
                      label={t.taskDescription}
                      value={t.id}
                      checked={t.isCompleted}
                      onChange={(e) => handleToggle(t.id)}
                    />
                  )}
                </div>
              );
            })}
          </>
        ) : (
          <p>No tasks for today</p>
        )}
      </>
    </div>
  );
};

export default TodoList;
