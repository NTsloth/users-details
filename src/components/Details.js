import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Details.module.css";
import { useUserContext } from "../helpers/UserContext";

function Details() {
  const { userId } = useParams();
  const { state } = useUserContext();

  const user = state.users.find((user) => user.id === parseInt(userId));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className={`${styles.detailsWrapper} container`}>
      <div className={styles.backBtn}>
        <div className={styles.svgWrapper}>
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.56965 17.8211C9.37965 17.8211 9.18965 17.7511 9.03965 17.6011L2.96965 11.5311C2.83017 11.39 2.75195 11.1995 2.75195 11.0011C2.75195 10.8027 2.83017 10.6122 2.96965 10.4711L9.03965 4.40109C9.32965 4.11109 9.80966 4.11109 10.0997 4.40109C10.3897 4.69109 10.3897 5.17109 10.0997 5.46109L4.55965 11.0011L10.0997 16.5411C10.3897 16.8311 10.3897 17.3111 10.0997 17.6011C9.95966 17.7511 9.75965 17.8211 9.56965 17.8211Z"
              fill="#162029"
            />
            <path
              d="M20.4999 11.75H3.66992C3.25992 11.75 2.91992 11.41 2.91992 11C2.91992 10.59 3.25992 10.25 3.66992 10.25H20.4999C20.9099 10.25 21.2499 10.59 21.2499 11C21.2499 11.41 20.9099 11.75 20.4999 11.75Z"
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
        <strong>Address:</strong> {user.address.street}, {user.address.suite},
        {user.address.city} {user.address.zipcode}
      </div>
    </div>
  );
}

export default Details;
