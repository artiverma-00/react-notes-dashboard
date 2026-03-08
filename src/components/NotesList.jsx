import { useState } from "react";
import { useNotes } from "../context/NotesContext";

const NotesList = () => {
  const { notes } = useNotes();
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  if (notes.length === 0) {
    return <p className="empty-state">No notes yet. Add your first note.</p>;
  }

  return (
    <div>
      <h3>Notes</h3>

      <ul className="notes-list">
        {notes.map((note) => (
          <li
            key={note.id}
            onClick={() => setSelectedNoteId(note.id)}
            className={selectedNoteId === note.id ? "selected-note" : ""}
          >
            <span>{note.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
