import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Details.module.css";

function Details({ users }) {
  const { userId } = useParams();

  const user = users.find((user) => user.id === parseInt(userId));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className={`${styles.detailsWrapper} container`}>
      <div className={styles.backBtn}>
        <div className={styles.svgWrapper}>
          <svg
            width="14"
            height="11"
            viewBox="0 0 14 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M-2.18557e-07 5.5C-2.28619e-07 5.26981 0.0914429 5.04905 0.254213 4.88628L4.38628 0.754214C4.72523 0.415263 5.27477 0.415263 5.61372 0.754214C5.95267 1.09316 5.95267 1.64271 5.61372 1.98166L2.09539 5.5L5.61372 9.01834C5.95268 9.35729 5.95268 9.90684 5.61372 10.2458C5.27477 10.5847 4.72523 10.5847 4.38628 10.2458L0.254213 6.11372C0.091443 5.95095 -2.08495e-07 5.73019 -2.18557e-07 5.5Z"
              fill="#162029"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.113281 5.49925C0.113281 5.0199 0.50187 4.63131 0.981219 4.63131L12.438 4.63131C12.9173 4.63131 13.3059 5.0199 13.3059 5.49925C13.3059 5.9786 12.9173 6.36719 12.438 6.36719L0.981219 6.36719C0.50187 6.36719 0.113281 5.9786 0.113281 5.49925Z"
              fill="#162029"
            />
          </svg>
        </div>
        <Link className={styles.back} to="/">
          Back to Users
        </Link>
      </div>
      <h2 className={styles.title}>User Details</h2>
      <div className={styles.detail}>
        <strong>Name:</strong> {user.name}
      </div>
      <div className={styles.detail}>
        <strong>Email:</strong> {user.email}
      </div>
      <div className={styles.detail}>
        <strong>City:</strong> {user.address.city}
      </div>
      <div className={styles.detail}>
        <strong>Address:</strong> {user.address.street}, {user.address.suite},{" "}
        {user.address.city} {user.address.zipcode}
      </div>
    </div>
  );
}

export default Details;
