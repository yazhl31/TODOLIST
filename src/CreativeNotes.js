import React, { useState } from 'react';
import './CreativeNotes.css';

function CreativeNotes() {
  const [note, setNote] = useState(''); // For holding the note input
  const [notesList, setNotesList] = useState([]); // For storing the list of notes

  // Function to handle adding a new note
  const addNote = () => {
    if (note.trim() !== '') {
      setNotesList([...notesList, note]); // Add new note to the list
      setNote(''); // Clear the input field after adding the note
    }
  };

  // Function to handle deleting a note by index
  const deleteNote = (indexToDelete) => {
    const updatedNotes = notesList.filter((_, index) => index !== indexToDelete);
    setNotesList(updatedNotes);
  };

  return (
    <div className="creative-notes-container">
      <h1>📝 Creative Notes</h1>

      {/* Textarea for entering notes */}
      <textarea
        className="note-input"
        value={note}
        onChange={(e) => setNote(e.target.value)} // Update state on input change
        placeholder="Write your note here..."
      ></textarea>

      {/* Button to add the note */}
      <button className="add-note-btn" onClick={addNote}>
        Add Note
      </button>

      {/* Displaying the list of saved notes */}
      <div className="notes-list">
        {notesList.length === 0 ? (
          <p className="no-notes">No notes yet. Start adding some!</p>
        ) : (
          <ul>
            {notesList.map((note, index) => (
              <li key={index} className="note-item">
                <p>{note}</p>
                <button
                  className="delete-note-btn"
                  onClick={() => deleteNote(index)}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CreativeNotes;
