import "./App.css";
import { NotesProvider } from "./context/NotesContext";
import NoteInput from "./components/NoteInput";
import NotesList from "./components/NotesList";
import NotesCount from "./components/NotesCount";

function App() {
  return (
    <NotesProvider>
      <main className="app">
        <section className="notes-card">
          <h1>Notes Dashboard</h1>
          <NotesCount />
          <NoteInput />
          <NotesList />
        </section>
      </main>
    </NotesProvider>
  );
}

export default App;
