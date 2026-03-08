import { useMemo } from "react";
import { useNotes } from "../context/NotesContext";

const NotesCount = () => {
  const { notes } = useNotes();

  const totalNotes = useMemo(() => {
    return notes.length;
  }, [notes]);

  return <h3 className="notes-count">Total Notes: {totalNotes}</h3>;
};

export default NotesCount;
