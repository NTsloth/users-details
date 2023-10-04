import React from "react";
import styles from "./Delete.module.css";

function Delete({ user, deleteUser, closeModal }) {
  const confirmDelete = () => {
    if (user) {
      deleteUser(user.id);
      closeModal();
    }
  };

  return (
    <div>
      {user && (
        <div className={styles.modal}>
          <div className={styles.content}>
            <p>Are you sure you want to delete this user?</p>
            <div className={styles.buttons}>
              <button variant="outline" onClick={confirmDelete}>
                Confirm
              </button>

              <button onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Delete;
