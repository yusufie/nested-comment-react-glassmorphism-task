import React from "react";
import styles from "./styles.module.scss";
import { useComment } from "../useComment";

function Header() {
  const {
    ownByCurrentUser,
    comment: { user, createdAt},
  } = useComment();

  return (
    <div className={styles.commentHeader}>
      <img
        className={styles.userImage}
        src={user.image.webp}
        alt={user.username}
      />
      <p className={styles.username}>{user.username}</p>
      {ownByCurrentUser && <span className={styles.ownIndicator}>you</span>}
      <p className={styles.createdAt}>{createdAt}</p>
    </div>
  );
}

export { Header };
