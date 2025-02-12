import React, { useState } from "react";
import "./DailyGoalsList.css";

const DailyGoalsList = () => {
  const [goals, setGoals] = useState([
    { id: 1, text: "Exercise for 30 minutes", completed: false },
    { id: 2, text: "Read a book for 20 minutes", completed: false },
    { id: 3, text: "Write code for 2 hours", completed: false },
    { id: 4, text: "Plan tomorrow's tasks", completed: false },
  ]);

  const [newGoal, setNewGoal] = useState(""); // State to hold new goal input

  // Function to toggle goal completion
  const toggleGoal = (id) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  // Function to add a new goal
  const addGoal = (e) => {
    e.preventDefault(); // Prevent page reload
    if (newGoal.trim()) {
      const newGoalItem = {
        id: goals.length + 1, // Generate new id
        text: newGoal,
        completed: false,
      };
      setGoals([...goals, newGoalItem]); // Add new goal to the list
      setNewGoal(""); // Clear input field
    }
  };

  // Function to delete a goal
  const deleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id)); // Remove goal by id
  };

  return (
    <div className="whole-page">
      <div className="goals-container">
        <h2 id="h2-2">🎯 Daily Goals</h2>
        <form onSubmit={addGoal} className="add-goal-form">
          <input
            type="text"
            placeholder="Add a new goal..."
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
          />
          <button type="submit">Add Goal</button>
        </form>
        <ul className="goals-list">
          {goals.map((goal) => (
            <li
              key={goal.id}
              className={`goal-item ${goal.completed ? "completed" : ""}`}
            >
              <input
                type="checkbox"
                checked={goal.completed}
                onChange={() => toggleGoal(goal.id)}
              />
              <span>{goal.text}</span>
              <button
                className="delete-goal-btn"
                onClick={() => deleteGoal(goal.id)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DailyGoalsList;
