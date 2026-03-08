import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "notes";

export const NotesContext = createContext(null);

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    try {
      const storedNotes = localStorage.getItem(STORAGE_KEY);
      if (!storedNotes) return;

      const parsedNotes = JSON.parse(storedNotes);
      if (Array.isArray(parsedNotes)) {
        setNotes(parsedNotes);
      }
    } catch {
      setNotes([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const trimmedText = text.trim();
    if (!trimmedText) return;

    const note = {
      id: crypto.randomUUID(),
      text: trimmedText,
    };

    setNotes((currentNotes) => [...currentNotes, note]);
  };

  const removeNote = (id) => {
    setNotes((currentNotes) => currentNotes.filter((note) => note.id !== id));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, removeNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);

  if (!context) {
    throw new Error("useNotes must be used within a NotesProvider");
  }

  return context;
};
