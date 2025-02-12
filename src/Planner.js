import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import calendar default styles
import "./Planner.css";

function Planner() {
  const [date, setDate] = useState(new Date());
  const [tasks, setTasks] = useState({});
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim()) {
      const formattedDate = date.toDateString(); // Format date as key
      const updatedTasks = {
        ...tasks,
        [formattedDate]: [...(tasks[formattedDate] || []), taskInput],
      };
      setTasks(updatedTasks);
      setTaskInput(""); // Clear input
    }
  };

  const deleteTask = (taskIndex) => {
    const formattedDate = date.toDateString();
    const updatedTasks = [...tasks[formattedDate]];
    updatedTasks.splice(taskIndex, 1);

    setTasks({
      ...tasks,
      [formattedDate]: updatedTasks,
    });
  };

  return (
    <div className="planner-container">
      <h1>📅 My Planner</h1>

      {/* Calendar Component */}
      <div className="calendar-section">
        <Calendar onChange={setDate} value={date} />
      </div>

      {/* Selected Date */}
      <h2 className="selected-date">Selected Date: {date.toDateString()}</h2>

      {/* Add Task Input */}
      <div className="task-input-container">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a task for this day..."
          className="task-input"
        />
        <button onClick={addTask} className="add-task-btn">
          Add Task
        </button>
      </div>

      {/* Task List */}
      <div className="task-list">
        <h3>Tasks for {date.toDateString()}:</h3>
        {tasks[date.toDateString()]?.length > 0 ? (
          <ul>
            {tasks[date.toDateString()].map((task, index) => (
              <li key={index} className="task-item">
                <span>{task}</span>
                <button
                  className="delete-task-btn"
                  onClick={() => deleteTask(index)}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-tasks">No tasks for this day. Add some!</p>
        )}
      </div>
    </div>
  );
}

export default Planner;
