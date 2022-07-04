import React from "react";
import { useSelector } from "react-redux";
import Note from "../../../components/Note/Note";

export default function Notes() {
  const notes = useSelector((state) => state.notes.list);
  return notes.map((note) => <Note key={note.id} {...note} />);
}
