import PropTypes from "proptypes";
import TextField from "../../../components/Inputs/TextField";
import useFormValues from "./useFormValues";
import "../../../App.css";

export default function NoteForm({ showForm, handleAddNote }) {
  const {
    formValues,
    setFormValues,
    setFormErrors,
    formErrors,
    validateForm,
    validateField,
  } = useFormValues(
    { title: "", description: "" },
    { title: "", description: "" }
  );

  function handleOnChange({ target: { name, value } }) {
    setFormErrors({ ...formErrors, [name]: validateField(name, value) });
    setFormValues({ ...formValues, [name]: value });
  }

  function handleOnClick() {
    if (showForm && validateForm()) {
      setFormErrors({ title: "", description: "" });
      setFormValues({ title: "", description: "" });
      handleAddNote(formValues);
    }
    if (showForm === false) {
      handleAddNote(formValues);
    }
  }

  return (
    <>
      {showForm && (
        <>
          <TextField
            placeholder="Title"
            label="Title"
            onChange={handleOnChange}
            name="title"
            value={formValues.title}
            error={formErrors.title}
            aria-label="note title"
            aria-required="true"
          />
          <TextField
            type="multiline"
            placeholder="Description"
            onChange={handleOnChange}
            name="description"
            label="Description"
            value={formValues.description}
            error={formErrors.description}
            aria-label="note description"
            aria-required="true"
          />
        </>
      )}
      <div className="mt-3" style={{ textAlign: "right" }}>
        <button
          type="button"
          onClick={handleOnClick}
          className="btn note-btn"
          aria-label="Add Note"
        >
          Add Note
        </button>
      </div>
    </>
  );
}

NoteForm.defaultProps = {
  showForm: false,
  handleAddNote: () => {},
};

NoteForm.propTypes = {
  /**
   * controls when to show form inputs
   */
  showForm: PropTypes.bool,

  /**
   * Callback function which provide formvalues
   */
  handleAddNote: PropTypes.func,
};
