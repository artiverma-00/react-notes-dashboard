import { useContext, useState } from "react";
import { NotesContext } from "../context/NotesContext";

const NotesList = () => {
  const { notes } = useContext(NotesContext);
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div>
      <h3>Notes</h3>

      <ul>
        {notes.map((note, index) => (
          <li
            key={index}
            onClick={() => setSelectedIndex(index)}
            style={{
              cursor: "pointer",
              backgroundColor: selectedIndex === index ? "yellow" : "white",
            }}
          >
            {note}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
