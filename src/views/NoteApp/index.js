import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import Calendar from "react-calendar";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "../../components/Alert/Alert";
import Notes from "../NoteApp/Notes/Notes";
import NoteForm from "./AddNoteForm/NoteForm";
import { ADD_NOTE } from "../../actionTypes";
import "../../App.css";

const MINIMUM_DATE_ALLOWED_TO_SELECT = new Date();

function NoteApp() {
  const [date, setDate] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const showForm = date !== null ? true : false;
  const dispatch = useDispatch();

  function handleDateSelection(e) {
    setDate(e);
  }

  // checks if date is selected to show inputs and if already selected then dispatch action to add new Note.
  function handleAddNote(values) {
    if (date === null) {
      setShowAlert(true);
      return;
    }
    dispatch({ type: ADD_NOTE, payload: { ...values, reminderFor: date } });
    setDate(null);
  }

  const handleAlertClose = useCallback((e) => {
    setShowAlert(false);
  }, []);

  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 p-4 left-panel">
          <div className="text-center text-uppercase fw-semibold p-1 app-title">
            My Notes
          </div>
          <div className="calendar mt-3">
            <Calendar
              onChange={handleDateSelection}
              minDate={MINIMUM_DATE_ALLOWED_TO_SELECT}
            />
          </div>
          <NoteForm showForm={showForm} handleAddNote={handleAddNote} />
          <Alert
            message="Hey, seems like you forgot to select date."
            show={showAlert}
            handleClose={handleAlertClose}
          />
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 p-4 right-panel">
          <Notes />
        </div>
      </div>
    </div>
  );
}

export default NoteApp;
