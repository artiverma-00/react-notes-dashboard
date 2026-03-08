import { useState, useContext, useRef, useEffect } from "react";
import { NotesContext } from "../context/NotesContext";

const NoteInput = () => {
  const [input, setInput] = useState("");
  const { addNote } = useContext(NotesContext);
  const inputRef = useRef(null);

  // focus input when page loads
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAdd = () => {
    if (input.trim() === "") return;

    addNote(input);
    setInput("");
  };

  return (
    <div>
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
