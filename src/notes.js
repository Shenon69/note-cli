import { getDB, saveDB, insertDB } from "./db";

export const newNote = async (note, tags) => {
  const newNote = {
    tags,
    id: Date.now(),
    content: note,
  };
  insertDB(newNote);
  return newNote;
};

export const getAllNotes = async () => {
  const { notes } = await getDB();
  return notes;
};

export const findNotes = async (filter) => {
  const { notes } = await getDB();
  return notes.filter((note) =>
    note.content.toLowerCase().includes(filter.toLowerCase())
  );
};

export const removeNote = async (id) => {
  const notes = await getDB();
  const match = notes.find((note) => note.id === id);

  if (match) {
    const newNote = notes.filter((note) => note.id !== id);
    await saveDB({ notes: newNote });
    return id;
  }
};

export const removeAllNotes = () => saveDB({ notes: [] });