import { useState } from "react";

const schema = {
  title: ["Title can't be empty"],
  description: ["Description can't be empty"],
};

/**
 * Manges Add Note Form
 * @param {Object} values - form values to control.
 * @param {string} values.title
 * @param {string} values.description
 * @param {Object} errors - form errors.
 * @param {string} errors.title
 * @param {string} errors.description
 */
export default function useFormValues(values, errors) {
  const [formValues, setFormValues] = useState(values);
  const [formErrors, setFormErrors] = useState(errors);

  function validateField(name, value) {
    switch (name) {
      case "title":
        if (value === "") {
          return schema[name][0];
        }
        break;

      case "description":
        if (value === "") {
          return schema[name][0];
        }
        break;

      default:
        break;
    }
  }

  function validateForm() {
    //Looping through formvalues object and validation each value and setting formerrors against respective keys.
    let newErrors = { ...formErrors };
    let isValid = true;
    for (let key in formValues) {
      newErrors[key] = validateField(key, formValues[key]);
      if (newErrors[key]) {
        isValid = false;
      }
    }
    setFormErrors(newErrors);
    return isValid;
  }

  return {
    formErrors,
    setFormErrors,
    formValues,
    setFormValues,
    validateField,
    validateForm,
  };
}
