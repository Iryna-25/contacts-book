import { useState } from "react";

import { Table } from "../components/Notes/Table";
import { Modal } from "../components/Notes/Modal";
import { AddButton, Wrapper } from "../styles/Elements.styled";

export default function NotesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
  {
    description: "Repair the table",
    category: "Home",
  },
  {
    description: "Call mom on the weekend",
    category: "Family",
  },
  {
    description: "Buy a missing lego part",
    category: "Hobby",
    },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div> 
      <h2> My Notes</h2>
      <h3> Create and edite your todo list </h3>
        <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
        <Wrapper>
          <AddButton onClick={() => setModalOpen(true)}>
            Add
          </AddButton>
        </Wrapper>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}