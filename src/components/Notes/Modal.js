import React, { useState } from "react";
import { AddButton } from "../../styles/Elements.styled";

import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      description: "",
      category: "Home",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.description && formState.category) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
            <div className="form-group">
            <h4>Create and edit the blocks</h4>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              onChange={handleChange}
              value={formState.description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              onChange={handleChange}
              value={formState.category}
            >
              <option value="Home">Home</option>
              <option value="Family">Family</option>
              <option value="Hobby">Hobby</option>
            </select>
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <AddButton type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </AddButton>
        </form>
      </div>
    </div>
  );
};