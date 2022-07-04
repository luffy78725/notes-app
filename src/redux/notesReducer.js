import { ADD_NOTE } from "../actionTypes";
import { v4 as uuidv4 } from "uuid";
import { addDataToLocalStorage, getDataFromLocalStorage } from "../utils";

// getting notes from localStorge and initializing state.
const notes = getDataFromLocalStorage("notes");
const initialState = notes?.list || [
  {
    createdAt: "Sun Jul 02 2022 at 1:51:44 PM",
    description: "Something in the ☔ ",
    id: "08963473-c338-4788-9d69-45911911b6ba",
    reminderFor: "Fri Jul 22 2022",
    title: "Batman Soundtrack",
  },
];

export default function notesReducer(state = { list: initialState }, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_NOTE: {
      let newNote = modifyNote(payload);
      let newState = { ...state, list: [newNote, ...state.list] };
      addDataToLocalStorage("notes", newState);
      return newState;
    }
    default:
      return state;
  }
}

// modify Note values and add additional info.
function modifyNote(payload) {
  const now = new Date();
  const dateTimeString = `${now.toDateString()} at ${now.toLocaleTimeString()}`;
  return {
    ...payload,
    id: uuidv4(),
    createdAt: dateTimeString,
    reminderFor: payload.reminderFor.toDateString(),
  };
}
