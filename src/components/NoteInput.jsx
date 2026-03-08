import { useEffect, useRef, useState } from "react";
import { useNotes } from "../context/NotesContext";

const NoteInput = () => {
  const [input, setInput] = useState("");
  const { addNote } = useNotes();
  const inputRef = useRef(null);

  // focus input when page loads
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAdd = () => {
    addNote(input);
    setInput("");
  };

  return (
    <div className="note-input">
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter note"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleAdd}>Add Note</button>
    </div>
  );
};

export default NoteInput;
