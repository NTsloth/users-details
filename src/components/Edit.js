import React, { useState } from "react";
import styles from "./Edit.module.css";

function Edit({ user, updateUser, closeModal }) {
  const [editedUser, setEditedUser] = useState(user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.modal} onClick={closeModal}>
      <div className={styles.content} onClick={handleModalClick}>
        <h2>Edit User</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateUser(editedUser);
          }}
          className={styles.edit}
        >
          <div className={styles.inputWrapper}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={editedUser.name}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={editedUser.email}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.buttons}>
            <button type="submit">Update</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
